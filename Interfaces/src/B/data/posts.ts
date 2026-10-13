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
  image: ['https://i.pinimg.com/originals/70/4e/b5/704eb5b5e360c2a209fa6a475bacf9c7.gif'],
  authorID: 'James Carter',
  timestamp: '2026-03-15 10:15',
  comments: [
    {
      id: 31,
      author: 'Emily Watson',
      text: 'I try to treat downtime as something scheduled, not something optional. It really helps.',
      timestamp: '2026-03-15 10:30',
      replies: [
        {
          id: 32,
          author: 'Daniel Hughes',
          text: 'That’s a great mindset. Do you stick to strict boundaries after work hours?',
          timestamp: '2026-03-15 10:35',
        },
      ],
    },
    {
      id: 33,
      author: 'Sophia Patel',
      text: 'Time-blocking has worked well for me. It keeps everything predictable.',
      timestamp: '2026-03-15 10:45',
    },
  ],
},
{
  "id": 202,
  "boardId": 1,
  "title": "Zendaya and Tom Holland secretly married?!",
  "content": "Zendaya recently showed up at a real wedding in Las Vegas and signed the certificate with her real name “Zendaya Coleman”",
  "image": [
    "https://people.com/thmb/3kii_JAjgoMew_9JQvfIYpG3uJM=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1767x683:1769x685)/zendaya-tom-holland-102424-new-york-5562-eb1c7dbae95d49459ddde061d5813f02.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2092658750-6734cd49695d0.jpg?crop=1xw:0.8433382137628112xh;0.0256xw,0.185xh"
  ],
  "authorID": "Michael Brown",
  "timestamp": "2026-03-15 14:20",
  "comments": [
    {
      "id": 34,
      "author": "Emily Watson",
      "text": "She was probably just a witness for a friend! You have to use your legal name on those documents regardless. Let them live their lives lol.",
      "timestamp": "2026-03-15 14:45"
    },
    {
      "id": 35,
      "author": "Jason Miller",
      "text": "If this is true, they are officially the most low-key powerful couple in Hollywood.",
      "timestamp": "2026-03-15 15:02"
    },
    {
      "id": 36,
      "author": "Sarah Jenkins",
      "text": "@Ashley Smith look at this!! I told you they were going to get married in secret.",
      "timestamp": "2026-03-15 15:10"
    },
    {
      "id": 37,
      "author": "Marcus Thorne",
      "text": "Signing with her real name isn't exactly a 'leak.' That's literally just her name. People love making a mountain out of a molehill for clicks.",
      "timestamp": "2026-03-15 15:25"
    },
    {
      "id": 38,
      "author": "Chloe Bennett",
      "text": "I’m literally going to cry if this is real. They are so perfect together.",
      "timestamp": "2026-03-15 15:40"
    }
  ]
},
{
  id: 203,
  boardId: 1,
  title: 'Tips for staying productive while working remotely',
  content: 'Working from home has been great, but staying productive every day can be challenging. What habits or setups help you stay focused?',
  image: [],
  authorID: 'Laura Mitchell',
  timestamp: '2026-03-16 09:10',
  comments: [
    {
      id: 37,
      author: 'David Kim',
      text: 'Having a dedicated workspace made a big difference for me.',
      timestamp: '2026-03-16 09:25',
    },
  ],
},
{
  id: 204,
  boardId: 1,
  title: 'Is networking still important in 2026?',
  content: 'With so many online platforms, do you think traditional networking still matters as much as before?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1775716507/Startup-Redding-Event-3-Credit-Startup-Redding_jpg_png_webp_ja1oba.png'],
  authorID: 'Chris Johnson',
  timestamp: '2026-03-16 11:45',
  comments: [
    {
      id: 38,
      author: 'Anna Lopez',
      text: 'Absolutely. Relationships still drive opportunities, even if they start online.',
      timestamp: '2026-03-16 12:00',
    },
  ],
},
{
  id: 205,
  boardId: 1,
  title: 'Best way to learn new technical skills quickly',
  content: 'Trying to pick up new skills efficiently. Do you prefer structured courses or learning by building projects?',
  image: [],
  authorID: 'Mark Evans',
  timestamp: '2026-03-16 13:20',
  comments: [
    {
      id: 39,
      author: 'Rachel Adams',
      text: 'Projects help me retain knowledge much better than passive learning.',
      timestamp: '2026-03-16 13:40',
    },
  ],
},
{
  id: 206,
  boardId: 1,
  title: 'How do you handle burnout?',
  content: 'Burnout seems more common lately. What strategies have worked for you to recover and prevent it?',
  image: [],
  authorID: 'Sarah Bennett',
  timestamp: '2026-03-16 15:05',
  comments: [
    {
      id: 40,
      author: 'Kevin White',
      text: 'Taking real breaks—not just switching tasks—has helped me a lot.',
      timestamp: '2026-03-16 15:20',
    },
  ],
},
{
  id: 212,
  boardId: 1,
  title: 'Remote vs office work',
  content: 'Do you prefer working remotely, in-office, or a hybrid setup?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716728/working-from-home-vs-working-from-the-office-comparison-1_lnoqww.png'],
  authorID: 'Ethan Brooks',
  timestamp: '2026-03-18 11:15',
  comments: [
    {
      id: 46,
      author: 'Mia Collins',
      text: 'Hybrid gives the best of both worlds for me.',
      timestamp: '2026-03-18 11:30',
    },
  ],
},
{
  id: 213,
  boardId: 1,
  title: 'Learning from failure',
  content: 'What’s a professional mistake you learned the most from?',
  image: [],
  authorID: 'Alex Rivera',
  timestamp: '2026-03-18 13:50',
  comments: [
    {
      id: 47,
      author: 'Chloe Martin',
      text: 'Failing early in my career taught me resilience.',
      timestamp: '2026-03-18 14:05',
    },
  ],
},
{
  id: 214,
  boardId: 1,
  title: 'Time-blocking vs to-do lists',
  content: 'Which method works better for you when managing daily tasks?',
  image: [],
  authorID: 'Henry Wilson',
  timestamp: '2026-03-19 08:20',
  comments: [
    {
      id: 48,
      author: 'Ella Scott',
      text: 'Time-blocking helps me stay realistic about my workload.',
      timestamp: '2026-03-19 08:35',
    },
  ],
},
{
  id: 215,
  boardId: 1,
  title: 'Importance of soft skills',
  content: 'Technical skills are important, but how much do soft skills matter in your experience?',
  image: [],
  authorID: 'Isabella Young',
  timestamp: '2026-03-19 10:45',
  comments: [
    {
      id: 49,
      author: 'Jack Turner',
      text: 'Soft skills often determine leadership potential.',
      timestamp: '2026-03-19 11:00',
    },
  ],
},
{
  id: 216,
  boardId: 1,
  title: 'How often do you upskill?',
  content: 'Do you actively schedule time to learn new things, or do you learn as needed?',
  image: [],
  authorID: 'Logan Wright',
  timestamp: '2026-03-19 13:10',
  comments: [
    {
      id: 50,
      author: 'Zoe Hall',
      text: 'I schedule it weekly to stay consistent.',
      timestamp: '2026-03-19 13:25',
    },
  ],
},
{
  id: 217,
  boardId: 1,
  title: 'Managing distractions',
  content: 'What’s your biggest distraction during work, and how do you deal with it?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716428/1_bFOQjpmtRnb1Xicf3Ja-JQ_xhl3gj.png'],
  authorID: 'Aiden Green',
  timestamp: '2026-03-20 09:30',
  comments: [
    {
      id: 51,
      author: 'Hannah Baker',
      text: 'Turning off notifications helps more than anything else.',
      timestamp: '2026-03-20 09:45',
    },
  ],
},
{
  id: 218,
  boardId: 1,
  title: 'Best productivity apps',
  content: 'What apps or tools have made the biggest difference in your productivity?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716428/best-productivity-apps_quldx2.jpg'],
  authorID: 'Lucas Adams',
  timestamp: '2026-03-20 11:00',
  comments: [
    {
      id: 52,
      author: 'Ava Nelson',
      text: 'Simple tools work best for me—nothing too complicated.',
      timestamp: '2026-03-20 11:20',
    },
  ],
},
{
  id: 223,
  boardId: 1,
  title: 'New Marvel movie announcement reactions',
  content: 'Marvel just announced another phase lineup. Are people still excited, or is superhero fatigue setting in?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716428/Avengers_Doomsday_poster_uoa8ce.jpg'],
  authorID: 'Ryan Cooper',
  timestamp: '2026-03-22 09:15',
  comments: [
    { id: 57, author: 'Emma Stone', text: 'I still enjoy them, but the hype isn’t the same as before.', timestamp: '2026-03-22 09:20' },
    { id: 58, author: 'Chris Nolan', text: 'Too many releases makes it harder to keep up.', timestamp: '2026-03-22 09:25' },
    { id: 59, author: 'Natalie Wood', text: 'Depends on the characters honestly.', timestamp: '2026-03-22 09:30' },
    { id: 60, author: 'Tom Harris', text: 'They need to slow down and focus on quality.', timestamp: '2026-03-22 09:40' },
    { id: 61, author: 'Sophia Miles', text: 'Still fun to watch casually though.', timestamp: '2026-03-22 09:50' },
  ],
},
{
  id: 224,
  boardId: 1,
  title: 'Latest streaming platform price increases',
  content: 'Another round of subscription price hikes across streaming services. Are you still subscribed or cutting back?',
  image: [],
  authorID: 'Jessica Lane',
  timestamp: '2026-03-22 11:00',
  comments: [
    { id: 62, author: 'Oliver Grant', text: 'I rotate subscriptions now instead of keeping all.', timestamp: '2026-03-22 11:05' },
    { id: 63, author: 'Liam Scott', text: 'It’s getting too expensive honestly.', timestamp: '2026-03-22 11:10' },
    { id: 64, author: 'Ava Reed', text: 'Still worth it for some exclusive shows.', timestamp: '2026-03-22 11:15' },
    { id: 65, author: 'Noah Bennett', text: 'Back to piracy jokes aside 😅', timestamp: '2026-03-22 11:20' },
    { id: 66, author: 'Ethan Cole', text: 'I only keep one active at a time now.', timestamp: '2026-03-22 11:30' },
  ],
},
{
  id: 225,
  boardId: 1,
  title: 'Upcoming sci-fi movies to watch',
  content: 'There are some exciting sci-fi films coming this year. Which ones are you most looking forward to?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716520/will-2026-be-a-good-year-for-movies-v0-3m636cnc8mhf1.jpeg_pbpepb.png'],
  authorID: 'Daniel Fox',
  timestamp: '2026-03-22 13:10',
  comments: [
    { id: 67, author: 'Mia Turner', text: 'Anything space-related gets my attention.', timestamp: '2026-03-22 13:20' },
    { id: 68, author: 'James Hill', text: 'Hoping for more original stories, not sequels.', timestamp: '2026-03-22 13:25' },
    { id: 69, author: 'Ella Watson', text: 'Visual effects have been amazing lately.', timestamp: '2026-03-22 13:30' },
    { id: 70, author: 'Lucas Green', text: 'Sci-fi is finally getting more creative again.', timestamp: '2026-03-22 13:35' },
    { id: 71, author: 'Zoe King', text: 'I just want something mind-blowing like Interstellar again.', timestamp: '2026-03-22 13:40' },
  ],
},
{
  id: 226,
  boardId: 1,
  title: 'Are movie theaters making a comeback?',
  content: 'With big releases returning to cinemas, do you prefer theaters or streaming at home?',
  image: [],
  authorID: 'Kevin Price',
  timestamp: '2026-03-22 15:45',
  comments: [
    { id: 72, author: 'Hannah Scott', text: 'Nothing beats the theater experience.', timestamp: '2026-03-22 15:50' },
    { id: 73, author: 'Jack Miller', text: 'Home is more convenient for me.', timestamp: '2026-03-22 15:55' },
    { id: 74, author: 'Grace Hall', text: 'Depends on the movie honestly.', timestamp: '2026-03-22 16:00' },
    { id: 75, author: 'Owen Lee', text: 'Big action films are worth the cinema.', timestamp: '2026-03-22 16:05' },
    { id: 76, author: 'Lily Adams', text: 'Ticket prices are still a downside.', timestamp: '2026-03-22 16:10' },
  ],
},
{
  id: 227,
  boardId: 1,
  title: 'Celebrity brand launches everywhere',
  content: 'Feels like every celebrity has a brand now. Do you actually buy any of them?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716428/home_2023_1024x_npyckq.webp'],
  authorID: 'Sophie Turner',
  timestamp: '2026-03-23 09:00',
  comments: [
    { id: 77, author: 'Ben Carter', text: 'Only if the product is actually good.', timestamp: '2026-03-23 09:05' },
    { id: 78, author: 'Chloe Green', text: 'Mostly feels like marketing hype.', timestamp: '2026-03-23 09:10' },
    { id: 79, author: 'Jake White', text: 'Some skincare brands are decent.', timestamp: '2026-03-23 09:15' },
    { id: 80, author: 'Ava Brooks', text: 'I don’t trust them much honestly.', timestamp: '2026-03-23 09:20' },
    { id: 81, author: 'Leo Turner', text: 'It’s oversaturated at this point.', timestamp: '2026-03-23 09:30' },
  ],
},
{
  id: 228,
  boardId: 1,
  title: 'Most overrated movies recently?',
  content: 'What’s a movie that everyone loved but didn’t live up to your expectations?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716428/sddefault_ehwm4t.jpg'],
  authorID: 'Aaron Diaz',
  timestamp: '2026-03-23 11:30',
  comments: [
    { id: 82, author: 'Nina Patel', text: 'Some recent blockbusters felt overhyped.', timestamp: '2026-03-23 11:35' },
    { id: 83, author: 'Eli Brooks', text: 'Marketing can really shape expectations.', timestamp: '2026-03-23 11:40' },
    { id: 84, author: 'Sara Khan', text: 'I try to go in with low expectations now.', timestamp: '2026-03-23 11:45' },
    { id: 85, author: 'Tom Reed', text: 'Critics and audiences often disagree.', timestamp: '2026-03-23 11:50' },
    { id: 86, author: 'Maya Scott', text: 'Still fun to watch though sometimes.', timestamp: '2026-03-23 11:55' },
  ],
},
{
  id: 229,
  boardId: 1,
  title: 'Music vs movies: what’s more impactful?',
  content: 'Which do you think has a stronger emotional impact—music or movies?',
  image: [],
  authorID: 'Victor Cruz',
  timestamp: '2026-03-23 13:50',
  comments: [
    { id: 87, author: 'Lena Moore', text: 'Music hits instantly for me.', timestamp: '2026-03-23 14:00' },
    { id: 88, author: 'Ryan Lee', text: 'Movies build deeper emotional stories.', timestamp: '2026-03-23 14:05' },
    { id: 89, author: 'Chris Young', text: 'Depends on the context honestly.', timestamp: '2026-03-23 14:10' },
    { id: 90, author: 'Amy Scott', text: 'Soundtracks combine both worlds.', timestamp: '2026-03-23 14:15' },
    { id: 91, author: 'Daniel King', text: 'Music is more personal in my opinion.', timestamp: '2026-03-23 14:20' },
  ],
},
{
  id: 230,
  boardId: 1,
  title: 'Reboots and remakes trend',
  content: 'Hollywood keeps rebooting old classics. Do you like this trend or prefer original ideas?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716427/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster_zdeaev.jpg'],
  authorID: 'Brian Shaw',
  timestamp: '2026-03-24 09:10',
  comments: [
    { id: 92, author: 'Ella Green', text: 'Original ideas are always better.', timestamp: '2026-03-24 09:15' },
    { id: 93, author: 'Jake Adams', text: 'Some remakes are actually great.', timestamp: '2026-03-24 09:20' },
    { id: 94, author: 'Noah Hill', text: 'Feels like studios play it safe.', timestamp: '2026-03-24 09:25' },
    { id: 95, author: 'Zoe Reed', text: 'Nostalgia sells.', timestamp: '2026-03-24 09:30' },
    { id: 96, author: 'Lucas Ward', text: 'A mix of both is ideal.', timestamp: '2026-03-24 09:35' },
  ],
},


