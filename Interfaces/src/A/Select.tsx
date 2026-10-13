import './Select.css'
import './VariantA.css'
import Icon from "./assets/icon.png";

interface Board {
  id: number
  name: string
  posts: number
  users: number
  lastActivity: string
}

const boards: Board[] = [
  {
    id: 1,
    name: 'General Discussion',
    posts: 1245,
    users: 342,
    lastActivity: '2 mins ago',
  },
  {
    id: 2,
    name: 'Tech',
    posts: 842,
    users: 210,
    lastActivity: '10 mins ago',
  },
  {
    id: 3,
    name: 'Gaming',
    posts: 2210,
    users: 560,
    lastActivity: '1 hour ago',
  },
  {
    id: 4,
    name: 'Anime',
    posts: 534,
    users: 198,
    lastActivity: '5 mins ago',
  },
  {
    id: 5,
    name: 'Business',
    posts: 128,
    users: 620,
    lastActivity: '30 mins ago',
  },
  {
    id: 6,
    name: 'Announcements',
    posts: 1760,
    users: 410,
    lastActivity: '12 mins ago',
  },
]

export default function BoardSelect() {
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
          <h1>Boards</h1>

          <table className="board-table">
            <thead>
              <tr>
                <th>Board</th>
                <th>Posts</th>
                <th>Users</th>
                <th>Last Activity</th>
              </tr>
            </thead>

            <tbody>
              {boards.map((board) => (
                <tr key={board.id} className="board-row">
                  <td>
                        <div className="board-name">
                            <a href={`/board/${board.id}`} className="board-link">
                            {board.name}
                            </a>
                        </div>
                        </td>

                  <td>{board.posts}</td>
                  <td>{board.users}</td>
                  <td>{board.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
