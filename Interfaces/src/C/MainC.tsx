import { useEffect, useMemo, useRef, useState } from 'react'

import type { Comment } from '../A/data/posts'
import { chats, type ChatThread } from './data/chats'
import { socialPosts, stories, type SocialPost, type StoryItem } from './data/posts'
import './MainC.css'
import posthog from 'posthog-js'
import TrackedPost from './TrackedPost'

interface ThreadedCommentProps {
  comment: Comment
  depth?: number
}

type MobileTab = 'messages' | 'camera' | 'profile'
type ViewMode = 'camera' | 'feed'
type CameraFilter = 'none' | 'warm' | 'cool' | 'mono' | 'dream'

interface ProfileViewData {
  id: string
  username: string
  avatar: string
  bio: string
}

const cameraFilters: { id: CameraFilter; label: string }[] = [
  { id: 'none', label: 'Normal' },
  { id: 'warm', label: 'Warm' },
  { id: 'cool', label: 'Cool' },
  { id: 'mono', label: 'Mono' },
  { id: 'dream', label: 'Dream' },
]

const filterCss: Record<CameraFilter, string> = {
  none: 'none',
  warm: 'saturate(1.2) contrast(1.05) hue-rotate(-6deg)',
  cool: 'saturate(1.1) contrast(1.05) hue-rotate(8deg)',
  mono: 'grayscale(1.0) contrast(1.1)',
  dream: 'saturate(1.3) brightness(1.08) contrast(0.95)',
}