{
  id: 231,
  boardId: 1,
  title: 'Best TV shows right now?',
  content: 'Looking for recommendations—what are the best shows currently airing?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716427/p0mtpw73.jpg_onjmfk.webp'],
  authorID: 'Olivia Ward',
  timestamp: '2026-03-24 11:00',
  comments: [
    { id: 97, author: 'Emma Cole', text: 'There are so many good ones right now.', timestamp: '2026-03-24 11:05' },
    { id: 98, author: 'David Brooks', text: 'Depends on the genre you like.', timestamp: '2026-03-24 11:10' },
    { id: 99, author: 'Mia Scott', text: 'Streaming platforms are stacked.', timestamp: '2026-03-24 11:15' },
    { id: 100, author: 'Ethan Reed', text: 'I prefer limited series lately.', timestamp: '2026-03-24 11:20' },
    { id: 101, author: 'Sophia King', text: 'Some shows are too long though.', timestamp: '2026-03-24 11:25' },
  ],
},
{
  id: 232,
  boardId: 1,
  title: 'Actors switching to directing',
  content: 'Many actors are moving into directing. Do you think they bring something unique?',
  image: [],
  authorID: 'Henry Cole',
  timestamp: '2026-03-24 13:30',
  comments: [
    { id: 102, author: 'Anna Scott', text: 'They understand performance deeply.', timestamp: '2026-03-24 13:35' },
    { id: 103, author: 'Jack Green', text: 'Some do great, others not so much.', timestamp: '2026-03-24 13:40' },
    { id: 104, author: 'Liam Ward', text: 'It’s interesting to see different perspectives.', timestamp: '2026-03-24 13:45' },
    { id: 105, author: 'Ella Brooks', text: 'They already know the industry well.', timestamp: '2026-03-24 13:50' },
    { id: 106, author: 'Noah Turner', text: 'It’s a natural transition for some.', timestamp: '2026-03-24 13:55' },
  ],
},


