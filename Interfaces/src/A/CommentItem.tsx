import { useState, useRef } from 'react'
import type { Comment } from './data/posts'
import ReCAPTCHA from 'react-google-recaptcha'
import './VariantA.css'
import posthog from 'posthog-js'

interface CommentItemProps {
  comment: Comment
  onReply: (parentId: number, text: string) => void
}

export default function CommentItem({ comment, onReply }: CommentItemProps) {
  const [open, setOpen] = useState(false)          
  const [showReply, setShowReply] = useState(false) 
  const [replyText, setReplyText] = useState('')   
  const [showCaptcha, setShowCaptcha] = useState(false)

  const captchaRef = useRef<ReCAPTCHA | null>(null)

  const handlePostClick = () => {
    if (!replyText.trim()) return
    setShowCaptcha(true)
  }

  const handleConfirmCaptcha = () => {
  const token = captchaRef.current?.getValue()
  if (!token) {
    alert("Please complete the CAPTCHA first!")
    return
  }

  
  posthog.capture("comment_reply_added", {
    comment_id: comment.id,
    
    reply_length: replyText.length,
    
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  })

  
  onReply(comment.id, replyText)

  setShowCaptcha(false)
  setReplyText("")
  setShowReply(false)
  captchaRef.current?.reset()
}

  return (
    <div className="comment">
      <div className="comment-info">
        <span className="author-id">{comment.author}</span>
        {comment.timestamp && <span className="timestamp">{comment.timestamp}</span>}
      </div>

      <div
        className="comment-text"
        onClick={() => comment.replies && setOpen(!open)}
      >
        {comment.text}{' '}
        {comment.replies && <span className="indicator">{open ? '−' : '+'}</span>}
      </div>

      <button
        className="reply-button"
        onClick={(e) => {
          e.stopPropagation()
          setShowReply(!showReply)
        }}
      >
        Reply
      </button>

      {showReply && (
        <div className="reply-box">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
          />
          <button onClick={handlePostClick}>Post</button>
        </div>
      )}

      {open && comment.replies && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}

      {showCaptcha && (
        <div className="captcha-overlay">
          <div className="captcha-modal">
            <h3>Verify you are human</h3>

            <ReCAPTCHA
              sitekey="6LcBBocsAAAAAMSNM-Lc419-l8x8SXdeqqgRqRGD"
              ref={captchaRef}
            />

            <div className="captcha-buttons">
              <button onClick={handleConfirmCaptcha}>Confirm</button>
              <button
                onClick={() => {
                  setShowCaptcha(false)
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
  )
}
