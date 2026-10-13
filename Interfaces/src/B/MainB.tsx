import { useEffect, useState } from 'react'

import { posts as initialPosts } from '../B/data/posts'
import type { Comment, Post } from '../B/data/posts'
import posthog from 'posthog-js'
import { useSearchParams } from 'react-router-dom'
import './MainB.css'
import TrackedPost from './TrackedPost'
import VariantBHeader from './VariantBHeader'

interface ThreadedCommentProps {
  comment: Comment
  depth?: number
}

function ThreadedComment({ comment, depth = 0 }: ThreadedCommentProps) {
  return (
    <div className="thread-comment" style={{ marginLeft: `${depth * 18}px` }}>
      <div className="comment-meta">
        <strong>{comment.author}</strong>
        {comment.timestamp ? <span>{comment.timestamp}</span> : null}
      </div>
      <p>{comment.text}</p>

      {comment.replies?.length ? (
        <div className="thread-replies">
          {comment.replies.map((reply) => (
            <ThreadedComment key={`${reply.id}-${reply.timestamp ?? 'no-time'}`} comment={reply} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

const guidelines = [
  { icon: '🤝', text: 'Be respectful and kind in every discussion.' },
  { icon: '🚫', text: 'No spam, harassment, or offensive language.' },
  { icon: '🔎', text: 'Check existing threads before posting duplicates.' },
  { icon: '🛡️', text: 'Protect privacy and avoid sharing personal data.' },
]

export default function VariantB() {
  const boardPosts = initialPosts.filter((post) => post.boardId === 1)

  const [posts, setPosts] = useState<Post[]>(boardPosts)
  const [activeCommentsPostId, setActiveCommentsPostId] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const addCommentToPost = (postId: number, text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      author: 'You',
      text,
      timestamp: new Date().toLocaleString(),
      replies: [],
    }

    posthog.capture('post_comment_added', {
      post_id: postId,
      comment_text: text,
      comment_length: text.length,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    })

    setPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post)))
  }

  const activePost = posts.find((post) => post.id === activeCommentsPostId) ?? null

  useEffect(() => {
    const postIdParam = searchParams.get('postId')
    if (!postIdParam) return

    const postId = Number(postIdParam)
    if (!Number.isFinite(postId)) return

    const timer = window.setTimeout(() => {
      const target = document.getElementById(`post-${postId}`)
      if (!target) return

      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setSearchParams((currentParams) => {
        const next = new URLSearchParams(currentParams)
        next.delete('postId')
        return next
      }, { replace: true })
    }, 60)

    return () => window.clearTimeout(timer)
  }, [searchParams, setSearchParams])

  return (
    <div className="variant-b-page">
      <VariantBHeader />

      <div className="variant-b-body">
        <div className="layout-columns">
          <div className="feed-container">
            {posts.map((post) => (
              <TrackedPost key={post.id} post={post} setActiveCommentsPostId={setActiveCommentsPostId} />
            ))}
          </div>

          <aside className="guidelines-card">
            <h3>Community Guidelines</h3>
            <ul>
              {guidelines.map((item) => (
                <li key={item.text}>
                  <span className="rule-icon" aria-hidden="true">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {activePost ? (
  <div 
    className="comments-popup-overlay" 
    onClick={(event) => {
      
      if (event.target === event.currentTarget) {
        setActiveCommentsPostId(null)
      }
    }}
  >
    <div className="comments-popup"> 
            <div className="comments-popup-header">
              <h3>{activePost.title}</h3>
              <button type="button" className="close-popup" onClick={() => setActiveCommentsPostId(null)}>✕</button>
            </div>

            <div className="thread-list">
              {activePost.comments.length ? (
                activePost.comments.map((comment) => (
                  <ThreadedComment key={`${comment.id}-${comment.timestamp ?? 'no-time'}`} comment={comment} />
                ))
              ) : (
                <p className="no-comments">No comments yet. Be the first to comment.</p>
              )}
            </div>

            <div className="reply-box popup-reply-box">
              <textarea value={replyText} onChange={(event) => setReplyText(event.target.value)} placeholder="Write your comment..." />
              <button
                type="button"
                className="action-button"
                onClick={() => {
                  if (!replyText.trim()) return
                  addCommentToPost(activePost.id, replyText)
                  setReplyText('')
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