{
  id: 241,
  boardId: 1,
  title: 'Are award shows still relevant?',
  content: 'Do people still care about award shows, or are they losing relevance?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716427/the_oscars_egk78a.jpg'],
  authorID: 'Daniel Perez',
  timestamp: '2026-03-26 10:10',
  comments: [
    { id: 152, author: 'Sophia Hall', text: 'Viewership has definitely dropped.', timestamp: '2026-03-26 10:15' },
    { id: 153, author: 'Ryan Adams', text: 'Still important for the industry.', timestamp: '2026-03-26 10:20' },
    { id: 154, author: 'Emma White', text: 'Social media reactions are bigger now.', timestamp: '2026-03-26 10:25' },
    { id: 155, author: 'Chris Lee', text: 'Feels less exciting than before.', timestamp: '2026-03-26 10:30' },
    { id: 156, author: 'Mia King', text: 'I only watch highlights now.', timestamp: '2026-03-26 10:35' },
  ],
},
{
  id: 242,
  boardId: 1,
  title: 'Most anticipated movies this year?',
  content: 'What upcoming movies are you most excited about?',
  image: [],
  authorID: 'Lucas Bennett',
  timestamp: '2026-03-26 12:00',
  comments: [
    { id: 157, author: 'Ava Scott', text: 'There are some huge releases coming.', timestamp: '2026-03-26 12:05' },
    { id: 158, author: 'Noah Reed', text: 'Hoping they live up to expectations.', timestamp: '2026-03-26 12:10' },
    { id: 159, author: 'Ella Green', text: 'Trailers have been promising.', timestamp: '2026-03-26 12:15' },
    { id: 160, author: 'Liam Carter', text: 'I’m excited for original films mostly.', timestamp: '2026-03-26 12:20' },
    { id: 161, author: 'Zoe Adams', text: 'Sequels still dominate though.', timestamp: '2026-03-26 12:25' },
  ],
},
{
  id: 501,
  boardId: 1,
  title: 'Major streaming platform announces price increase',
  content: 'A leading streaming service has announced a global price increase starting next month. Users are debating whether the added features justify the cost.',
  image: [],
  authorID: 'Daniel Moore',
  timestamp: '2026-04-06 09:15',
  comments: [
    { id: 2001, author: 'Emma White', text: 'Feels like every platform is raising prices now.', timestamp: '2026-04-06 09:20' },
    { id: 2002, author: 'Noah Wilson', text: 'Depends if they actually improve content quality.', timestamp: '2026-04-06 09:25' },
    { id: 2003, author: 'Olivia Harris', text: 'I might cancel and rotate subscriptions.', timestamp: '2026-04-06 09:30' },
    { id: 2004, author: 'Liam Clark', text: 'Cable 2.0 at this point.', timestamp: '2026-04-06 09:35', replies: [
        { id: 2005, author: 'Sophia Hall', text: 'Exactly, we’re back to bundles basically.', timestamp: '2026-04-06 09:38' }
      ] },
    { id: 2006, author: 'Ethan Lewis', text: 'Still cheaper than going out to movies regularly.', timestamp: '2026-04-06 09:40' }
  ],
},
{
  id: 502,
  boardId: 1,
  title: 'Local city park renovation completed',
  content: 'The downtown park renovation has officially finished, including new walking paths, lighting, and community areas.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716520/walk-in-princes-park-v0-yurxnq8tdrsg1.jpeg_z3miru.png'],
  authorID: 'Sarah Mitchell',
  timestamp: '2026-04-06 11:00',
  comments: [
    { id: 2007, author: 'James Carter', text: 'Looks great, went there this morning.', timestamp: '2026-04-06 11:05' },
    { id: 2008, author: 'Emily Watson', text: 'Nice to see public spaces improving.', timestamp: '2026-04-06 11:10' },
    { id: 2009, author: 'Daniel Hughes', text: 'Hope they maintain it properly.', timestamp: '2026-04-06 11:15' },
    { id: 2010, author: 'Sophia Patel', text: 'Are dogs allowed now?', timestamp: '2026-04-06 11:20', replies: [
        { id: 2011, author: 'Sarah Mitchell', text: 'Yes, there’s a designated dog area.', timestamp: '2026-04-06 11:25' }
      ] },
    { id: 2012, author: 'Michael Brown', text: 'Good place for weekend runs.', timestamp: '2026-04-06 11:30' }
  ],
},

