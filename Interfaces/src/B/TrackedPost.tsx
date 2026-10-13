import { useEffect, useRef, useState } from "react"
import posthog from "posthog-js"
import { v4 as uuidv4 } from "uuid" 
import './MainB.css'


interface TrackedPostProps {
  post: {
    id: number
    authorID: string
    timestamp: string
    title: string
    content: string
    image?: string[] 
  }
  setActiveCommentsPostId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function TrackedPost({
  post,
  setActiveCommentsPostId,
}: TrackedPostProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const sessionIdRef = useRef<string | null>(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const sessionId = uuidv4()
          sessionIdRef.current = sessionId
          startTimeRef.current = Date.now()

          posthog.capture("post_view_start", {
            post_id: post.id,
            title: post.title,
            page: window.location.pathname,
            session_id: sessionId,
          })
        } else if (startTimeRef.current && sessionIdRef.current) {
          const duration = Date.now() - startTimeRef.current

          posthog.capture("post_view_end", {
            post_id: post.id,
            duration_ms: duration,
            page: window.location.pathname,
            session_id: sessionIdRef.current,
          })

          startTimeRef.current = null
          sessionIdRef.current = null
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [post])

  return (
    <article ref={ref} id={`post-${post.id}`} className="post-card">
      <div className="post-meta">
        <strong>{post.authorID}</strong>
        <span>{post.timestamp}</span>
      </div>

      <h2>{post.title}</h2>

      {post.image && (
  <div className="post-image-container">
    {post.image.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`${post.title} ${index}`}
        className="post-image-img"
      />
    ))}
  </div>
)}

      <p>{post.content}</p>

      <div className="post-actions">
        <button
          type="button"
          className={isLiked ? 'liked' : ''}
          onClick={() => setIsLiked((prev) => !prev)}
          aria-pressed={isLiked}
        >
          👍 Like
        </button>
        <button type="button" onClick={() => setActiveCommentsPostId(post.id)}>
          💬 Comment
        </button>
        <button type="button">↗ Share</button>
      </div>
    </article>
  )
}