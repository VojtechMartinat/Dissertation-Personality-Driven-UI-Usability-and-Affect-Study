import { Link, useParams } from 'react-router-dom'
import { chats } from './data/chats'
import './MainC.css'

export default function ChatThreadB() {
  const { chatId } = useParams()
  const chat = chats.find((item) => item.id === chatId)

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

  return (
    <div className="chat-page">
      <div className="chat-shell">
        <div className="chat-topbar">
          <Link to="/variant-b" className="back-link">← Back</Link>
          <div className="chat-user">
            <img src={chat.avatar} alt={`${chat.person} avatar`} />
            <div>
              <strong>{chat.person}</strong>
              <p>Active now</p>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {chat.messages.map((message) => (
            <div key={message.id} className={`chat-bubble ${message.sender === 'You' ? 'mine' : ''}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="chat-input-row">
<input 
  type="text" 
  placeholder="Type a message..." 
  readOnly 
  style={{ color: 'black' }} 
/>          <button type="button">Send</button>
        </div>
      </div>
    </div>
  )
}