{
  id: 219,
  boardId: 1,
  title: 'Work-life balance in fast-paced jobs',
  content: 'Is it realistic to maintain balance in high-pressure roles?',
  image: [],
  authorID: 'Mason Carter',
  timestamp: '2026-03-20 14:15',
  comments: [
    {
      id: 53,
      author: 'Scarlett Perez',
      text: 'It’s possible, but it requires clear boundaries.',
      timestamp: '2026-03-20 14:30',
    },
  ],
},
{
  id: 220,
  boardId: 1,
  title: 'Switching careers later in life',
  content: 'Have you or someone you know successfully changed careers later on?',
  image: [],
  authorID: 'Amelia Brooks',
  timestamp: '2026-03-21 09:10',
  comments: [
    {
      id: 54,
      author: 'Benjamin Ward',
      text: 'It’s challenging, but definitely possible with the right mindset.',
      timestamp: '2026-03-21 09:25',
    },
  ],
},
{
  id: 221,
  boardId: 1,
  title: 'How do you stay motivated long-term?',
  content: 'Motivation comes and goes. What keeps you consistent over months or years?',
  image: [],
  authorID: 'Daniel King',
  timestamp: '2026-03-21 11:40',
  comments: [
    {
      id: 55,
      author: 'Victoria Scott',
      text: 'Building habits matters more than relying on motivation.',
      timestamp: '2026-03-21 12:00',
    },
  ],
},
{
  id: 222,
  boardId: 1,
  title: 'Setting realistic goals',
  content: 'How do you make sure your goals are ambitious but still achievable?',
  image: [],
  authorID: 'Harper Evans',
  timestamp: '2026-03-21 13:55',
  comments: [
    {
      id: 56,
      author: 'Owen Parker',
      text: 'Breaking them into smaller milestones helps a lot.',
      timestamp: '2026-03-21 14:10',
    },
  ],
},

