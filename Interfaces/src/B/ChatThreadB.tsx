import { useMemo, useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { chats } from './data/chats'
import type { ChatMessage } from './data/chats'
import './MainB.css'
import VariantBHeader from './VariantBHeader'
import posthog from 'posthog-js'


export default function ChatThreadB() {
  const navigate = useNavigate()
  const { chatId } = useParams()
  const chat = useMemo(() => chats.find((item) => item.id === chatId), [chatId])

  const [draftMessage, setDraftMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(chat?.messages ?? [])


  useEffect(() => {
    setMessages(chat?.messages ?? [])
  }, [chat])

  if (!chat) {
    return (
      <div className="chat-page">
        <div className="chat-shell">
          <p>Chat not found.</p>
          <Link to="/variant-b" className="back-link">← Back to feed</Link>
        </div>
      </div>
    )
  }

  const handleReply = () => {
    if (!draftMessage.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now(),
      sender: 'You',
      text: draftMessage,
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    }

    posthog.capture('chat_message_sent', {
    message_length: draftMessage.length,
    message_text: draftMessage,
    page: window.location.pathname
  })


    setMessages((prev) => [...prev, newMessage])
    setDraftMessage('')
  }

  return (
    <>
      <VariantBHeader />
      <div className="chat-page">
        <div className="chat-shell">
        <div className="chat-topbar">
          <Link to="/variant-b" className="back-link">← Back</Link>
          <div className="chat-user">
            <button
              type="button"
              className="chat-user-avatar-button"
              onClick={() => {
                if (chat.profileId) navigate(`/variant-b/profile/${chat.profileId}`)
              }}
            >
              <img src={chat.avatar} alt={`${chat.person} avatar`} />
            </button>
            <div>
              <strong>{chat.person}</strong>
              <p>Active now</p>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`chat-bubble ${message.sender === 'You' ? 'mine' : ''}`}>
              <p>{message.text}</p>
              <span>{message.time}</span>
            </div>
          ))}
        </div>

        <div className="chat-input-row">
          <input
            type="text"
            placeholder="Type a message..."
            value={draftMessage}
            onChange={(event) => setDraftMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                handleReply()
              }
            }}
          />
          <button type="button" onClick={handleReply}>Reply</button>
        </div>
        </div>
      </div>
    </>
  )
}
