import { useEffect, useRef, useState } from 'react'
import posthog from 'posthog-js'
import type { SocialPost } from './data/posts'

interface TrackedPostProps {
  post: SocialPost
  setSelectedAuthor: (authorId: string) => void
  setActiveCommentsPostId: React.Dispatch<React.SetStateAction<number | null>>
  onToggleLike: (postId: number, willLike: boolean) => void
}

export default function TrackedPost({
  post,
  setSelectedAuthor,
  setActiveCommentsPostId,
  onToggleLike,
}: TrackedPostProps) {
  const ref = useRef<HTMLElement | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const sessionIdRef = useRef<string | null>(null)
  const [isLikeAnimating, setIsLikeAnimating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const sessionId = crypto.randomUUID()

          sessionIdRef.current = sessionId
          startTimeRef.current = Date.now()

          posthog.capture('post_view_start', {
            post_id: post.id,
            session_id: sessionId,
            author: post.authorName,
            page: window.location.pathname,
          })
        } else if (startTimeRef.current && sessionIdRef.current) {
          const duration = Date.now() - startTimeRef.current

          posthog.capture('post_view_end', {
            post_id: post.id,
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

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [post])

  const handleLikeClick = () => {
    const willLike = !post.viewerLiked
    onToggleLike(post.id, willLike)
    setIsLikeAnimating(true)
    window.setTimeout(() => setIsLikeAnimating(false), 420)
  }

  return (
    <article ref={ref} className="insta-post">
      <header>
        <button
          type="button"
          className="author-link"
          onClick={() => setSelectedAuthor(post.authorId)}
        >
          <img src={post.authorAvatar} alt={post.authorName} />
          <strong>{post.authorName}</strong>
        </button>
        <span>{post.timestamp}</span>
      </header>

      <p>{post.caption}</p>

      <div className={`post-media-grid ${post.media.length === 1 ? 'single' : ''}`}>
  {post.media.map((media, index) =>
    media.type === 'image' ? (
      post.media.length === 1 ? (
        <div
          key={`${post.id}-img-${index}`}
          className="single-media-wrapper"
          style={{ '--bg-image': `url(${media.src})` } as React.CSSProperties}
        >
          <img
            src={media.src}
            alt={media.alt}
            className="post-media single-media"
          />
        </div>
      ) : (
        <div className="post-media-wrapper" key={`${post.id}-img-${index}`}>
          <img
            src={media.src}
            alt={media.alt}
            className="post-media"
          />
        </div>
      )
    ) : (
      <div className="post-media-wrapper" key={`${post.id}-vid-${index}`}>
        <video
          className={`post-media ${post.media.length === 1 ? 'single-media' : ''}`}
          controls
          muted
          playsInline
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </div>
    )
  )}
</div>
      <div className="post-engagement">{post.likeCount} likes • {post.interactionCount} people interacting</div>

      <div className="post-actions">
        <button
          type="button"
          className={`like-button ${post.viewerLiked ? 'liked' : ''} ${isLikeAnimating ? 'burst' : ''}`}
          onClick={handleLikeClick}
          aria-pressed={post.viewerLiked}
        >
          ♥ 
        </button>
        <button type="button" onClick={() => setActiveCommentsPostId(post.id)}>
          💬 
        </button>
        <button type="button">✈ </button>
      </div>
    </article>
  )
}