function ThreadedComment({ comment, depth = 0 }: ThreadedCommentProps) {
  return (
    <div className="thread-comment" style={{ marginLeft: `${depth * 14}px` }}>
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

export default function MainC() {
  const [viewMode, setViewMode] = useState<ViewMode>('camera')
  const [activeTab, setActiveTab] = useState<MobileTab>('camera')
  const [isMessagesPanelOpen, setIsMessagesPanelOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<CameraFilter>('none')
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null)
  const [pendingCapturedPhoto, setPendingCapturedPhoto] = useState<string | null>(null)
  const [cameraError, setCameraError] = useState<string | null>(null)
  const [cameraReady, setCameraReady] = useState(false)

  const [posts, setPosts] = useState<SocialPost[]>(socialPosts)
  const [chatThreads, setChatThreads] = useState<ChatThread[]>(chats)
  const [activeChatId, setActiveChatId] = useState<string | null>(null)
  const [chatInput, setChatInput] = useState('')

  const [activeCommentsPostId, setActiveCommentsPostId] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null)
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const swipeStartXRef = useRef<number | null>(null)
  const phoneShellRef = useRef<HTMLDivElement | null>(null)
  const feedViewRef = useRef<HTMLElement | null>(null)
  const messagesPanelRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const shouldUseCamera = viewMode === 'camera' && activeTab === 'camera'
    if (!shouldUseCamera) {
      if (videoRef.current) videoRef.current.srcObject = null
      streamRef.current?.getTracks().forEach((track) => track.stop())
      streamRef.current = null
      setCameraReady(false)
      return
    }

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 960 } },
          audio: false,
        })
        setCameraError(null)
        streamRef.current = stream
        if (videoRef.current) videoRef.current.srcObject = stream
        setCameraReady(true)
      } catch {
        setCameraReady(false)
        setCameraError('Camera permission was blocked. You can still open the feed below.')
      }
    }

    void startCamera()

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop())
      streamRef.current = null
      setCameraReady(false)
    }
  }, [viewMode, activeTab])

  useEffect(() => {
    const onWindowWheel = (event: WheelEvent) => {
      if (viewMode !== 'feed' || event.ctrlKey) return

      const feedEl = feedViewRef.current
      const shellEl = phoneShellRef.current
      const messagesEl = messagesPanelRef.current
      const eventTarget = event.target as Node | null

      if (!feedEl || !shellEl || !eventTarget) return

      const shouldUseMessagesPanel = !!messagesEl?.contains(eventTarget)
      const scrollContainer = shouldUseMessagesPanel ? messagesEl : feedEl
      if (!scrollContainer) return

      event.preventDefault()
      scrollContainer.scrollTop += event.deltaY
    }

    window.addEventListener('wheel', onWindowWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWindowWheel)
  }, [viewMode])

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
      comment_length: text.length,
      word_count: text.trim().split(/\s+/).length,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    })

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment], interactionCount: post.interactionCount + 1 }
          : post
      )
    )
  }

  const handleSendChat = () => {
    if (!activeChatId || !chatInput.trim()) return

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      text: chatInput.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
      }),
    }

    posthog.capture('chat_message_sent', {
      chat_id: activeChatId,
      message_length: chatInput.trim().length,
      word_count: chatInput.trim().split(/\s+/).length,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    })

    setChatThreads((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              preview: newMessage.text,
              updatedAt: 'now',
            }
          : chat
      )
    )

    setChatInput('')
  }



  const consumeChatMessages = (chatId: string) => {
    setChatThreads((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [], preview: 'Seen', updatedAt: 'seen' }
          : chat
      )
    )
  }

  const closeActiveChat = () => {
    if (activeChatId) consumeChatMessages(activeChatId)
    setActiveChatId(null)
    setChatInput('')
  }

  const openUserProfile = (authorId: string) => {
    setSelectedProfileId(authorId)
    setActiveTab('profile')
    setViewMode('feed')
  }

  const handleToggleLike = (postId: number, willLike: boolean) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post

        return {
          ...post,
          viewerLiked: willLike,
          likeCount: Math.max(0, post.likeCount + (willLike ? 1 : -1)),
          interactionCount: Math.max(0, post.interactionCount + (willLike ? 1 : -1)),
        }
      })
    )
  }

  const activePost = posts.find((post) => post.id === activeCommentsPostId) ?? null
  const activeChat = chatThreads.find((chat) => chat.id === activeChatId) ?? null

  const selectedProfileData = useMemo<ProfileViewData | null>(() => {
    if (!selectedProfileId) return null

    const postByAuthor = posts.find((post) => post.authorId === selectedProfileId)
    if (postByAuthor) {
      return {
        id: postByAuthor.authorId,
        username: postByAuthor.authorName,
        avatar: postByAuthor.authorAvatar,
        bio: `@${postByAuthor.authorId}`,
      }
    }

    const threadById = chatThreads.find((chat) => chat.id === selectedProfileId)
    if (threadById) {
      return {
        id: threadById.id,
        username: threadById.person,
        avatar: threadById.avatar,
        bio: `@${threadById.id}`,
      }
    }

    return null
  }, [selectedProfileId, posts, chatThreads])

  const selectedProfilePosts = selectedProfileId ? posts.filter((post) => post.authorId === selectedProfileId) : []

  const handleTakePhoto = () => {
    const video = videoRef.current
    if (!video) return
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth || 720
    canvas.height = video.videoHeight || 960
    const context = canvas.getContext('2d')
    if (!context) return
    context.filter = filterCss[selectedFilter]
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    setPendingCapturedPhoto(canvas.toDataURL('image/jpeg', 0.95))
  }


  const confirmCapturedPhoto = () => {
    if (!pendingCapturedPhoto) return
    setCapturedPhoto(pendingCapturedPhoto)
    setPendingCapturedPhoto(null)
    setSelectedProfileId(null)
    setIsMessagesPanelOpen(false)
    setActiveTab('camera')
    setViewMode('feed')
  }

  const setTab = (tab: MobileTab) => {
    if (tab !== 'messages') {
      setIsMessagesPanelOpen(false)
      closeActiveChat()
    }
    setActiveTab(tab)
    if (tab === 'profile') setSelectedProfileId(null)
    if (tab === 'camera') setViewMode('camera')
    else setViewMode('feed')
  }


  const goBackToFeed = () => {
    setSelectedProfileId(null)
    setIsMessagesPanelOpen(false)
    setActiveTab('camera')
    setViewMode('feed')
  }

  const hideMessagesPanel = () => {
    closeActiveChat()
    setIsMessagesPanelOpen(false)
  }

  const toggleMessagesPanel = () => {
    if (viewMode === 'camera') setViewMode('feed')
    setIsMessagesPanelOpen((prev) => {
      if (prev) closeActiveChat()
      return !prev
    })
  }

  const isMainPhotoScreen = activeTab === 'camera' && viewMode === 'camera'
  const shouldShowMessagesPanel = isMessagesPanelOpen && viewMode === 'feed'

  const messagesPanelContent = activeChat ? (
    <>
      <div className="chat-header">
        <button type="button" className="back-chat" onClick={closeActiveChat}>←</button>
        <button type="button" className="chat-avatar-link" onClick={() => openUserProfile(activeChat.id)}>
          <img src={activeChat.avatar} alt={`${activeChat.person} avatar`} />
        </button>
        <strong>{activeChat.person}</strong>
      </div>
      <div className="disappearing-banner"> Disappearing messages are on</div>
      <div className="chat-thread">
        {activeChat.messages.length ? activeChat.messages.map((message) => (
          <div key={message.id} className={`chat-bubble ${message.sender === 'You' ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
            <span>{message.time}</span>
          </div>
        )) : <p className="no-chat-messages">No messages left in this chat.</p>}
      </div>
      <div className="chat-compose">
        <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Send a chat" />
        <button type="button" onClick={handleSendChat}>Send</button>
      </div>
    </>
  ) : (
    <>
      <h3>Messages</h3>
      {chatThreads.map((chat) => (
        <button key={chat.id} type="button" className="message-item" onClick={() => setActiveChatId(chat.id)}>
          <img
            src={chat.avatar}
            alt={`${chat.person} avatar`}
            onClick={(event) => {
              event.stopPropagation()
              openUserProfile(chat.id)
            }}
          />
          <div>
            <strong>{chat.person}</strong>
            <p>{chat.preview}</p>
          </div>
          <span>{chat.updatedAt}</span>
        </button>
      ))}
    </>
  )

  return (
    <div className="variant-c-page">
      <div
        ref={phoneShellRef}
        className="phone-shell"
        onTouchStart={(event) => {
          swipeStartXRef.current = event.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(event) => {
          const startX = swipeStartXRef.current
          const endX = event.changedTouches[0]?.clientX
          if (startX == null || endX == null) return
          const delta = endX - startX
          if (Math.abs(delta) < 70 || activeTab !== 'camera') return
          if (delta < 0 && viewMode === 'camera') setViewMode('feed')
          if (delta > 0 && viewMode === 'feed') setViewMode('camera')
        }}
      >
        {activeTab === 'camera' && viewMode === 'camera' ? (
          <section className="camera-view">
            <div className="camera-top-row">
              <h2>Selfie Camera</h2>
              <button type="button" className="switch-feed" onClick={() => setViewMode('feed')}>Open Feed →</button>
            </div>
            <div className="camera-frame" style={{ filter: filterCss[selectedFilter] }}>
              <video ref={videoRef} muted playsInline autoPlay />
              {!cameraReady && cameraError ? <div className="camera-error">{cameraError}</div> : null}
            </div>
            <div className="filter-strip">
              {cameraFilters.map((filter) => (
                <button key={filter.id} type="button" className={selectedFilter === filter.id ? 'active' : ''} onClick={() => setSelectedFilter(filter.id)}>
                  {filter.label}
                </button>
              ))}
            </div>
            <button type="button" className="capture-btn" onClick={handleTakePhoto} aria-label="Take photo"><span className="capture-btn-ring"><span className="capture-btn-core" /></span></button>
            {capturedPhoto ? <img src={capturedPhoto} alt="Captured selfie" className="captured-preview" /> : null}
          </section>
        ) : null}

        {(activeTab !== 'camera' || viewMode === 'feed') && (
          <section ref={feedViewRef} className="feed-view">
            {activeTab === 'profile' ? (
              <div className="profile-view">
                {selectedProfileData ? (
                  <>
                    <div className="profile-view-header">
                      <button type="button" className="profile-back" onClick={goBackToFeed}>← Back</button>
                    </div>
                    <img src={selectedProfileData.avatar} alt={`${selectedProfileData.username} profile`} className="profile-avatar" />
                    <h3>{selectedProfileData.username}</h3>
                    <p>{selectedProfileData.bio}</p>
                    <p>{selectedProfilePosts.length} posts • {selectedProfilePosts.reduce((sum, post) => sum + post.comments.length, 0)} comments</p>
                    <div className="profile-posts-list">
                      {selectedProfilePosts.length ? selectedProfilePosts.map((post) => (
                        <article key={post.id} className="profile-post-card">
                          <img src={post.media[0]?.src} alt={post.media[0]?.alt ?? post.caption} className="profile-shot" />
                          <p>{post.caption}</p>
                        </article>
                      )) : <p>No posts yet.</p>}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="profile-view-header">
                      <button type="button" className="profile-back" onClick={goBackToFeed}>← Back</button>
                    </div>
                    <img src="https://i.pravatar.cc/120?img=12" alt="Your profile" className="profile-avatar" />
                    <h3>@you</h3>
                    <p>0 posts • 0 comments</p>
                    {capturedPhoto ? <img src={capturedPhoto} alt="Latest capture" className="profile-shot" /> : <p>No photo captured yet.</p>}
                  </>
                )}
              </div>
            ) : (
              <div className={`feed-layout ${activeTab === 'messages' ? 'with-chat' : ''}`}>
                {activeTab === 'messages' ? (
                  <aside className="messages-view messages-sidebar">
                    {activeChat ? (
                      <>
                        <div className="chat-header">
                          <button type="button" className="back-chat" onClick={closeActiveChat}>←</button>
                          <button type="button" className="chat-avatar-link" onClick={() => openUserProfile(activeChat.id)}>
                            <img src={activeChat.avatar} alt={`${activeChat.person} avatar`} />
                          </button>
                          <strong>{activeChat.person}</strong>
                        </div>
                        <div className="disappearing-banner">👻 Disappearing messages are on</div>
                        <div className="chat-thread">
                          {activeChat.messages.length ? activeChat.messages.map((message) => (
                            <div key={message.id} className={`chat-bubble ${message.sender === 'You' ? 'sent' : 'received'}`}>
                              <p>{message.text}</p>
                              <span>{message.time}</span>
                            </div>
                          )) : <p className="no-chat-messages">No messages left in this chat.</p>}
                        </div>
                        <div className="chat-compose">
                          <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Send a chat" />
                          <button type="button" onClick={handleSendChat}>Send</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3>Messages</h3>
                        {chatThreads.map((chat) => (
                          <button key={chat.id} type="button" className="message-item" onClick={() => setActiveChatId(chat.id)}>
                            <img
                              src={chat.avatar}
                              alt={`${chat.person} avatar`}
                              onClick={(event) => {
                                event.stopPropagation()
                                openUserProfile(chat.id)
                              }}
                            />
                            <div>
                              <strong>{chat.person}</strong>
                              <p>{chat.preview}</p>
                            </div>
                            <span>{chat.updatedAt}</span>
                          </button>
                        ))}
                      </>
                    )}
                  </aside>
                ) : null}

                <div className="feed-main">
                  <div className="stories-row">
                    {stories.map((story) => (
                      <button key={story.id} type="button" className="story-item" onClick={() => setSelectedStory(story)}>
                        <img src={story.avatar} alt={`${story.authorName} story`} />
                        <span>{story.authorName}</span>
                      </button>
                    ))}
                  </div>
                  <div className="posts-list">
                    {posts.map((post) => (
                      <TrackedPost
                        key={post.id}
                        post={post}
                        setSelectedAuthor={openUserProfile}
                        setActiveCommentsPostId={setActiveCommentsPostId}
                        onToggleLike={handleToggleLike}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {!isMainPhotoScreen ? (
          <nav className="bottom-nav">
            <button type="button" onClick={toggleMessagesPanel} className={isMessagesPanelOpen ? 'active' : ''}><span>💬</span><span>Messages</span></button>
            <button type="button" onClick={() => { setTab('camera'); setViewMode('camera') }} className={activeTab === 'camera' && viewMode === 'camera' ? 'active' : ''}><span>📷</span><span>Camera</span></button>
            <button type="button" onClick={() => setTab('profile')} className={activeTab === 'profile' ? 'active' : ''}><span>👤</span><span>Profile</span></button>
          </nav>
        ) : null}
      </div>

      {shouldShowMessagesPanel ? (
        <aside ref={messagesPanelRef} className="messages-side-panel">
          <div className="messages-panel-header">
            <strong>Messages</strong>
            <button type="button" className="close-chat-panel" onClick={hideMessagesPanel}>✕</button>
          </div>
          {messagesPanelContent}
        </aside>
      ) : null}


      {pendingCapturedPhoto ? (
        <div 
  className="photo-confirm-overlay" 
  onClick={(event) => {
    if (event.target === event.currentTarget) {
      setPendingCapturedPhoto(null)
    }
  }}
>
  <div className="photo-confirm-modal">
            <img src={pendingCapturedPhoto} alt="Captured preview" className="photo-confirm-preview" />
            <div className="photo-confirm-actions">
              <button type="button" className="close-popup photo-confirm-btn" onClick={() => setPendingCapturedPhoto(null)}>Retake</button>
              <button type="button" className="action-button photo-confirm-btn" onClick={confirmCapturedPhoto}>Add to Profile</button>
            </div>
          </div>
        </div>
      ) : null}

      {selectedStory ? (
        <div 
  className="story-overlay" 
  onClick={(event) => {
    if (event.target === event.currentTarget) {
      setSelectedStory(null)
    }
  }}
>
  <div className="story-frame">
            <div className="story-header"><strong>{selectedStory.authorName}</strong><button type="button" className="close-popup" onClick={() => setSelectedStory(null)}>✕</button></div>
            <video autoPlay controls playsInline className="story-video"><source src={selectedStory.videoSrc} type="video/mp4" /></video>
          </div>
        </div>
      ) : null}

      {activePost ? (
        <div 
  className="comments-popup-overlay" 
  onClick={(event) => {
    if (event.target === event.currentTarget) {
      setActiveCommentsPostId(null)
    }
  }}
>
  <div className="comments-popup instagram-comments"> 
            <div className="comments-popup-header"><h3>Comments</h3><button type="button" className="close-popup" onClick={() => setActiveCommentsPostId(null)}>✕</button></div>
            <div className="comments-content">
              <div className={`comments-media-collage ${activePost.media.length === 1 ? 'single' : ''}`}>
  {activePost.media.map((media, index) => (
    media.type === 'image' ? (
      <img
        key={`${activePost.id}-comment-media-${index}`}
        src={media.src}
        alt={media.alt}
        className="comments-media"
      />
    ) : (
      <video
        key={`${activePost.id}-comment-media-${index}`}
        className="comments-media"
        muted
        playsInline
        controls
      >
        <source src={media.src} type="video/mp4" />
      </video>
    )
  ))}
</div>
              <div className="comments-thread-panel">
                <div className="thread-list">
                  {activePost.comments.length ? activePost.comments.map((comment) => <ThreadedComment key={`${comment.id}-${comment.timestamp ?? 'no-time'}`} comment={comment} />) : <p className="no-comments">No comments yet. Be the first to comment.</p>}
                </div>
                <div className="reply-box popup-reply-box">
                  <textarea value={replyText} onChange={(event) => setReplyText(event.target.value)} placeholder="Write your comment..." />
                  <button type="button" className="action-button" onClick={() => { if (!replyText.trim()) return; addCommentToPost(activePost.id, replyText); setReplyText('') }}>Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
