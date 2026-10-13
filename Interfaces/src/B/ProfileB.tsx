import { Link, useParams } from 'react-router-dom'
import { posts as initialPosts } from '../A/data/posts'
import { profiles } from './data/profiles'
import './MainB.css'
import VariantBHeader from './VariantBHeader'


export default function ProfileB() {
  const { profileId } = useParams()
  const profile = profiles.find((entry) => entry.id === profileId)

  if (!profile) {
    return (
      <div className="profile-page">
        <div className="profile-shell">
          <p>Profile not found.</p>
          <Link to="/variant-b" className="back-link">← Back to feed</Link>
        </div>
      </div>
    )
  }

  const userPosts = initialPosts.filter((post) => post.boardId === 1 && profile.authorIds.includes(post.authorID))

  return (
    <>
      <VariantBHeader />
      <div className="profile-page">
        <div className="profile-shell">
        <Link to="/variant-b" className="back-link">← Back</Link>

        <div className="profile-card">
          <img src={profile.avatar} alt={`${profile.username} avatar`} />
          <div>
            <h2>{profile.username}</h2>
            <p><strong>Followers:</strong> {profile.followers}</p>
            <p><strong>Posts:</strong> {profile.postCount}</p>
            <p>{profile.bio}</p>
          </div>
        </div>

        <section className="profile-post-feed">
          <h3>{profile.username}'s Posts</h3>
          {userPosts.length ? (
            userPosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-meta">
                  <strong>{post.authorID}</strong>
                  <span>{post.timestamp}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </article>
            ))
          ) : (
            <p style={{ color: 'black' }}>No posts available for this profile yet.</p>
          )}
        </section>
        </div>
      </div>
    </>
  )
}
