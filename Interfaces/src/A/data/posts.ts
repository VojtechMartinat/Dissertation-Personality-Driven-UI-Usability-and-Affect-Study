export interface Comment {
  id: number      
  author: string
  text: string
  timestamp?: string
  replies?: Comment[]
}

export interface Post {
  id: number
  boardId: number  
  image?: string[],
  title: string
  content: string
  authorID: string
  timestamp: string
  comments: Comment[]
}

export const posts: Post[] = [
  {
  id: 201,
  boardId: 1,
  title: 'Finding a healthy work-life balance',
  content: 'Lately ive been trying to better balance work, personal time and hobbies. I need some tips on this how do others manage their time and avoid burnout?',
  image: ['https:
  authorID: 'a9f3x2k1',
  timestamp: '2026-03-15 10:15',
  comments: [
    {
      id: 31,
      author: 'a9f3x2k1',
      text: 'I try to treat downtime as something scheduled, not something optional. It really helps.',
      timestamp: '2026-03-15 10:30',
      replies: [
        {
          id: 32,
          author: 'a9f3x2k1',
          text: 'That’s a great mindset. Do you stick to strict boundaries after work hours?',
          timestamp: '2026-03-15 10:35',
        },
      ],
    },
    {
      id: 33,
      author: 'a9f3x2k1',
      text: 'Time-blocking has worked well for me. It keeps everything predictable.',
      timestamp: '2026-03-15 10:45',
    },
  ],
},
  {
  id: 100,
  boardId: 3,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the Gaming Board! This is an anonymous space for gamers to discuss games, share tips, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 12:00',
  comments: [
  ],
},

{
  id: 1,
  boardId: 1,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the General Discussion Board! This is an anonymous space for users to discuss topics, share ideas, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 10:00',
  comments: [],
},
{
  id: 2,
  boardId: 2,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the Tech Board! This is an anonymous space for users to discuss technology, share tips, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 10:05',
  comments: [],
},
{
  id: 3,
  boardId: 3,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the Gaming Board! This is an anonymous space for gamers to discuss games, share tips, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 12:00',
  comments: [],
},
{
  id: 4,
  boardId: 4,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the Anime Board! This is an anonymous space for users to discuss anime, share recommendations, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 10:10',
  comments: [],
},
{
  id: 5,
  boardId: 5,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the Business Board! This is an anonymous space for users to discuss business, share insights, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 10:15',
  comments: [],
},
{
  id: 6,
  boardId: 6,
  title: 'Welcome & Forum Guidelines',
  content: `
Welcome to the Announcements Board! This is an anonymous space for users to view updates, discuss announcements, and chat freely.

**Forum Guidelines:**
1. Nothing illegal under US law.
2. Off-topic posts may be removed.
3. Avoid spamming or self-promotion.
`,
  authorID: 'mod_0001',
  timestamp: '2026-03-14 10:20',
  comments: [],
},

  {
  id: 101,
  boardId: 3,
  title: 'Best open world games right now?',
  content: 'Looking for something immersive with lots to explore. Any recommendations?',
  authorID: 'a9f3x2k1',
  timestamp: '2026-03-10 18:12',
  comments: [
    {
      id: 11,
      author: 'x7d2p9q4',
      text: 'Elden Ring is still top tier for exploration.',
      timestamp: '2026-03-10 18:20',
      replies: [
        {
          id: 12,
          author: 'm3n8z1b6',
          text: 'Agreed, but it can be brutal for beginners.',
          timestamp: '2026-03-10 18:25',
          replies: [
            {
              id: 13,
              author: 'k9v2c7x0',
              text: 'That’s part of the fun though.',
              timestamp: '2026-03-10 18:27',
            },
          ],
        },
      ],
    },
    {
      id: 14,
      author: 'q2w8e5r1',
      text: 'bump',
      timestamp: '2026-03-10 18:40',
    },
  ],
},
{
  id: 102,
  boardId: 3,
  title: 'Is competitive gaming too toxic?',
  content: 'Feels like every ranked match ends in arguments lately.',
  authorID: 'z4x7c1v9',
  timestamp: '2026-03-11 09:05',
  comments: [
    {
      id: 15,
      author: 'b8n3m2k0',
      text: 'Depends on the game, but yeah it’s pretty bad.',
      timestamp: '2026-03-11 09:10',
      replies: [
        {
          id: 16,
          author: 't6y1u8i3',
          text: 'Mute button is your best friend.',
          timestamp: '2026-03-11 09:12',
        },
      ],
    },
    {
      id: 17,
      author: 'p0o9i8u7',
      text: 'Find a group to queue with, makes it way better.',
      timestamp: '2026-03-11 09:20',
      replies: [
        {
          id: 18,
          author: 'l5k2j9h4',
          text: 'Solo queue is basically chaos.',
          timestamp: '2026-03-11 09:25',
        },
      ],
    },
  ],
},
{
  id: 103,
  boardId: 3,
  title: 'What game has the best soundtrack?',
  content: 'Music can make or break a game for me. Any standout OSTs?',
  authorID: 'c3v8b2n7',
  timestamp: '2026-03-12 14:45',
  comments: [
    {
      id: 19,
      author: 's1d4f6g8',
      text: 'The Witcher 3 soundtrack is incredible.',
      timestamp: '2026-03-12 14:50',
      replies: [
        {
          id: 20,
          author: 'h7j3k9l2',
          text: 'Fields of Ard Skellig hits different.',
          timestamp: '2026-03-12 14:52',
        },
      ],
    },
    {
      id: 21,
      author: 'w0e2r4t6',
      text: 'DOOM for pure adrenaline.',
      timestamp: '2026-03-12 15:00',
      replies: [
        {
          id: 22,
          author: 'y8u3i1o5',
          text: 'Mick Gordon went insane on that one.',
          timestamp: '2026-03-12 15:05',
          replies: [
            {
              id: 23,
              author: 'a2s5d8f1',
              text: 'Perfect gym music too.',
              timestamp: '2026-03-12 15:07',
            },
          ],
        },
      ],
    },
  ],
},
{
  id: 104,
  boardId: 3,
  title: 'Are single-player games dying?',
  content: 'Feels like everything is multiplayer or live service now.',
  authorID: 'n6m1b4v8',
  timestamp: '2026-03-13 20:30',
  comments: [
    {
      id: 24,
      author: 'q7w3e9r2',
      text: 'Not dying, just less frequent.',
      timestamp: '2026-03-13 20:35',
      replies: [
        {
          id: 25,
          author: 't5y8u2i6',
          text: 'Still plenty of great indie single-player games.',
          timestamp: '2026-03-13 20:40',
        },
      ],
    },
    {
      id: 26,
      author: 'o1p4a7s9',
      text: 'Big studios chase money, multiplayer keeps players longer.',
      timestamp: '2026-03-13 20:50',
      replies: [
        {
          id: 27,
          author: 'd3f6g8h0',
          text: 'True, but story-driven games still sell well.',
          timestamp: '2026-03-13 20:55',
          replies: [
            {
              id: 28,
              author: 'j2k5l7z1',
              text: 'Especially when they’re polished.',
              timestamp: '2026-03-13 20:57',
            },
          ],
        },
      ],
    },
  ],
}
,
{
  id: 104,
  boardId: 3,
  title: 'Is grinding in RPGs still fun?',
  content: 'Feels like modern RPGs either remove grinding or make it excessive. What’s the ideal balance?',
  authorID: 'x9k2d7p1',
  timestamp: '2026-03-17 10:15',
  comments: [
    {
      id: 201,
      author: 'm4n8z2q5',
      text: 'A bit of grinding makes progression satisfying.',
      timestamp: '2026-03-17 10:20',
      replies: [
        {
          id: 202,
          author: 't1y7u3w8',
          text: 'Only if it feels meaningful though.',
          timestamp: '2026-03-17 10:22',
          replies: [
            {
              id: 203,
              author: 'k6l9v2c4',
              text: 'Exactly, pointless grinding kills motivation.',
              timestamp: '2026-03-17 10:25',
            },
          ],
        },
      ],
    },
    {
      id: 204,
      author: 'p3o9i1u7',
      text: 'I prefer skill-based progression instead.',
      timestamp: '2026-03-17 10:30',
    },
    {
      id: 205,
      author: 'z8x2c4v6',
      text: 'Some MMOs overdo it massively.',
      timestamp: '2026-03-17 10:35',
    },
  ],
},
{
  id: 105,
  boardId: 3,
  title: 'Best FPS mechanics right now?',
  content: 'Which shooters have the most satisfying mechanics in your opinion?',
  authorID: 'b7n3m1k9',
  timestamp: '2026-03-17 12:00',
  comments: [
    {
      id: 206,
      author: 'q2w8e1r5',
      text: 'Movement systems matter more than gunplay for me.',
      timestamp: '2026-03-17 12:05',
      replies: [
        {
          id: 207,
          author: 'd4f6g8h2',
          text: 'Same, fast movement keeps it engaging.',
          timestamp: '2026-03-17 12:10',
        },
      ],
    },
    {
      id: 208,
      author: 'u7i3o9p1',
      text: 'Gun feel is everything.',
      timestamp: '2026-03-17 12:15',
    },
    {
      id: 209,
      author: 'l5k2j4h8',
      text: 'Hit registration makes or breaks a game.',
      timestamp: '2026-03-17 12:20',
      replies: [
        {
          id: 210,
          author: 's1d3f7g9',
          text: 'Bad netcode ruins everything.',
          timestamp: '2026-03-17 12:22',
        },
      ],
    },
  ],
},
{
  id: 106,
  boardId: 3,
  title: 'Do story-driven games still sell well?',
  content: 'Seems like multiplayer dominates, but are story games still relevant?',
  authorID: 'v6b2n9m3',
  timestamp: '2026-03-18 09:45',
  comments: [
    {
      id: 211,
      author: 'r4t6y8u1',
      text: 'Story games always have a loyal audience.',
      timestamp: '2026-03-18 09:50',
      replies: [
        {
          id: 212,
          author: 'e5w3q7a9',
          text: 'They just don’t dominate trends.',
          timestamp: '2026-03-18 09:52',
        },
      ],
    },
    {
      id: 213,
      author: 'c8v1b5n2',
      text: 'Quality matters more than genre.',
      timestamp: '2026-03-18 10:00',
    },
    {
      id: 214,
      author: 'x3z9k7l4',
      text: 'Shorter story games are becoming more popular.',
      timestamp: '2026-03-18 10:05',
    },
  ],
},



{
  id: 107,
  boardId: 3,
  title: 'Are battle passes ruining games?',
  content: 'Feels like every game has one now.',
  authorID: 'h2j7k9l1',
  timestamp: '2026-03-18 11:30',
  comments: [
    {
      id: 215,
      author: 'n3m8b2v6',
      text: 'They turn games into chores.',
      timestamp: '2026-03-18 11:35',
      replies: [
        {
          id: 216,
          author: 't9y1u4i7',
          text: 'Exactly, daily tasks feel forced.',
          timestamp: '2026-03-18 11:37',
        },
      ],
    },
    {
      id: 217,
      author: 'p6o2i8u3',
      text: 'Some are fair if rewards are good.',
      timestamp: '2026-03-18 11:40',
    },
    {
      id: 218,
      author: 'z1x4c7v9',
      text: 'Free ones are okay.',
      timestamp: '2026-03-18 11:45',
    },
  ],
},

{
  id: 108,
  boardId: 3,
  title: 'Best co-op games recently?',
  content: 'Looking for something to play with friends.',
  authorID: 'g5h2j8k3',
  timestamp: '2026-03-18 13:10',
  comments: [
    {
      id: 219,
      author: 'w1e3r5t7',
      text: 'Co-op survival games are fun lately.',
      timestamp: '2026-03-18 13:15',
      replies: [
        {
          id: 220,
          author: 'y6u2i8o4',
          text: 'Especially with base building.',
          timestamp: '2026-03-18 13:18',
        },
      ],
    },
    {
      id: 221,
      author: 'a9s4d7f2',
      text: 'Party games are underrated.',
      timestamp: '2026-03-18 13:20',
    },
    {
      id: 222,
      author: 'l3k8j1h5',
      text: 'Depends how many players you have.',
      timestamp: '2026-03-18 13:25',
    },
  ],
},



{
  id: 119,
  boardId: 3,
  title: 'Are single-player games dying?',
  content: 'Feels like everything is live-service now.',
  authorID: 'd7f3g9h2',
  timestamp: '2026-03-20 09:00',
  comments: [
    {
      id: 250,
      author: 'k2l8z1x4',
      text: 'Not dying, just less dominant.',
      timestamp: '2026-03-20 09:05',
      replies: [
        {
          id: 251,
          author: 'v6c9b3n7',
          text: 'Still strong in certain genres.',
          timestamp: '2026-03-20 09:07',
        },
      ],
    },
    {
      id: 252,
      author: 'p5o2i7u9',
      text: 'Indie games are keeping them alive.',
      timestamp: '2026-03-20 09:10',
    },
    {
      id: 253,
      author: 'm1n4b8v6',
      text: 'AAA focuses on multiplayer too much.',
      timestamp: '2026-03-20 09:15',
    },
  ],
},

{
  id: 120,
  boardId: 3,
  title: 'Hardest boss you’ve ever faced?',
  content: 'Curious what people struggled with the most.',
  authorID: 's4d8f1g6',
  timestamp: '2026-03-20 11:30',
  comments: [
    {
      id: 254,
      author: 'q7w2e9r4',
      text: 'Some Souls bosses are brutal.',
      timestamp: '2026-03-20 11:35',
      replies: [
        {
          id: 255,
          author: 't3y8u1i5',
          text: 'But fair most of the time.',
          timestamp: '2026-03-20 11:37',
          replies: [
            {
              id: 256,
              author: 'o6p2a9s4',
              text: 'Until RNG ruins it.',
              timestamp: '2026-03-20 11:39',
            },
          ],
        },
      ],
    },
    {
      id: 257,
      author: 'l5k3j7h2',
      text: 'Old-school games were harder overall.',
      timestamp: '2026-03-20 11:40',
    },
    {
      id: 258,
      author: 'z1x6c9v3',
      text: 'Depends on patience honestly.',
      timestamp: '2026-03-20 11:45',
    },
  ],
}
,
{
  id: 121,
  boardId: 3,
  title: 'Why do people still play old MMOs?',
  content: 'Genuine question, what keeps you logging in after years?',
  authorID: 'u7g2h1k9',
  timestamp: '2026-03-21 08:10',
  comments: [
    {
      id: 260,
      author: 'd3f8g2h1',
      text: '>community\nThat’s literally it.',
      timestamp: '2026-03-21 08:15',
      replies: [
        {
          id: 261,
          author: 'x9z1k4l2',
          text: 'Yeah friends > gameplay sometimes',
          timestamp: '2026-03-21 08:17',
        },
      ],
    },
    {
      id: 262,
      author: 'm5n2b8v7',
      text: 'nostalgia + sunk cost',
      timestamp: '2026-03-21 08:20',
    },
    {
      id: 263,
      author: 'p9o1i4u6',
      text: '[deleted]',
      timestamp: '2026-03-21 08:25',
    },
    {
      id: 264,
      author: 'mod_0001',
      text: 'Removed off-topic reply.',
      timestamp: '2026-03-21 08:27',
    },
    {
      id: 265,
      author: 'k3l7z2x8',
      text: 'bump',
      timestamp: '2026-03-21 08:40',
    },
  ],
},
{
  id: 122,
  boardId: 3,
  title: 'Is aim assist too strong?',
  content: 'Feels unfair in crossplay sometimes.',
  authorID: 't4y7u1i9',
  timestamp: '2026-03-21 10:00',
  comments: [
    {
      id: 266,
      author: 'q2w8e4r7',
      text: '>controller players will disagree',
      timestamp: '2026-03-21 10:05',
    },
    {
      id: 267,
      author: 'a6s1d9f3',
      text: 'depends on the game honestly',
      timestamp: '2026-03-21 10:07',
      replies: [
        {
          id: 268,
          author: 'g5h2j8k4',
          text: 'some devs overtune it hard',
          timestamp: '2026-03-21 10:09',
        },
      ],
    },
    {
      id: 269,
      author: 'z8x3c1v7',
      text: 'kbm still better overall',
      timestamp: '2026-03-21 10:10',
    },
    {
      id: 270,
      author: 'l4k9j2h6',
      text: '[deleted]',
      timestamp: '2026-03-21 10:12',
    },
    {
      id: 271,
      author: 'n2m7b5v1',
      text: 'skill gap shrinking tbh',
      timestamp: '2026-03-21 10:20',
    },
  ],
},
{
  id: 123,
  boardId: 3,
  title: 'Games that wasted your time?',
  content: 'Which ones felt pointless after finishing?',
  authorID: 'v1b6n3m8',
  timestamp: '2026-03-21 12:30',
  comments: [
    {
      id: 272,
      author: 'r4t9y2u5',
      text: 'live service games after burnout',
      timestamp: '2026-03-21 12:35',
    },
    {
      id: 273,
      author: 'e3w7q1a6',
      text: '>any grind-heavy game',
      timestamp: '2026-03-21 12:36',
      replies: [
        {
          id: 274,
          author: 's9d2f8g4',
          text: 'true but we still play them',
          timestamp: '2026-03-21 12:38',
        },
      ],
    },
    {
      id: 275,
      author: 'h1j5k3l7',
      text: 'story carried some though',
      timestamp: '2026-03-21 12:40',
    },
    {
      id: 276,
      author: 'c8v2b9n1',
      text: '[deleted]',
      timestamp: '2026-03-21 12:42',
    },
    {
      id: 277,
      author: 'x7z4k6l2',
      text: 'bump for more answers',
      timestamp: '2026-03-21 12:50',
    },
  ],
},



{
  id: 124,
  boardId: 3,
  title: 'Do graphics actually matter?',
  content: 'Or is gameplay still king?',
  authorID: 'g2h7j4k9',
  timestamp: '2026-03-21 14:00',
  comments: [
    {
      id: 278,
      author: 'w1e5r8t2',
      text: 'gameplay > everything',
      timestamp: '2026-03-21 14:05',
    },
    {
      id: 279,
      author: 'y6u3i1o9',
      text: '>immersion matters though',
      timestamp: '2026-03-21 14:06',
      replies: [
        {
          id: 280,
          author: 'a9s2d4f7',
          text: 'good visuals help with that',
          timestamp: '2026-03-21 14:08',
        },
      ],
    },
    {
      id: 281,
      author: 'l3k8j5h2',
      text: 'stylized > realistic',
      timestamp: '2026-03-21 14:10',
    },
    {
      id: 282,
      author: 'p7o1i6u4',
      text: '[deleted]',
      timestamp: '2026-03-21 14:12',
    },
    {
      id: 283,
      author: 'z2x9c4v1',
      text: 'bad gameplay ruins good graphics instantly',
      timestamp: '2026-03-21 14:20',
    },
  ],
},

{
  id: 125,
  boardId: 3,
  title: 'Why are indie games so good lately?',
  content: 'Feels like AAA can’t compete sometimes.',
  authorID: 'd8f3g1h6',
  timestamp: '2026-03-22 09:00',
  comments: [
    {
      id: 284,
      author: 'k5l2z7x3',
      text: 'less risk aversion',
      timestamp: '2026-03-22 09:05',
    },
    {
      id: 285,
      author: 'v9c4b1n8',
      text: '>more creative freedom',
      timestamp: '2026-03-22 09:06',
    },
    {
      id: 286,
      author: 'p3o7i2u9',
      text: 'smaller teams = focused ideas',
      timestamp: '2026-03-22 09:10',
      replies: [
        {
          id: 287,
          author: 'm1n6b8v4',
          text: 'and fewer corporate decisions',
          timestamp: '2026-03-22 09:12',
        },
      ],
    },
    {
      id: 288,
      author: 'q8w2e5r1',
      text: '[deleted]',
      timestamp: '2026-03-22 09:15',
    },
    {
      id: 289,
      author: 't7y4u1i3',
      text: 'AAA still wins in polish though',
      timestamp: '2026-03-22 09:20',
    },
  ],
},


{
  id: 139,
  boardId: 3,
  title: 'Do tutorials ruin discovery?',
  content: 'Games explain too much now.',
  authorID: 'h3j7k2l9',
  timestamp: '2026-03-23 16:00',
  comments: [
    {
      id: 340,
      author: 'n8m4b2v6',
      text: 'yes, let players figure things out',
      timestamp: '2026-03-23 16:05',
    },
    {
      id: 341,
      author: 't1y9u3i7',
      text: '>some people need guidance',
      timestamp: '2026-03-23 16:06',
      replies: [
        {
          id: 342,
          author: 'o6p2a8s4',
          text: 'optional tutorials solve this',
          timestamp: '2026-03-23 16:08',
        },
      ],
    },
    {
      id: 343,
      author: 'l5k3j7h2',
      text: 'modern design is too hand-holdy',
      timestamp: '2026-03-23 16:10',
    },
    {
      id: 344,
      author: 'z1x6c9v3',
      text: '[deleted]',
      timestamp: '2026-03-23 16:12',
    },
    {
      id: 345,
      author: 'a2s5d8f1',
      text: 'balance is key',
      timestamp: '2026-03-23 16:15',
    },
  ],
},
{
  id: 140,
  boardId: 3,
  title: 'Are gaming communities getting worse?',
  content: 'Feels more toxic than before.',
  authorID: 's4d8f1g6',
  timestamp: '2026-03-23 18:20',
  comments: [
    {
      id: 346,
      author: 'q7w2e9r4',
      text: 'bigger audience = more toxicity',
      timestamp: '2026-03-23 18:25',
    },
    {
      id: 347,
      author: 't3y8u1i5',
      text: '>also more casual players',
      timestamp: '2026-03-23 18:26',
    },
    {
      id: 348,
      author: 'o6p2a9s4',
      text: 'moderation matters a lot',
      timestamp: '2026-03-23 18:30',
      replies: [
        {
          id: 349,
          author: 'l5k3j7h2',
          text: 'most forums don’t enforce rules properly',
          timestamp: '2026-03-23 18:32',
        },
      ],
    },
    {
      id: 350,
      author: 'z1x6c9v3',
      text: '[deleted]',
      timestamp: '2026-03-23 18:35',
    },
    {
      id: 351,
      author: 'm1n4b8v6',
      text: 'depends on the game honestly',
      timestamp: '2026-03-23 18:40',
    },
  ],
},
{
  id: 141,
  boardId: 3,
  title: 'Do difficulty settings ruin game design?',
  content: 'Should games have one intended difficulty or multiple options?',
  authorID: 'k8l3z1x7',
  timestamp: '2026-03-24 08:10',
  comments: [
    {
      id: 360,
      author: 'v2c7b4n9',
      text: 'one difficulty = better balance',
      timestamp: '2026-03-24 08:15',
      replies: [
        {
          id: 361,
          author: 'p5o1i8u3',
          text: '>accessibility matters though',
          timestamp: '2026-03-24 08:17',
          replies: [
            {
              id: 362,
              author: 'm3n9b2v6',
              text: 'true, but design gets diluted',
              timestamp: '2026-03-24 08:19',
            },
          ],
        },
      ],
    },
    {
      id: 363,
      author: 'q1w4e7r8',
      text: 'optional modes are fine',
      timestamp: '2026-03-24 08:20',
    },
    {
      id: 364,
      author: 't6y2u9i5',
      text: '[deleted]',
      timestamp: '2026-03-24 08:22',
    },
    {
      id: 365,
      author: 'mod_0001',
      text: 'Removed inflammatory comment.',
      timestamp: '2026-03-24 08:23',
    },
    {
      id: 366,
      author: 'a9s5d2f7',
      text: 'depends on genre tbh',
      timestamp: '2026-03-24 08:30',
    },
  ],
},
{
  id: 142,
  boardId: 3,
  title: 'Best stealth mechanics?',
  content: 'Which games actually do stealth right?',
  authorID: 'h2j9k4l6',
  timestamp: '2026-03-24 10:05',
  comments: [
    {
      id: 367,
      author: 'n1m8b3v5',
      text: 'enemy AI matters most',
      timestamp: '2026-03-24 10:10',
    },
    {
      id: 368,
      author: 'r4t7y2u9',
      text: '>predictable AI kills stealth',
      timestamp: '2026-03-24 10:12',
      replies: [
        {
          id: 369,
          author: 'e3w1q8a6',
          text: 'randomization helps a lot',
          timestamp: '2026-03-24 10:14',
        },
      ],
    },
    {
      id: 370,
      author: 'c9v2b5n7',
      text: 'sound design underrated',
      timestamp: '2026-03-24 10:15',
    },
    {
      id: 371,
      author: 'z8x4c1v3',
      text: '[deleted]',
      timestamp: '2026-03-24 10:17',
    },
    {
      id: 372,
      author: 'l5k2j7h9',
      text: 'bump',
      timestamp: '2026-03-24 10:25',
    },
  ],
},
{
  id: 143,
  boardId: 3,
  title: 'Do live-service games ever end well?',
  content: 'Most seem to fade out eventually.',
  authorID: 'g6h1j3k8',
  timestamp: '2026-03-24 12:30',
  comments: [
    {
      id: 373,
      author: 'w2e9r4t7',
      text: 'very few actually last',
      timestamp: '2026-03-24 12:35',
    },
    {
      id: 374,
      author: 'y8u3i5o1',
      text: '>depends on updates',
      timestamp: '2026-03-24 12:36',
      replies: [
        {
          id: 375,
          author: 'a1s7d9f4',
          text: 'content drought kills them',
          timestamp: '2026-03-24 12:38',
        },
      ],
    },
    {
      id: 376,
      author: 'l3k6j2h8',
      text: 'playerbase drops fast',
      timestamp: '2026-03-24 12:40',
    },
    {
      id: 377,
      author: 'p5o8i2u6',
      text: '[deleted]',
      timestamp: '2026-03-24 12:42',
    },
    {
      id: 378,
      author: 'z4x1c9v7',
      text: 'rare exceptions exist',
      timestamp: '2026-03-24 12:50',
    },
  ],
},



{
  id: 144,
  boardId: 3,
  title: 'Are gaming laptops worth it?',
  content: 'Portability vs performance debate.',
  authorID: 'd9f3g7h1',
  timestamp: '2026-03-24 14:00',
  comments: [
    {
      id: 379,
      author: 'k2l8z5x4',
      text: 'desktop still better value',
      timestamp: '2026-03-24 14:05',
    },
    {
      id: 380,
      author: 'v6c1b3n9',
      text: '>depends on your lifestyle',
      timestamp: '2026-03-24 14:06',
      replies: [
        {
          id: 381,
          author: 'p7o2i9u5',
          text: 'travel = laptop wins',
          timestamp: '2026-03-24 14:08',
        },
      ],
    },
    {
      id: 382,
      author: 'm4n1b7v6',
      text: 'heat issues though',
      timestamp: '2026-03-24 14:10',
    },
    {
      id: 383,
      author: 'q9w2e8r3',
      text: '[deleted]',
      timestamp: '2026-03-24 14:12',
    },
    {
      id: 384,
      author: 't5y3u1i7',
      text: 'battery life is awful',
      timestamp: '2026-03-24 14:20',
    },
  ],
},



{
  id: 158,
  boardId: 3,
  title: 'Are open worlds getting too big?',
  content: 'Feels like size over quality lately.',
  authorID: 'j3k7l1z9',
  timestamp: '2026-03-25 15:10',
  comments: [
    {
      id: 430,
      author: 'n8m2b4v6',
      text: 'empty space everywhere',
      timestamp: '2026-03-25 15:15',
    },
    {
      id: 431,
      author: 't1y6u3i8',
      text: '>bigger ≠ better',
      timestamp: '2026-03-25 15:16',
      replies: [
        {
          id: 432,
          author: 'o5p2a9s4',
          text: 'dense worlds are better',
          timestamp: '2026-03-25 15:18',
        },
      ],
    },
    {
      id: 433,
      author: 'l7k3j5h2',
      text: 'fast travel hides bad design',
      timestamp: '2026-03-25 15:20',
    },
    {
      id: 434,
      author: 'z2x6c9v1',
      text: '[deleted]',
      timestamp: '2026-03-25 15:22',
    },
    {
      id: 435,
      author: 'a4s8d1f7',
      text: 'some games still do it right',
      timestamp: '2026-03-25 15:25',
    },
  ],
},
{
  id: 160,
  boardId: 3,
  title: 'Will VR ever go mainstream?',
  content: 'Feels like it’s still niche.',
  authorID: 's8d2f4g6',
  timestamp: '2026-03-25 18:30',
  comments: [
    {
      id: 440,
      author: 'q7w1e9r4',
      text: 'hardware still too expensive',
      timestamp: '2026-03-25 18:35',
    },
    {
      id: 441,
      author: 't3y8u2i5',
      text: '>also motion sickness',
      timestamp: '2026-03-25 18:36',
      replies: [
        {
          id: 442,
          author: 'o6p2a1s9',
          text: 'tech improving slowly',
          timestamp: '2026-03-25 18:38',
        },
      ],
    },
    {
      id: 443,
      author: 'l5k3j7h2',
      text: 'needs killer app',
      timestamp: '2026-03-25 18:40',
    },
    {
      id: 444,
      author: 'z1x6c9v3',
      text: '[deleted]',
      timestamp: '2026-03-25 18:42',
    },
    {
      id: 445,
      author: 'm1n4b8v6',
      text: 'still cool for niche uses',
      timestamp: '2026-03-25 18:45',
    },
  ],
},
{
  id: 161,
  boardId: 1,
  title: 'Why does time feel faster as you get older?',
  content: 'Anyone else feel like weeks just disappear now?',
  authorID: 'x7k2p9q1',
  timestamp: '2026-03-26 08:05',
  comments: [
    {
      id: 501,
      author: 'm3n8z1b6',
      text: '>routine\nsame days blur together',
      timestamp: '2026-03-26 08:10',
      replies: [
        {
          id: 502,
          author: 'k9v2c7x0',
          text: 'less novelty = faster perception',
          timestamp: '2026-03-26 08:12',
        },
      ],
    },
    { id: 503, author: 'q2w8e5r1', text: 'childhood felt longer tbh', timestamp: '2026-03-26 08:15' },
    { id: 504, author: 'p0o9i8u7', text: '[deleted]', timestamp: '2026-03-26 08:18' },
    { id: 505, author: 'mod_0001', text: 'Removed spam.', timestamp: '2026-03-26 08:19' },
    { id: 506, author: 'l5k2j9h4', text: 'bump', timestamp: '2026-03-26 08:30' },
  ],
},
{
  id: 162,
  boardId: 1,
  title: 'Is social media making us less patient?',
  content: 'Short-form content everywhere.',
  authorID: 'a9f3x2k1',
  timestamp: '2026-03-26 10:20',
  comments: [
    { id: 507, author: 't6y1u8i3', text: 'attention spans cooked', timestamp: '2026-03-26 10:25' },
    {
      id: 508,
      author: 'b8n3m2k0',
      text: '>dopamine loops',
      timestamp: '2026-03-26 10:27',
      replies: [
        { id: 509, author: 'z4x7c1v9', text: 'apps designed that way', timestamp: '2026-03-26 10:29' },
      ],
    },
    { id: 510, author: 'p3o9i1u7', text: 'long videos still work for me', timestamp: '2026-03-26 10:30' },
    { id: 511, author: 'x8c2v4b6', text: '[deleted]', timestamp: '2026-03-26 10:32' },
    { id: 512, author: 'n2m7b5v1', text: 'depends on habits', timestamp: '2026-03-26 10:40' },
  ],
},
{
  id: 163,
  boardId: 1,
  title: 'Coffee or tea?',
  content: 'Simple question.',
  authorID: 'q7w2e9r4',
  timestamp: '2026-03-26 12:00',
  comments: [
    { id: 513, author: 't3y8u1i5', text: 'coffee', timestamp: '2026-03-26 12:02' },
    {
      id: 514,
      author: 'o6p2a9s4',
      text: '>tea gang',
      timestamp: '2026-03-26 12:03',
      replies: [
        { id: 515, author: 'l5k3j7h2', text: 'green tea > all', timestamp: '2026-03-26 12:04' },
      ],
    },
    { id: 516, author: 'z1x6c9v3', text: 'both depending on mood', timestamp: '2026-03-26 12:05' },
    { id: 517, author: 'm1n4b8v6', text: '[deleted]', timestamp: '2026-03-26 12:06' },
    { id: 518, author: 'a2s5d8f1', text: 'bump', timestamp: '2026-03-26 12:10' },
  ],
},
{
  id: 164,
  boardId: 1,
  title: 'Is it worth waking up early?',
  content: 'People swear by it.',
  authorID: 'h3j7k2l9',
  timestamp: '2026-03-26 14:10',
  comments: [
    { id: 519, author: 'n8m4b2v6', text: 'if you actually use the time', timestamp: '2026-03-26 14:15' },
    {
      id: 520,
      author: 't1y9u3i7',
      text: '>sleep matters more',
      timestamp: '2026-03-26 14:16',
      replies: [
        { id: 521, author: 'o6p2a8s4', text: 'consistent schedule > early', timestamp: '2026-03-26 14:18' },
      ],
    },
    { id: 522, author: 'l5k3j7h2', text: 'not for night owls', timestamp: '2026-03-26 14:20' },
    { id: 523, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-03-26 14:22' },
    { id: 524, author: 'a2s5d8f1', text: 'bump', timestamp: '2026-03-26 14:30' },
  ],
},
{
  id: 165,
  boardId: 1,
  title: 'Do people actually enjoy networking?',
  content: 'Feels forced most of the time.',
  authorID: 'd7f3g9h2',
  timestamp: '2026-03-26 16:00',
  comments: [
    { id: 525, author: 'k2l8z1x4', text: 'no, just necessary', timestamp: '2026-03-26 16:05' },
    {
      id: 526,
      author: 'v6c9b3n7',
      text: '>depends on personality',
      timestamp: '2026-03-26 16:06',
      replies: [
        { id: 527, author: 'p5o2i7u9', text: 'extroverts love it', timestamp: '2026-03-26 16:08' },
      ],
    },
    { id: 528, author: 'm1n4b8v6', text: 'online is easier', timestamp: '2026-03-26 16:10' },
    { id: 529, author: 'q7w2e9r4', text: '[deleted]', timestamp: '2026-03-26 16:12' },
    { id: 530, author: 't3y8u1i5', text: 'practice helps', timestamp: '2026-03-26 16:20' },
  ],
},



{
  id: 166,
  boardId: 1,
  title: 'Do you plan your week or wing it?',
  content: 'Trying to be more organized.',
  authorID: 's4d8f1g6',
  timestamp: '2026-03-27 09:00',
  comments: [
    { id: 531, author: 'q7w2e9r4', text: 'plan loosely', timestamp: '2026-03-27 09:05' },
    {
      id: 532,
      author: 't3y8u1i5',
      text: '>strict planning burns me out',
      timestamp: '2026-03-27 09:06',
      replies: [
        { id: 533, author: 'o6p2a9s4', text: 'same, need flexibility', timestamp: '2026-03-27 09:08' },
      ],
    },
    { id: 534, author: 'l5k3j7h2', text: 'depends on workload', timestamp: '2026-03-27 09:10' },
    { id: 535, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-03-27 09:12' },
    { id: 536, author: 'm1n4b8v6', text: 'bump', timestamp: '2026-03-27 09:20' },
  ],
},

{
  id: 167,
  boardId: 1,
  title: 'Is working from home here to stay?',
  content: 'Or will companies push everyone back?',
  authorID: 'j3k7l1z9',
  timestamp: '2026-03-27 11:30',
  comments: [
    { id: 537, author: 'n8m2b4v6', text: 'hybrid seems permanent', timestamp: '2026-03-27 11:35' },
    {
      id: 538,
      author: 't1y6u3i8',
      text: '>companies want control back',
      timestamp: '2026-03-27 11:36',
      replies: [
        { id: 539, author: 'o5p2a9s4', text: 'depends on industry', timestamp: '2026-03-27 11:38' },
      ],
    },
    { id: 540, author: 'l7k3j5h2', text: 'productivity didn’t drop much', timestamp: '2026-03-27 11:40' },
    { id: 541, author: 'z2x6c9v1', text: '[deleted]', timestamp: '2026-03-27 11:42' },
    { id: 542, author: 'a4s8d1f7', text: 'I’d quit if forced back full-time', timestamp: '2026-03-27 11:45' },
  ],
},

{
  id: 178,
  boardId: 1,
  title: 'Do people read books anymore?',
  content: 'Feels like everything is video now.',
  authorID: 'u8g2h4k6',
  timestamp: '2026-03-28 15:10',
  comments: [
    { id: 580, author: 'd3f8g2h1', text: 'yes, just less mainstream', timestamp: '2026-03-28 15:15' },
    {
      id: 581,
      author: 'x9z1k4l2',
      text: '>audiobooks count?',
      timestamp: '2026-03-28 15:16',
      replies: [
        { id: 582, author: 'm5n2b8v7', text: 'still consuming content so yeah', timestamp: '2026-03-28 15:18' },
      ],
    },
    { id: 583, author: 'p9o1i4u6', text: 'attention spans lower now', timestamp: '2026-03-28 15:20' },
    { id: 584, author: 'k3l7z2x8', text: '[deleted]', timestamp: '2026-03-28 15:22' },
    { id: 585, author: 'n2m7b5v1', text: 'depends on the person', timestamp: '2026-03-28 15:25' },
  ],
},
{
  id: 180,
  boardId: 1,
  title: 'What motivates you long-term?',
  content: 'Motivation fades quickly for me.',
  authorID: 'y7u2i4o6',
  timestamp: '2026-03-28 18:30',
  comments: [
    { id: 590, author: 'q7w2e9r4', text: 'discipline > motivation', timestamp: '2026-03-28 18:35' },
    {
      id: 591,
      author: 't3y8u1i5',
      text: '>habits matter more',
      timestamp: '2026-03-28 18:36',
      replies: [
        { id: 592, author: 'o6p2a9s4', text: 'small wins daily', timestamp: '2026-03-28 18:38' },
      ],
    },
    { id: 593, author: 'l5k3j7h2', text: 'clear goals help', timestamp: '2026-03-28 18:40' },
    { id: 594, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-03-28 18:42' },
    { id: 595, author: 'm1n4b8v6', text: 'consistency is everything', timestamp: '2026-03-28 18:45' },
  ],
}
,
{
  id: 181,
  boardId: 1,
  title: 'Do weekends feel shorter now?',
  content: 'Feels like Saturday disappears instantly.',
  authorID: 'k2l7x4p9',
  timestamp: '2026-03-29 08:00',
  comments: [
    {
      id: 600,
      author: 'm8n3b2v1',
      text: '>sleeping in kills half the day',
      timestamp: '2026-03-29 08:05',
      replies: [
        { id: 601, author: 't4y1u9i3', text: 'worth it though', timestamp: '2026-03-29 08:07' },
      ],
    },
    { id: 602, author: 'p7o2i8u6', text: 'work week drains you', timestamp: '2026-03-29 08:10' },
    { id: 603, author: 'z1x9c4v2', text: '[deleted]', timestamp: '2026-03-29 08:12' },
    { id: 604, author: 'mod_0001', text: 'Removed low-effort spam.', timestamp: '2026-03-29 08:13' },
    { id: 605, author: 'l5k3j7h2', text: 'bump', timestamp: '2026-03-29 08:20' },
  ],
},
{
  id: 182,
  boardId: 1,
  title: 'Do you prefer city or nature?',
  content: 'Trying to decide where I’d rather live.',
  authorID: 'h9j2k4l6',
  timestamp: '2026-03-29 10:15',
  comments: [
    { id: 606, author: 'n3m7b5v1', text: 'nature for peace', timestamp: '2026-03-29 10:20' },
    {
      id: 607,
      author: 'r4t8y2u9',
      text: '>city has opportunities',
      timestamp: '2026-03-29 10:22',
      replies: [
        { id: 608, author: 'e1w6q3a7', text: 'depends on your career', timestamp: '2026-03-29 10:24' },
      ],
    },
    { id: 609, author: 'c9v2b4n8', text: 'hybrid if possible', timestamp: '2026-03-29 10:25' },
    { id: 610, author: 'x8z1k6l3', text: '[deleted]', timestamp: '2026-03-29 10:27' },
    { id: 611, author: 'p5o1i7u2', text: 'commute is the real issue', timestamp: '2026-03-29 10:30' },
  ],
},
{
  id: 183,
  boardId: 1,
  title: 'Is multitasking actually real?',
  content: 'Or just switching tasks quickly?',
  authorID: 'g3h7j1k8',
  timestamp: '2026-03-29 12:40',
  comments: [
    { id: 612, author: 'w2e5r9t1', text: 'just context switching', timestamp: '2026-03-29 12:45' },
    {
      id: 613,
      author: 'y8u2i4o7',
      text: '>reduces efficiency',
      timestamp: '2026-03-29 12:46',
      replies: [
        { id: 614, author: 'a1s9d3f6', text: 'deep work > multitasking', timestamp: '2026-03-29 12:48' },
      ],
    },
    { id: 615, author: 'l6k2j8h5', text: 'brain isn’t built for it', timestamp: '2026-03-29 12:50' },
    { id: 616, author: 'z4x7c1v3', text: '[deleted]', timestamp: '2026-03-29 12:52' },
    { id: 617, author: 'm1n5b8v2', text: 'some people manage it better', timestamp: '2026-03-29 12:55' },
  ],
},
{
  id: 184,
  boardId: 1,
  title: 'Do you track your habits?',
  content: 'Thinking of starting.',
  authorID: 'd9f2g6h1',
  timestamp: '2026-03-29 14:00',
  comments: [
    { id: 618, author: 'k2l8z4x7', text: 'helps with consistency', timestamp: '2026-03-29 14:05' },
    {
      id: 619,
      author: 'v6c1b9n3',
      text: '>can become obsessive',
      timestamp: '2026-03-29 14:06',
      replies: [
        { id: 620, author: 'p7o2i5u9', text: 'balance is key', timestamp: '2026-03-29 14:08' },
      ],
    },
    { id: 621, author: 'm4n1b7v6', text: 'start simple', timestamp: '2026-03-29 14:10' },
    { id: 622, author: 'q9w2e3r8', text: '[deleted]', timestamp: '2026-03-29 14:12' },
    { id: 623, author: 't5y3u1i7', text: 'paper > apps', timestamp: '2026-03-29 14:20' },
  ],
},
{
  id: 185,
  boardId: 1,
  title: 'Do you prefer mornings or nights?',
  content: 'Energy levels vary a lot.',
  authorID: 's4d8f1g6',
  timestamp: '2026-03-29 16:10',
  comments: [
    { id: 624, author: 'q7w2e9r4', text: 'night owl', timestamp: '2026-03-29 16:15' },
    {
      id: 625,
      author: 't3y8u1i5',
      text: '>mornings feel productive',
      timestamp: '2026-03-29 16:16',
      replies: [
        { id: 626, author: 'o6p2a9s4', text: 'only if you sleep early', timestamp: '2026-03-29 16:18' },
      ],
    },
    { id: 627, author: 'l5k3j7h2', text: 'depends on schedule', timestamp: '2026-03-29 16:20' },
    { id: 628, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-03-29 16:22' },
    { id: 629, author: 'm1n4b8v6', text: 'forced mornings suck', timestamp: '2026-03-29 16:25' },
  ],
},



{
  id: 196,
  boardId: 1,
  title: 'Do you prefer texting or calling?',
  content: 'Calling feels intrusive sometimes.',
  authorID: 'u8g2h4k6',
  timestamp: '2026-03-30 15:10',
  comments: [
    { id: 660, author: 'd3f8g2h1', text: 'texting always', timestamp: '2026-03-30 15:15' },
    {
      id: 661,
      author: 'x9z1k4l2',
      text: '>calls for urgent stuff',
      timestamp: '2026-03-30 15:16',
      replies: [
        { id: 662, author: 'm5n2b8v7', text: 'exactly', timestamp: '2026-03-30 15:18' },
      ],
    },
    { id: 663, author: 'p9o1i4u6', text: 'hate unexpected calls', timestamp: '2026-03-30 15:20' },
    { id: 664, author: 'k3l7z2x8', text: '[deleted]', timestamp: '2026-03-30 15:22' },
    { id: 665, author: 'n2m7b5v1', text: 'voicenotes are a compromise', timestamp: '2026-03-30 15:25' },
  ],
},
{
  id: 200,
  boardId: 1,
  title: 'Do you believe in luck?',
  content: 'Or is everything just probability?',
  authorID: 'y7u2i4o6',
  timestamp: '2026-03-30 18:30',
  comments: [
    { id: 670, author: 'q7w2e9r4', text: 'probability + perception', timestamp: '2026-03-30 18:35' },
    {
      id: 671,
      author: 't3y8u1i5',
      text: '>luck = randomness we don’t control',
      timestamp: '2026-03-30 18:36',
      replies: [
        { id: 672, author: 'o6p2a9s4', text: 'humans look for patterns', timestamp: '2026-03-30 18:38' },
      ],
    },
    { id: 673, author: 'l5k3j7h2', text: 'mindset matters more', timestamp: '2026-03-30 18:40' },
    { id: 674, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-03-30 18:42' },
    { id: 675, author: 'm1n4b8v6', text: 'some people are just lucky though', timestamp: '2026-03-30 18:45' },
  ],
},
{
  id: 201,
  boardId: 1,
  title: 'Do people actually enjoy meetings?',
  content: 'Feels like most could be emails.',
  authorID: 'k4l7x2p9',
  timestamp: '2026-03-31 08:10',
  comments: [
    { id: 700, author: 'm8n3b2v1', text: 'no', timestamp: '2026-03-31 08:15' },
    {
      id: 701,
      author: 't4y1u9i3',
      text: '>only useful if well run',
      timestamp: '2026-03-31 08:16',
      replies: [
        { id: 702, author: 'p7o2i8u6', text: 'rare tbh', timestamp: '2026-03-31 08:18' },
      ],
    },
    { id: 703, author: 'z1x9c4v2', text: '[deleted]', timestamp: '2026-03-31 08:20' },
    { id: 704, author: 'mod_0001', text: 'Removed spam.', timestamp: '2026-03-31 08:21' },
    { id: 705, author: 'l5k3j7h2', text: 'bump', timestamp: '2026-03-31 08:30' },
  ],
},
{
  id: 202,
  boardId: 1,
  title: 'Is it bad to do nothing sometimes?',
  content: 'Always feel guilty relaxing.',
  authorID: 'h9j2k4l6',
  timestamp: '2026-03-31 10:00',
  comments: [
    { id: 706, author: 'n3m7b5v1', text: 'rest is productive', timestamp: '2026-03-31 10:05' },
    {
      id: 707,
      author: 'r4t8y2u9',
      text: '>burnout happens otherwise',
      timestamp: '2026-03-31 10:06',
      replies: [
        { id: 708, author: 'e1w6q3a7', text: 'learned that the hard way', timestamp: '2026-03-31 10:08' },
      ],
    },
    { id: 709, author: 'c9v2b4n8', text: 'balance matters', timestamp: '2026-03-31 10:10' },
    { id: 710, author: 'x8z1k6l3', text: '[deleted]', timestamp: '2026-03-31 10:12' },
    { id: 711, author: 'p5o1i7u2', text: 'depends how often', timestamp: '2026-03-31 10:15' },
  ],
},
{
  id: 203,
  boardId: 1,
  title: 'Do people still make new friends easily?',
  content: 'Feels harder as you get older.',
  authorID: 'g3h7j1k8',
  timestamp: '2026-03-31 12:30',
  comments: [
    { id: 712, author: 'w2e5r9t1', text: 'way harder', timestamp: '2026-03-31 12:35' },
    {
      id: 713,
      author: 'y8u2i4o7',
      text: '>shared environments help',
      timestamp: '2026-03-31 12:36',
      replies: [
        { id: 714, author: 'a1s9d3f6', text: 'work or hobbies mainly', timestamp: '2026-03-31 12:38' },
      ],
    },
    { id: 715, author: 'l6k2j8h5', text: 'takes effort now', timestamp: '2026-03-31 12:40' },
    { id: 716, author: 'z4x7c1v3', text: '[deleted]', timestamp: '2026-03-31 12:42' },
    { id: 717, author: 'm1n5b8v2', text: 'most people stick to circles', timestamp: '2026-03-31 12:45' },
  ],
},
{
  id: 204,
  boardId: 1,
  title: 'Do you prefer routines or variety?',
  content: 'Trying to find what works better.',
  authorID: 'd9f2g6h1',
  timestamp: '2026-03-31 14:00',
  comments: [
    { id: 718, author: 'k2l8z4x7', text: 'routine = stability', timestamp: '2026-03-31 14:05' },
    {
      id: 719,
      author: 'v6c1b9n3',
      text: '>variety keeps life interesting',
      timestamp: '2026-03-31 14:06',
      replies: [
        { id: 720, author: 'p7o2i5u9', text: 'mix of both is best', timestamp: '2026-03-31 14:08' },
      ],
    },
    { id: 721, author: 'm4n1b7v6', text: 'depends on personality', timestamp: '2026-03-31 14:10' },
    { id: 722, author: 'q9w2e3r8', text: '[deleted]', timestamp: '2026-03-31 14:12' },
    { id: 723, author: 't5y3u1i7', text: 'routine reduces stress', timestamp: '2026-03-31 14:20' },
  ],
},
{
  id: 205,
  boardId: 1,
  title: 'Is overthinking getting worse?',
  content: 'Feels constant lately.',
  authorID: 's4d8f1g6',
  timestamp: '2026-03-31 16:10',
  comments: [
    { id: 724, author: 'q7w2e9r4', text: 'yes', timestamp: '2026-03-31 16:15' },
    {
      id: 725,
      author: 't3y8u1i5',
      text: '>too much information',
      timestamp: '2026-03-31 16:16',
      replies: [
        { id: 726, author: 'o6p2a9s4', text: 'constant input = overload', timestamp: '2026-03-31 16:18' },
      ],
    },
    { id: 727, author: 'l5k3j7h2', text: 'hard to switch off', timestamp: '2026-03-31 16:20' },
    { id: 728, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-03-31 16:22' },
    { id: 729, author: 'm1n4b8v6', text: 'mindfulness helps', timestamp: '2026-03-31 16:25' },
  ],
},

{
  id: 216,
  boardId: 1,
  title: 'Do you rewatch movies/shows?',
  content: 'Or always something new?',
  authorID: 'u8g2h4k6',
  timestamp: '2026-04-01 15:10',
  comments: [
    { id: 760, author: 'd3f8g2h1', text: 'rewatch favorites', timestamp: '2026-04-01 15:15' },
    {
      id: 761,
      author: 'x9z1k4l2',
      text: '>comfort content',
      timestamp: '2026-04-01 15:16',
      replies: [
        { id: 762, author: 'm5n2b8v7', text: 'exactly', timestamp: '2026-04-01 15:18' },
      ],
    },
    { id: 763, author: 'p9o1i4u6', text: 'new stuff mostly', timestamp: '2026-04-01 15:20' },
    { id: 764, author: 'k3l7z2x8', text: '[deleted]', timestamp: '2026-04-01 15:22' },
    { id: 765, author: 'n2m7b5v1', text: 'depends on mood', timestamp: '2026-04-01 15:25' },
  ],
},
{
  id: 220,
  boardId: 1,
  title: 'Do you believe in “perfect timing”?',
  content: 'Or is it just coincidence?',
  authorID: 'y7u2i4o6',
  timestamp: '2026-04-01 18:30',
  comments: [
    { id: 770, author: 'q7w2e9r4', text: 'mostly coincidence', timestamp: '2026-04-01 18:35' },
    {
      id: 771,
      author: 't3y8u1i5',
      text: '>humans see patterns',
      timestamp: '2026-04-01 18:36',
      replies: [
        { id: 772, author: 'o6p2a9s4', text: 'confirmation bias', timestamp: '2026-04-01 18:38' },
      ],
    },
    { id: 773, author: 'l5k3j7h2', text: 'timing still matters though', timestamp: '2026-04-01 18:40' },
    { id: 774, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-01 18:42' },
    { id: 775, author: 'm1n4b8v6', text: 'bit of both maybe', timestamp: '2026-04-01 18:45' },
  ],
},

{
  id: 221,
  boardId: 2,
  title: 'Is AI going to replace most developers?',
  content: 'Feels like tools are getting too good.',
  authorID: 'x4k7p2q9',
  timestamp: '2026-04-02 08:00',
  comments: [
    {
      id: 800,
      author: 'm3n8z1b6',
      text: 'no, just augment',
      timestamp: '2026-04-02 08:05',
      replies: [
        {
          id: 801,
          author: 'k9v2c7x0',
          text: '>low-level tasks gone though',
          timestamp: '2026-04-02 08:07',
        },
      ],
    },
    { id: 802, author: 'q2w8e5r1', text: 'still need problem solving', timestamp: '2026-04-02 08:10' },
    { id: 803, author: 'p0o9i8u7', text: '[deleted]', timestamp: '2026-04-02 08:12' },
    { id: 804, author: 'mod_0001', text: 'Removed spam.', timestamp: '2026-04-02 08:13' },
    { id: 805, author: 'l5k2j9h4', text: 'bump', timestamp: '2026-04-02 08:20' },
  ],
},
{
  id: 222,
  boardId: 2,
  title: 'Mac vs Windows in 2026?',
  content: 'Which one actually makes more sense now?',
  authorID: 'a9f3x2k1',
  timestamp: '2026-04-02 10:00',
  comments: [
    { id: 806, author: 't6y1u8i3', text: 'depends on use case', timestamp: '2026-04-02 10:05' },
    {
      id: 807,
      author: 'b8n3m2k0',
      text: '>dev = mac usually',
      timestamp: '2026-04-02 10:06',
      replies: [
        { id: 808, author: 'z4x7c1v9', text: 'windows improved a lot though', timestamp: '2026-04-02 10:08' },
      ],
    },
    { id: 809, author: 'p3o9i1u7', text: 'gaming = windows', timestamp: '2026-04-02 10:10' },
    { id: 810, author: 'x8c2v4b6', text: '[deleted]', timestamp: '2026-04-02 10:12' },
    { id: 811, author: 'n2m7b5v1', text: 'ecosystem matters most', timestamp: '2026-04-02 10:15' },
  ],
},
{
  id: 223,
  boardId: 2,
  title: 'Best programming language to learn now?',
  content: 'Beginner here.',
  authorID: 'q7w2e9r4',
  timestamp: '2026-04-02 12:00',
  comments: [
    { id: 812, author: 't3y8u1i5', text: 'python', timestamp: '2026-04-02 12:02' },
    {
      id: 813,
      author: 'o6p2a9s4',
      text: '>js if web',
      timestamp: '2026-04-02 12:03',
      replies: [
        { id: 814, author: 'l5k3j7h2', text: 'or both', timestamp: '2026-04-02 12:05' },
      ],
    },
    { id: 815, author: 'z1x6c9v3', text: 'language doesn’t matter as much', timestamp: '2026-04-02 12:06' },
    { id: 816, author: 'm1n4b8v6', text: '[deleted]', timestamp: '2026-04-02 12:07' },
    { id: 817, author: 'a2s5d8f1', text: 'focus on fundamentals', timestamp: '2026-04-02 12:10' },
  ],
},
{
  id: 224,
  boardId: 2,
  title: 'Is cloud computing overrated?',
  content: 'Everything moving to cloud.',
  authorID: 'h3j7k2l9',
  timestamp: '2026-04-02 14:00',
  comments: [
    { id: 818, author: 'n8m4b2v6', text: 'no, scalability matters', timestamp: '2026-04-02 14:05' },
    {
      id: 819,
      author: 't1y9u3i7',
      text: '>costs can explode',
      timestamp: '2026-04-02 14:06',
      replies: [
        { id: 820, author: 'o6p2a8s4', text: 'bad configs mainly', timestamp: '2026-04-02 14:08' },
      ],
    },
    { id: 821, author: 'l5k3j7h2', text: 'hybrid setups make sense', timestamp: '2026-04-02 14:10' },
    { id: 822, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-02 14:12' },
    { id: 823, author: 'a2s5d8f1', text: 'depends on scale', timestamp: '2026-04-02 14:15' },
  ],
},
{
  id: 225,
  boardId: 2,
  title: 'Are smartphones plateauing?',
  content: 'Not much innovation lately.',
  authorID: 'd7f3g9h2',
  timestamp: '2026-04-02 16:00',
  comments: [
    { id: 824, author: 'k2l8z1x4', text: 'incremental upgrades only', timestamp: '2026-04-02 16:05' },
    {
      id: 825,
      author: 'v6c9b3n7',
      text: '>hardware peaked',
      timestamp: '2026-04-02 16:06',
      replies: [
        { id: 826, author: 'p5o2i7u9', text: 'software is focus now', timestamp: '2026-04-02 16:08' },
      ],
    },
    { id: 827, author: 'm1n4b8v6', text: 'foldables still evolving', timestamp: '2026-04-02 16:10' },
    { id: 828, author: 'q7w2e9r4', text: '[deleted]', timestamp: '2026-04-02 16:12' },
    { id: 829, author: 't3y8u1i5', text: 'battery tech stagnant', timestamp: '2026-04-02 16:15' },
  ],
},



{
  id: 236,
  boardId: 2,
  title: 'Are passwords obsolete?',
  content: 'Passkeys seem to be replacing them.',
  authorID: 'u8g2h4k6',
  timestamp: '2026-04-03 15:10',
  comments: [
    { id: 860, author: 'd3f8g2h1', text: 'moving that way', timestamp: '2026-04-03 15:15' },
    {
      id: 861,
      author: 'x9z1k4l2',
      text: '>biometrics + passkeys',
      timestamp: '2026-04-03 15:16',
      replies: [
        { id: 862, author: 'm5n2b8v7', text: 'more secure overall', timestamp: '2026-04-03 15:18' },
      ],
    },
    { id: 863, author: 'p9o1i4u6', text: 'still need backups', timestamp: '2026-04-03 15:20' },
    { id: 864, author: 'k3l7z2x8', text: '[deleted]', timestamp: '2026-04-03 15:22' },
    { id: 865, author: 'n2m7b5v1', text: 'adoption is slow', timestamp: '2026-04-03 15:25' },
  ],
},
{
  id: 240,
  boardId: 2,
  title: 'Is open source sustainable long-term?',
  content: 'Many projects rely on unpaid work.',
  authorID: 'y7u2i4o6',
  timestamp: '2026-04-03 18:30',
  comments: [
    { id: 870, author: 'q7w2e9r4', text: 'depends on funding', timestamp: '2026-04-03 18:35' },
    {
      id: 871,
      author: 't3y8u1i5',
      text: '>corporate backing helps',
      timestamp: '2026-04-03 18:36',
      replies: [
        { id: 872, author: 'o6p2a9s4', text: 'but can shift priorities', timestamp: '2026-04-03 18:38' },
      ],
    },
    { id: 873, author: 'l5k3j7h2', text: 'burnout is real issue', timestamp: '2026-04-03 18:40' },
    { id: 874, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-03 18:42' },
    { id: 875, author: 'm1n4b8v6', text: 'still essential to ecosystem', timestamp: '2026-04-03 18:45' },
  ],
},

{
  id: 241,
  boardId: 2,
  title: 'Quantum computing – hype or real?',
  content: 'Are we actually close to practical applications?',
  authorID: 'p3o8i1u6',
  timestamp: '2026-04-04 08:00',
  comments: [
    { id: 880, author: 'm2n7b4v9', text: 'mostly hype', timestamp: '2026-04-04 08:05' },
    { id: 881, author: 't6y1u8i3', text: '>still exciting', timestamp: '2026-04-04 08:06', replies: [
        { id: 882, author: 'o5p2a9s4', text: 'true, some specialized use cases', timestamp: '2026-04-04 08:08' }
      ] },
    { id: 883, author: 'l5k3j7h2', text: 'expect years before mainstream', timestamp: '2026-04-04 08:10' },
    { id: 884, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-04 08:12' },
    { id: 885, author: 'a2s5d8f1', text: 'interesting for research though', timestamp: '2026-04-04 08:15' }
  ],
},
{
  id: 242,
  boardId: 2,
  title: 'Best text editor in 2026?',
  content: 'VSCode, Neovim, or something else?',
  authorID: 'h9j2k4l6',
  timestamp: '2026-04-04 09:00',
  comments: [
    { id: 886, author: 'n3m7b5v1', text: 'VSCode', timestamp: '2026-04-04 09:05' },
    { id: 887, author: 'r4t8y2u9', text: '>Neovim if you like speed', timestamp: '2026-04-04 09:06', replies: [
        { id: 888, author: 'e1w6q3a7', text: 'plugin setup is huge', timestamp: '2026-04-04 09:08' }
      ] },
    { id: 889, author: 'c9v2b4n8', text: 'IntelliJ for Java', timestamp: '2026-04-04 09:10' },
    { id: 890, author: 'x8z1k6l3', text: '[deleted]', timestamp: '2026-04-04 09:12' },
    { id: 891, author: 'p5o1i7u2', text: 'depends on project', timestamp: '2026-04-04 09:15' }
  ],
},
{
  id: 243,
  boardId: 2,
  title: 'Are programming bootcamps worth it?',
  content: 'Thinking of doing one to switch careers.',
  authorID: 'g3h7j1k8',
  timestamp: '2026-04-04 10:30',
  comments: [
    { id: 892, author: 'w2e5r9t1', text: 'yes if you commit', timestamp: '2026-04-04 10:35' },
    { id: 893, author: 'y8u2i4o7', text: '>networking is biggest value', timestamp: '2026-04-04 10:36', replies: [
        { id: 894, author: 'a1s9d3f6', text: 'also job support matters', timestamp: '2026-04-04 10:38' }
      ] },
    { id: 895, author: 'l6k2j8h5', text: 'expensive but faster than self-learning', timestamp: '2026-04-04 10:40' },
    { id: 896, author: 'z4x7c1v3', text: '[deleted]', timestamp: '2026-04-04 10:42' },
    { id: 897, author: 'm1n5b8v2', text: 'depends on your discipline', timestamp: '2026-04-04 10:45' }
  ],
},
{
  id: 244,
  boardId: 2,
  title: 'Is Rust really better than C++?',
  content: 'I hear it’s safer but slower to start with.',
  authorID: 'd9f2g6h1',
  timestamp: '2026-04-04 12:00',
  comments: [
    { id: 898, author: 'k2l8z4x7', text: 'safety vs speed tradeoff', timestamp: '2026-04-04 12:05' },
    { id: 899, author: 'v6c1b9n3', text: '>learning curve steep', timestamp: '2026-04-04 12:06', replies: [
        { id: 900, author: 'p7o2i5u9', text: 'but memory safety is huge', timestamp: '2026-04-04 12:08' }
      ] },
    { id: 901, author: 'm4n1b7v6', text: 'C++ still dominant in legacy', timestamp: '2026-04-04 12:10' },
    { id: 902, author: 'q9w2e3r8', text: '[deleted]', timestamp: '2026-04-04 12:12' },
    { id: 903, author: 't5y3u1i7', text: 'Rust for new projects', timestamp: '2026-04-04 12:15' }
  ],
},
{
  id: 245,
  boardId: 2,
  title: 'Has web3 failed?',
  content: 'NFTs, crypto, decentralized apps…',
  authorID: 's4d8f1g6',
  timestamp: '2026-04-04 14:00',
  comments: [
    { id: 904, author: 'q7w2e9r4', text: 'mostly hype', timestamp: '2026-04-04 14:05' },
    { id: 905, author: 't3y8u1i5', text: '>some legit projects exist', timestamp: '2026-04-04 14:06', replies: [
        { id: 906, author: 'o6p2a9s4', text: 'yeah, DeFi still has use', timestamp: '2026-04-04 14:08' }
      ] },
    { id: 907, author: 'l5k3j7h2', text: 'regulation killed the hype', timestamp: '2026-04-04 14:10' },
    { id: 908, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-04 14:12' },
    { id: 909, author: 'm1n4b8v6', text: 'wait for next evolution', timestamp: '2026-04-04 14:15' }
  ],
},
{
  id: 246,
  boardId: 2,
  title: 'Best AI image generator?',
  content: 'Stable Diffusion, Midjourney, DALL-E?',
  authorID: 'u8g2h4k6',
  timestamp: '2026-04-04 15:30',
  comments: [
    { id: 910, author: 'd3f8g2h1', text: 'Midjourney', timestamp: '2026-04-04 15:35' },
    { id: 911, author: 'x9z1k4l2', text: '>Stable Diffusion for control', timestamp: '2026-04-04 15:36', replies: [
        { id: 912, author: 'm5n2b8v7', text: 'true, can run locally', timestamp: '2026-04-04 15:38' }
      ] },
    { id: 913, author: 'p9o1i4u6', text: 'DALL-E good for quick ideas', timestamp: '2026-04-04 15:40' },
    { id: 914, author: 'k3l7z2x8', text: '[deleted]', timestamp: '2026-04-04 15:42' },
    { id: 915, author: 'n2m7b5v1', text: 'depends on use case', timestamp: '2026-04-04 15:45' }
  ],
},
{
  id: 247,
  boardId: 2,
  title: 'Will VR ever replace monitors?',
  content: 'Feels like VR is close but not mainstream.',
  authorID: 'y7u2i4o6',
  timestamp: '2026-04-04 17:00',
  comments: [
    { id: 916, author: 'q7w2e9r4', text: 'too heavy now', timestamp: '2026-04-04 17:05' },
    { id: 917, author: 't3y8u1i5', text: '>space requirements', timestamp: '2026-04-04 17:06', replies: [
        { id: 918, author: 'o6p2a9s4', text: 'but immersive for gaming', timestamp: '2026-04-04 17:08' }
      ] },
    { id: 919, author: 'l5k3j7h2', text: 'productivity use is limited', timestamp: '2026-04-04 17:10' },
    { id: 920, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-04 17:12' },
    { id: 921, author: 'm1n4b8v6', text: 'maybe AR will replace monitors', timestamp: '2026-04-04 17:15' }
  ],
},
{
  id: 248,
  boardId: 2,
  title: 'Is cybersecurity education improving?',
  content: 'Still seeing too many breaches.',
  authorID: 'p3o8i1u6',
  timestamp: '2026-04-04 18:30',
  comments: [
    { id: 922, author: 'm2n7b4v9', text: 'yes but slow', timestamp: '2026-04-04 18:35' },
    { id: 923, author: 't6y1u8i3', text: '>awareness still low', timestamp: '2026-04-04 18:36', replies: [
        { id: 924, author: 'o5p2a9s4', text: 'phishing is huge', timestamp: '2026-04-04 18:38' }
      ] },
    { id: 925, author: 'l5k3j7h2', text: 'corporate training helps', timestamp: '2026-04-04 18:40' },
    { id: 926, author: 'z1x6c9v3', text: '[deleted]', timestamp: '2026-04-04 18:42' },
    { id: 927, author: 'a2s5d8f1', text: 'more gamified learning needed', timestamp: '2026-04-04 18:45' }
  ],
},
{
  id: 249,
  boardId: 2,
  title: 'Are laptops still worth buying?',
  content: 'Tablets and cloud computing rising.',
  authorID: 'h9j2k4l6',
  timestamp: '2026-04-04 20:00',
  comments: [
    { id: 928, author: 'n3m7b5v1', text: 'yes, performance matters', timestamp: '2026-04-04 20:05' },
    { id: 929, author: 'r4t8y2u9', text: '>portability wins', timestamp: '2026-04-04 20:06', replies: [
        { id: 930, author: 'e1w6q3a7', text: 'but battery life limits', timestamp: '2026-04-04 20:08' }
      ] },
    { id: 931, author: 'c9v2b4n8', text: 'for dev, laptops still king', timestamp: '2026-04-04 20:10' },
    { id: 932, author: 'x8z1k6l3', text: '[deleted]', timestamp: '2026-04-04 20:12' },
    { id: 933, author: 'p5o1i7u2', text: 'tablets good for light tasks', timestamp: '2026-04-04 20:15' }
  ],
},
{
  id: 250,
  boardId: 2,
  title: 'Should I learn AI prompt engineering?',
  content: 'Seems like a hot skill in 2026.',
  authorID: 'g3h7j1k8',
  timestamp: '2026-04-05 08:00',
  comments: [
    { id: 934, author: 'w2e5r9t1', text: 'yes, valuable skill', timestamp: '2026-04-05 08:05' },
    { id: 935, author: 'y8u2i4o7', text: '>lots of demand', timestamp: '2026-04-05 08:06', replies: [
        { id: 936, author: 'a1s9d3f6', text: 'good for devs & content creators', timestamp: '2026-04-05 08:08' }
      ] },
    { id: 937, author: 'l6k2j8h5', text: 'also requires domain knowledge', timestamp: '2026-04-05 08:10' },
    { id: 938, author: 'z4x7c1v3', text: '[deleted]', timestamp: '2026-04-05 08:12' },
    { id: 939, author: 'm1n5b8v2', text: 'check industry trends first', timestamp: '2026-04-05 08:15' }
  ],
},

{
  id: 251,
  boardId: 2,
  title: 'Is JavaScript still relevant in 2026?',
  content: 'With Rust, Go, and Python gaining popularity, is JS still king for web dev?',
  authorID: 'u2i5o8p3',
  timestamp: '2026-04-05 09:00',
  comments: [
    { id: 940, author: 'm4n7b1v5', text: 'Absolutely, still the backbone of the web', timestamp: '2026-04-05 09:05' },
    { id: 941, author: 'k2l5z8x3', text: '>TypeScript makes it safer', timestamp: '2026-04-05 09:06', replies: [
        { id: 942, author: 't7y1u4i8', text: 'yes, better maintainability', timestamp: '2026-04-05 09:08' }
      ] },
    { id: 943, author: 'p9o2i5u1', text: 'Framework fatigue is real though', timestamp: '2026-04-05 09:10' },
    { id: 944, author: 'r3e7w2q6', text: '[deleted]', timestamp: '2026-04-05 09:12' },
    { id: 945, author: 's4d8f6g2', text: 'Still the easiest for beginners', timestamp: '2026-04-05 09:15' }
  ],
},
{
  id: 252,
  boardId: 2,
  title: 'Best budget GPU in 2026?',
  content: 'Looking for a card under $400 for gaming and some AI experiments.',
  authorID: 'v7b3n5m2',
  timestamp: '2026-04-05 10:30',
  comments: [
    { id: 946, author: 'n2m5b7v1', text: 'RTX 4060 is solid', timestamp: '2026-04-05 10:35' },
    { id: 947, author: 'c8v1b3n6', text: '>AMD RX 7600 is competitive', timestamp: '2026-04-05 10:36', replies: [
        { id: 948, author: 'o3p9a2s5', text: 'AMD better price/perf', timestamp: '2026-04-05 10:38' }
      ] },
    { id: 949, author: 'x7z4k1l3', text: 'Check power requirements too', timestamp: '2026-04-05 10:40' },
    { id: 950, author: 'q2w5e7r4', text: '[deleted]', timestamp: '2026-04-05 10:42' },
    { id: 951, author: 'a5s2d8f1', text: 'Consider used GPUs as well', timestamp: '2026-04-05 10:45' }
  ],
},
{
  id: 253,
  boardId: 2,
  title: 'Cloud vs self-hosted – which is safer?',
  content: 'Thinking about hosting my app on AWS or keeping it on a home server.',
  authorID: 'd3f7g1h5',
  timestamp: '2026-04-05 12:00',
  comments: [
    { id: 952, author: 'm1n4b7v2', text: 'Cloud has better redundancy', timestamp: '2026-04-05 12:05' },
    { id: 953, author: 'l5k2j8h6', text: '>self-hosting gives full control', timestamp: '2026-04-05 12:06', replies: [
        { id: 954, author: 'p9o3i1u4', text: 'but security depends on you', timestamp: '2026-04-05 12:08' }
      ] },
    { id: 955, author: 'r4e1w7q2', text: 'Cost matters too', timestamp: '2026-04-05 12:10' },
    { id: 956, author: 'z8x1c6v3', text: '[deleted]', timestamp: '2026-04-05 12:12' },
    { id: 957, author: 't6y3u9i1', text: 'Hybrid setup is often best', timestamp: '2026-04-05 12:15' }
  ],
},
{
  id: 254,
  boardId: 2,
  title: 'Best programming language to learn in 2026?',
  content: 'For career growth and versatility.',
  authorID: 's7d2f4g8',
  timestamp: '2026-04-05 14:00',
  comments: [
    { id: 958, author: 'k3l5z7x2', text: 'Python is evergreen', timestamp: '2026-04-05 14:05' },
    { id: 959, author: 'n6m1b4v9', text: '>Go for backend & cloud', timestamp: '2026-04-05 14:06', replies: [
        { id: 960, author: 'o2p8a3s5', text: 'fast and simple', timestamp: '2026-04-05 14:08' }
      ] },
    { id: 961, author: 'x1z7k4l6', text: 'Rust is hot for systems', timestamp: '2026-04-05 14:10' },
    { id: 962, author: 'q3w6e2r8', text: '[deleted]', timestamp: '2026-04-05 14:12' },
    { id: 963, author: 'a4s7d2f1', text: 'Depends on your goals', timestamp: '2026-04-05 14:15' }
  ],
},
{
  id: 255,
  boardId: 2,
  title: 'Edge computing – worth the hype?',
  content: 'IoT devices and latency-sensitive apps seem to need it.',
  authorID: 'u5i2o8p7',
  timestamp: '2026-04-05 15:30',
  comments: [
    { id: 964, author: 'm2n5b7v8', text: 'Yes, for low latency', timestamp: '2026-04-05 15:35' },
    { id: 965, author: 'c9v3b1n6', text: '>security can be tricky', timestamp: '2026-04-05 15:36', replies: [
        { id: 966, author: 'o4p2a8s3', text: 'Need good encryption', timestamp: '2026-04-05 15:38' }
      ] },
    { id: 967, author: 'x6z2k7l1', text: 'Not necessary for all apps', timestamp: '2026-04-05 15:40' },
    { id: 968, author: 'q1w5e8r2', text: '[deleted]', timestamp: '2026-04-05 15:42' },
    { id: 969, author: 'a2s6d9f4', text: 'Hybrid cloud-edge is practical', timestamp: '2026-04-05 15:45' }
  ],
},
{
  id: 256,
  boardId: 2,
  title: 'Is AI-generated code ready for production?',
  content: 'Tools like Copilot are evolving fast.',
  authorID: 'g8h3j2k6',
  timestamp: '2026-04-05 17:00',
  comments: [
    { id: 970, author: 'l4k1j8h3', text: 'Great for boilerplate', timestamp: '2026-04-05 17:05' },
    { id: 971, author: 'p7o2i5u8', text: '>but careful with security', timestamp: '2026-04-05 17:06', replies: [
        { id: 972, author: 't3y8u1i4', text: 'never blindly trust AI code', timestamp: '2026-04-05 17:08' }
      ] },
    { id: 973, author: 'm1n4b7v5', text: 'Good for learning too', timestamp: '2026-04-05 17:10' },
    { id: 974, author: 'z5x1c9v2', text: '[deleted]', timestamp: '2026-04-05 17:12' },
    { id: 975, author: 'a6s3d1f7', text: 'Depends on complexity', timestamp: '2026-04-05 17:15' }
  ],
},
{
  id: 257,
  boardId: 2,
  title: 'Top cloud providers in 2026?',
  content: 'AWS, Azure, GCP, or something else?',
  authorID: 'y8u1i3o6',
  timestamp: '2026-04-05 18:30',
  comments: [
    { id: 976, author: 'm2n7b4v1', text: 'AWS still leader', timestamp: '2026-04-05 18:35' },
    { id: 977, author: 'k1l5z9x3', text: '>GCP strong in AI/ML', timestamp: '2026-04-05 18:36', replies: [
        { id: 978, author: 't4y1u8i6', text: 'Azure better for enterprise', timestamp: '2026-04-05 18:38' }
      ] },
    { id: 979, author: 'p9o2i7u4', text: 'Alibaba Cloud rising too', timestamp: '2026-04-05 18:40' },
    { id: 980, author: 'q3w7e2r5', text: '[deleted]', timestamp: '2026-04-05 18:42' },
    { id: 981, author: 'a5s2d9f3', text: 'Depends on your region', timestamp: '2026-04-05 18:45' }
  ],
},
{
  id: 258,
  boardId: 2,
  title: 'Is coding bootcamp worth it in 2026?',
  content: 'Self-learning vs bootcamp for career change.',
  authorID: 's3d7f1g4',
  timestamp: '2026-04-05 20:00',
  comments: [
    { id: 982, author: 'n1m5b8v2', text: 'Bootcamp = fast but pricey', timestamp: '2026-04-05 20:05' },
    { id: 983, author: 'c8v2b4n6', text: '>networking is key', timestamp: '2026-04-05 20:06', replies: [
        { id: 984, author: 'o3p7a1s5', text: 'mentorship matters most', timestamp: '2026-04-05 20:08' }
      ] },
    { id: 985, author: 'x6z3k2l7', text: 'Self-learning cheaper and flexible', timestamp: '2026-04-05 20:10' },
    { id: 986, author: 'q2w5e8r1', text: '[deleted]', timestamp: '2026-04-05 20:12' },
    { id: 987, author: 'a4s7d1f2', text: 'Depends on discipline', timestamp: '2026-04-05 20:15' }
  ],
},
{
  id: 259,
  boardId: 2,
  title: 'Laptop vs desktop for dev in 2026?',
  content: 'Portability vs power.',
  authorID: 'u7i3o2p4',
  timestamp: '2026-04-06 08:00',
  comments: [
    { id: 988, author: 'm3n5b7v2', text: 'Desktop for raw power', timestamp: '2026-04-06 08:05' },
    { id: 989, author: 'k2l6z4x1', text: '>laptop if remote', timestamp: '2026-04-06 08:06', replies: [
        { id: 990, author: 't8y1u3i5', text: 'battery life is limiting', timestamp: '2026-04-06 08:08' }
      ] },
    { id: 991, author: 'p5o1i7u3', text: 'Hybrid with cloud IDE is cool', timestamp: '2026-04-06 08:10' },
    { id: 992, author: 'q4w2e7r9', text: '[deleted]', timestamp: '2026-04-06 08:12' },
    { id: 993, author: 'a6s3d1f5', text: 'Depends on dev type', timestamp: '2026-04-06 08:15' }
  ],
},
{
  id: 260,
  boardId: 2,
  title: 'Will AI replace junior devs?',
  content: 'Should students focus on learning AI tools or fundamentals?',
  authorID: 'g9h2j4k7',
  timestamp: '2026-04-06 09:30',
  comments: [
    { id: 994, author: 'l5k3j7h2', text: 'AI helps but won’t replace basics', timestamp: '2026-04-06 09:35' },
    { id: 995, author: 'p8o2i5u6', text: '>critical thinking still key', timestamp: '2026-04-06 09:36', replies: [
        { id: 996, author: 't3y9u1i7', text: 'problem-solving beats rote AI', timestamp: '2026-04-06 09:38' }
      ] },
    { id: 997, author: 'm1n4b7v8', text: 'AI for automation, not creativity', timestamp: '2026-04-06 09:40' },
    { id: 998, author: 'z8x2c5v1', text: '[deleted]', timestamp: '2026-04-06 09:42' },
    { id: 999, author: 'a5s3d7f2', text: 'Students should learn both', timestamp: '2026-04-06 09:45' }
  ],
},

{
  id: 261,
  boardId: 2,
  title: 'Quantum computing – how close are we?',
  content: 'Are we really going to see practical quantum computers in the next 5 years?',
  authorID: 'v2b7n4m1',
  timestamp: '2026-04-06 10:00',
  comments: [
    { id: 1000, author: 'p1o3i6u2', text: 'Still mostly research phase', timestamp: '2026-04-06 10:05' },
    { id: 1001, author: 'k3l5z8x6', text: '>but companies like IBM are progressing fast', timestamp: '2026-04-06 10:06', replies: [
        { id: 1002, author: 't7y2u4i9', text: 'True, but error rates are still high', timestamp: '2026-04-06 10:08' }
      ] },
    { id: 1003, author: 'm4n7b2v1', text: 'Practical applications still limited', timestamp: '2026-04-06 10:10' },
    { id: 1004, author: 'q2w5e8r7', text: '[deleted]', timestamp: '2026-04-06 10:12' },
    { id: 1005, author: 'a8s3d5f1', text: 'Expect breakthroughs in niche areas first', timestamp: '2026-04-06 10:15' }
  ],
},
{
  id: 262,
  boardId: 2,
  title: 'Best code editor in 2026?',
  content: 'VSCode, JetBrains, or something else?',
  authorID: 'g6h2j9k3',
  timestamp: '2026-04-06 11:00',
  comments: [
    { id: 1006, author: 'l3k5j8h1', text: 'VSCode is unbeatable for extensions', timestamp: '2026-04-06 11:05' },
    { id: 1007, author: 'p7o2i5u9', text: '>JetBrains for full IDE', timestamp: '2026-04-06 11:06', replies: [
        { id: 1008, author: 't4y1u8i2', text: 'IntelliJ for Java is still king', timestamp: '2026-04-06 11:08' }
      ] },
    { id: 1009, author: 'm2n5b7v4', text: 'NeoVim for lightweight speed', timestamp: '2026-04-06 11:10' },
    { id: 1010, author: 'z5x1c6v3', text: '[deleted]', timestamp: '2026-04-06 11:12' },
    { id: 1011, author: 'a4s7d2f9', text: 'Emacs still alive!', timestamp: '2026-04-06 11:15' }
  ],
},
{
  id: 263,
  boardId: 2,
  title: 'Rust vs Go – which to pick?',
  content: 'Systems programming vs backend efficiency.',
  authorID: 's5d2f7g4',
  timestamp: '2026-04-06 12:00',
  comments: [
    { id: 1012, author: 'n1m5b8v2', text: 'Rust for safety-critical systems', timestamp: '2026-04-06 12:05' },
    { id: 1013, author: 'c8v2b4n6', text: '>Go for microservices and cloud', timestamp: '2026-04-06 12:06', replies: [
        { id: 1014, author: 'o3p7a1s5', text: 'Go is simpler and faster to deploy', timestamp: '2026-04-06 12:08' }
      ] },
    { id: 1015, author: 'x6z3k2l7', text: 'Rust learning curve is steep', timestamp: '2026-04-06 12:10' },
    { id: 1016, author: 'q2w5e8r1', text: '[deleted]', timestamp: '2026-04-06 12:12' },
    { id: 1017, author: 'a4s7d1f2', text: 'Depends on project type', timestamp: '2026-04-06 12:15' }
  ],
},
{
  id: 264,
  boardId: 2,
  title: 'AI-powered code review tools',
  content: 'Are they reliable for production code?',
  authorID: 'u7i3o2p1',
  timestamp: '2026-04-06 13:00',
  comments: [
    { id: 1018, author: 'm3n5b7v2', text: 'Good for catching syntax errors', timestamp: '2026-04-06 13:05' },
    { id: 1019, author: 'k2l6z4x1', text: '>logic review still requires humans', timestamp: '2026-04-06 13:06', replies: [
        { id: 1020, author: 't8y1u3i5', text: 'Especially for security issues', timestamp: '2026-04-06 13:08' }
      ] },
    { id: 1021, author: 'p5o1i7u3', text: 'AI tools speed up PRs', timestamp: '2026-04-06 13:10' },
    { id: 1022, author: 'q4w2e7r9', text: '[deleted]', timestamp: '2026-04-06 13:12' },
    { id: 1023, author: 'a6s3d1f5', text: 'Combine with human review', timestamp: '2026-04-06 13:15' }
  ],
},
{
  id: 265,
  boardId: 2,
  title: 'Are web3 jobs real or hype?',
  content: 'Blockchain devs, NFT platforms, metaverse companies… worth pursuing?',
  authorID: 'g9h2j4k5',
  timestamp: '2026-04-06 14:00',
  comments: [
    { id: 1024, author: 'l5k3j7h2', text: 'Mostly hype right now', timestamp: '2026-04-06 14:05' },
    { id: 1025, author: 'p8o2i5u6', text: '>some companies actually hire', timestamp: '2026-04-06 14:06', replies: [
        { id: 1026, author: 't3y9u1i7', text: 'but sustainability is questionable', timestamp: '2026-04-06 14:08' }
      ] },
    { id: 1027, author: 'm1n4b7v8', text: 'Good for learning blockchain fundamentals', timestamp: '2026-04-06 14:10' },
    { id: 1028, author: 'z8x2c5v1', text: '[deleted]', timestamp: '2026-04-06 14:12' },
    { id: 1029, author: 'a5s3d7f2', text: 'Depends if you enjoy crypto culture', timestamp: '2026-04-06 14:15' }
  ],
},
{
  id: 266,
  boardId: 2,
  title: 'Python libraries to learn in 2026',
  content: 'Data science, ML, web, automation – what’s trending?',
  authorID: 'v3b6n1m7',
  timestamp: '2026-04-06 15:00',
  comments: [
    { id: 1030, author: 'p2o5i8u1', text: 'Pandas, NumPy for sure', timestamp: '2026-04-06 15:05' },
    { id: 1031, author: 'k3l5z7x2', text: '>PyTorch for ML', timestamp: '2026-04-06 15:06', replies: [
        { id: 1032, author: 't7y2u4i9', text: 'TensorFlow still relevant too', timestamp: '2026-04-06 15:08' }
      ] },
    { id: 1033, author: 'm4n7b2v1', text: 'FastAPI is gaining traction for web', timestamp: '2026-04-06 15:10' },
    { id: 1034, author: 'q2w5e8r7', text: '[deleted]', timestamp: '2026-04-06 15:12' },
    { id: 1035, author: 'a8s3d5f1', text: 'Automate stuff with Selenium', timestamp: '2026-04-06 15:15' }
  ],
},
{
  id: 267,
  boardId: 2,
  title: 'Cybersecurity certifications worth it?',
  content: 'CEH, CISSP, CompTIA – which actually help your career?',
  authorID: 's5d2f7g3',
  timestamp: '2026-04-06 16:00',
  comments: [
    { id: 1036, author: 'n1m5b8v2', text: 'CISSP for senior roles', timestamp: '2026-04-06 16:05' },
    { id: 1037, author: 'c8v2b4n6', text: '>CEH is good for learning', timestamp: '2026-04-06 16:06', replies: [
        { id: 1038, author: 'o3p7a1s5', text: 'CompTIA Security+ for beginners', timestamp: '2026-04-06 16:08' }
      ] },
    { id: 1039, author: 'x6z3k2l7', text: 'Hands-on experience outweighs certs', timestamp: '2026-04-06 16:10' },
    { id: 1040, author: 'q2w5e8r1', text: '[deleted]', timestamp: '2026-04-06 16:12' },
    { id: 1041, author: 'a4s7d1f2', text: 'Certs help HR filtering too', timestamp: '2026-04-06 16:15' }
  ],
},
{
  id: 268,
  boardId: 2,
  title: 'Cloud storage – end of local backups?',
  content: 'Do we really need external drives anymore?',
  authorID: 'u7i3o2p5',
  timestamp: '2026-04-06 17:00',
  comments: [
    { id: 1042, author: 'm3n5b7v2', text: 'Cloud is convenient', timestamp: '2026-04-06 17:05' },
    { id: 1043, author: 'k2l6z4x1', text: '>but privacy is a concern', timestamp: '2026-04-06 17:06', replies: [
        { id: 1044, author: 't8y1u3i5', text: 'Encrypt your data locally first', timestamp: '2026-04-06 17:08' }
      ] },
    { id: 1045, author: 'p5o1i7u3', text: 'Hybrid approach is safest', timestamp: '2026-04-06 17:10' },
    { id: 1046, author: 'q4w2e7r9', text: '[deleted]', timestamp: '2026-04-06 17:12' },
    { id: 1047, author: 'a6s3d1f5', text: 'Cloud-only works for casual users', timestamp: '2026-04-06 17:15' }
  ],
},
{
  id: 269,
  boardId: 2,
  title: 'Top web frameworks in 2026',
  content: 'React, Vue, Svelte, or something new?',
  authorID: 'g9h2j4k8',
  timestamp: '2026-04-06 18:00',
  comments: [
    { id: 1048, author: 'l5k3j7h2', text: 'React still dominant', timestamp: '2026-04-06 18:05' },
    { id: 1049, author: 'p8o2i5u6', text: '>Svelte is gaining fans', timestamp: '2026-04-06 18:06', replies: [
        { id: 1050, author: 't3y9u1i7', text: 'less boilerplate and fast', timestamp: '2026-04-06 18:08' }
      ] },
    { id: 1051, author: 'm1n4b7v8', text: 'Vue is solid for mid-sized apps', timestamp: '2026-04-06 18:10' },
    { id: 1052, author: 'z8x2c5v1', text: '[deleted]', timestamp: '2026-04-06 18:12' },
    { id: 1053, author: 'a5s3d7f2', text: 'Depends on team familiarity', timestamp: '2026-04-06 18:15' }
  ],
},
{
  id: 270,
  boardId: 2,
  title: 'Edge AI – bringing AI to devices',
  content: 'AI on your phone, drone, or IoT device – real use cases?',
  authorID: 'v2b7n1m3',
  timestamp: '2026-04-06 19:00',
  comments: [
    { id: 1054, author: 'p1o3i6u2', text: 'Great for privacy & latency', timestamp: '2026-04-06 19:05' },
    { id: 1055, author: 'k3l5z8x6', text: '>but limited compute power', timestamp: '2026-04-06 19:06', replies: [
        { id: 1056, author: 't7y2u4i9', text: 'Model optimization is key', timestamp: '2026-04-06 19:08' }
      ] },
    { id: 1057, author: 'm4n7b2v1', text: 'Drone AI navigation is practical today', timestamp: '2026-04-06 19:10' },
    { id: 1058, author: 'q2w5e8r7', text: '[deleted]', timestamp: '2026-04-06 19:12' },
    { id: 1059, author: 'a8s3d5f1', text: 'IoT AI for smart homes is growing', timestamp: '2026-04-06 19:15' }
  ],
},
{
  id: 271,
  boardId: 2,
  title: 'Will AI replace software engineers?',
  content: 'With code-generating AI getting better, are dev jobs at risk?',
  authorID: 'h5g2j8k1',
  timestamp: '2026-04-06 20:00',
  comments: [
    { id: 1060, author: 'n1m5b3v2', text: 'AI can assist, but creativity is human', timestamp: '2026-04-06 20:05' },
    { id: 1061, author: 'c2v4b6n1', text: '>still helps reduce repetitive coding', timestamp: '2026-04-06 20:06', replies: [
        { id: 1062, author: 'o3p7a2s4', text: 'Yeah, think refactoring & tests', timestamp: '2026-04-06 20:08' }
      ] },
    { id: 1063, author: 'x6z3k2l5', text: 'Human oversight is mandatory', timestamp: '2026-04-06 20:10' },
    { id: 1064, author: 'q2w5e1r8', text: '[deleted]', timestamp: '2026-04-06 20:12' },
    { id: 1065, author: 'a4s7d9f2', text: 'Learning AI integration is the future', timestamp: '2026-04-06 20:15' }
  ],
},
{
  id: 272,
  boardId: 2,
  title: 'Top programming languages to learn in 2026',
  content: 'What are the languages that will be in demand?',
  authorID: 'v2b7n4m5',
  timestamp: '2026-04-06 21:00',
  comments: [
    { id: 1066, author: 'p1o3i6u4', text: 'Python, JS, Rust are trending', timestamp: '2026-04-06 21:05' },
    { id: 1067, author: 'k3l5z8x7', text: '>TypeScript adoption is huge', timestamp: '2026-04-06 21:06', replies: [
        { id: 1068, author: 't7y2u4i3', text: 'Definitely for large-scale web apps', timestamp: '2026-04-06 21:08' }
      ] },
    { id: 1069, author: 'm4n7b2v3', text: 'Rust for system & performance', timestamp: '2026-04-06 21:10' },
    { id: 1070, author: 'q2w5e8r3', text: '[deleted]', timestamp: '2026-04-06 21:12' },
    { id: 1071, author: 'a8s3d5f4', text: 'Kotlin for mobile dev', timestamp: '2026-04-06 21:15' }
  ],
},
{
  id: 273,
  boardId: 2,
  title: 'Is remote-first here to stay?',
  content: 'Post-pandemic, are companies shifting permanently to remote work?',
  authorID: 's5d2f7g5',
  timestamp: '2026-04-06 22:00',
  comments: [
    { id: 1072, author: 'n1m5b8v4', text: 'Hybrid seems most common', timestamp: '2026-04-06 22:05' },
    { id: 1073, author: 'c8v2b4n8', text: '>fully remote is still niche', timestamp: '2026-04-06 22:06', replies: [
        { id: 1074, author: 'o3p7a1s7', text: 'Tech companies lead the trend', timestamp: '2026-04-06 22:08' }
      ] },
    { id: 1075, author: 'x6z3k2l9', text: 'Depends on industry', timestamp: '2026-04-06 22:10' },
    { id: 1076, author: 'q2w5e8r9', text: '[deleted]', timestamp: '2026-04-06 22:12' },
    { id: 1077, author: 'a4s7d1f8', text: 'Productivity tools make it feasible', timestamp: '2026-04-06 22:15' }
  ],
},
{
  id: 274,
  boardId: 2,
  title: '5G vs Starlink – best for developers?',
  content: 'Considering latency, stability, and cost.',
  authorID: 'u7i3o2p7',
  timestamp: '2026-04-06 23:00',
  comments: [
    { id: 1078, author: 'm3n5b7v4', text: '5G is faster in cities', timestamp: '2026-04-06 23:05' },
    { id: 1079, author: 'k2l6z4x3', text: '>Starlink works everywhere', timestamp: '2026-04-06 23:06', replies: [
        { id: 1080, author: 't8y1u3i7', text: 'Latency can be higher though', timestamp: '2026-04-06 23:08' }
      ] },
    { id: 1081, author: 'p5o1i7u5', text: 'Depends on location', timestamp: '2026-04-06 23:10' },
    { id: 1082, author: 'q4w2e7r5', text: '[deleted]', timestamp: '2026-04-06 23:12' },
    { id: 1083, author: 'a6s3d1f7', text: 'Hybrid approach may be ideal', timestamp: '2026-04-06 23:15' }
  ],
},
{
  id: 275,
  boardId: 2,
  title: 'Open-source contributions – worth it?',
  content: 'Does contributing to OSS really help your career?',
  authorID: 'g9h2j4k9',
  timestamp: '2026-04-07 09:00',
  comments: [
    { id: 1084, author: 'l5k3j7h4', text: 'Yes, it shows practical skills', timestamp: '2026-04-07 09:05' },
    { id: 1085, author: 'p8o2i5u7', text: '>networking too', timestamp: '2026-04-07 09:06', replies: [
        { id: 1086, author: 't3y9u1i9', text: 'Also improves GitHub portfolio', timestamp: '2026-04-07 09:08' }
      ] },
    { id: 1087, author: 'm1n4b7v9', text: 'Start small and document', timestamp: '2026-04-07 09:10' },
    { id: 1088, author: 'z8x2c5v3', text: '[deleted]', timestamp: '2026-04-07 09:12' },
    { id: 1089, author: 'a5s3d7f4', text: 'Mentorship opportunities too', timestamp: '2026-04-07 09:15' }
  ],
},
{
  id: 276,
  boardId: 2,
  title: 'Edge computing use cases in 2026',
  content: 'Where is edge computing making a real difference?',
  authorID: 'v2b7n4m7',
  timestamp: '2026-04-07 10:00',
  comments: [
    { id: 1090, author: 'p1o3i6u6', text: 'IoT & smart factories', timestamp: '2026-04-07 10:05' },
    { id: 1091, author: 'k3l5z8x9', text: '>autonomous vehicles too', timestamp: '2026-04-07 10:06', replies: [
        { id: 1092, author: 't7y2u4i1', text: 'Low latency is key', timestamp: '2026-04-07 10:08' }
      ] },
    { id: 1093, author: 'm4n7b2v5', text: 'Edge AI is growing fast', timestamp: '2026-04-07 10:10' },
    { id: 1094, author: 'q2w5e8r1', text: '[deleted]', timestamp: '2026-04-07 10:12' },
    { id: 1095, author: 'a8s3d5f6', text: 'Great for data privacy', timestamp: '2026-04-07 10:15' }
  ],
},
{
  id: 277,
  boardId: 2,
  title: 'The future of cloud-native apps',
  content: 'Serverless vs containerized – which is winning?',
  authorID: 's5d2f7g7',
  timestamp: '2026-04-07 11:00',
  comments: [
    { id: 1096, author: 'n1m5b8v6', text: 'Containers for flexibility', timestamp: '2026-04-07 11:05' },
    { id: 1097, author: 'c8v2b4n9', text: '>Serverless for cost efficiency', timestamp: '2026-04-07 11:06', replies: [
        { id: 1098, author: 'o3p7a1s9', text: 'Cold starts are a pain', timestamp: '2026-04-07 11:08' }
      ] },
    { id: 1099, author: 'x6z3k2l1', text: 'Depends on the workload', timestamp: '2026-04-07 11:10' },
    { id: 1100, author: 'q2w5e8r3', text: '[deleted]', timestamp: '2026-04-07 11:12' },
    { id: 1101, author: 'a4s7d1f9', text: 'Hybrid approaches are common', timestamp: '2026-04-07 11:15' }
  ],
},
{
  id: 278,
  boardId: 2,
  title: 'AI ethics in 2026',
  content: 'How are companies handling bias, privacy, and explainability?',
  authorID: 'u7i3o2p9',
  timestamp: '2026-04-07 12:00',
  comments: [
    { id: 1102, author: 'm3n5b7v6', text: 'Still inconsistent', timestamp: '2026-04-07 12:05' },
    { id: 1103, author: 'k2l6z4x5', text: '>regulations are catching up slowly', timestamp: '2026-04-07 12:06', replies: [
        { id: 1104, author: 't8y1u3i3', text: 'Transparency is key', timestamp: '2026-04-07 12:08' }
      ] },
    { id: 1105, author: 'p5o1i7u7', text: 'Open-source AI is better for accountability', timestamp: '2026-04-07 12:10' },
    { id: 1106, author: 'q4w2e7r7', text: '[deleted]', timestamp: '2026-04-07 12:12' },
    { id: 1107, author: 'a6s3d1f9', text: 'Ethical review boards help', timestamp: '2026-04-07 12:15' }
  ],
},
{
  id: 279,
  boardId: 2,
  title: 'Is WebAssembly mainstream yet?',
  content: 'Are developers using it widely for performance-critical web apps?',
  authorID: 'g9h2j4k1',
  timestamp: '2026-04-07 13:00',
  comments: [
    { id: 1108, author: 'l5k3j7h6', text: 'Yes for niche apps', timestamp: '2026-04-07 13:05' },
    { id: 1109, author: 'p8o2i5u9', text: '>JS is still king', timestamp: '2026-04-07 13:06', replies: [
        { id: 1110, author: 't3y9u1i1', text: 'WASM shines for heavy computation', timestamp: '2026-04-07 13:08' }
      ] },
    { id: 1111, author: 'm1n4b7v0', text: 'Gaming and video editing apps use it', timestamp: '2026-04-07 13:10' },
    { id: 1112, author: 'z8x2c5v5', text: '[deleted]', timestamp: '2026-04-07 13:12' },
    { id: 1113, author: 'a5s3d7f6', text: 'Not fully mainstream yet', timestamp: '2026-04-07 13:15' }
  ],
},
{
  id: 280,
  boardId: 2,
  title: 'Tech gadgets that actually improved productivity',
  content: 'What hardware/software truly made a difference?',
  authorID: 'v2b7n4m9',
  timestamp: '2026-04-07 14:00',
  comments: [
    { id: 1114, author: 'p1o3i6u8', text: 'Mechanical keyboards', timestamp: '2026-04-07 14:05' },
    { id: 1115, author: 'k3l5z8x1', text: '>Ergonomic mouse', timestamp: '2026-04-07 14:06', replies: [
        { id: 1116, author: 't7y2u4i5', text: 'Standing desk too', timestamp: '2026-04-07 14:08' }
      ] },
    { id: 1117, author: 'm4n7b2v7', text: 'Noise-cancelling headphones', timestamp: '2026-04-07 14:10' },
    { id: 1118, author: 'q2w5e8r5', text: '[deleted]', timestamp: '2026-04-07 14:12' },
    { id: 1119, author: 'a8s3d5f8', text: 'Automation software saves hours', timestamp: '2026-04-07 14:15' }
  ],
},

{
  id: 301,
  boardId: 4,
  title: 'Best anime of 2026 so far?',
  content: 'Which anime have blown you away this year?',
  authorID: 'a1b2c3d4',
  timestamp: '2026-04-06 10:00',
  comments: [
    { id: 1200, author: 'e5f6g7h8', text: 'Chainsaw Man season 2 is insane', timestamp: '2026-04-06 10:05' },
    { id: 1201, author: 'i9j0k1l2', text: '>Spy x Family 2 is heartwarming', timestamp: '2026-04-06 10:06', replies: [
        { id: 1202, author: 'm3n4o5p6', text: 'Love the animation quality', timestamp: '2026-04-06 10:08' }
      ] },
    { id: 1203, author: 'q7r8s9t0', text: 'Blue Lock is hype', timestamp: '2026-04-06 10:10' },
    { id: 1204, author: 'u1v2w3x4', text: '[deleted]', timestamp: '2026-04-06 10:12' },
    { id: 1205, author: 'y5z6a7b8', text: 'Demon Slayer season 4 visuals are stunning', timestamp: '2026-04-06 10:15' }
  ],
},
{
  id: 302,
  boardId: 4,
  title: 'Manga vs Anime – which do you prefer?',
  content: 'Some stories are different in each medium.',
  authorID: 'c2d3e4f5',
  timestamp: '2026-04-06 11:00',
  comments: [
    { id: 1206, author: 'g6h7i8j9', text: 'Manga gives the original pacing', timestamp: '2026-04-06 11:05' },
    { id: 1207, author: 'k0l1m2n3', text: '>Anime adds amazing soundtracks', timestamp: '2026-04-06 11:06', replies: [
        { id: 1208, author: 'o4p5q6r7', text: 'Opening & ending themes are iconic', timestamp: '2026-04-06 11:08' }
      ] },
    { id: 1209, author: 's8t9u0v1', text: 'Depends on the adaptation', timestamp: '2026-04-06 11:10' },
    { id: 1210, author: 'w2x3y4z5', text: '[deleted]', timestamp: '2026-04-06 11:12' },
    { id: 1211, author: 'a6b7c8d9', text: 'I read first, then watch', timestamp: '2026-04-06 11:15' }
  ],
},
{
  id: 303,
  boardId: 4,
  title: 'Crunchyroll vs Netflix anime library',
  content: 'Which platform has the better selection for 2026?',
  authorID: 'e3f4g5h6',
  timestamp: '2026-04-06 12:00',
  comments: [
    { id: 1212, author: 'i7j8k9l0', text: 'Crunchyroll still has more simulcasts', timestamp: '2026-04-06 12:05' },
    { id: 1213, author: 'm1n2o3p4', text: '>Netflix originals are high quality', timestamp: '2026-04-06 12:06', replies: [
        { id: 1214, author: 'q5r6s7t8', text: 'But fewer shows overall', timestamp: '2026-04-06 12:08' }
      ] },
    { id: 1215, author: 'u9v0w1x2', text: 'I use both honestly', timestamp: '2026-04-06 12:10' },
    { id: 1216, author: 'y3z4a5b6', text: '[deleted]', timestamp: '2026-04-06 12:12' },
    { id: 1217, author: 'c7d8e9f0', text: 'Simulcast speed matters to me', timestamp: '2026-04-06 12:15' }
  ],
},
{
  id: 304,
  boardId: 4,
  title: 'Upcoming anime movie hype',
  content: 'Any must-watch anime films releasing soon?',
  authorID: 'g5h6i7j8',
  timestamp: '2026-04-06 13:00',
  comments: [
    { id: 1218, author: 'k9l0m1n2', text: 'Makoto Shinkai’s next film looks amazing', timestamp: '2026-04-06 13:05' },
    { id: 1219, author: 'o3p4q5r6', text: '>Studio Ghibli always a classic', timestamp: '2026-04-06 13:06', replies: [
        { id: 1220, author: 's7t8u9v0', text: 'Even their short films are incredible', timestamp: '2026-04-06 13:08' }
      ] },
    { id: 1221, author: 'w1x2y3z4', text: 'Chainsaw Man movie looks intense', timestamp: '2026-04-06 13:10' },
    { id: 1222, author: 'a5b6c7d8', text: '[deleted]', timestamp: '2026-04-06 13:12' },
    { id: 1223, author: 'e9f0g1h2', text: 'Anime shorts are great fillers too', timestamp: '2026-04-06 13:15' }
  ],
},
{
  id: 305,
  boardId: 4,
  title: 'Favorite anime villains',
  content: 'Who had the most memorable villain arcs?',
  authorID: 'i3j4k5l6',
  timestamp: '2026-04-06 14:00',
  comments: [
    { id: 1224, author: 'm7n8o9p0', text: 'Dio from JoJo’s is iconic', timestamp: '2026-04-06 14:05' },
    { id: 1225, author: 'q1r2s3t4', text: '>His charisma is terrifying', timestamp: '2026-04-06 14:06', replies: [
        { id: 1226, author: 'u5v6w7x8', text: 'Also memorable music cues', timestamp: '2026-04-06 14:08' }
      ] },
    { id: 1227, author: 'y9z0a1b2', text: 'Pain from Naruto is tragic too', timestamp: '2026-04-06 14:10' },
    { id: 1228, author: 'c3d4e5f6', text: '[deleted]', timestamp: '2026-04-06 14:12' },
    { id: 1229, author: 'g7h8i9j0', text: 'Light Yagami deserves a mention', timestamp: '2026-04-06 14:15' }
  ],
},
{
  id: 306,
  boardId: 4,
  title: 'Anime OST recommendations',
  content: 'Looking for tracks that give chills every time.',
  authorID: 'k1l2m3n4',
  timestamp: '2026-04-06 15:00',
  comments: [
    { id: 1230, author: 'o5p6q7r8', text: 'Attack on Titan s2 soundtrack is epic', timestamp: '2026-04-06 15:05' },
    { id: 1231, author: 's9t0u1v2', text: '>Your Lie in April soundtrack is emotional', timestamp: '2026-04-06 15:06', replies: [
        { id: 1232, author: 'w3x4y5z6', text: 'Piano pieces are breathtaking', timestamp: '2026-04-06 15:08' }
      ] },
    { id: 1233, author: 'a7b8c9d0', text: 'Demon Slayer OST is a must', timestamp: '2026-04-06 15:10' },
    { id: 1234, author: 'e1f2g3h4', text: '[deleted]', timestamp: '2026-04-06 15:12' },
    { id: 1235, author: 'i5j6k7l8', text: 'Cowboy Bebop never gets old', timestamp: '2026-04-06 15:15' }
  ],
},
{
  id: 307,
  boardId: 4,
  title: 'Best slice-of-life anime',
  content: 'Looking for feel-good, heartwarming shows.',
  authorID: 'm1n2o3p4',
  timestamp: '2026-04-06 16:00',
  comments: [
    { id: 1236, author: 'q5r6s7t8', text: 'K-On! is timeless', timestamp: '2026-04-06 16:05' },
    { id: 1237, author: 'u9v0w1x2', text: '>Barakamon is a hidden gem', timestamp: '2026-04-06 16:06', replies: [
        { id: 1238, author: 'y3z4a5b6', text: 'So relaxing to watch', timestamp: '2026-04-06 16:08' }
      ] },
    { id: 1239, author: 'c7d8e9f0', text: 'Clannad is emotional', timestamp: '2026-04-06 16:10' },
    { id: 1240, author: 'g1h2i3j4', text: '[deleted]', timestamp: '2026-04-06 16:12' },
    { id: 1241, author: 'k5l6m7n8', text: 'Nichijou is hilarious', timestamp: '2026-04-06 16:15' }
  ],
},
{
  id: 308,
  boardId: 4,
  title: 'Anime conventions – worth attending?',
  content: 'What are the experiences like for fans in 2026?',
  authorID: 'o9p0q1r2',
  timestamp: '2026-04-06 17:00',
  comments: [
    { id: 1242, author: 's3t4u5v6', text: 'Cosplay is the highlight', timestamp: '2026-04-06 17:05' },
    { id: 1243, author: 'w7x8y9z0', text: '>Panels are very informative', timestamp: '2026-04-06 17:06', replies: [
        { id: 1244, author: 'a1b2c3d4', text: 'Don’t miss AMV contests', timestamp: '2026-04-06 17:08' }
      ] },
    { id: 1245, author: 'e5f6g7h8', text: 'Networking with creators', timestamp: '2026-04-06 17:10' },
    { id: 1246, author: 'i9j0k1l2', text: '[deleted]', timestamp: '2026-04-06 17:12' },
    { id: 1247, author: 'm3n4o5p6', text: 'Merch shopping is fun', timestamp: '2026-04-06 17:15' }
  ],
},
{
  id: 309,
  boardId: 4,
  title: 'Anime streaming hacks',
  content: 'How do you access rare titles legally?',
  authorID: 'q7r8s9t0',
  timestamp: '2026-04-06 18:00',
  comments: [
    { id: 1248, author: 'u1v2w3x4', text: 'Check regional libraries', timestamp: '2026-04-06 18:05' },
    { id: 1249, author: 'y5z6a7b8', text: '>VPNs for licensed content', timestamp: '2026-04-06 18:06', replies: [
        { id: 1250, author: 'c7d8e9f0', text: 'Make sure it’s still legal locally', timestamp: '2026-04-06 18:08' }
      ] },
    { id: 1251, author: 'g7h8i9j0', text: 'Subscriptions like Crunchyroll help', timestamp: '2026-04-06 18:10' },
    { id: 1252, author: 'k1l2m3n4', text: '[deleted]', timestamp: '2026-04-06 18:12' },
    { id: 1253, author: 'o5p6q7r8', text: 'Community recommendations are useful', timestamp: '2026-04-06 18:15' }
  ],
},
{
  id: 310,
  boardId: 4,
  title: 'Anime villains who stole the show',
  content: 'Most compelling antagonists in anime history?',
  authorID: 's9t0u1v2',
  timestamp: '2026-04-06 19:00',
  comments: [
    { id: 1254, author: 'w3x4y5z6', text: 'Shougo Makishima from Psycho-Pass', timestamp: '2026-04-06 19:05' },
    { id: 1255, author: 'a1b2c3d4', text: '>His philosophy is chilling', timestamp: '2026-04-06 19:06', replies: [
        { id: 1256, author: 'e5f6g7h8', text: 'One of the most intellectual villains', timestamp: '2026-04-06 19:08' }
      ] },
    { id: 1257, author: 'i9j0k1l2', text: 'Dio from JoJo always', timestamp: '2026-04-06 19:10' },
    { id: 1258, author: 'm3n4o5p6', text: '[deleted]', timestamp: '2026-04-06 19:12' },
    { id: 1259, author: 'q7r8s9t0', text: 'Naruto’s Pain is unforgettable', timestamp: '2026-04-06 19:15' }
  ],
},
{
  id: 311,
  boardId: 4,
  title: 'Anime with the best world-building',
  content: 'Which anime immerses you the most?',
  authorID: 'u1v2w3x4',
  timestamp: '2026-04-06 20:00',
  comments: [
    { id: 1260, author: 'y5z6a7b8', text: 'Fullmetal Alchemist: Brotherhood', timestamp: '2026-04-06 20:05' },
    { id: 1261, author: 'c7d8e9f0', text: '>Attack on Titan', timestamp: '2026-04-06 20:06', replies: [
        { id: 1262, author: 'g7h8i9j0', text: 'The lore is deep', timestamp: '2026-04-06 20:08' }
      ] },
    { id: 1263, author: 'k1l2m3n4', text: 'Made in Abyss for world immersion', timestamp: '2026-04-06 20:10' },
    { id: 1264, author: 'o5p6q7r8', text: '[deleted]', timestamp: '2026-04-06 20:12' },
    { id: 1265, author: 's9t0u1v2', text: 'One Piece is legendary', timestamp: '2026-04-06 20:15' }
  ],
},

{
  id: 312,
  boardId: 4,
  title: 'Best romance anime',
  content: 'Which romance anime gave you the feels?',
  authorID: 'x1y2z3a4',
  timestamp: '2026-04-06 21:00',
  comments: [
    { id: 1266, author: 'b5c6d7e8', text: 'Your Lie in April is top tier', timestamp: '2026-04-06 21:05' },
    { id: 1267, author: 'f9g0h1i2', text: '>Toradora! is classic', timestamp: '2026-04-06 21:06', replies: [
        { id: 1268, author: 'j3k4l5m6', text: 'Ryuji and Taiga are perfect', timestamp: '2026-04-06 21:08' }
      ] },
    { id: 1269, author: 'n7o8p9q0', text: 'Fruits Basket (2019) is heartwarming', timestamp: '2026-04-06 21:10' },
    { id: 1270, author: 'r1s2t3u4', text: '[deleted]', timestamp: '2026-04-06 21:12' },
    { id: 1271, author: 'v5w6x7y8', text: 'Clannad after story hits hard', timestamp: '2026-04-06 21:15' }
  ],
},
{
  id: 313,
  boardId: 4,
  title: 'Dark fantasy anime recommendations',
  content: 'Looking for darker, intense anime',
  authorID: 'z9a0b1c2',
  timestamp: '2026-04-06 22:00',
  comments: [
    { id: 1272, author: 'd3e4f5g6', text: 'Berserk is unmatched', timestamp: '2026-04-06 22:05' },
    { id: 1273, author: 'h7i8j9k0', text: '>Made in Abyss is brutal', timestamp: '2026-04-06 22:06', replies: [
        { id: 1274, author: 'l1m2n3o4', text: 'Visually beautiful but heavy', timestamp: '2026-04-06 22:08' }
      ] },
    { id: 1275, author: 'p5q6r7s8', text: 'Overlord is darkly fun', timestamp: '2026-04-06 22:10' },
    { id: 1276, author: 't9u0v1w2', text: '[deleted]', timestamp: '2026-04-06 22:12' },
    { id: 1277, author: 'x3y4z5a6', text: 'Goblin Slayer is violent but good', timestamp: '2026-04-06 22:15' }
  ],
},
{
  id: 314,
  boardId: 4,
  title: 'Anime openings that go hard',
  content: 'Which OPs do you replay constantly?',
  authorID: 'b7c8d9e0',
  timestamp: '2026-04-06 23:00',
  comments: [
    { id: 1278, author: 'f1g2h3i4', text: 'Attack on Titan openings are legendary', timestamp: '2026-04-06 23:05' },
    { id: 1279, author: 'j5k6l7m8', text: '>Demon Slayer OPs are epic', timestamp: '2026-04-06 23:06', replies: [
        { id: 1280, author: 'n9o0p1q2', text: 'Gurenge gives me chills', timestamp: '2026-04-06 23:08' }
      ] },
    { id: 1281, author: 'r3s4t5u6', text: 'My Hero Academia OPs hype me up', timestamp: '2026-04-06 23:10' },
    { id: 1282, author: 'v7w8x9y0', text: '[deleted]', timestamp: '2026-04-06 23:12' },
    { id: 1283, author: 'z1a2b3c4', text: 'Naruto classics never die', timestamp: '2026-04-06 23:15' }
  ],
},
{
  id: 315,
  boardId: 4,
  title: 'Anime with best animation quality',
  content: 'Which shows impressed you visually in 2026?',
  authorID: 'd5e6f7g8',
  timestamp: '2026-04-07 00:00',
  comments: [
    { id: 1284, author: 'h9i0j1k2', text: 'Chainsaw Man season 2 is stunning', timestamp: '2026-04-07 00:05' },
    { id: 1285, author: 'l3m4n5o6', text: '>Jujutsu Kaisen 2 fights are smooth', timestamp: '2026-04-07 00:06', replies: [
        { id: 1286, author: 'p7q8r9s0', text: 'Fight choreography is insane', timestamp: '2026-04-07 00:08' }
      ] },
    { id: 1287, author: 't1u2v3w4', text: 'Lycoris Recoil animation is crisp', timestamp: '2026-04-07 00:10' },
    { id: 1288, author: 'x5y6z7a8', text: '[deleted]', timestamp: '2026-04-07 00:12' },
    { id: 1289, author: 'b9c0d1e2', text: 'Spy x Family 2 visuals are clean', timestamp: '2026-04-07 00:15' }
  ],
},
{
  id: 316,
  boardId: 4,
  title: 'Anime with the saddest moments',
  content: 'Which series made you cry hardest?',
  authorID: 'f3g4h5i6',
  timestamp: '2026-04-07 01:00',
  comments: [
    { id: 1290, author: 'j7k8l9m0', text: 'Clannad after story', timestamp: '2026-04-07 01:05' },
    { id: 1291, author: 'n1o2p3q4', text: '>Your Lie in April', timestamp: '2026-04-07 01:06', replies: [
        { id: 1292, author: 'r5s6t7u8', text: 'Every episode tears me up', timestamp: '2026-04-07 01:08' }
      ] },
    { id: 1293, author: 'v9w0x1y2', text: 'Anohana makes me cry', timestamp: '2026-04-07 01:10' },
    { id: 1294, author: 'z3a4b5c6', text: '[deleted]', timestamp: '2026-04-07 01:12' },
    { id: 1295, author: 'd7e8f9g0', text: 'Grimgar of Fantasy and Ash', timestamp: '2026-04-07 01:15' }
  ],
},
{
  id: 317,
  boardId: 4,
  title: 'Seiyuu performances that wowed',
  content: 'Which voice actors blew you away recently?',
  authorID: 'h1i2j3k4',
  timestamp: '2026-04-07 02:00',
  comments: [
    { id: 1296, author: 'l5m6n7o8', text: 'Mamoru Miyano is phenomenal', timestamp: '2026-04-07 02:05' },
    { id: 1297, author: 'p9q0r1s2', text: '>Aoi Yuuki’s range is amazing', timestamp: '2026-04-07 02:06', replies: [
        { id: 1298, author: 't3u4v5w6', text: 'She really brings characters to life', timestamp: '2026-04-07 02:08' }
      ] },
    { id: 1299, author: 'x7y8z9a0', text: 'Yuichi Nakamura is perfect for antiheroes', timestamp: '2026-04-07 02:10' },
    { id: 1300, author: 'b1c2d3e4', text: '[deleted]', timestamp: '2026-04-07 02:12' },
    { id: 1301, author: 'f5g6h7i8', text: 'Kana Hanazawa is iconic', timestamp: '2026-04-07 02:15' }
  ],
},
{
  id: 318,
  boardId: 4,
  title: 'Top 2026 isekai anime',
  content: 'Which isekai titles are worth watching this year?',
  authorID: 'j9k0l1m2',
  timestamp: '2026-04-07 03:00',
  comments: [
    { id: 1302, author: 'n3o4p5q6', text: 'Reincarnated as a Sword Master is fun', timestamp: '2026-04-07 03:05' },
    { id: 1303, author: 'r7s8t9u0', text: '>Jobless Reincarnation is solid', timestamp: '2026-04-07 03:06', replies: [
        { id: 1304, author: 'v1w2x3y4', text: 'Animation is top-notch', timestamp: '2026-04-07 03:08' }
      ] },
    { id: 1305, author: 'z5a6b7c8', text: 'Mushoku Tensei spinoffs are interesting', timestamp: '2026-04-07 03:10' },
    { id: 1306, author: 'd9e0f1g2', text: '[deleted]', timestamp: '2026-04-07 03:12' },
    { id: 1307, author: 'h3i4j5k6', text: 'Isekai often gets repetitive, but some shine', timestamp: '2026-04-07 03:15' }
  ],
},
{
  id: 319,
  boardId: 4,
  title: 'Anime with the best fight choreography',
  content: 'Which battles get your heart racing?',
  authorID: 'l7m8n9o0',
  timestamp: '2026-04-07 04:00',
  comments: [
    { id: 1308, author: 'p1q2r3s4', text: 'Jujutsu Kaisen 2 fights are insane', timestamp: '2026-04-07 04:05' },
    { id: 1309, author: 't5u6v7w8', text: '>Demon Slayer action scenes', timestamp: '2026-04-07 04:06', replies: [
        { id: 1310, author: 'x9y0z1a2', text: 'Every move feels impactful', timestamp: '2026-04-07 04:08' }
      ] },
    { id: 1311, author: 'b3c4d5e6', text: 'Vinland Saga has intense duels', timestamp: '2026-04-07 04:10' },
    { id: 1312, author: 'f7g8h9i0', text: '[deleted]', timestamp: '2026-04-07 04:12' },
    { id: 1313, author: 'j1k2l3m4', text: 'Bleach classics still shine', timestamp: '2026-04-07 04:15' }
  ],
},
{
  id: 320,
  boardId: 4,
  title: 'Hidden gems anime',
  content: 'Underrated series more people should watch',
  authorID: 'n5o6p7q8',
  timestamp: '2026-04-07 05:00',
  comments: [
    { id: 1314, author: 'r9s0t1u2', text: '91 Days is fantastic', timestamp: '2026-04-07 05:05' },
    { id: 1315, author: 'v3w4x5y6', text: '>Erased (Boku Dake ga Inai Machi) is gripping', timestamp: '2026-04-07 05:06', replies: [
        { id: 1316, author: 'z7a8b9c0', text: 'Thriller with emotional depth', timestamp: '2026-04-07 05:08' }
      ] },
    { id: 1317, author: 'd1e2f3g4', text: 'Paranoia Agent is still worth it', timestamp: '2026-04-07 05:10' },
    { id: 1318, author: 'h5i6j7k8', text: '[deleted]', timestamp: '2026-04-07 05:12' },
    { id: 1319, author: 'l9m0n1o2', text: 'Texhnolyze is visually unique', timestamp: '2026-04-07 05:15' }
  ],
},

{
  id: 321,
  boardId: 4,
  title: 'Most intense psychological anime',
  content: 'Which anime messed with your mind the most?',
  authorID: 'p3q4r5s6',
  timestamp: '2026-04-07 06:00',
  comments: [
    { id: 1320, author: 't7u8v9w0', text: 'Perfect Blue is iconic', timestamp: '2026-04-07 06:05' },
    { id: 1321, author: 'x1y2z3a4', text: '>Serial Experiments Lain', timestamp: '2026-04-07 06:06', replies: [
        { id: 1322, author: 'b5c6d7e8', text: 'Totally mind-bending', timestamp: '2026-04-07 06:08' }
      ] },
    { id: 1323, author: 'f9g0h1i2', text: 'Paranoia Agent is so eerie', timestamp: '2026-04-07 06:10' },
    { id: 1324, author: 'j3k4l5m6', text: '[deleted]', timestamp: '2026-04-07 06:12' },
    { id: 1325, author: 'n7o8p9q0', text: 'Monster by Urasawa is psychological gold', timestamp: '2026-04-07 06:15' }
  ],
},
{
  id: 322,
  boardId: 4,
  title: 'Comedy anime that never fails',
  content: 'Which series makes you laugh every time?',
  authorID: 'r1s2t3u4',
  timestamp: '2026-04-07 07:00',
  comments: [
    { id: 1326, author: 'v5w6x7y8', text: 'Gintama is unmatched', timestamp: '2026-04-07 07:05' },
    { id: 1327, author: 'z1a2b3c4', text: '>Konosuba never gets old', timestamp: '2026-04-07 07:06', replies: [
        { id: 1328, author: 'd7e8f9g0', text: 'Megumin is legendary', timestamp: '2026-04-07 07:08' }
      ] },
    { id: 1329, author: 'h3i4j5k6', text: 'Daily Lives of High School Boys is hilarious', timestamp: '2026-04-07 07:10' },
    { id: 1330, author: 'l7m8n9o0', text: '[deleted]', timestamp: '2026-04-07 07:12' },
    { id: 1331, author: 'p1q2r3s4', text: 'Nichijou never gets old', timestamp: '2026-04-07 07:15' }
  ],
},
{
  id: 323,
  boardId: 4,
  title: 'Anime that surprised you',
  content: 'Which series did you go in low expectations and loved?',
  authorID: 't5u6v7w8',
  timestamp: '2026-04-07 08:00',
  comments: [
    { id: 1332, author: 'x9y0z1a2', text: 'Vivy: Fluorite Eye’s Song', timestamp: '2026-04-07 08:05' },
    { id: 1333, author: 'b3c4d5e6', text: '>86 EIGHTY SIX', timestamp: '2026-04-07 08:06', replies: [
        { id: 1334, author: 'f7g8h9i0', text: 'Didn’t expect to get emotionally invested', timestamp: '2026-04-07 08:08' }
      ] },
    { id: 1335, author: 'j1k2l3m4', text: 'Blue Period is unexpectedly deep', timestamp: '2026-04-07 08:10' },
    { id: 1336, author: 'n5o6p7q8', text: '[deleted]', timestamp: '2026-04-07 08:12' },
    { id: 1337, author: 'r9s0t1u2', text: 'Odd Taxi caught me off guard', timestamp: '2026-04-07 08:15' }
  ],
},
{
  id: 324,
  boardId: 4,
  title: 'Upcoming anime hype',
  content: 'Which shows are you looking forward to this season?',
  authorID: 'v3w4x5y6',
  timestamp: '2026-04-07 09:00',
  comments: [
    { id: 1338, author: 'z7a8b9c0', text: 'Chainsaw Man part 3!', timestamp: '2026-04-07 09:05' },
    { id: 1339, author: 'd1e2f3g4', text: '>Solo Leveling anime adaptation', timestamp: '2026-04-07 09:06', replies: [
        { id: 1340, author: 'h5i6j7k8', text: 'Animation studio looks promising', timestamp: '2026-04-07 09:08' }
      ] },
    { id: 1341, author: 'l9m0n1o2', text: 'Demon Slayer movie sequel', timestamp: '2026-04-07 09:10' },
    { id: 1342, author: 'p3q4r5s6', text: '[deleted]', timestamp: '2026-04-07 09:12' },
    { id: 1343, author: 't7u8v9w0', text: 'Jujutsu Kaisen 3 hype is real', timestamp: '2026-04-07 09:15' }
  ],
},
{
  id: 325,
  boardId: 4,
  title: 'Favorite long-running anime',
  content: 'Which series have you followed for years and still love?',
  authorID: 'x1y2z3a4',
  timestamp: '2026-04-07 10:00',
  comments: [
    { id: 1344, author: 'b5c6d7e8', text: 'One Piece forever', timestamp: '2026-04-07 10:05' },
    { id: 1345, author: 'f9g0h1i2', text: '>Naruto/Naruto Shippuden', timestamp: '2026-04-07 10:06', replies: [
        { id: 1346, author: 'j3k4l5m6', text: 'Sasuke and Naruto rivalry is iconic', timestamp: '2026-04-07 10:08' }
      ] },
    { id: 1347, author: 'n7o8p9q0', text: 'Bleach old episodes still fun', timestamp: '2026-04-07 10:10' },
    { id: 1348, author: 'r1s2t3u4', text: '[deleted]', timestamp: '2026-04-07 10:12' },
    { id: 1349, author: 'v5w6x7y8', text: 'Fairy Tail has nostalgia power', timestamp: '2026-04-07 10:15' }
  ],
},
{
  id: 326,
  boardId: 4,
  title: 'Best anime protagonists',
  content: 'Which main characters do you admire most?',
  authorID: 'z1a2b3c4',
  timestamp: '2026-04-07 11:00',
  comments: [
    { id: 1350, author: 'd7e8f9g0', text: 'Levi Ackerman is a god-tier soldier', timestamp: '2026-04-07 11:05' },
    { id: 1351, author: 'h3i4j5k6', text: '>Izuku Midoriya for perseverance', timestamp: '2026-04-07 11:06', replies: [
        { id: 1352, author: 'l7m8n9o0', text: 'Never gives up no matter what', timestamp: '2026-04-07 11:08' }
      ] },
    { id: 1353, author: 'p1q2r3s4', text: 'Saitama for pure power and humor', timestamp: '2026-04-07 11:10' },
    { id: 1354, author: 't5u6v7w8', text: '[deleted]', timestamp: '2026-04-07 11:12' },
    { id: 1355, author: 'x9y0z1a2', text: 'Edward Elric for determination', timestamp: '2026-04-07 11:15' }
  ],
},
{
  id: 327,
  boardId: 4,
  title: 'Anime with the best world-building',
  content: 'Which series has the most immersive universe?',
  authorID: 'b3c4d5e6',
  timestamp: '2026-04-07 12:00',
  comments: [
    { id: 1356, author: 'f7g8h9i0', text: 'Made in Abyss world is beautiful yet dark', timestamp: '2026-04-07 12:05' },
    { id: 1357, author: 'j1k2l3m4', text: '>Attack on Titan lore is deep', timestamp: '2026-04-07 12:06', replies: [
        { id: 1358, author: 'n5o6p7q8', text: 'The history behind Marley is fascinating', timestamp: '2026-04-07 12:08' }
      ] },
    { id: 1359, author: 'r9s0t1u2', text: 'Fullmetal Alchemist: Brotherhood', timestamp: '2026-04-07 12:10' },
    { id: 1360, author: 'v3w4x5y6', text: '[deleted]', timestamp: '2026-04-07 12:12' },
    { id: 1361, author: 'z7a8b9c0', text: 'Sword Art Online has creative worlds', timestamp: '2026-04-07 12:15' }
  ],
},
{
  id: 328,
  boardId: 4,
  title: 'Anime that changed your perspective',
  content: 'Which series made you think differently?',
  authorID: 'd1e2f3g4',
  timestamp: '2026-04-07 13:00',
  comments: [
    { id: 1362, author: 'h5i6j7k8', text: 'Steins;Gate changed how I see time travel', timestamp: '2026-04-07 13:05' },
    { id: 1363, author: 'l9m0n1o2', text: '>Paranoia Agent on society', timestamp: '2026-04-07 13:06', replies: [
        { id: 1364, author: 'p3q4r5s6', text: 'Very philosophical', timestamp: '2026-04-07 13:08' }
      ] },
    { id: 1365, author: 't7u8v9w0', text: 'Psycho-Pass on morality', timestamp: '2026-04-07 13:10' },
    { id: 1366, author: 'x1y2z3a4', text: '[deleted]', timestamp: '2026-04-07 13:12' },
    { id: 1367, author: 'b5c6d7e8', text: 'Mushishi on appreciating life', timestamp: '2026-04-07 13:15' }
  ],
},
{
  id: 329,
  boardId: 4,
  title: 'Favorite anime villains',
  content: 'Who made the best antagonists?',
  authorID: 'f9g0h1i2',
  timestamp: '2026-04-07 14:00',
  comments: [
    { id: 1368, author: 'j3k4l5m6', text: 'Shou Tucker from FMA is unforgettable', timestamp: '2026-04-07 14:05' },
    { id: 1369, author: 'n7o8p9q0', text: '>Madara Uchiha', timestamp: '2026-04-07 14:06', replies: [
        { id: 1370, author: 'r1s2t3u4', text: 'Master manipulator', timestamp: '2026-04-07 14:08' }
      ] },
    { id: 1371, author: 'v5w6x7y8', text: 'Dio Brando from JoJo', timestamp: '2026-04-07 14:10' },
    { id: 1372, author: 'z1a2b3c4', text: '[deleted]', timestamp: '2026-04-07 14:12' },
    { id: 1373, author: 'd7e8f9g0', text: 'Sosuke Aizen is brilliant', timestamp: '2026-04-07 14:15' }
  ],
},
{
  id: 330,
  boardId: 4,
  title: 'Best anime side characters',
  content: 'Which supporting characters stole the show?',
  authorID: 'h3i4j5k6',
  timestamp: '2026-04-07 15:00',
  comments: [
    { id: 1374, author: 'l7m8n9o0', text: 'Koro-sensei from Assassination Classroom', timestamp: '2026-04-07 15:05' },
    { id: 1375, author: 'p1q2r3s4', text: '>Zenitsu Agatsuma', timestamp: '2026-04-07 15:06', replies: [
        { id: 1376, author: 't5u6v7w8', text: 'Comedic gold', timestamp: '2026-04-07 15:08' }
      ] },
    { id: 1377, author: 'x9y0z1a2', text: 'Maka Albarn from Soul Eater', timestamp: '2026-04-07 15:10' },
    { id: 1378, author: 'b3c4d5e6', text: '[deleted]', timestamp: '2026-04-07 15:12' },
    { id: 1379, author: 'f7g8h9i0', text: 'Leorio from Hunter x Hunter', timestamp: '2026-04-07 15:15' }
  ],
},
{
  id: 331,
  boardId: 4,
  title: 'Anime with the most memorable quotes',
  content: 'Which lines stuck with you long after?',
  authorID: 'j1k2l3m4',
  timestamp: '2026-04-07 16:00',
  comments: [
    { id: 1380, author: 'n5o6p7q8', text: '"I am the hope of the universe" - Goku', timestamp: '2026-04-07 16:05' },
    { id: 1381, author: 'r9s0t1u2', text: '>“I’ll take a potato chip… and eat it!”', timestamp: '2026-04-07 16:06', replies: [
        { id: 1382, author: 'v3w4x5y6', text: 'Yamcha would be proud', timestamp: '2026-04-07 16:08' }
      ] },
    { id: 1383, author: 'z7a8b9c0', text: '"People die if they are killed" - Gintama', timestamp: '2026-04-07 16:10' },
    { id: 1384, author: 'd1e2f3g4', text: '[deleted]', timestamp: '2026-04-07 16:12' },
    { id: 1385, author: 'h5i6j7k8', text: '"Power comes in response to a need, not a desire" - Naruto', timestamp: '2026-04-07 16:15' }
  ],
},

{
  id: 341,
  boardId: 4,
  title: 'Best anime openings ever',
  content: 'Which anime opening gives you goosebumps every time?',
  authorID: 'k1l2m3n4',
  timestamp: '2026-04-07 17:00',
  comments: [
    { id: 1386, author: 'o5p6q7r8', text: 'Attack on Titan S3 opening', timestamp: '2026-04-07 17:05' },
    { id: 1387, author: 's9t0u1v2', text: '>Fullmetal Alchemist Brotherhood OP1', timestamp: '2026-04-07 17:06', replies: [
        { id: 1388, author: 'w3x4y5z6', text: 'A timeless classic', timestamp: '2026-04-07 17:08' }
      ] },
    { id: 1389, author: 'a7b8c9d0', text: 'Death Note OPs are legendary', timestamp: '2026-04-07 17:10' },
    { id: 1390, author: 'e1f2g3h4', text: '[deleted]', timestamp: '2026-04-07 17:12' },
    { id: 1391, author: 'i5j6k7l8', text: 'Cowboy Bebop opening never ages', timestamp: '2026-04-07 17:15' }
  ],
},
{
  id: 342,
  boardId: 4,
  title: 'Underrated anime gems',
  content: 'Which series flew under the radar but are amazing?',
  authorID: 'm9n0o1p2',
  timestamp: '2026-04-07 18:00',
  comments: [
    { id: 1392, author: 'q3r4s5t6', text: 'Mushoku Tensei deserves more hype', timestamp: '2026-04-07 18:05' },
    { id: 1393, author: 'u7v8w9x0', text: '>A Place Further Than the Universe', timestamp: '2026-04-07 18:06', replies: [
        { id: 1394, author: 'y1z2a3b4', text: 'Such a heartwarming journey', timestamp: '2026-04-07 18:08' }
      ] },
    { id: 1395, author: 'c5d6e7f8', text: 'Somali and the Forest Spirit is underrated', timestamp: '2026-04-07 18:10' },
    { id: 1396, author: 'g9h0i1j2', text: '[deleted]', timestamp: '2026-04-07 18:12' },
    { id: 1397, author: 'k3l4m5n6', text: 'The Great Pretender is criminally overlooked', timestamp: '2026-04-07 18:15' }
  ],
},
{
  id: 343,
  boardId: 4,
  title: 'Anime adaptations of manga',
  content: 'Which adaptation stayed true to the manga best?',
  authorID: 'o7p8q9r0',
  timestamp: '2026-04-07 19:00',
  comments: [
    { id: 1398, author: 's1t2u3v4', text: 'Fullmetal Alchemist Brotherhood', timestamp: '2026-04-07 19:05' },
    { id: 1399, author: 'w5x6y7z8', text: '>One Piece anime adaptation', timestamp: '2026-04-07 19:06', replies: [
        { id: 1400, author: 'a9b0c1d2', text: 'Covers manga faithfully', timestamp: '2026-04-07 19:08' }
      ] },
    { id: 1401, author: 'e3f4g5h6', text: 'Demon Slayer stays very true', timestamp: '2026-04-07 19:10' },
    { id: 1402, author: 'i7j8k9l0', text: '[deleted]', timestamp: '2026-04-07 19:12' },
    { id: 1403, author: 'm1n2o3p4', text: 'Blue Lock adaptation looks solid', timestamp: '2026-04-07 19:15' }
  ],
},
{
  id: 344,
  boardId: 4,
  title: 'Anime with the best fight scenes',
  content: 'Which shows have the most epic battles?',
  authorID: 'q5r6s7t8',
  timestamp: '2026-04-07 20:00',
  comments: [
    { id: 1404, author: 'u9v0w1x2', text: 'Demon Slayer fights are cinematic', timestamp: '2026-04-07 20:05' },
    { id: 1405, author: 'y3z4a5b6', text: '>Jujutsu Kaisen battles', timestamp: '2026-04-07 20:06', replies: [
        { id: 1406, author: 'c7d8e9f0', text: 'Animation quality is top-notch', timestamp: '2026-04-07 20:08' }
      ] },
    { id: 1407, author: 'g1h2i3j4', text: 'Attack on Titan fight sequences are insane', timestamp: '2026-04-07 20:10' },
    { id: 1408, author: 'k5l6m7n8', text: '[deleted]', timestamp: '2026-04-07 20:12' },
    { id: 1409, author: 'o9p0q1r2', text: 'Naruto Shippuden final battles are legendary', timestamp: '2026-04-07 20:15' }
  ],
},
{
  id: 345,
  boardId: 4,
  title: 'Anime with stunning art style',
  content: 'Which anime has the most visually appealing animation?',
  authorID: 's3t4u5v6',
  timestamp: '2026-04-07 21:00',
  comments: [
    { id: 1410, author: 'w7x8y9z0', text: 'Vivy: Fluorite Eye’s Song', timestamp: '2026-04-07 21:05' },
    { id: 1411, author: 'a1b2c3d4', text: '>The Tale of the Princess Kaguya', timestamp: '2026-04-07 21:06', replies: [
        { id: 1412, author: 'e5f6g7h8', text: 'Studio Ghibli magic', timestamp: '2026-04-07 21:08' }
      ] },
    { id: 1413, author: 'i9j0k1l2', text: 'Akudama Drive has a unique style', timestamp: '2026-04-07 21:10' },
    { id: 1414, author: 'm3n4o5p6', text: '[deleted]', timestamp: '2026-04-07 21:12' },
    { id: 1415, author: 'q7r8s9t0', text: 'Land of the Lustrous is visually stunning', timestamp: '2026-04-07 21:15' }
  ],
},
{
  id: 346,
  boardId: 4,
  title: 'Best anime duos',
  content: 'Which pairings are iconic in anime?',
  authorID: 'u1v2w3x4',
  timestamp: '2026-04-07 22:00',
  comments: [
    { id: 1416, author: 'y5z6a7b8', text: 'Tanjiro & Nezuko', timestamp: '2026-04-07 22:05' },
    { id: 1417, author: 'c9d0e1f2', text: '>Koro-sensei & Class 3-E', timestamp: '2026-04-07 22:06', replies: [
        { id: 1418, author: 'g3h4i5j6', text: 'Heartwarming interactions', timestamp: '2026-04-07 22:08' }
      ] },
    { id: 1419, author: 'k7l8m9n0', text: 'Edward & Alphonse Elric', timestamp: '2026-04-07 22:10' },
    { id: 1420, author: 'o1p2q3r4', text: '[deleted]', timestamp: '2026-04-07 22:12' },
    { id: 1421, author: 's5t6u7v8', text: 'Gintoki & Shinpachi', timestamp: '2026-04-07 22:15' }
  ],
},
{
  id: 347,
  boardId: 4,
  title: 'Anime that made you cry',
  content: 'Which moments hit you the hardest?',
  authorID: 'w9x0y1z2',
  timestamp: '2026-04-07 23:00',
  comments: [
    { id: 1422, author: 'a3b4c5d6', text: 'Clannad: After Story', timestamp: '2026-04-07 23:05' },
    { id: 1423, author: 'e7f8g9h0', text: '>Your Lie in April finale', timestamp: '2026-04-07 23:06', replies: [
        { id: 1424, author: 'i1j2k3l4', text: 'Tears everywhere', timestamp: '2026-04-07 23:08' }
      ] },
    { id: 1425, author: 'm5n6o7p8', text: 'Vivy: Fluorite Eye’s Song ending', timestamp: '2026-04-07 23:10' },
    { id: 1426, author: 'q9r0s1t2', text: '[deleted]', timestamp: '2026-04-07 23:12' },
    { id: 1427, author: 'u3v4w5x6', text: 'Anohana made me bawl', timestamp: '2026-04-07 23:15' }
  ],
},
{
  id: 348,
  boardId: 4,
  title: 'Anime with the best world lore',
  content: 'Which series has deep histories and cultures?',
  authorID: 'y7z8a9b0',
  timestamp: '2026-04-08 00:00',
  comments: [
    { id: 1428, author: 'c1d2e3f4', text: 'Made in Abyss', timestamp: '2026-04-08 00:05' },
    { id: 1429, author: 'g5h6i7j8', text: '>Attack on Titan', timestamp: '2026-04-08 00:06', replies: [
        { id: 1430, author: 'k9l0m1n2', text: 'Marley and Eldian history is detailed', timestamp: '2026-04-08 00:08' }
      ] },
    { id: 1431, author: 'o3p4q5r6', text: 'The world of Re:Zero is fascinating', timestamp: '2026-04-08 00:10' },
    { id: 1432, author: 's7t8u9v0', text: '[deleted]', timestamp: '2026-04-08 00:12' },
    { id: 1433, author: 'w1x2y3z4', text: 'Fate series lore is very deep', timestamp: '2026-04-08 00:15' }
  ],
},
{
  id: 349,
  boardId: 4,
  title: 'Favorite anime sidekicks',
  content: 'Who are the best supporting side characters?',
  authorID: 'a5b6c7d8',
  timestamp: '2026-04-08 01:00',
  comments: [
    { id: 1434, author: 'e9f0g1h2', text: 'Zenitsu Agatsuma', timestamp: '2026-04-08 01:05' },
    { id: 1435, author: 'i3j4k5l6', text: '>Mei from Your Lie in April', timestamp: '2026-04-08 01:06', replies: [
        { id: 1436, author: 'm7n8o9p0', text: 'Always supportive', timestamp: '2026-04-08 01:08' }
      ] },
    { id: 1437, author: 'q1r2s3t4', text: 'Leorio from Hunter x Hunter', timestamp: '2026-04-08 01:10' },
    { id: 1438, author: 'u5v6w7x8', text: '[deleted]', timestamp: '2026-04-08 01:12' },
    { id: 1439, author: 'y9z0a1b2', text: 'Koro-sensei for comic relief', timestamp: '2026-04-08 01:15' }
  ],
},
{
  id: 350,
  boardId: 4,
  title: 'Anime that inspired you',
  content: 'Which shows motivated you in life or creativity?',
  authorID: 'c3d4e5f6',
  timestamp: '2026-04-08 02:00',
  comments: [
    { id: 1440, author: 'g7h8i9j0', text: 'Haikyuu motivated me to exercise', timestamp: '2026-04-08 02:05' },
    { id: 1441, author: 'k1l2m3n4', text: '>Shokugeki no Soma inspired cooking', timestamp: '2026-04-08 02:06', replies: [
        { id: 1442, author: 'o5p6q7r8', text: 'I tried new recipes because of it', timestamp: '2026-04-08 02:08' }
      ] },
    { id: 1443, author: 's9t0u1v2', text: 'Free! inspired me to swim', timestamp: '2026-04-08 02:10' },
    { id: 1444, author: 'w3x4y5z6', text: '[deleted]', timestamp: '2026-04-08 02:12' },
    { id: 1445, author: 'a7b8c9d0', text: 'Your Lie in April motivated me to practice piano', timestamp: '2026-04-08 02:15' }
  ],
},

{
  id: 361,
  boardId: 5,
  title: 'Remote work vs. office life',
  content: 'Which setup do you find more productive for your team?',
  authorID: 'b1c2d3e4',
  timestamp: '2026-04-08 08:00',
  comments: [
    { id: 1446, author: 'f5g6h7i8', text: 'Remote allows better focus', timestamp: '2026-04-08 08:10' },
    { id: 1447, author: 'j9k0l1m2', text: '>Hybrid seems ideal', timestamp: '2026-04-08 08:12', replies: [
        { id: 1448, author: 'n3o4p5q6', text: 'You get flexibility without losing collaboration', timestamp: '2026-04-08 08:15' }
      ] },
    { id: 1449, author: 'r7s8t9u0', text: 'In-office fosters culture better', timestamp: '2026-04-08 08:20' },
    { id: 1450, author: 'v1w2x3y4', text: '[deleted]', timestamp: '2026-04-08 08:22' },
    { id: 1451, author: 'z5a6b7c8', text: 'Depends on your role and personality', timestamp: '2026-04-08 08:25' }
  ],
},
{
  id: 362,
  boardId: 5,
  title: 'Startups vs. Corporations',
  content: 'Would you rather work at a startup or a big company?',
  authorID: 'd9e0f1g2',
  timestamp: '2026-04-08 09:00',
  comments: [
    { id: 1452, author: 'h3i4j5k6', text: 'Startups are exciting but risky', timestamp: '2026-04-08 09:05' },
    { id: 1453, author: 'l7m8n9o0', text: '>Corporations offer stability', timestamp: '2026-04-08 09:06', replies: [
        { id: 1454, author: 'p1q2r3s4', text: 'Benefits and structure are solid', timestamp: '2026-04-08 09:08' }
      ] },
    { id: 1455, author: 't5u6v7w8', text: 'Startups teach you a lot quickly', timestamp: '2026-04-08 09:10' },
    { id: 1456, author: 'x9y0z1a2', text: '[deleted]', timestamp: '2026-04-08 09:12' },
    { id: 1457, author: 'b3c4d5e6', text: 'Depends on your risk appetite', timestamp: '2026-04-08 09:15' }
  ],
},
{
  id: 363,
  boardId: 5,
  title: 'Work-life balance tips for managers',
  content: 'How do you prevent burnout while leading teams?',
  authorID: 'f7g8h9i0',
  timestamp: '2026-04-08 10:00',
  comments: [
    { id: 1458, author: 'j1k2l3m4', text: 'Delegate tasks effectively', timestamp: '2026-04-08 10:05' },
    { id: 1459, author: 'n5o6p7q8', text: '>Schedule breaks and stick to them', timestamp: '2026-04-08 10:06', replies: [
        { id: 1460, author: 'r9s0t1u2', text: 'Helps prevent micro-burnout', timestamp: '2026-04-08 10:08' }
      ] },
    { id: 1461, author: 'v3w4x5y6', text: 'Use tools to track workload', timestamp: '2026-04-08 10:10' },
    { id: 1462, author: 'z7a8b9c0', text: '[deleted]', timestamp: '2026-04-08 10:12' },
    { id: 1463, author: 'd1e2f3g4', text: 'Don’t skip personal time for emails', timestamp: '2026-04-08 10:15' }
  ],
},
{
  id: 364,
  boardId: 5,
  title: 'Best productivity apps for professionals',
  content: 'Which apps help you stay focused and organized?',
  authorID: 'h5i6j7k8',
  timestamp: '2026-04-08 11:00',
  comments: [
    { id: 1464, author: 'l9m0n1o2', text: 'Notion for project tracking', timestamp: '2026-04-08 11:05' },
    { id: 1465, author: 'p3q4r5s6', text: '>Todoist for tasks', timestamp: '2026-04-08 11:06', replies: [
        { id: 1466, author: 't7u8v9w0', text: 'Helps prioritize effectively', timestamp: '2026-04-08 11:08' }
      ] },
    { id: 1467, author: 'x1y2z3a4', text: 'Slack for communication', timestamp: '2026-04-08 11:10' },
    { id: 1468, author: 'b5c6d7e8', text: '[deleted]', timestamp: '2026-04-08 11:12' },
    { id: 1469, author: 'f9g0h1i2', text: 'Google Calendar keeps me sane', timestamp: '2026-04-08 11:15' }
  ],
},
{
  id: 365,
  boardId: 5,
  title: 'Networking strategies that work',
  content: 'How do you grow meaningful professional connections?',
  authorID: 'j3k4l5m6',
  timestamp: '2026-04-08 12:00',
  comments: [
    { id: 1470, author: 'n7o8p9q0', text: 'Attend industry events', timestamp: '2026-04-08 12:05' },
    { id: 1471, author: 'r1s2t3u4', text: '>LinkedIn outreach works', timestamp: '2026-04-08 12:06', replies: [
        { id: 1472, author: 'v5w6x7y8', text: 'Personalized messages are key', timestamp: '2026-04-08 12:08' }
      ] },
    { id: 1473, author: 'z9a0b1c2', text: 'Volunteer in your field', timestamp: '2026-04-08 12:10' },
    { id: 1474, author: 'd3e4f5g6', text: '[deleted]', timestamp: '2026-04-08 12:12' },
    { id: 1475, author: 'h7i8j9k0', text: 'Mentorship programs are underrated', timestamp: '2026-04-08 12:15' }
  ],
},
{
  id: 366,
  boardId: 5,
  title: 'Latest trends in AI for business',
  content: 'Which AI tools are transforming workplaces today?',
  authorID: 'l1m2n3o4',
  timestamp: '2026-04-08 13:00',
  comments: [
    { id: 1476, author: 'p5q6r7s8', text: 'ChatGPT for content and support', timestamp: '2026-04-08 13:05' },
    { id: 1477, author: 't9u0v1w2', text: '>AI for data analytics is huge', timestamp: '2026-04-08 13:06', replies: [
        { id: 1478, author: 'x3y4z5a6', text: 'Predictive insights save time', timestamp: '2026-04-08 13:08' }
      ] },
    { id: 1479, author: 'b7c8d9e0', text: 'Automation tools reduce repetitive work', timestamp: '2026-04-08 13:10' },
    { id: 1480, author: 'f1g2h3i4', text: '[deleted]', timestamp: '2026-04-08 13:12' },
    { id: 1481, author: 'j5k6l7m8', text: 'AI-driven marketing is impressive', timestamp: '2026-04-08 13:15' }
  ],
},
{
  id: 367,
  boardId: 5,
  title: 'Most effective leadership styles',
  content: 'What leadership approaches actually motivate teams?',
  authorID: 'n9o0p1q2',
  timestamp: '2026-04-08 14:00',
  comments: [
    { id: 1482, author: 'r3s4t5u6', text: 'Servant leadership works wonders', timestamp: '2026-04-08 14:05' },
    { id: 1483, author: 'v7w8x9y0', text: '>Transformational leadership', timestamp: '2026-04-08 14:06', replies: [
        { id: 1484, author: 'z1a2b3c4', text: 'Inspires innovation', timestamp: '2026-04-08 14:08' }
      ] },
    { id: 1485, author: 'd5e6f7g8', text: 'Democratic style encourages engagement', timestamp: '2026-04-08 14:10' },
    { id: 1486, author: 'h9i0j1k2', text: '[deleted]', timestamp: '2026-04-08 14:12' },
    { id: 1487, author: 'l3m4n5o6', text: 'Coaching style is underrated', timestamp: '2026-04-08 14:15' }
  ],
},
{
  id: 368,
  boardId: 5,
  title: 'Small business funding options',
  content: 'What’s the best way to finance a new venture?',
  authorID: 'p7q8r9s0',
  timestamp: '2026-04-08 15:00',
  comments: [
    { id: 1488, author: 't1u2v3w4', text: 'Angel investors if you have a pitch', timestamp: '2026-04-08 15:05' },
    { id: 1489, author: 'x5y6z7a8', text: '>Crowdfunding works for niche products', timestamp: '2026-04-08 15:06', replies: [
        { id: 1490, author: 'b9c0d1e2', text: 'Kickstarter is popular', timestamp: '2026-04-08 15:08' }
      ] },
    { id: 1491, author: 'f3g4h5i6', text: 'Bank loans are safe but slow', timestamp: '2026-04-08 15:10' },
    { id: 1492, author: 'j7k8l9m0', text: '[deleted]', timestamp: '2026-04-08 15:12' },
    { id: 1493, author: 'n1o2p3q4', text: 'VCs are tricky but rewarding', timestamp: '2026-04-08 15:15' }
  ],
},
{
  id: 369,
  boardId: 5,
  title: 'Marketing strategies in 2026',
  content: 'Which campaigns are most effective now?',
  authorID: 'r5s6t7u8',
  timestamp: '2026-04-08 16:00',
  comments: [
    { id: 1494, author: 'v9w0x1y2', text: 'Social media influencer campaigns', timestamp: '2026-04-08 16:05' },
    { id: 1495, author: 'z3a4b5c6', text: '>Email marketing still converts', timestamp: '2026-04-08 16:06', replies: [
        { id: 1496, author: 'd7e8f9g0', text: 'Personalized sequences perform best', timestamp: '2026-04-08 16:08' }
      ] },
    { id: 1497, author: 'h1i2j3k4', text: 'Content marketing with SEO is essential', timestamp: '2026-04-08 16:10' },
    { id: 1498, author: 'l5m6n7o8', text: '[deleted]', timestamp: '2026-04-08 16:12' },
    { id: 1499, author: 'p9q0r1s2', text: 'Webinars engage B2B customers', timestamp: '2026-04-08 16:15' }
  ],
},
{
  id: 370,
  boardId: 5,
  title: 'Scaling a business sustainably',
  content: 'How do you grow without overextending resources?',
  authorID: 't3u4v5w6',
  timestamp: '2026-04-08 17:00',
  comments: [
    { id: 1500, author: 'x7y8z9a0', text: 'Automate processes wherever possible', timestamp: '2026-04-08 17:05' },
    { id: 1501, author: 'b1c2d3e4', text: '>Focus on core products first', timestamp: '2026-04-08 17:06', replies: [
        { id: 1502, author: 'f5g6h7i8', text: 'Avoid branching too early', timestamp: '2026-04-08 17:08' }
      ] },
    { id: 1503, author: 'j9k0l1m2', text: 'Hire cautiously and strategically', timestamp: '2026-04-08 17:10' },
    { id: 1504, author: 'n3o4p5q6', text: '[deleted]', timestamp: '2026-04-08 17:12' },
    { id: 1505, author: 'r7s8t9u0', text: 'Track KPIs closely', timestamp: '2026-04-08 17:15' }
  ],
},
{
  id: 371,
  boardId: 5,
  title: 'Remote team collaboration tools',
  content: 'Which platforms work best for distributed teams?',
  authorID: 'v1w2x3y4',
  timestamp: '2026-04-09 08:00',
  comments: [
    { id: 1506, author: 'z5a6b7c8', text: 'Slack for communication', timestamp: '2026-04-09 08:05' },
    { id: 1507, author: 'd9e0f1g2', text: '>Notion for project tracking', timestamp: '2026-04-09 08:06', replies: [
        { id: 1508, author: 'h3i4j5k6', text: 'Makes async work easier', timestamp: '2026-04-09 08:08' }
      ] },
    { id: 1509, author: 'l7m8n9o0', text: 'Zoom for regular check-ins', timestamp: '2026-04-09 08:10' },
    { id: 1510, author: 'p1q2r3s4', text: '[deleted]', timestamp: '2026-04-09 08:12' },
    { id: 1511, author: 't5u6v7w8', text: 'Miro for visual collaboration', timestamp: '2026-04-09 08:15' }
  ],
},
{
  id: 372,
  boardId: 5,
  title: 'Effective business networking',
  content: 'What strategies help you build lasting professional relationships?',
  authorID: 'x9y0z1a2',
  timestamp: '2026-04-09 09:00',
  comments: [
    { id: 1512, author: 'b3c4d5e6', text: 'Attend conferences', timestamp: '2026-04-09 09:05' },
    { id: 1513, author: 'f9g0h1i2', text: '>Follow up consistently', timestamp: '2026-04-09 09:06', replies: [
        { id: 1514, author: 'j3k4l5m6', text: 'Even short notes matter', timestamp: '2026-04-09 09:08' }
      ] },
    { id: 1515, author: 'n7o8p9q0', text: 'LinkedIn messages are key', timestamp: '2026-04-09 09:10' },
    { id: 1516, author: 'r1s2t3u4', text: '[deleted]', timestamp: '2026-04-09 09:12' },
    { id: 1517, author: 'v5w6x7y8', text: 'Mentorships expand network fast', timestamp: '2026-04-09 09:15' }
  ],
},
{
  id: 373,
  boardId: 5,
  title: 'Time management hacks',
  content: 'How do you stay productive without burning out?',
  authorID: 'z9a0b1c2',
  timestamp: '2026-04-09 10:00',
  comments: [
    { id: 1518, author: 'd3e4f5g6', text: 'Time-blocking is essential', timestamp: '2026-04-09 10:05' },
    { id: 1519, author: 'h7i8j9k0', text: '>Use Pomodoro technique', timestamp: '2026-04-09 10:06', replies: [
        { id: 1520, author: 'l1m2n3o4', text: 'Short sprints really help focus', timestamp: '2026-04-09 10:08' }
      ] },
    { id: 1521, author: 'p5q6r7s8', text: 'Prioritize tasks daily', timestamp: '2026-04-09 10:10' },
    { id: 1522, author: 't9u0v1w2', text: '[deleted]', timestamp: '2026-04-09 10:12' },
    { id: 1523, author: 'x3y4z5a6', text: 'Avoid multitasking at all costs', timestamp: '2026-04-09 10:15' }
  ],
},
{
  id: 374,
  boardId: 5,
  title: 'Pitching to investors',
  content: 'What makes a startup pitch stand out?',
  authorID: 'b7c8d9e0',
  timestamp: '2026-04-09 11:00',
  comments: [
    { id: 1524, author: 'f1g2h3i4', text: 'Clear problem and solution', timestamp: '2026-04-09 11:05' },
    { id: 1525, author: 'j5k6l7m8', text: '>Show traction data', timestamp: '2026-04-09 11:06', replies: [
        { id: 1526, author: 'n1o2p3q4', text: 'Metrics speak louder than words', timestamp: '2026-04-09 11:08' }
      ] },
    { id: 1527, author: 'r5s6t7u8', text: 'Strong team slide is crucial', timestamp: '2026-04-09 11:10' },
    { id: 1528, author: 'v9w0x1y2', text: '[deleted]', timestamp: '2026-04-09 11:12' },
    { id: 1529, author: 'z3a4b5c6', text: 'Practice storytelling for impact', timestamp: '2026-04-09 11:15' }
  ],
},
{
  id: 375,
  boardId: 5,
  title: 'Remote hiring challenges',
  content: 'How do you evaluate candidates effectively online?',
  authorID: 'd7e8f9g0',
  timestamp: '2026-04-09 12:00',
  comments: [
    { id: 1530, author: 'h1i2j3k4', text: 'Structured interviews are key', timestamp: '2026-04-09 12:05' },
    { id: 1531, author: 'l5m6n7o8', text: '>Test projects reveal skills', timestamp: '2026-04-09 12:06', replies: [
        { id: 1532, author: 'p9q0r1s2', text: 'Real-world tasks > theory', timestamp: '2026-04-09 12:08' }
      ] },
    { id: 1533, author: 't3u4v5w6', text: 'Check cultural fit via video calls', timestamp: '2026-04-09 12:10' },
    { id: 1534, author: 'x7y8z9a0', text: '[deleted]', timestamp: '2026-04-09 12:12' },
    { id: 1535, author: 'b1c2d3e4', text: 'Reference checks still matter', timestamp: '2026-04-09 12:15' }
  ],
},
{
  id: 376,
  boardId: 5,
  title: 'Emerging fintech trends',
  content: 'Which innovations are disrupting banking today?',
  authorID: 'f5g6h7i8',
  timestamp: '2026-04-09 13:00',
  comments: [
    { id: 1536, author: 'j9k0l1m2', text: 'AI-driven credit scoring', timestamp: '2026-04-09 13:05' },
    { id: 1537, author: 'n3o4p5q6', text: '>Decentralized finance (DeFi)', timestamp: '2026-04-09 13:06', replies: [
        { id: 1538, author: 'r7s8t9u0', text: 'Smart contracts are game-changers', timestamp: '2026-04-09 13:08' }
      ] },
    { id: 1539, author: 'v1w2x3y4', text: 'Payment apps becoming dominant', timestamp: '2026-04-09 13:10' },
    { id: 1540, author: 'z5a6b7c8', text: '[deleted]', timestamp: '2026-04-09 13:12' },
    { id: 1541, author: 'd9e0f1g2', text: 'Blockchain for transparency', timestamp: '2026-04-09 13:15' }
  ],
},
{
  id: 377,
  boardId: 5,
  title: 'Sustainable business practices',
  content: 'How do companies integrate sustainability effectively?',
  authorID: 'h3i4j5k6',
  timestamp: '2026-04-09 14:00',
  comments: [
    { id: 1542, author: 'l7m8n9o0', text: 'Use eco-friendly materials', timestamp: '2026-04-09 14:05' },
    { id: 1543, author: 'p1q2r3s4', text: '>Transparent supply chains', timestamp: '2026-04-09 14:06', replies: [
        { id: 1544, author: 't5u6v7w8', text: 'Customers value ethics', timestamp: '2026-04-09 14:08' }
      ] },
    { id: 1545, author: 'x9y0z1a2', text: 'Carbon offset programs', timestamp: '2026-04-09 14:10' },
    { id: 1546, author: 'b3c4d5e6', text: '[deleted]', timestamp: '2026-04-09 14:12' },
    { id: 1547, author: 'f9g0h1i2', text: 'Employee engagement matters', timestamp: '2026-04-09 14:15' }
  ],
},
{
  id: 378,
  boardId: 5,
  title: 'Corporate culture shifts',
  content: 'What changes are shaping company culture in 2026?',
  authorID: 'j3k4l5m6',
  timestamp: '2026-04-09 15:00',
  comments: [
    { id: 1548, author: 'n7o8p9q0', text: 'Hybrid work is mainstream now', timestamp: '2026-04-09 15:05' },
    { id: 1549, author: 'r1s2t3u4', text: '>Inclusivity and diversity', timestamp: '2026-04-09 15:06', replies: [
        { id: 1550, author: 'v5w6x7y8', text: 'Representation matters at all levels', timestamp: '2026-04-09 15:08' }
      ] },
    { id: 1551, author: 'z3a4b5c6', text: 'Employee wellbeing programs', timestamp: '2026-04-09 15:10' },
    { id: 1552, author: 'd7e8f9g0', text: '[deleted]', timestamp: '2026-04-09 15:12' },
    { id: 1553, author: 'h1i2j3k4', text: 'Transparent leadership is key', timestamp: '2026-04-09 15:15' }
  ],
},
{
  id: 379,
  boardId: 5,
  title: 'Digital marketing ROI',
  content: 'How do you measure online campaign effectiveness?',
  authorID: 'l5m6n7o8',
  timestamp: '2026-04-09 16:00',
  comments: [
    { id: 1554, author: 'p9q0r1s2', text: 'Conversion rates are primary', timestamp: '2026-04-09 16:05' },
    { id: 1555, author: 't3u4v5w6', text: '>Engagement metrics matter too', timestamp: '2026-04-09 16:06', replies: [
        { id: 1556, author: 'x7y8z9a0', text: 'Click-throughs give insight', timestamp: '2026-04-09 16:08' }
      ] },
    { id: 1557, author: 'b1c2d3e4', text: 'Customer acquisition cost', timestamp: '2026-04-09 16:10' },
    { id: 1558, author: 'f5g6h7i8', text: '[deleted]', timestamp: '2026-04-09 16:12' },
    { id: 1559, author: 'j9k0l1m2', text: 'Lifetime value tracking is essential', timestamp: '2026-04-09 16:15' }
  ],
},
{
  id: 380,
  boardId: 5,
  title: 'Entrepreneurship mindset',
  content: 'What habits distinguish successful founders?',
  authorID: 'n3o4p5q6',
  timestamp: '2026-04-09 17:00',
  comments: [
    { id: 1560, author: 'r7s8t9u0', text: 'Persistence above all', timestamp: '2026-04-09 17:05' },
    { id: 1561, author: 'v1w2x3y4', text: '>Continuous learning', timestamp: '2026-04-09 17:06', replies: [
        { id: 1562, author: 'z5a6b7c8', text: 'Adapt quickly to market changes', timestamp: '2026-04-09 17:08' }
      ] },
    { id: 1563, author: 'd9e0f1g2', text: 'Networking relentlessly', timestamp: '2026-04-09 17:10' },
    { id: 1564, author: 'h3i4j5k6', text: '[deleted]', timestamp: '2026-04-09 17:12' },
    { id: 1565, author: 'l7m8n9o0', text: 'Time management and discipline', timestamp: '2026-04-09 17:15' }
  ],
},

{
  id: 381,
  boardId: 5,
  title: 'Trends in AI for business',
  content: 'Which AI applications are actually improving efficiency in 2026?',
  authorID: 'p1q2r3s4',
  timestamp: '2026-04-10 08:00',
  comments: [
    { id: 1566, author: 't5u6v7w8', text: 'Automated customer support', timestamp: '2026-04-10 08:05' },
    { id: 1567, author: 'x9y0z1a2', text: '>Predictive analytics', timestamp: '2026-04-10 08:06', replies: [
        { id: 1568, author: 'b3c4d5e6', text: 'Forecasting demand helps reduce costs', timestamp: '2026-04-10 08:08' }
      ] },
    { id: 1569, author: 'f9g0h1i2', text: 'AI-driven marketing personalization', timestamp: '2026-04-10 08:10' },
    { id: 1570, author: 'j3k4l5m6', text: '[deleted]', timestamp: '2026-04-10 08:12' },
    { id: 1571, author: 'n7o8p9q0', text: 'AI-powered inventory management', timestamp: '2026-04-10 08:15' }
  ],
},
{
  id: 382,
  boardId: 5,
  title: 'Scaling a startup',
  content: 'How do you scale operations without losing quality?',
  authorID: 'r1s2t3u4',
  timestamp: '2026-04-10 09:00',
  comments: [
    { id: 1572, author: 'v5w6x7y8', text: 'Standardize processes first', timestamp: '2026-04-10 09:05' },
    { id: 1573, author: 'z3a4b5c6', text: '>Hire experienced managers', timestamp: '2026-04-10 09:06', replies: [
        { id: 1574, author: 'd7e8f9g0', text: 'They maintain quality as you expand', timestamp: '2026-04-10 09:08' }
      ] },
    { id: 1575, author: 'h1i2j3k4', text: 'Invest in training', timestamp: '2026-04-10 09:10' },
    { id: 1576, author: 'l5m6n7o8', text: '[deleted]', timestamp: '2026-04-10 09:12' },
    { id: 1577, author: 'p9q0r1s2', text: 'Maintain culture intentionally', timestamp: '2026-04-10 09:15' }
  ],
},
{
  id: 383,
  boardId: 5,
  title: 'Managing remote employees',
  content: 'How do you keep productivity high in remote teams?',
  authorID: 't3u4v5w6',
  timestamp: '2026-04-10 10:00',
  comments: [
    { id: 1578, author: 'x7y8z9a0', text: 'Set clear expectations', timestamp: '2026-04-10 10:05' },
    { id: 1579, author: 'b1c2d3e4', text: '>Regular check-ins', timestamp: '2026-04-10 10:06', replies: [
        { id: 1580, author: 'f5g6h7i8', text: 'Short daily standups work well', timestamp: '2026-04-10 10:08' }
      ] },
    { id: 1581, author: 'j9k0l1m2', text: 'Use collaborative tools', timestamp: '2026-04-10 10:10' },
    { id: 1582, author: 'n3o4p5q6', text: '[deleted]', timestamp: '2026-04-10 10:12' },
    { id: 1583, author: 'r7s8t9u0', text: 'Trust employees with autonomy', timestamp: '2026-04-10 10:15' }
  ],
},
{
  id: 384,
  boardId: 5,
  title: 'Investing in startups',
  content: 'What do investors look for in 2026?',
  authorID: 'v1w2x3y4',
  timestamp: '2026-04-10 11:00',
  comments: [
    { id: 1584, author: 'z5a6b7c8', text: 'Strong team and execution', timestamp: '2026-04-10 11:05' },
    { id: 1585, author: 'd9e0f1g2', text: '>Market potential', timestamp: '2026-04-10 11:06', replies: [
        { id: 1586, author: 'h3i4j5k6', text: 'Even small niches can be valuable', timestamp: '2026-04-10 11:08' }
      ] },
    { id: 1587, author: 'l7m8n9o0', text: 'Clear revenue model', timestamp: '2026-04-10 11:10' },
    { id: 1588, author: 'p1q2r3s4', text: '[deleted]', timestamp: '2026-04-10 11:12' },
    { id: 1589, author: 't5u6v7w8', text: 'Traction metrics impress investors', timestamp: '2026-04-10 11:15' }
  ],
},
{
  id: 385,
  boardId: 5,
  title: 'Effective negotiation tactics',
  content: 'How do you close deals successfully?',
  authorID: 'x9y0z1a2',
  timestamp: '2026-04-10 12:00',
  comments: [
    { id: 1590, author: 'b3c4d5e6', text: 'Understand the other party’s needs', timestamp: '2026-04-10 12:05' },
    { id: 1591, author: 'f9g0h1i2', text: '>Build rapport first', timestamp: '2026-04-10 12:06', replies: [
        { id: 1592, author: 'j3k4l5m6', text: 'Trust makes negotiation smoother', timestamp: '2026-04-10 12:08' }
      ] },
    { id: 1593, author: 'n7o8p9q0', text: 'Have clear objectives', timestamp: '2026-04-10 12:10' },
    { id: 1594, author: 'r1s2t3u4', text: '[deleted]', timestamp: '2026-04-10 12:12' },
    { id: 1595, author: 'v5w6x7y8', text: 'Be ready to walk away', timestamp: '2026-04-10 12:15' }
  ],
},
{
  id: 386,
  boardId: 5,
  title: 'Data privacy regulations',
  content: 'How are businesses adapting to new privacy laws?',
  authorID: 'z3a4b5c6',
  timestamp: '2026-04-10 13:00',
  comments: [
    { id: 1596, author: 'd7e8f9g0', text: 'Compliance is top priority', timestamp: '2026-04-10 13:05' },
    { id: 1597, author: 'h1i2j3k4', text: '>Regular audits', timestamp: '2026-04-10 13:06', replies: [
        { id: 1598, author: 'l5m6n7o8', text: 'Avoid hefty fines', timestamp: '2026-04-10 13:08' }
      ] },
    { id: 1599, author: 'p9q0r1s2', text: 'Train employees on privacy policies', timestamp: '2026-04-10 13:10' },
    { id: 1600, author: 't3u4v5w6', text: '[deleted]', timestamp: '2026-04-10 13:12' },
    { id: 1601, author: 'x7y8z9a0', text: 'Use privacy-first tech tools', timestamp: '2026-04-10 13:15' }
  ],
},
{
  id: 387,
  boardId: 5,
  title: 'Mergers and acquisitions',
  content: 'What factors make M&As successful?',
  authorID: 'b1c2d3e4',
  timestamp: '2026-04-10 14:00',
  comments: [
    { id: 1602, author: 'f5g6h7i8', text: 'Cultural integration matters most', timestamp: '2026-04-10 14:05' },
    { id: 1603, author: 'j9k0l1m2', text: '>Due diligence on finances', timestamp: '2026-04-10 14:06', replies: [
        { id: 1604, author: 'n3o4p5q6', text: 'Hidden liabilities can ruin deals', timestamp: '2026-04-10 14:08' }
      ] },
    { id: 1605, author: 'r7s8t9u0', text: 'Strategic fit of products/services', timestamp: '2026-04-10 14:10' },
    { id: 1606, author: 'v1w2x3y4', text: '[deleted]', timestamp: '2026-04-10 14:12' },
    { id: 1607, author: 'z5a6b7c8', text: 'Clear post-merger roadmap', timestamp: '2026-04-10 14:15' }
  ],
},
{
  id: 388,
  boardId: 5,
  title: 'Global supply chain risks',
  content: 'How do businesses mitigate international disruptions?',
  authorID: 'd9e0f1g2',
  timestamp: '2026-04-10 15:00',
  comments: [
    { id: 1608, author: 'h3i4j5k6', text: 'Diversify suppliers', timestamp: '2026-04-10 15:05' },
    { id: 1609, author: 'l7m8n9o0', text: '>Stockpile critical materials', timestamp: '2026-04-10 15:06', replies: [
        { id: 1610, author: 'p1q2r3s4', text: 'Avoid over-reliance on one country', timestamp: '2026-04-10 15:08' }
      ] },
    { id: 1611, author: 't5u6v7w8', text: 'Real-time supply chain monitoring', timestamp: '2026-04-10 15:10' },
    { id: 1612, author: 'x9y0z1a2', text: '[deleted]', timestamp: '2026-04-10 15:12' },
    { id: 1613, author: 'b3c4d5e6', text: 'Flexible contracts with vendors', timestamp: '2026-04-10 15:15' }
  ],
},
{
  id: 389,
  boardId: 5,
  title: 'Employee retention strategies',
  content: 'What keeps top talent from leaving?',
  authorID: 'f9g0h1i2',
  timestamp: '2026-04-10 16:00',
  comments: [
    { id: 1614, author: 'j3k4l5m6', text: 'Competitive compensation', timestamp: '2026-04-10 16:05' },
    { id: 1615, author: 'n7o8p9q0', text: '>Career growth opportunities', timestamp: '2026-04-10 16:06', replies: [
        { id: 1616, author: 'r1s2t3u4', text: 'Mentorship programs help a lot', timestamp: '2026-04-10 16:08' }
      ] },
    { id: 1617, author: 'v5w6x7y8', text: 'Positive work culture', timestamp: '2026-04-10 16:10' },
    { id: 1618, author: 'z3a4b5c6', text: '[deleted]', timestamp: '2026-04-10 16:12' },
    { id: 1619, author: 'd7e8f9g0', text: 'Recognition and rewards', timestamp: '2026-04-10 16:15' }
  ],
},
{
  id: 390,
  boardId: 5,
  title: 'Business strategy in uncertain markets',
  content: 'How do companies pivot during economic instability?',
  authorID: 'h1i2j3k4',
  timestamp: '2026-04-10 17:00',
  comments: [
    { id: 1620, author: 'l5m6n7o8', text: 'Scenario planning', timestamp: '2026-04-10 17:05' },
    { id: 1621, author: 'p9q0r1s2', text: '>Flexible budgets', timestamp: '2026-04-10 17:06', replies: [
        { id: 1622, author: 't3u4v5w6', text: 'Reduces risk when conditions change', timestamp: '2026-04-10 17:08' }
      ] },
    { id: 1623, author: 'x7y8z9a0', text: 'Diversify revenue streams', timestamp: '2026-04-10 17:10' },
    { id: 1624, author: 'b1c2d3e4', text: '[deleted]', timestamp: '2026-04-10 17:12' },
    { id: 1625, author: 'f5g6h7i8', text: 'Monitor competitors closely', timestamp: '2026-04-10 17:15' }
  ],
},

{
  id: 401,
  boardId: 6,
  title: 'Site Maintenance Scheduled',
  content: 'The platform will undergo maintenance on April 15 from 02:00 to 06:00 UTC. Expect brief downtime.',
  authorID: 'admin_001',
  timestamp: '2026-04-05 09:00',
  comments: [
    { id: 1700, author: 'user_101', text: 'Thanks for the heads up!', timestamp: '2026-04-05 09:05' },
    { id: 1701, author: 'user_102', text: '>Will data be affected?', timestamp: '2026-04-05 09:06', replies: [
        { id: 1702, author: 'admin_001', text: 'No, all data will remain safe', timestamp: '2026-04-05 09:08' }
      ] },
    { id: 1703, author: 'user_103', text: 'Appreciate the notice', timestamp: '2026-04-05 09:10' },
    { id: 1704, author: 'user_104', text: '[deleted]', timestamp: '2026-04-05 09:12' },
    { id: 1705, author: 'user_105', text: 'Will there be a status update afterward?', timestamp: '2026-04-05 09:15' }
  ],
},
{
  id: 402,
  boardId: 6,
  title: 'New Feature: Dark Mode',
  content: 'Dark mode is now available! You can toggle it in settings.',
  authorID: 'admin_002',
  timestamp: '2026-04-06 10:00',
  comments: [
    { id: 1706, author: 'user_106', text: 'Finally! Been waiting for this.', timestamp: '2026-04-06 10:05' },
    { id: 1707, author: 'user_107', text: '>Is it automatic or manual?', timestamp: '2026-04-06 10:06', replies: [
        { id: 1708, author: 'admin_002', text: 'Manual toggle in settings only', timestamp: '2026-04-06 10:08' }
      ] },
    { id: 1709, author: 'user_108', text: 'Works perfectly on my device', timestamp: '2026-04-06 10:10' },
    { id: 1710, author: 'user_109', text: '[deleted]', timestamp: '2026-04-06 10:12' },
    { id: 1711, author: 'user_110', text: 'Please add scheduled dark mode next!', timestamp: '2026-04-06 10:15' }
  ],
},
{
  id: 403,
  boardId: 6,
  title: 'Community Guidelines Update',
  content: 'We have updated our community rules. Please review the new policies to stay compliant.',
  authorID: 'admin_003',
  timestamp: '2026-04-06 12:00',
  comments: [
    { id: 1712, author: 'user_111', text: 'Noted!', timestamp: '2026-04-06 12:05' },
    { id: 1713, author: 'user_112', text: '>Any major changes?', timestamp: '2026-04-06 12:06', replies: [
        { id: 1714, author: 'admin_003', text: 'Mostly clarifications on post moderation', timestamp: '2026-04-06 12:08' }
      ] },
    { id: 1715, author: 'user_113', text: 'Thanks for keeping us informed', timestamp: '2026-04-06 12:10' },
    { id: 1716, author: 'user_114', text: '[deleted]', timestamp: '2026-04-06 12:12' },
    { id: 1717, author: 'user_115', text: 'Will the old posts be reviewed?', timestamp: '2026-04-06 12:15' }
  ],
},
{
  id: 404,
  boardId: 6,
  title: 'App Version 2.3 Released',
  content: 'Version 2.3 includes bug fixes and performance improvements. Update now!',
  authorID: 'admin_001',
  timestamp: '2026-04-07 08:30',
  comments: [
    { id: 1718, author: 'user_116', text: 'Downloading now', timestamp: '2026-04-07 08:35' },
    { id: 1719, author: 'user_117', text: '>Changelog link?', timestamp: '2026-04-07 08:36', replies: [
        { id: 1720, author: 'admin_001', text: 'https:
      ] },
    { id: 1721, author: 'user_118', text: 'App seems faster', timestamp: '2026-04-07 08:40' },
    { id: 1722, author: 'user_119', text: '[deleted]', timestamp: '2026-04-07 08:42' },
    { id: 1723, author: 'user_120', text: 'Fixed the notification bug too!', timestamp: '2026-04-07 08:45' }
  ],
},
{
  id: 405,
  boardId: 6,
  title: 'Weekly Server Downtime',
  content: 'Reminder: our servers undergo weekly maintenance every Tuesday at 03:00 UTC.',
  authorID: 'admin_002',
  timestamp: '2026-04-07 09:00',
  comments: [
    { id: 1724, author: 'user_121', text: 'Thanks for the reminder', timestamp: '2026-04-07 09:05' },
    { id: 1725, author: 'user_122', text: '>Will it affect mobile users?', timestamp: '2026-04-07 09:06', replies: [
        { id: 1726, author: 'admin_002', text: 'Yes, briefly, so plan accordingly', timestamp: '2026-04-07 09:08' }
      ] },
    { id: 1727, author: 'user_123', text: 'Noted, will avoid logging in then', timestamp: '2026-04-07 09:10' },
    { id: 1728, author: 'user_124', text: '[deleted]', timestamp: '2026-04-07 09:12' },
    { id: 1729, author: 'user_125', text: 'Hope maintenance goes smoothly', timestamp: '2026-04-07 09:15' }
  ],
},
{
  id: 406,
  boardId: 6,
  title: 'Introducing User Badges',
  content: 'Earn badges for participation, contributions, and engagement. Check your profile for details.',
  authorID: 'admin_003',
  timestamp: '2026-04-08 10:00',
  comments: [
    { id: 1730, author: 'user_126', text: 'Excited to see badges!', timestamp: '2026-04-08 10:05' },
    { id: 1731, author: 'user_127', text: '>Are badges visible publicly?', timestamp: '2026-04-08 10:06', replies: [
        { id: 1732, author: 'admin_003', text: 'Yes, shown on your profile', timestamp: '2026-04-08 10:08' }
      ] },
    { id: 1733, author: 'user_128', text: 'Love gamification features', timestamp: '2026-04-08 10:10' },
    { id: 1734, author: 'user_129', text: '[deleted]', timestamp: '2026-04-08 10:12' },
    { id: 1735, author: 'user_130', text: 'Can we trade badges?', timestamp: '2026-04-08 10:15' }
  ],
},
{
  id: 407,
  boardId: 6,
  title: 'Community Event: AMA with CEO',
  content: 'Join our live AMA with the CEO on April 12 at 16:00 UTC.',
  authorID: 'admin_001',
  timestamp: '2026-04-08 12:00',
  comments: [
    { id: 1736, author: 'user_131', text: 'Looking forward to it', timestamp: '2026-04-08 12:05' },
    { id: 1737, author: 'user_132', text: '>Will there be a Q&A?', timestamp: '2026-04-08 12:06', replies: [
        { id: 1738, author: 'admin_001', text: 'Yes, submit questions in advance or live', timestamp: '2026-04-08 12:08' }
      ] },
    { id: 1739, author: 'user_133', text: 'Excited to learn new updates', timestamp: '2026-04-08 12:10' },
    { id: 1740, author: 'user_134', text: '[deleted]', timestamp: '2026-04-08 12:12' },
    { id: 1741, author: 'user_135', text: 'Will it be recorded?', timestamp: '2026-04-08 12:15' }
  ],
},
{
  id: 408,
  boardId: 6,
  title: 'New Help Center Launched',
  content: 'Our updated Help Center has searchable guides and FAQs for faster support.',
  authorID: 'admin_002',
  timestamp: '2026-04-09 08:00',
  comments: [
    { id: 1742, author: 'user_136', text: 'Much needed, thanks!', timestamp: '2026-04-09 08:05' },
    { id: 1743, author: 'user_137', text: '>Any tutorials?', timestamp: '2026-04-09 08:06', replies: [
        { id: 1744, author: 'admin_002', text: 'Yes, check the “Getting Started” section', timestamp: '2026-04-09 08:08' }
      ] },
    { id: 1745, author: 'user_138', text: 'Search feature works well', timestamp: '2026-04-09 08:10' },
    { id: 1746, author: 'user_139', text: '[deleted]', timestamp: '2026-04-09 08:12' },
    { id: 1747, author: 'user_140', text: 'Saved me from emailing support', timestamp: '2026-04-09 08:15' }
  ],
},
{
  id: 409,
  boardId: 6,
  title: 'Scheduled Email Notifications',
  content: 'Weekly digest emails will now be sent every Monday at 07:00 UTC.',
  authorID: 'admin_003',
  timestamp: '2026-04-09 09:00',
  comments: [
    { id: 1748, author: 'user_141', text: 'Great, love weekly summaries', timestamp: '2026-04-09 09:05' },
    { id: 1749, author: 'user_142', text: '>Can we opt out?', timestamp: '2026-04-09 09:06', replies: [
        { id: 1750, author: 'admin_003', text: 'Yes, toggle in your preferences', timestamp: '2026-04-09 09:08' }
      ] },
    { id: 1751, author: 'user_143', text: 'Hope content is relevant', timestamp: '2026-04-09 09:10' },
    { id: 1752, author: 'user_144', text: '[deleted]', timestamp: '2026-04-09 09:12' },
    { id: 1753, author: 'user_145', text: 'Looking forward to first digest', timestamp: '2026-04-09 09:15' }
  ],
},
{
  id: 410,
  boardId: 6,
  title: 'Security Patch Released',
  content: 'Critical security update deployed. Please log out and back in to refresh sessions.',
  authorID: 'admin_001',
  timestamp: '2026-04-09 10:00',
  comments: [
    { id: 1754, author: 'user_146', text: 'Done, thanks for the alert!', timestamp: '2026-04-09 10:05' },
    { id: 1755, author: 'user_147', text: '>Any CVE details?', timestamp: '2026-04-09 10:06', replies: [
        { id: 1756, author: 'admin_001', text: 'Internal CVE, but issue was fixed', timestamp: '2026-04-09 10:08' }
      ] },
    { id: 1757, author: 'user_148', text: 'Refreshing sessions now', timestamp: '2026-04-09 10:10' },
    { id: 1758, author: 'user_149', text: '[deleted]', timestamp: '2026-04-09 10:12' },
    { id: 1759, author: 'user_150', text: 'Thanks for proactive security', timestamp: '2026-04-09 10:15' }
  ],
}

]
