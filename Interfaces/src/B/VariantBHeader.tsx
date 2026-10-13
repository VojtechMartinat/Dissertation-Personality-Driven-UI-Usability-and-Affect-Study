import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { posts } from '../B/data/posts'
import { chats } from './data/chats'
import { profiles } from './data/profiles'

import icon from './data/icon.jpg'

interface NotificationItem {
  id: number
  title: string
  detail: string
  profileId?: string
  profileName?: string
  isRead: boolean
  isOpen: boolean
}

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: 'Your comment got 3 new likes',
    detail: 'People are reacting to your reply in “New Strategies for UI design?”.',
    isRead: false,
    isOpen: false,
  },
  {
    id: 2,
    title: 'New reply from Rina Shah',
    detail: 'Rina replied to your message in “First Discussion 7”.',
    profileId: 'rina',
    profileName: 'Rina Shah',
    isRead: false,
    isOpen: false,
  },
  {
    id: 3,
    title: 'New draft shared by Sam Ortega',
    detail: 'Sam shared a draft and requested your feedback.',
    profileId: 'sam',
    profileName: 'Sam Ortega',
    isRead: false,
    isOpen: false,
  },
]

const feedPosts = posts.filter((post) => post.boardId === 1)

const peopleFromPosts = Array.from(new Set(feedPosts.map((post) => post.authorID))).map((authorID) => {
  const profile = profiles.find((entry) => entry.authorIds.includes(authorID))
  return {
    authorID,
    profileId: profile?.id,
  }
})

