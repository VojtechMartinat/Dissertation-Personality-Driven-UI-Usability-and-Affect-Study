export interface UserProfile {
  id: string
  username: string
  followers: number
  postCount: number
  bio: string
  avatar: string
  authorIds: string[]
}

export const profiles: UserProfile[] = [
  {
    id: 'me',
    username: 'Alex Carter',
    followers: 842,
    postCount: 24,
    bio: 'Frontend enthusiast sharing UI ideas and forum updates.',
    avatar: 'https://i.pravatar.cc/120?img=12',
    authorIds: ['User123'],
  },
  {
    id: 'rina',
    username: 'Rina Shah',
    followers: 1290,
    postCount: 51,
    bio: 'Product designer, community helper, and occasional meme poster.',
    avatar: 'https://i.pravatar.cc/120?img=47',
    authorIds: ['User456'],
  },
  {
    id: 'sam',
    username: 'Sam Ortega',
    followers: 534,
    postCount: 17,
    bio: 'Discussing architecture, moderation tools, and better onboarding.',
    avatar: 'https://i.pravatar.cc/120?img=21',
    authorIds: ['User789'],
  },
  {
    id: 'devon',
    username: 'Devon Lee',
    followers: 643,
    postCount: 19,
    bio: 'Building moderation tools and collaborating on long thread discussions.',
    avatar: 'https://i.pravatar.cc/120?img=55',
    authorIds: ['User456'],
  },
]