{
  id: 503,
  boardId: 1,
  title: 'Actor rumored to join major superhero franchise',
  content: 'Reports suggest a well-known actor is in talks to join an upcoming superhero film, though nothing has been confirmed yet.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716519/Giancarlo_Esposito_Anemone-22__cropped_ddoo7k.jpg'],
  authorID: 'Olivia Green',
  timestamp: '2026-04-06 13:00',
  comments: [
    { id: 2013, author: 'Liam Turner', text: 'Rumors like this happen all the time.', timestamp: '2026-04-06 13:05' },
    { id: 2014, author: 'Noah Clark', text: 'Would be a great casting choice though.', timestamp: '2026-04-06 13:10' },
    { id: 2015, author: 'Emma White', text: 'Depends on the script honestly.', timestamp: '2026-04-06 13:15' },
    { id: 2016, author: 'Ethan Lewis', text: 'Superhero fatigue is real.', timestamp: '2026-04-06 13:20', replies: [
        { id: 2017, author: 'Sophia Hall', text: 'Only if the movies are bad.', timestamp: '2026-04-06 13:25' }
      ] },
    { id: 2018, author: 'James Carter', text: 'Still curious to see how it turns out.', timestamp: '2026-04-06 13:30' }
  ],
},
{
  id: 504,
  boardId: 1,
  title: 'Career tip: documenting your work matters',
  content: 'Keeping a record of your achievements and projects makes performance reviews and job searches much easier.',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-06 15:00',
  comments: [
    { id: 2019, author: 'Daniel Moore', text: 'Completely agree, helped me during interviews.', timestamp: '2026-04-06 15:05' },
    { id: 2020, author: 'Sarah Mitchell', text: 'I started doing this recently, big difference.', timestamp: '2026-04-06 15:10' },
    { id: 2021, author: 'Emily Watson', text: 'Any tools you recommend?', timestamp: '2026-04-06 15:15', replies: [
        { id: 2022, author: 'Rachel Adams', text: 'Simple docs or Notion works well.', timestamp: '2026-04-06 15:20' }
      ] },
    { id: 2023, author: 'Michael Brown', text: 'Also useful for tracking growth.', timestamp: '2026-04-06 15:25' },
    { id: 2024, author: 'Sophia Patel', text: 'Wish I started earlier honestly.', timestamp: '2026-04-06 15:30' }
  ],
},
{
  id: 505,
  boardId: 1,
  title: 'New coffee shop opens downtown',
  content: 'A new independent coffee shop has opened, offering locally roasted beans and a co-working friendly space.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716517/348s_hmyqve.jpg'],
  authorID: 'James Carter',
  timestamp: '2026-04-06 17:00',
  comments: [
    { id: 2025, author: 'Emma White', text: 'Tried it, really good espresso.', timestamp: '2026-04-06 17:05' },
    { id: 2026, author: 'Liam Clark', text: 'How are the prices?', timestamp: '2026-04-06 17:10', replies: [
        { id: 2027, author: 'Emma White', text: 'A bit high but worth it.', timestamp: '2026-04-06 17:12' }
      ] },
    { id: 2028, author: 'Noah Wilson', text: 'Nice, we needed more spots like this.', timestamp: '2026-04-06 17:15' },
    { id: 2029, author: 'Sophia Hall', text: 'Good place to work remotely?', timestamp: '2026-04-06 17:20' },
    { id: 2030, author: 'Ethan Lewis', text: 'I’ll check it out this weekend.', timestamp: '2026-04-06 17:25' }
  ],
},
{
  id: 506,
  boardId: 1,
  title: 'Thoughts on short-form content dominating media',
  content: 'Short videos continue to dominate attention online. Is this trend sustainable long-term?',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716526/image-666x418_hwtoiy.png'],
  authorID: 'Daniel Hughes',
  timestamp: '2026-04-07 09:00',
  comments: [
    { id: 2031, author: 'Olivia Harris', text: 'Attention spans are definitely changing.', timestamp: '2026-04-07 09:05' },
    { id: 2032, author: 'Liam Turner', text: 'It’s efficient but not always meaningful.', timestamp: '2026-04-07 09:10' },
    { id: 2033, author: 'Sophia Patel', text: 'Long-form still has its place.', timestamp: '2026-04-07 09:15' },
    { id: 2034, author: 'James Carter', text: 'Algorithms push it heavily.', timestamp: '2026-04-07 09:20', replies: [
        { id: 2035, author: 'Emily Watson', text: 'That’s what drives the trend mostly.', timestamp: '2026-04-07 09:25' }
      ] },
    { id: 2036, author: 'Michael Brown', text: 'Balance is probably the future.', timestamp: '2026-04-07 09:30' }
  ],
},
{
  id: 507,
  boardId: 1,
  title: 'Local traffic improvements announced',
  content: 'City officials announced new traffic light optimizations aimed at reducing congestion during peak hours.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716729/_131055666_mediaitem131055665_olz5zk.jpg'],
  authorID: 'City Updates',
  timestamp: '2026-04-07 11:00',
  comments: [
    { id: 2037, author: 'Noah Clark', text: 'Hope this actually works.', timestamp: '2026-04-07 11:05' },
    { id: 2038, author: 'Emma White', text: 'Traffic has been rough lately.', timestamp: '2026-04-07 11:10' },
    { id: 2039, author: 'Liam Clark', text: 'More public transport would help too.', timestamp: '2026-04-07 11:15' },
    { id: 2040, author: 'Sophia Hall', text: 'When does this start?', timestamp: '2026-04-07 11:20', replies: [
        { id: 2041, author: 'City Updates', text: 'Next week according to the report.', timestamp: '2026-04-07 11:25' }
      ] },
    { id: 2042, author: 'Ethan Lewis', text: 'Let’s see the results first.', timestamp: '2026-04-07 11:30' }
  ],
},
{
  id: 508,
  boardId: 1,
  title: 'What makes a good team leader?',
  content: 'Curious to hear what qualities people value most in leadership roles.',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-07 13:00',
  comments: [
    { id: 2043, author: 'Daniel Moore', text: 'Clear communication.', timestamp: '2026-04-07 13:05' },
    { id: 2044, author: 'Sarah Mitchell', text: 'Empathy and understanding.', timestamp: '2026-04-07 13:10' },
    { id: 2045, author: 'Emily Watson', text: 'Accountability.', timestamp: '2026-04-07 13:15' },
    { id: 2046, author: 'Michael Brown', text: 'Decision-making ability.', timestamp: '2026-04-07 13:20', replies: [
        { id: 2047, author: 'Rachel Adams', text: 'Especially under pressure.', timestamp: '2026-04-07 13:25' }
      ] },
    { id: 2048, author: 'Sophia Patel', text: 'Supporting team growth.', timestamp: '2026-04-07 13:30' }
  ],
},
{
  id: 509,
  boardId: 1,
  title: 'Major artist announces surprise album drop',
  content: 'A globally popular artist announced a new album releasing this weekend with no prior promotion.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716452/olivia-rodrigo-attends-the-2023-vanity-fair-oscar-party-news-photo-1699910349_jpg_ca75qd.png'],
  authorID: 'Olivia Green',
  timestamp: '2026-04-07 14:00',
  comments: [
    { id: 2049, author: 'Liam Turner', text: 'Surprise drops always build hype.', timestamp: '2026-04-07 14:05' },
    { id: 2050, author: 'Emma White', text: 'Hope it lives up to expectations.', timestamp: '2026-04-07 14:10' },
    { id: 2051, author: 'Noah Clark', text: 'Marketing strategy is interesting.', timestamp: '2026-04-07 14:15' },
    { id: 2052, author: 'Sophia Hall', text: 'Streaming numbers will be huge.', timestamp: '2026-04-07 14:20', replies: [
        { id: 2053, author: 'Ethan Lewis', text: 'Definitely breaking records.', timestamp: '2026-04-07 14:25' }
      ] },
    { id: 2054, author: 'James Carter', text: 'I’ll give it a listen day one.', timestamp: '2026-04-07 14:30' }
  ],
},
{
  id: 510,
  boardId: 1,
  title: 'Local gym introduces new membership model',
  content: 'A popular local gym now offers flexible memberships with no long-term commitment.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716552/freeweightbit-1024x768_z092qc.jpg'],
  authorID: 'Sarah Mitchell',
  timestamp: '2026-04-07 15:00',
  comments: [
    { id: 2055, author: 'Daniel Moore', text: 'That’s a good move honestly.', timestamp: '2026-04-07 15:05' },
    { id: 2056, author: 'Emily Watson', text: 'More businesses should do this.', timestamp: '2026-04-07 15:10' },
    { id: 2057, author: 'Michael Brown', text: 'Wonder how pricing compares.', timestamp: '2026-04-07 15:15' },
    { id: 2058, author: 'Sophia Patel', text: 'Flexibility is key these days.', timestamp: '2026-04-07 15:20', replies: [
        { id: 2059, author: 'Liam Clark', text: 'Especially for students.', timestamp: '2026-04-07 15:25' }
      ] },
    { id: 2060, author: 'Ethan Lewis', text: 'Might switch because of this.', timestamp: '2026-04-07 15:30' }
  ],
},
{
  id: 511,
  boardId: 1,
  title: 'Movie sequel breaks opening weekend records',
  content: 'The latest blockbuster sequel has set new records at the box office globally.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716578/The_Super_Mario_Galaxy_Movie_poster_qvrnlz.jpg'],
  authorID: 'Michael Brown',
  timestamp: '2026-04-07 16:00',
  comments: [
    { id: 2061, author: 'Olivia Harris', text: 'Not surprised, huge fanbase.', timestamp: '2026-04-07 16:05' },
    { id: 2062, author: 'Noah Wilson', text: 'Was it actually good though?', timestamp: '2026-04-07 16:10' },
    { id: 2063, author: 'Emma White', text: 'Reviews seem mixed.', timestamp: '2026-04-07 16:15' },
    { id: 2064, author: 'Liam Turner', text: 'Box office doesn’t equal quality.', timestamp: '2026-04-07 16:20', replies: [
        { id: 2065, author: 'Sophia Hall', text: 'True, but still impressive numbers.', timestamp: '2026-04-07 16:25' }
      ] },
    { id: 2066, author: 'James Carter', text: 'I’ll probably watch it anyway.', timestamp: '2026-04-07 16:30' }
  ],
},
{
  id: 512,
  boardId: 1,
  title: 'Workplace tip: setting boundaries',
  content: 'Setting clear boundaries at work can improve productivity and prevent burnout.',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-07 17:00',
  comments: [
    { id: 2067, author: 'Daniel Hughes', text: 'Hard to do but very important.', timestamp: '2026-04-07 17:05' },
    { id: 2068, author: 'Emily Watson', text: 'Especially in remote work.', timestamp: '2026-04-07 17:10' },
    { id: 2069, author: 'Michael Brown', text: 'Managers should support this too.', timestamp: '2026-04-07 17:15' },
    { id: 2070, author: 'Sophia Patel', text: 'Any tips for enforcing boundaries?', timestamp: '2026-04-07 17:20', replies: [
        { id: 2071, author: 'Rachel Adams', text: 'Clear communication and consistency.', timestamp: '2026-04-07 17:25' }
      ] },
    { id: 2072, author: 'Liam Clark', text: 'Still learning this myself.', timestamp: '2026-04-07 17:30' }
  ],
},
{
  id: 513,
  boardId: 1,
  title: 'New restaurant gains popularity quickly',
  content: 'A newly opened restaurant has quickly become one of the most talked-about spots in the city.',
  image: [],
  authorID: 'James Carter',
  timestamp: '2026-04-08 09:00',
  comments: [
    { id: 2073, author: 'Emma White', text: 'Tried it, food is amazing.', timestamp: '2026-04-08 09:05' },
    { id: 2074, author: 'Noah Clark', text: 'Reservations are hard to get.', timestamp: '2026-04-08 09:10' },
    { id: 2075, author: 'Sophia Hall', text: 'Worth the hype?', timestamp: '2026-04-08 09:15', replies: [
        { id: 2076, author: 'Emma White', text: 'I’d say yes.', timestamp: '2026-04-08 09:18' }
      ] },
    { id: 2077, author: 'Liam Turner', text: 'Prices look high though.', timestamp: '2026-04-08 09:20' },
    { id: 2078, author: 'Ethan Lewis', text: 'Might try it next week.', timestamp: '2026-04-08 09:25' }
  ],
},
{
  id: 514,
  boardId: 1,
  title: 'Rise of AI in creative industries',
  content: 'AI tools are increasingly being used in music, film, and design workflows.',
  image: [],
  authorID: 'Daniel Moore',
  timestamp: '2026-04-08 10:00',
  comments: [
    { id: 2079, author: 'Olivia Green', text: 'It’s changing everything fast.', timestamp: '2026-04-08 10:05' },
    { id: 2080, author: 'Liam Clark', text: 'Raises ethical questions too.', timestamp: '2026-04-08 10:10' },
    { id: 2081, author: 'Sophia Patel', text: 'Can boost productivity a lot.', timestamp: '2026-04-08 10:15' },
    { id: 2082, author: 'Michael Brown', text: 'Artists are divided on it.', timestamp: '2026-04-08 10:20', replies: [
        { id: 2083, author: 'Emma White', text: 'Understandably so.', timestamp: '2026-04-08 10:25' }
      ] },
    { id: 2084, author: 'James Carter', text: 'Probably here to stay.', timestamp: '2026-04-08 10:30' }
  ],
},
{
  id: 515,
  boardId: 1,
  title: 'Local library extends opening hours',
  content: 'The city library will now stay open later to accommodate students and working professionals.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716605/_128253620_mediaitem128253619_cmp5dx.jpg'],
  authorID: 'City Updates',
  timestamp: '2026-04-08 11:00',
  comments: [
    { id: 2085, author: 'Emily Watson', text: 'Great for evening study sessions.', timestamp: '2026-04-08 11:05' },
    { id: 2086, author: 'Daniel Hughes', text: 'Much needed change.', timestamp: '2026-04-08 11:10' },
    { id: 2087, author: 'Sophia Hall', text: 'What are the new hours?', timestamp: '2026-04-08 11:15', replies: [
        { id: 2088, author: 'City Updates', text: 'Open until 10 PM now.', timestamp: '2026-04-08 11:18' }
      ] },
    { id: 2089, author: 'Liam Turner', text: 'Nice quiet place to work.', timestamp: '2026-04-08 11:20' },
    { id: 2090, author: 'Ethan Lewis', text: 'I’ll definitely use this.', timestamp: '2026-04-08 11:25' }
  ],
},
{
  id: 516,
  boardId: 1,
  title: 'What skills will matter most in the next 5 years?',
  content: 'With rapid technological change, which skills do you think will be most valuable?',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-08 12:00',
  comments: [
    { id: 2091, author: 'Daniel Moore', text: 'Adaptability.', timestamp: '2026-04-08 12:05' },
    { id: 2092, author: 'Sarah Mitchell', text: 'Critical thinking.', timestamp: '2026-04-08 12:10' },
    { id: 2093, author: 'Emily Watson', text: 'Tech literacy.', timestamp: '2026-04-08 12:15' },
    { id: 2094, author: 'Michael Brown', text: 'Communication skills.', timestamp: '2026-04-08 12:20', replies: [
        { id: 2095, author: 'Rachel Adams', text: 'Often overlooked but essential.', timestamp: '2026-04-08 12:25' }
      ] },
    { id: 2096, author: 'Sophia Patel', text: 'Lifelong learning mindset.', timestamp: '2026-04-08 12:30' }
  ],
},