export default function VariantBHeader() {
  const navigate = useNavigate()
  const location = useLocation()

  const [activeHeaderPanel, setActiveHeaderPanel] = useState<'messages' | 'notifications' | 'profile' | null>(null)
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const headerActionsRef = useRef<HTMLDivElement | null>(null)
  const searchRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!activeHeaderPanel) return

    const handleOutsideClick = (event: MouseEvent) => {
      if (!headerActionsRef.current?.contains(event.target as Node)) {
        setActiveHeaderPanel(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [activeHeaderPanel])

  useEffect(() => {
    const handleSearchOutsideClick = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleSearchOutsideClick)
    return () => document.removeEventListener('mousedown', handleSearchOutsideClick)
  }, [])

  const handleNotificationClick = (id: number) => {
    setNotifications((prev) => prev.map((item) => (item.id === id ? { ...item, isRead: true, isOpen: !item.isOpen } : item)))
  }

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const matchedPosts = useMemo(() => {
    if (!normalizedQuery) return []

    return feedPosts
      .filter((post) => {
        const haystack = `${post.title} ${post.content} ${post.authorID}`.toLowerCase()
        return haystack.includes(normalizedQuery)
      })
      .slice(0, 5)
  }, [normalizedQuery])

  const matchedPeople = useMemo(() => {
    if (!normalizedQuery) return []

    return peopleFromPosts
      .filter((person) => person.authorID.toLowerCase().includes(normalizedQuery))
      .slice(0, 5)
  }, [normalizedQuery])

  const hasSearchResults = matchedPosts.length > 0 || matchedPeople.length > 0

  const handlePostClick = (postId: number) => {
    setIsSearchOpen(false)
    setSearchQuery('')

    if (location.pathname === '/variant-b') {
      const target = document.getElementById(`post-${postId}`)
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    navigate(`/variant-b?postId=${postId}`)
  }

  const handlePersonClick = (profileId?: string) => {
    if (!profileId) return

    setIsSearchOpen(false)
    setSearchQuery('')
    navigate(`/variant-b/profile/${profileId}`)
  }

  return (
    <header className="variant-b-header">
      <div className="brand">    <img src={icon} alt="Icon" width={60} height={60} />
</div>

      <div className="header-search" ref={searchRef}>
        <span aria-hidden="true">🔍</span>
        <input
          type="text"
          placeholder="Search posts, comments, people..."
          aria-label="Search"
          value={searchQuery}
          onFocus={() => setIsSearchOpen(true)}
          onChange={(event) => {
            setSearchQuery(event.target.value)
            setIsSearchOpen(true)
          }}
        />

        {isSearchOpen && normalizedQuery ? (
          <div className="search-dropdown">
            <div className="search-section">
              <h4>Posts</h4>
              {matchedPosts.length ? (
                matchedPosts.map((post) => (
                  <button key={post.id} type="button" className="search-result-item" onClick={() => handlePostClick(post.id)}>
                    <strong>{post.title}</strong>
                    <span>{post.authorID}</span>
                  </button>
                ))
              ) : (
                <p>No matching posts.</p>
              )}
            </div>

            <div className="search-section">
              <h4>People</h4>
              {matchedPeople.length ? (
                matchedPeople.map((person) => (
                  <button key={person.authorID} type="button" className="search-result-item" onClick={() => handlePersonClick(person.profileId)}>
                    <strong>{person.authorID}</strong>
                    <span>{person.profileId ? 'Open profile' : 'Profile unavailable'}</span>
                  </button>
                ))
              ) : (
                <p>No matching people.</p>
              )}
            </div>

            {!hasSearchResults ? <p className="search-empty">Try a different keyword.</p> : null}
          </div>
        ) : null}
      </div>

      <div className="header-actions" ref={headerActionsRef}>
        <button type="button" className="icon-action" aria-label="Messages" onClick={() => setActiveHeaderPanel(activeHeaderPanel === 'messages' ? null : 'messages')}>
          💬
        </button>
        <button
          type="button"
          className="icon-action"
          aria-label="Notifications"
          onClick={() => setActiveHeaderPanel(activeHeaderPanel === 'notifications' ? null : 'notifications')}
        >
          🔔
        </button>
        <button type="button" className="profile-chip" aria-label="Profile" onClick={() => setActiveHeaderPanel(activeHeaderPanel === 'profile' ? null : 'profile')}>
          <img src="https://i.pravatar.cc/80?img=12" alt="User profile" />
          <span className="black-text">Profile</span>
        </button>

        {activeHeaderPanel ? (
          <div className="header-panel">
            {activeHeaderPanel === 'profile' ? (
              <>
                <h4>Your Profile</h4>
                <p><strong>Name:</strong> Alex Carter</p>
                <p><strong>Member since:</strong> Jan 2026</p>
                <p><strong>Posts:</strong> 24 • <strong>Comments:</strong> 132</p>
                <button type="button" className="panel-link-button" onClick={() => navigate('/variant-b/profile/me')}>View account page</button>
              </>
            ) : null}

            {activeHeaderPanel === 'messages' ? (
              <>
                <h4>Recent Chats</h4>
                <div className="chat-preview-list">
                  {chats.map((chat) => (
                    <div key={chat.id} className="chat-preview-item">
                      <button
                        type="button"
                        className="chat-preview-avatar"
                        onClick={() => {
                          if (chat.profileId) navigate(`/variant-b/profile/${chat.profileId}`)
                        }}
                      >
                        <img src={chat.avatar} alt={`${chat.person} avatar`} />
                      </button>
                      <button type="button" className="chat-preview-main" onClick={() => navigate(`/variant-b/chat/${chat.id}`)}>
                        <div className="preview-top">
                          <strong>{chat.person}</strong>
                          <span>{chat.updatedAt}</span>
                        </div>
                        <p>{chat.preview}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            {activeHeaderPanel === 'notifications' ? (
              <>
                <h4>Notifications</h4>
                <div className="notification-list">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notification-item ${notification.isRead ? '' : 'unread'}`}
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <div className="notification-row">
                        <strong>{notification.title}</strong>
                        {!notification.isRead ? <span className="status-dot" aria-hidden="true" /> : null}
                      </div>
                      {notification.isOpen ? (
                        <p>
                          {notification.detail}
                          {notification.profileId && notification.profileName ? (
                            <>
                              {' '}
                              <button
                                type="button"
                                className="panel-link-button inline"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  navigate(`/variant-b/profile/${notification.profileId}`)
                                }}
                              >
                                Open {notification.profileName}'s profile
                              </button>
                            </>
                          ) : null}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  )
}
