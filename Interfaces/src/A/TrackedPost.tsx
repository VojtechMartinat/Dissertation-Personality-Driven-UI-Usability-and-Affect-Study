import { useEffect, useRef } from "react"
import posthog from "posthog-js"
import { v4 as uuidv4 } from "uuid"
import CommentItem from "./CommentItem"
import type { Comment } from "./data/posts"

interface Props {
  post: any
  replyingToPostId: number | null
  setReplyingToPostId: React.Dispatch<React.SetStateAction<number | null>>
  replyText: string
  setReplyText: React.Dispatch<React.SetStateAction<string>>
  setCaptchaTarget: React.Dispatch<
    React.SetStateAction<{
      type: "post" | "comment"
      postId: number
      commentId?: number
    } | null>
  >
  setShowCaptcha: React.Dispatch<React.SetStateAction<boolean>>
  setPosts: React.Dispatch<React.SetStateAction<any[]>>
}

export default function TrackedPost({
  post,
  replyingToPostId,
  setReplyingToPostId,
  replyText,
  setReplyText,
  setCaptchaTarget,
  setShowCaptcha,
  setPosts,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const sessionIdRef = useRef<string | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const sessionId = uuidv4()
          sessionIdRef.current = sessionId
          startTimeRef.current = Date.now()

          posthog.capture("post_view_start", {
            post_id: post.id,
            title: post.title,
            session_id: sessionId,
            page: window.location.pathname,
          })
        } else if (startTimeRef.current && sessionIdRef.current) {
          const duration = Date.now() - startTimeRef.current

          posthog.capture("post_view_end", {
            post_id: post.id,
            title: post.title,
            session_id: sessionIdRef.current,
            duration_ms: duration,
            page: window.location.pathname,
          })

          startTimeRef.current = null
          sessionIdRef.current = null
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [post])

  return (
    <div className="post" ref={ref}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <button
        className="reply-button"
        onClick={() =>
          setReplyingToPostId(replyingToPostId === post.id ? null : post.id)
        }
      >
        Reply
      </button>

      {replyingToPostId === post.id && (
        <div className="reply-box">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
          />
          <button
            onClick={() => {
              if (!replyText.trim()) return
              setCaptchaTarget({ type: "post", postId: post.id })
              setShowCaptcha(true)
            }}
          >
            Post
          </button>
        </div>
      )}

      <div className="comments">
        {post.comments.map((comment: Comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onReply={(parentId, text) => {
              const newComment: Comment = {
                id: Date.now(),
                author: "You",
                text,
                timestamp: new Date().toLocaleString(),
                replies: [],
              }

              function addReplyToComment(
                comments: Comment[],
                parentId: number,
                newComment: Comment
              ): Comment[] {
                return comments.map((c) => {
                  if (c.id === parentId)
                    return {
                      ...c,
                      replies: [...(c.replies || []), newComment],
                    }

                  if (c.replies)
                    return {
                      ...c,
                      replies: addReplyToComment(
                        c.replies,
                        parentId,
                        newComment
                      ),
                    }

                  return c
                })
              }

              setPosts((prev) =>
                prev.map((p) =>
                  p.id === post.id
                    ? {
                        ...p,
                        comments: addReplyToComment(
                          p.comments,
                          parentId,
                          newComment
                        ),
                      }
                    : p
                )
              )

              posthog.capture("comment_reply_added", {
                post_id: post.id,
                parent_comment_id: parentId,
                reply_length: text.length,
                word_count: text.trim().split(/\s+/).length,
                page: window.location.pathname,
                timestamp: new Date().toISOString(),
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}