{
  id: 529,
  boardId: 1,
  title: 'New social media feature focuses on smaller communities',
  content: 'A major platform is rolling out a feature that encourages users to interact in smaller, interest-based groups.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716632/unnamed_j8hfih.png'],
  authorID: 'Daniel Hughes',
  timestamp: '2026-04-08 13:00',
  comments: [
    { id: 2097, author: 'Emma White', text: 'Smaller communities feel more meaningful.', timestamp: '2026-04-08 13:05' },
    { id: 2098, author: 'Noah Clark', text: 'Depends on how it’s implemented.', timestamp: '2026-04-08 13:10' },
    { id: 2099, author: 'Sophia Hall', text: 'Could reduce noise on the main feed.', timestamp: '2026-04-08 13:15' },
    { id: 2100, author: 'Liam Turner', text: 'Feels like going back to forums.', timestamp: '2026-04-08 13:20', replies: [
        { id: 2101, author: 'Emily Watson', text: 'Which isn’t a bad thing.', timestamp: '2026-04-08 13:25' }
      ] },
    { id: 2102, author: 'Ethan Lewis', text: 'Curious to try it out.', timestamp: '2026-04-08 13:30' }
  ],
},
{
  id: 530,
  boardId: 1,
  title: 'Local public transport adds new routes',
  content: 'City officials announced additional bus routes aimed at improving connectivity in suburban areas.',
  image: [''],
  authorID: 'City Updates',
  timestamp: '2026-04-08 14:00',
  comments: [
    { id: 2103, author: 'James Carter', text: 'This will help a lot of commuters.', timestamp: '2026-04-08 14:05' },
    { id: 2104, author: 'Olivia Green', text: 'About time honestly.', timestamp: '2026-04-08 14:10' },
    { id: 2105, author: 'Daniel Moore', text: 'Hope they run frequently.', timestamp: '2026-04-08 14:15' },
    { id: 2106, author: 'Sophia Patel', text: 'Do we have a map of routes?', timestamp: '2026-04-08 14:20', replies: [
        { id: 2107, author: 'City Updates', text: 'Will be published this week.', timestamp: '2026-04-08 14:25' }
      ] },
    { id: 2108, author: 'Liam Clark', text: 'Could reduce traffic congestion.', timestamp: '2026-04-08 14:30' }
  ],
},
{
  id: 531,
  boardId: 1,
  title: 'Film festival lineup announced',
  content: 'This year’s international film festival has revealed a diverse lineup of indie and major studio releases.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716660/b8c24c00-84df-11f0-bdc5-0bac48b207b6_xgwiqr.jpg'],
  authorID: 'Michael Brown',
  timestamp: '2026-04-08 15:00',
  comments: [
    { id: 2109, author: 'Emma White', text: 'Some great films on the list.', timestamp: '2026-04-08 15:05' },
    { id: 2110, author: 'Noah Wilson', text: 'Indie films are always interesting.', timestamp: '2026-04-08 15:10' },
    { id: 2111, author: 'Sophia Hall', text: 'Any big premieres?', timestamp: '2026-04-08 15:15', replies: [
        { id: 2112, author: 'Michael Brown', text: 'A few major ones, yes.', timestamp: '2026-04-08 15:20' }
      ] },
    { id: 2113, author: 'Liam Turner', text: 'Wish I could attend.', timestamp: '2026-04-08 15:25' },
    { id: 2114, author: 'Ethan Lewis', text: 'Will some stream online?', timestamp: '2026-04-08 15:30' }
  ],
},
{
  id: 532,
  boardId: 1,
  title: 'Professional growth: learning to say no',
  content: 'Saying no to extra work can be essential for maintaining focus and avoiding burnout.',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-08 16:00',
  comments: [
    { id: 2115, author: 'Daniel Moore', text: 'Still working on this skill.', timestamp: '2026-04-08 16:05' },
    { id: 2116, author: 'Emily Watson', text: 'Important but difficult.', timestamp: '2026-04-08 16:10' },
    { id: 2117, author: 'Sophia Patel', text: 'Boundaries matter a lot.', timestamp: '2026-04-08 16:15' },
    { id: 2118, author: 'Liam Clark', text: 'Any polite ways to say no?', timestamp: '2026-04-08 16:20', replies: [
        { id: 2119, author: 'Rachel Adams', text: 'Offer alternatives or timelines.', timestamp: '2026-04-08 16:25' }
      ] },
    { id: 2120, author: 'Michael Brown', text: 'Prevents overload for sure.', timestamp: '2026-04-08 16:30' }
  ],
},
{
  id: 533,
  boardId: 1,
  title: 'Local farmers market expands',
  content: 'The weekend farmers market has added more vendors and extended its hours.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716714/bedford-farmers-market-nh-slide3_eg4wjo.jpg'],
  authorID: 'City Updates',
  timestamp: '2026-04-09 09:00',
  comments: [
    { id: 2121, author: 'Emma White', text: 'Love fresh produce from there.', timestamp: '2026-04-09 09:05' },
    { id: 2122, author: 'James Carter', text: 'More vendors is great news.', timestamp: '2026-04-09 09:10' },
    { id: 2123, author: 'Sophia Hall', text: 'What are the new hours?', timestamp: '2026-04-09 09:15', replies: [
        { id: 2124, author: 'City Updates', text: 'Now open until 3 PM.', timestamp: '2026-04-09 09:20' }
      ] },
    { id: 2125, author: 'Liam Turner', text: 'Perfect weekend activity.', timestamp: '2026-04-09 09:25' },
    { id: 2126, author: 'Ethan Lewis', text: 'Support local businesses!', timestamp: '2026-04-09 09:30' }
  ],
},
{
  id: 534,
  boardId: 1,
  title: 'Podcast industry continues to grow',
  content: 'Podcast listenership has increased steadily, with more creators entering the space.',
  image: [],
  authorID: 'Olivia Green',
  timestamp: '2026-04-09 10:00',
  comments: [
    { id: 2127, author: 'Daniel Hughes', text: 'So many options now.', timestamp: '2026-04-09 10:05' },
    { id: 2128, author: 'Emily Watson', text: 'Great for learning on the go.', timestamp: '2026-04-09 10:10' },
    { id: 2129, author: 'Michael Brown', text: 'Hard to stand out though.', timestamp: '2026-04-09 10:15' },
    { id: 2130, author: 'Sophia Patel', text: 'Any recommendations?', timestamp: '2026-04-09 10:20', replies: [
        { id: 2131, author: 'Emma White', text: 'Depends on your interests.', timestamp: '2026-04-09 10:25' }
      ] },
    { id: 2132, author: 'Liam Clark', text: 'Quality varies a lot.', timestamp: '2026-04-09 10:30' }
  ],
},
{
  id: 535,
  boardId: 1,
  title: 'New coworking space opens downtown',
  content: 'A modern coworking space has opened with flexible desks and meeting rooms.',
  image: [],
  authorID: 'Sarah Mitchell',
  timestamp: '2026-04-09 11:00',
  comments: [
    { id: 2133, author: 'James Carter', text: 'Looks like a great setup.', timestamp: '2026-04-09 11:05' },
    { id: 2134, author: 'Emma White', text: 'Remote workers will love this.', timestamp: '2026-04-09 11:10' },
    { id: 2135, author: 'Daniel Moore', text: 'What are the prices like?', timestamp: '2026-04-09 11:15' },
    { id: 2136, author: 'Sophia Hall', text: 'Do they offer day passes?', timestamp: '2026-04-09 11:20', replies: [
        { id: 2137, author: 'Sarah Mitchell', text: 'Yes, flexible options available.', timestamp: '2026-04-09 11:25' }
      ] },
    { id: 2138, author: 'Liam Turner', text: 'Good for networking too.', timestamp: '2026-04-09 11:30' }
  ],
},
{
  id: 536,
  boardId: 1,
  title: 'What motivates you at work?',
  content: 'Curious to hear what drives people to stay engaged and productive in their roles.',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-09 12:00',
  comments: [
    { id: 2139, author: 'Daniel Moore', text: 'Meaningful work.', timestamp: '2026-04-09 12:05' },
    { id: 2140, author: 'Emily Watson', text: 'Good team environment.', timestamp: '2026-04-09 12:10' },
    { id: 2141, author: 'Sophia Patel', text: 'Growth opportunities.', timestamp: '2026-04-09 12:15' },
    { id: 2142, author: 'Michael Brown', text: 'Recognition helps a lot.', timestamp: '2026-04-09 12:20', replies: [
        { id: 2143, author: 'Rachel Adams', text: 'Definitely underrated.', timestamp: '2026-04-09 12:25' }
      ] },
    { id: 2144, author: 'Liam Clark', text: 'Work-life balance.', timestamp: '2026-04-09 12:30' }
  ],
},
{
  id: 549,
  boardId: 1,
  title: 'Major gaming studio announces new IP',
  content: 'A well-known gaming studio has revealed a brand new intellectual property, sparking excitement among fans.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716728/CD_Projekt_logo.svg_ftz7ds.png'],
  authorID: 'Michael Brown',
  timestamp: '2026-04-09 13:00',
  comments: [
    { id: 2145, author: 'James Carter', text: 'Always nice to see something original.', timestamp: '2026-04-09 13:05' },
    { id: 2146, author: 'Emma White', text: 'Hope it’s not just hype.', timestamp: '2026-04-09 13:10' },
    { id: 2147, author: 'Noah Clark', text: 'Any gameplay details yet?', timestamp: '2026-04-09 13:15' },
    { id: 2148, author: 'Liam Turner', text: 'Studios taking risks is good.', timestamp: '2026-04-09 13:20', replies: [
        { id: 2149, author: 'Sophia Hall', text: 'Agreed, we need more innovation.', timestamp: '2026-04-09 13:25' }
      ] },
    { id: 2150, author: 'Ethan Lewis', text: 'Looking forward to updates.', timestamp: '2026-04-09 13:30' }
  ],
},
{
  id: 550,
  boardId: 1,
  title: 'Local school introduces new digital curriculum',
  content: 'Schools in the district are integrating more digital tools into their teaching methods.',
  image: [],
  authorID: 'City Updates',
  timestamp: '2026-04-09 14:00',
  comments: [
    { id: 2151, author: 'Emily Watson', text: 'Good step forward.', timestamp: '2026-04-09 14:05' },
    { id: 2152, author: 'Daniel Hughes', text: 'Depends on how it’s implemented.', timestamp: '2026-04-09 14:10' },
    { id: 2153, author: 'Sophia Patel', text: 'Teachers need proper training too.', timestamp: '2026-04-09 14:15' },
    { id: 2154, author: 'Liam Clark', text: 'What tools are they using?', timestamp: '2026-04-09 14:20', replies: [
        { id: 2155, author: 'City Updates', text: 'Mostly tablets and online platforms.', timestamp: '2026-04-09 14:25' }
      ] },
    { id: 2156, author: 'Michael Brown', text: 'Interesting to see long-term impact.', timestamp: '2026-04-09 14:30' }
  ],
},
{
  id: 551,
  boardId: 1,
  title: 'Streaming service experiments with live content',
  content: 'A streaming platform is testing live shows to compete with traditional TV broadcasts.',
  image: [],
  authorID: 'Olivia Green',
  timestamp: '2026-04-09 15:00',
  comments: [
    { id: 2157, author: 'Emma White', text: 'Live content could be huge.', timestamp: '2026-04-09 15:05' },
    { id: 2158, author: 'Noah Wilson', text: 'Depends on execution.', timestamp: '2026-04-09 15:10' },
    { id: 2159, author: 'Sophia Hall', text: 'Sports and events make sense.', timestamp: '2026-04-09 15:15' },
    { id: 2160, author: 'Liam Turner', text: 'Trying to replace cable again.', timestamp: '2026-04-09 15:20', replies: [
        { id: 2161, author: 'Daniel Moore', text: 'Full circle moment.', timestamp: '2026-04-09 15:25' }
      ] },
    { id: 2162, author: 'Ethan Lewis', text: 'Interesting direction.', timestamp: '2026-04-09 15:30' }
  ],
},
{
  id: 552,
  boardId: 1,
  title: 'Career growth: importance of mentorship',
  content: 'Having a mentor can significantly accelerate career development and decision-making.',
  image: [],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-09 16:00',
  comments: [
    { id: 2163, author: 'Daniel Moore', text: 'Mentorship helped me a lot.', timestamp: '2026-04-09 16:05' },
    { id: 2164, author: 'Emily Watson', text: 'Finding a good mentor is key.', timestamp: '2026-04-09 16:10' },
    { id: 2165, author: 'Sophia Patel', text: 'Also being a mentor is rewarding.', timestamp: '2026-04-09 16:15' },
    { id: 2166, author: 'Liam Clark', text: 'Where do you find mentors?', timestamp: '2026-04-09 16:20', replies: [
        { id: 2167, author: 'Rachel Adams', text: 'Networking and within your workplace.', timestamp: '2026-04-09 16:25' }
      ] },
    { id: 2168, author: 'Michael Brown', text: 'Underrated advantage.', timestamp: '2026-04-09 16:30' }
  ],
},
{
  id: 553,
  boardId: 1,
  title: 'City announces new bike lanes',
  content: 'New bike lanes are being added across several major streets to improve safety.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716729/_131055666_mediaitem131055665_olz5zk.jpg'],
  authorID: 'City Updates',
  timestamp: '2026-04-10 09:00',
  comments: [
    { id: 2169, author: 'James Carter', text: 'Great for cyclists.', timestamp: '2026-04-10 09:05' },
    { id: 2170, author: 'Emma White', text: 'Hopefully reduces accidents.', timestamp: '2026-04-10 09:10' },
    { id: 2171, author: 'Noah Clark', text: 'Traffic might get worse though.', timestamp: '2026-04-10 09:15' },
    { id: 2172, author: 'Sophia Hall', text: 'Do we know the locations?', timestamp: '2026-04-10 09:20', replies: [
        { id: 2173, author: 'City Updates', text: 'Map will be released soon.', timestamp: '2026-04-10 09:25' }
      ] },
    { id: 2174, author: 'Liam Turner', text: 'Good sustainability move.', timestamp: '2026-04-10 09:30' }
  ],
},
{
  id: 554,
  boardId: 1,
  title: 'Music festival tickets sell out quickly',
  content: 'Tickets for the upcoming music festival sold out within hours of release.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716688/Screenshot_2026-04-08_232447_gbqcox.png'],
  authorID: 'Michael Brown',
  timestamp: '2026-04-10 10:00',
  comments: [
    { id: 2175, author: 'Emma White', text: 'Demand is crazy.', timestamp: '2026-04-10 10:05' },
    { id: 2176, author: 'Noah Wilson', text: 'Lineup must be strong.', timestamp: '2026-04-10 10:10' },
    { id: 2177, author: 'Sophia Patel', text: 'Resale prices will spike.', timestamp: '2026-04-10 10:15' },
    { id: 2178, author: 'Liam Clark', text: 'Anyone manage to get tickets?', timestamp: '2026-04-10 10:20', replies: [
        { id: 2179, author: 'James Carter', text: 'Got lucky this time.', timestamp: '2026-04-10 10:25' }
      ] },
    { id: 2180, author: 'Ethan Lewis', text: 'Missed out again.', timestamp: '2026-04-10 10:30' }
  ],
},
{
  id: 555,
  boardId: 1,
  title: 'Remote work vs office debate continues',
  content: 'Companies remain divided on whether to fully return to offices or maintain hybrid setups.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716429/53C5120E-F155-4EE0-B2C4-EF25823EA29C_ipyaot.jpg'],
  authorID: 'Rachel Adams',
  timestamp: '2026-04-10 11:00',
  comments: [
    { id: 2181, author: 'Daniel Hughes', text: 'Hybrid seems like the best compromise.', timestamp: '2026-04-10 11:05' },
    { id: 2182, author: 'Emily Watson', text: 'Remote works better for me.', timestamp: '2026-04-10 11:10' },
    { id: 2183, author: 'Sophia Patel', text: 'Depends on the role.', timestamp: '2026-04-10 11:15' },
    { id: 2184, author: 'Liam Turner', text: 'Culture is harder remotely.', timestamp: '2026-04-10 11:20', replies: [
        { id: 2185, author: 'Daniel Moore', text: 'But flexibility matters more now.', timestamp: '2026-04-10 11:25' }
      ] },
    { id: 2186, author: 'Michael Brown', text: 'This debate won’t end soon.', timestamp: '2026-04-10 11:30' }
  ],
},
{
  id: 556,
  boardId: 1,
  title: 'New fitness trend gains popularity',
  content: 'A new fitness trend combining strength and mobility training is gaining traction.',
  image: ['https://res.cloudinary.com/dknc0pbl6/image/upload/v1775716730/eUyc3vvgALpPpVYZrYGYZX_fq4pa2.jpg'],
  authorID: 'Sarah Mitchell',
  timestamp: '2026-04-10 12:00',
  comments: [
    { id: 2187, author: 'Emma White', text: 'Sounds interesting.', timestamp: '2026-04-10 12:05' },
    { id: 2188, author: 'James Carter', text: 'Mobility is underrated.', timestamp: '2026-04-10 12:10' },
    { id: 2189, author: 'Sophia Hall', text: 'Any examples of workouts?', timestamp: '2026-04-10 12:15', replies: [
        { id: 2190, author: 'Sarah Mitchell', text: 'Combination of stretching and resistance.', timestamp: '2026-04-10 12:20' }
      ] },
    { id: 2191, author: 'Liam Clark', text: 'Good for injury prevention.', timestamp: '2026-04-10 12:25' },
    { id: 2192, author: 'Ethan Lewis', text: 'Might try this.', timestamp: '2026-04-10 12:30' }
  ],
}


]
