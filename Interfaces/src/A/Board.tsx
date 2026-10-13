import { useState } from 'react'
import { useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import posthog from "posthog-js"
import TrackedPost from "./TrackedPost"
import './VariantA.css'
import { posts as initialPosts } from './data/posts.ts'
import type { Comment } from './data/posts.ts'
import { useParams } from 'react-router-dom'

import Icon from "./assets/icon.png";

export default function Board() {


  type Board = {
  id: number
  name: string
  posts: number
  users: number
  lastActivity: string
}

  const boardz: Board[] = [
  { id: 1, name: 'General Discussion', posts: 1245, users: 342, lastActivity: '2 mins ago' },
  { id: 2, name: 'Tech', posts: 842, users: 210, lastActivity: '10 mins ago' },
  { id: 3, name: 'Gaming', posts: 2210, users: 560, lastActivity: '1 hour ago' },
  { id: 4, name: 'Anime', posts: 534, users: 198, lastActivity: '5 mins ago' },
  { id: 5, name: 'Business', posts: 128, users: 620, lastActivity: '30 mins ago' },
  { id: 6, name: 'Announcements', posts: 1760, users: 900, lastActivity: 'Just now' },
]


  const captchaRef = useRef<ReCAPTCHA | null>(null)

  const { boardId } = useParams()

  const id = Number(boardId)

  const boardPosts = initialPosts.filter((p) => p.boardId === id)

const [posts, setPosts] = useState(boardPosts)

const currentBoard = boardz.find((b) => b.id === id)

  const postsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(posts.length / postsPerPage)

const [replyingToPostId, setReplyingToPostId] = useState<number | null>(null)
const [replyText, setReplyText] = useState('')
const [showCaptcha, setShowCaptcha] = useState(false)

const [captchaTarget, setCaptchaTarget] = useState<{
  type: 'post' | 'comment'
  postId: number
  commentId?: number
} | null>(null)


  
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  useEffect(() => {
  setPosts(boardPosts)
  setCurrentPage(1)
}, [boardId])


  return (
    <div className="page">
              <header className="top-header">
    <div className="header-left">
    <img src={Icon} alt="Icon" width={50} height={50} />
    <span className="forum-text">Forum</span>
  </div>
              
                       <div className="header-buttons">
  <div className="dropdown">
    <button>FAQ</button>
    <div className="dropdown-menu">
      <p><strong>How do I post?</strong></p>
      <p>Click the “Reply” button under any thread to write a response</p>

      <p><strong>Do I need an account?</strong></p>
      <p>No. Each user only has a unique code, randomly assigned</p>

      <p><strong>Can I buy an advertisement?</strong></p>
      <p>Direct all business enquiries to anonforum@yahoo.com</p>

      <p><strong>Why is there a CAPTCHA?</strong></p>
      <p>CAPTCHA is used to prevent spam posts and bots</p>
    </div>
  </div>

  <div className="dropdown">
    <button>RULES</button>
    <div className="dropdown-menu">
      <p><strong>1. No spam</strong></p>
      <p>Do not repeatedly post the same message or irrelevant links.</p>

      <p><strong>2. Stay on topic</strong></p>
      <p>Try to keep discussions relevant to the board you are posting in.</p>

      <p><strong>3. No illegal content</strong></p>
      <p>Posts containing illegal material or instructions will be removed.</p>

      <p><strong>4. No harassment</strong></p>
      <p>Bullying, harassment, or targeted abuse is not allowed.</p>

      <p><strong>5. Avoid excessive self-promotion</strong></p>
      <p>Sharing useful resources is fine, but advertising is discouraged.</p>

    </div>
  </div>

  <button onClick={() => window.location.href = '/variant-a'}>
    BOARDS
  </button>
</div>

      </header>

      <div className="content-wrapper">
        <div className="body-container">
          <h1>{currentBoard?.name} board</h1>

          

          <div className="feed">
  {currentPosts.map((post) => (
    <TrackedPost
      key={post.id}
      post={post}
      replyingToPostId={replyingToPostId}
      setReplyingToPostId={setReplyingToPostId}
      replyText={replyText}
      setReplyText={setReplyText}
      setCaptchaTarget={setCaptchaTarget}
      setShowCaptcha={setShowCaptcha}
      setPosts={setPosts}
    />
  ))}
</div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-link ${page === currentPage ? 'active' : ''}`}
                onClick={() => {
                setCurrentPage(page)
                window.scrollTo({ top: 0 })
              }}
              
              >
                {page}
              </button>
            ))}
          </div>

            {showCaptcha && captchaTarget && (
  <div className="captcha-overlay">
    <div className="captcha-modal">
      <h3>Verify you are human</h3>

      <ReCAPTCHA sitekey="6LcBBocsAAAAAMSNM-Lc419-l8x8SXdeqqgRqRGD" ref={captchaRef} />


<div className="captcha-buttons">
  <button
    onClick={() => {
      const token = captchaRef.current?.getValue()
      if (!token) {
        alert("Please complete the CAPTCHA first!")
        return
      }

      if (!replyText.trim()) return

      const newComment: Comment = {
        id: Date.now(),
        author: "You",
        text: replyText,
        timestamp: new Date().toLocaleString(),
        replies: [],
      }

      if (captchaTarget.type === "post") {
        setPosts((prev) =>
          prev.map((p) =>
            p.id === captchaTarget.postId
              ? { ...p, comments: [...p.comments, newComment] }
              : p
          )
        )

        
        posthog.capture("post_comment_added", {
          post_id: captchaTarget.postId,
          comment_length: replyText.length,
          word_count: replyText.trim().split(/\s+/).length,
          page: window.location.pathname,
          timestamp: new Date().toISOString(),
        })
      } else if (captchaTarget.type === "comment") {
        function addReplyToComment(
          comments: Comment[],
          parentId: number,
          newComment: Comment
        ): Comment[] {
          return comments.map((c) => {
            if (c.id === parentId) return { ...c, replies: [...(c.replies || []), newComment] }
            if (c.replies) return { ...c, replies: addReplyToComment(c.replies, parentId, newComment) }
            return c
          })
        }

        setPosts((prev) =>
          prev.map((p) =>
            p.id === captchaTarget.postId
              ? {
                  ...p,
                  comments: addReplyToComment(
                    p.comments,
                    captchaTarget.commentId!,
                    newComment
                  ),
                }
              : p
          )
        )

        
        posthog.capture("comment_reply_added", {
          post_id: captchaTarget.postId,
          parent_comment_id: captchaTarget.commentId,
          reply_length: replyText.length,
          word_count: replyText.trim().split(/\s+/).length,
          page: window.location.pathname,
          timestamp: new Date().toISOString(),
        })
      }

      
      setReplyText("")
      setCaptchaTarget(null)
      setShowCaptcha(false)
      captchaRef.current?.reset()
    }}
  >
    Confirm
  </button>

  <button
    onClick={() => {
      setShowCaptcha(false)
      setCaptchaTarget(null)
      captchaRef.current?.reset()
    }}
  >
    Cancel
  </button>
</div>
    </div>
  </div>
)}



        </div>
      </div>
    </div>
  )

}
