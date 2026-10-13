import type { Comment } from '../../A/data/posts'

export interface PostMediaItem {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface SocialPost {
  id: number
  authorId: string
  authorName: string
  authorAvatar: string
  timestamp: string
  caption: string
  comments: Comment[]
  media: PostMediaItem[]
  likeCount: number
  interactionCount: number
  viewerLiked: boolean
}

export interface StoryItem {
  id: string
  authorId: string
  authorName: string
  avatar: string
  videoSrc: string
}

export const socialPosts: SocialPost[] = [
  {
    id: 1,
    authorId: 'sammie',
    authorName: 'Sammie Lee',
    authorAvatar: 'https://i.pravatar.cc/80?img=21',
    timestamp: '12m ago',
    caption: 'Morning light test with a selfie',
    likeCount: 142,
    interactionCount: 27,
    viewerLiked: false,
    media: [
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776374962/pexels-inesa-peregania-2148988141-30487464_jbuskd.jpg',
        alt: 'Portrait style selfie outdoors',
      }
      ,
       {
        type: 'image',
        src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776374964/pexels-catherine-chechun-2156836211-36858445_mcwslg.jpg',
        alt: 'Portrait style selfie outdoors',
      }
    ],
    comments: [
    { id: 1, author: 'jess_vibe', text: 'the lighting is actually perfect! ✨' },
    { id: 2, author: 'marcus_fitz', text: 'golden hour looks good on you!' },
    { id: 3, author: 'clara.daily', text: 'stunning 😍 hope you have a great day!!' },
    { id: 4, author: 'pixel_perfect', text: 'is this a filter or just the sun?? ☀️' },
    { id: 5, author: 'alex_r', text: 'killing it as usual 🔥🔥' },
    { id: 6, author: 'sophie_t', text: 'obsessed with this look!' },
    { id: 7, author: 'dan_cam', text: 'drop the skincare routine pls' },
    { id: 8, author: 'maya_h', text: 'you look so happy! love this' },
    { id: 9, author: 'chris_p', text: 'fresh air fits you well' },
    { id: 10, author: 'bella_v', text: 'slaying the morning game 💅' }
],
  },
  {
    id: 3,
    authorId: 'devon',
    authorName: 'Devon Clark',
    authorAvatar: 'https://i.pravatar.cc/80?img=55',
    timestamp: '1h ago',
    caption: 'New reel',
    likeCount: 89,
    interactionCount: 19,
    viewerLiked: false,
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776374977/2853795-uhd_3840_2160_24fps_-_Trim_pf88e6.mp4',
        alt: 'Vertical reel style video',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776374967/5365153-uhd_2160_3840_25fps_tbi1jj.mp4',
        alt: 'Vertical reel style video',
      },
    ],
    comments: [
    { id: 1, author: 'sk8_life', text: 'that landing was butter 🧼' },
    { id: 2, author: 'tony_h', text: 'wait, what trick was that?!' },
    { id: 3, author: 'jenna_shreds', text: 'the sunset in the back makes this so sick 🌅' },
    { id: 4, author: 'vibe_check', text: 'bro the commitment on that stair set is wild' },
    { id: 5, author: 'remi_edit', text: 'what camera are you filming on? looks so clean' },
    { id: 6, author: 'kickflip_king', text: 'i’ve been trying to learn this for months 😭' },
    { id: 7, author: 'ollie_girl', text: 'steeze level 100/100' },
    { id: 8, author: 'park_rat', text: 'is this at the new downtown spot?' },
    { id: 9, author: 'lucas_f', text: 'almost hit that car lol' },
    { id: 10, author: 'thrasher_fan', text: 'keep the clips coming fr fr 🔥' }
],
  },
  {
  id: 1,
  authorId: 'user_91',
  authorName: 'Jess K',
  authorAvatar: 'https://i.pravatar.cc/80?img=12',
  timestamp: '12m ago',
  caption: 'POV: u said just one episode 😭📺',
  likeCount: 1823,
  interactionCount: 312,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776120301/oar2_kfk3cn.jpg', alt: 'binge watching meme' }
  ],
  comments: [
    { id: 1, author: 'amy', text: 'this is TOO real 💀' },
    { id: 2, author: 'leo', text: 'me at 3am rn' },
    { id: 3, author: 'nina', text: 'why does this always happen 😭' },
    { id: 4, author: 'max', text: 'netflix did this to us fr' },
    { id: 5, author: 'ella', text: 'no self control gang' },
    { id: 6, author: 'sam', text: 'same bro same' },
    { id: 7, author: 'kai', text: 'episode 1 → season 3 instantly' },
    { id: 8, author: 'zoe', text: 'stop exposing me 😭' },
    { id: 9, author: 'liam', text: 'worth it tho' },
    { id: 10, author: 'olga', text: 'sleep is optional ig' }
  ],
},
{
  id: 2,
  authorId: 'user_32',
  authorName: 'Mikey',
  authorAvatar: 'https://i.pravatar.cc/80?img=22',
  timestamp: '25m ago',
  caption: 'when the beat drops 🔊🔥',
  likeCount: 3421,
  interactionCount: 540,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776120302/JRSxdq_n2dnhb.gif', alt: 'dance drop' }
  ],
  comments: [
    { id: 11, author: 'jay', text: 'BROOO 🔥🔥' },
    { id: 12, author: 'anna', text: 'that drop was insane' },
    { id: 13, author: 'chris', text: 'rewatching 10x' },
    { id: 14, author: 'tina', text: 'song name??' },
    { id: 15, author: 'rob', text: 'goosebumps fr' },
    { id: 16, author: 'mia', text: 'this hits diff 😩' },
    { id: 17, author: 'nick', text: 'bass went crazy' },
    { id: 18, author: 'ivy', text: 'i felt that drop' },
    { id: 19, author: 'omar', text: '🔥🔥🔥🔥🔥' },
    { id: 20, author: 'sara', text: 'playlist asap pls' }
  ],
},
{
  id: 3,
  authorId: 'user_11',
  authorName: 'Alex G',
  authorAvatar: 'https://i.pravatar.cc/80?img=5',
  timestamp: '1h ago',
  caption: 'tried cooking… this happened 💀🍝',
  likeCount: 980,
  interactionCount: 201,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776120300/F1OGzC4X0AE-bUx_cxhmxp.jpg', alt: 'burnt food' }
  ],
  comments: [
    { id: 21, author: 'jen', text: 'nahhh what is THAT 😭' },
    { id: 22, author: 'tom', text: 'call the fire dept' },
    { id: 23, author: 'lily', text: 'u tried tho 💀' },
    { id: 24, author: 'max', text: 'edible??' },
    { id: 25, author: 'amy', text: 'i’m crying 😂' },
    { id: 26, author: 'leo', text: 'chef disaster fr' },
    { id: 27, author: 'zoe', text: 'just order next time' },
    { id: 28, author: 'sam', text: 'this ain’t pasta anymore' },
    { id: 29, author: 'eva', text: 'charcoal vibes' },
    { id: 30, author: 'kai', text: 'still better than mine tbh' }
  ],
},
{
  id: 4,
  authorId: 'user_88',
  authorName: 'Lena',
  authorAvatar: 'https://i.pravatar.cc/80?img=30',
  timestamp: '2h ago',
  caption: 'fit check before i change 5 times 😭👗',
  likeCount: 4120,
  interactionCount: 700,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776374962/pexels-meriy-8498727_fsyqcd.jpg', alt: 'outfit mirror' },
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776374962/pexels-beyzaa-yurtkuran-279977530-16210275_agpadd.jpg', alt: 'outfit mirror' }
  ],
  comments: [
    { id: 31, author: 'amy', text: 'THIS FIT 🔥' },
    { id: 32, author: 'leo', text: 'dont change its perfect' },
    { id: 33, author: 'mia', text: 'where is this from??' },
    { id: 34, author: 'zoe', text: 'slayyy 💅' },
    { id: 35, author: 'nick', text: 'actually fire fit' },
    { id: 36, author: 'ivy', text: 'stop u look amazing' },
    { id: 37, author: 'omar', text: 'fit goes hard' },
    { id: 38, author: 'sam', text: '10/10 fr' },
    { id: 39, author: 'ella', text: 'wish i had this style 😭' },
    { id: 40, author: 'tina', text: 'dont overthink it lol' }
  ],
},
{
  id: 5,
  authorId: 'user_65',
  authorName: 'Chris D',
  authorAvatar: 'https://i.pravatar.cc/80?img=14',
  timestamp: '3h ago',
  caption: 'when u wave back at someone who wasnt waving at u 😭👋',
  likeCount: 5230,
  interactionCount: 1100,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121766/that-was-nice-of-them-v0-zft9vnogryd71_jpg_ss01ii.png', alt: 'awkward meme' }
  ],
  comments: [
    { id: 41, author: 'jay', text: 'NAHHH this pain is real' },
    { id: 42, author: 'anna', text: 'i pretend i was stretching 💀' },
    { id: 43, author: 'rob', text: 'just walk away fast' },
    { id: 44, author: 'mia', text: 'why does this happen so often 😭' },
    { id: 45, author: 'leo', text: 'instant regret' },
    { id: 46, author: 'zoe', text: 'social anxiety unlocked' },
    { id: 47, author: 'sam', text: 'i look at my phone after' },
    { id: 48, author: 'ivy', text: 'never making eye contact again' },
    { id: 49, author: 'nick', text: 'pain level 100' },
    { id: 50, author: 'ella', text: 'why u calling me out 😭' }
  ],
},

{
  id: 6,
  authorId: 'user_44',
  authorName: 'Tyler',
  authorAvatar: 'https://i.pravatar.cc/80?img=18',
  timestamp: '5m ago',
  caption: 'gym progress but i still feel skinny 😭💪',
  likeCount: 2670,
  interactionCount: 410,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776374962/pexels-kenzero14-28427828_mkhvls.jpg', alt: 'gym mirror' }
  ],
  comments: [
    { id: 51, author: 'leo', text: 'bro ur huge wdym' },
    { id: 52, author: 'max', text: 'body dysmorphia hits diff fr' },
    { id: 53, author: 'amy', text: 'progress is insane 🔥' },
    { id: 54, author: 'sam', text: 'keep going king' },
    { id: 55, author: 'nick', text: 'we all feel like that tbh' },
    { id: 56, author: 'ella', text: 'ur doing great 😭' },
    { id: 57, author: 'ivy', text: 'what split u doing?' },
    { id: 58, author: 'omar', text: 'respect the grind 💪' },
    { id: 59, author: 'zoe', text: 'confidence loading…' },
    { id: 60, author: 'mia', text: 'literally goals' }
  ],
},
{
  id: 7,
  authorId: 'user_77',
  authorName: 'Nina',
  authorAvatar: 'https://i.pravatar.cc/80?img=41',
  timestamp: '18m ago',
  caption: 'me opening the fridge 10 times hoping new food appears 😭🥲',
  likeCount: 6120,
  interactionCount: 990,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121757/imfffages_aswcus.jpg', alt: 'fridge meme' }
  ],
  comments: [
    { id: 61, author: 'amy', text: 'THIS IS ME' },
    { id: 62, author: 'leo', text: 'like maybe this time 😭' },
    { id: 63, author: 'sam', text: 'fridge be empty af' },
    { id: 64, author: 'max', text: 'snacks magically gone' },
    { id: 65, author: 'zoe', text: 'i check again just in case' },
    { id: 66, author: 'nick', text: 'delusion is real' },
    { id: 67, author: 'ella', text: '😭😭😭' },
    { id: 68, author: 'ivy', text: 'this too accurate' },
    { id: 69, author: 'omar', text: 'midnight routine' },
    { id: 70, author: 'mia', text: 'why u spying on me' }
  ],
},
{
  id: 8,
  authorId: 'user_21',
  authorName: 'Jake',
  authorAvatar: 'https://i.pravatar.cc/80?img=9',
  timestamp: '40m ago',
  caption: 'POV: u hear ur fav song in public 🔥🎧',
  likeCount: 4300,
  interactionCount: 720,
  viewerLiked: false,
  media: [
    { type: 'video', src: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776200554/Lix_on_TikTok_1_-_Trim_ebdkic.mp4', alt: 'head nodding' }
  ],
  comments: [
    { id: 71, author: 'leo', text: 'instant vibe change' },
    { id: 72, author: 'amy', text: 'main character moment fr' },
    { id: 73, author: 'zoe', text: 'i start performing lowkey' },
    { id: 74, author: 'sam', text: 'cant control the head nod' },
    { id: 75, author: 'nick', text: 'playlist goes crazy' },
    { id: 76, author: 'ivy', text: 'song name pls' },
    { id: 77, author: 'omar', text: '🔥🔥🔥' },
    { id: 78, author: 'ella', text: 'music hits diff outside' },
    { id: 79, author: 'mia', text: 'why is this so real' },
    { id: 80, author: 'max', text: 'immediate serotonin' }
  ],
},
{
  id: 9,
  authorId: 'user_55',
  authorName: 'Sophie',
  authorAvatar: 'https://i.pravatar.cc/80?img=28',
  timestamp: '1h ago',
  caption: 'tried a new cafe ☕✨ lowkey obsessed',
  likeCount: 2100,
  interactionCount: 350,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121765/cozy-cafe-interior-stockcake_jpg_jxr3uj.png', alt: 'coffee aesthetic' }
  ],
  comments: [
    { id: 81, author: 'amy', text: 'this looks so good' },
    { id: 82, author: 'leo', text: 'where is this??' },
    { id: 83, author: 'zoe', text: 'aesthetic af' },
    { id: 84, author: 'sam', text: 'coffee date vibes' },
    { id: 85, author: 'nick', text: 'price tho?' },
    { id: 86, author: 'ivy', text: 'need to go asap' },
    { id: 87, author: 'ella', text: 'cute place fr' },
    { id: 88, author: 'omar', text: 'looks expensive 😭' },
    { id: 89, author: 'mia', text: 'worth it?' },
    { id: 90, author: 'max', text: 'saving this spot' }
  ],
},
{
  id: 10,
  authorId: 'user_66',
  authorName: 'Eli',
  authorAvatar: 'https://i.pravatar.cc/80?img=33',
  timestamp: '2h ago',
  caption: 'when the teacher says “this will be on the exam” 😳📚',
  likeCount: 7800,
  interactionCount: 1500,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121758/isddsmages_uoeyo7.jpg', alt: 'school meme' }
  ],
  comments: [
    { id: 91, author: 'leo', text: 'immediately writing everything' },
    { id: 92, author: 'amy', text: 'panic mode activated' },
    { id: 93, author: 'sam', text: 'this determines my future' },
    { id: 94, author: 'zoe', text: '😭😭😭' },
    { id: 95, author: 'nick', text: 'still forget it somehow' },
    { id: 96, author: 'ivy', text: 'why is it always last minute' },
    { id: 97, author: 'ella', text: 'too real omg' },
    { id: 98, author: 'omar', text: 'stress unlocked' },
    { id: 99, author: 'mia', text: 'me pretending i understand' },
    { id: 100, author: 'max', text: 'same every time' }
  ],
},
{
  id: 11,
  authorId: 'user_12',
  authorName: 'Luca',
  authorAvatar: 'https://i.pravatar.cc/80?img=12',
  timestamp: '1h ago',
  caption: 'me opening the fridge for the 5th time like something new gonna spawn 💀',
  likeCount: 12400,
  interactionCount: 2300,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121637/8281f2164690ab604c111ce2a8b89f17_im3vj4.jpg', alt: 'fridge meme' }
  ],
  comments: [
    { id: 101, author: 'nina', text: 'literally just did this 😭' },
    { id: 102, author: 'alex', text: 'it be respawning trust' },
    { id: 103, author: 'jay', text: 'hoping for snacks magically' },
    { id: 104, author: 'emma', text: 'same bro same' },
    { id: 105, author: 'liam', text: 'its empty every time 💀' }
  ],
},
{
  id: 12,
  authorId: 'user_88',
  authorName: 'Sophie',
  authorAvatar: 'https://i.pravatar.cc/80?img=21',
  timestamp: '3h ago',
  caption: 'breaking: i said “one more episode” and now its 3am 😭📺',
  likeCount: 15800,
  interactionCount: 3100,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121744/7231b4be163f2d995acc73e71ededf9d_hx5kgt.jpg', alt: 'netflix meme' }
  ],
  comments: [
    { id: 106, author: 'tom', text: 'every single night' },
    { id: 107, author: 'zoe', text: 'why do we lie to ourselves' },
    { id: 108, author: 'ryan', text: 'no regrets tho' },
    { id: 109, author: 'ella', text: 'worth it tbh' },
    { id: 110, author: 'max', text: 'sleep is optional' }
  ],
},
{
  id: 13,
  authorId: 'user_45',
  authorName: 'Kai',
  authorAvatar: 'https://i.pravatar.cc/80?img=5',
  timestamp: '5h ago',
  caption: 'when u trip in public and pretend it was on purpose 😭',
  likeCount: 9900,
  interactionCount: 1800,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121743/Screenshot_2026-04-14_000036_oztcoe.png', alt: 'trip meme' }
  ],
  comments: [
    { id: 111, author: 'mia', text: 'just stretch it out real quick' },
    { id: 112, author: 'leo', text: 'act natural act natural' },
    { id: 113, author: 'amy', text: 'my worst fear fr' },
    { id: 114, author: 'noah', text: 'played it off smooth' },
    { id: 115, author: 'ivy', text: 'immediately checking if anyone saw' }
  ],
},
{
  id: 14,
  authorId: 'user_73',
  authorName: 'Aria',
  authorAvatar: 'https://i.pravatar.cc/80?img=19',
  timestamp: '30m ago',
  caption: 'me: how do i budget more this month also me: buying coffee everyday ☕️💸',
  likeCount: 17200,
  interactionCount: 3500,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776121809/instead-of-buying-expensive-starbucks-coffee-every-day-just-v0-8jmp8d9suuqb1_jpg_vj4v1g.png', alt: 'coffee meme' }
  ],
  comments: [
    { id: 116, author: 'sam', text: 'its self care ok' },
    { id: 117, author: 'ella', text: 'budget who??' },
    { id: 118, author: 'jack', text: 'coffee is essential' },
    { id: 119, author: 'zoe', text: 'me rn 😭' },
    { id: 120, author: 'leo', text: 'no regrets at all' }
  ],
},

{
  id: 15,
  authorId: 'user_103',
  authorName: 'DidYouKnow',
  authorAvatar: 'https://i.pravatar.cc/80?img=47',
  timestamp: '5h ago',
  caption: 'Fun Fact: octopuses have three hearts and blue blood 🐙',
  likeCount: 26800,
  interactionCount: 4900,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203715/GGNGe9dW8AA95r6_eh3qoq.jpg', alt: 'octopus fact' }
  ],
  comments: [
    { id: 271, author: 'leo', text: 'thats kinda cool' },
    { id: 272, author: 'amy', text: 'why do they need 3 😭' },
    { id: 273, author: 'emma', text: 'nature is wild' },
    { id: 274, author: 'zoe', text: 'blue blood??' },
    { id: 275, author: 'max', text: 'octopus op' }
  ],
},
{
  id: 19,
  authorId: 'user_19',
  authorName: 'Ethan',
  authorAvatar: 'https://i.pravatar.cc/80?img=9',
  timestamp: '14h ago',
  caption: 'when ur phone at 1% and no charger in sight 😳',
  likeCount: 14500,
  interactionCount: 2700,
  viewerLiked: true,
  media: [
    { type: 'video', src: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776202756/Pov_Your_Phone_Is_at_1_and_Cant_Find_Charger_TikTok_xrm85n.mp4', alt: 'battery meme' }
  ],
  comments: [
    { id: 141, author: 'amy', text: 'pure panic' },
    { id: 142, author: 'liam', text: 'survival mode' },
    { id: 143, author: 'kai', text: 'brightness to 0 asap' },
    { id: 144, author: 'zoe', text: 'closing all apps 😭' },
    { id: 145, author: 'max', text: 'its over' }
  ],
},

{
  id: 41,
  authorId: 'user_101',
  authorName: 'FactDaily',
  authorAvatar: 'https://i.pravatar.cc/80?img=45',
  timestamp: '1h ago',
  caption: 'Scientists confirm that listening to music can significantly improve mood and focus 🎧',
  likeCount: 28400,
  interactionCount: 5200,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203712/622326939_968528546341755_8008734477137306294_n_lwvzuc.jpg', alt: 'music brain graphic' }
  ],
  comments: [
    { id: 251, author: 'leo', text: 'makes sense tbh' },
    { id: 252, author: 'amy', text: 'music carries me daily' },
    { id: 253, author: 'emma', text: 'study playlist goated' },
    { id: 254, author: 'zoe', text: 'cant live without it' },
    { id: 255, author: 'max', text: 'science backing vibes' }
  ],
},
{
  id: 42,
  authorId: 'user_16',
  authorName: 'Luca',
  authorAvatar: 'https://i.pravatar.cc/80?img=12',
  timestamp: '2h ago',
  caption: 'me opening a snack quietly at night like im in a spy movie 😭',
  likeCount: 19700,
  interactionCount: 4100,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203696/brxw7mrxi1b61_d2wkf1.jpg', alt: 'sneaky snack meme' }
  ],
  comments: [
    { id: 256, author: 'nina', text: 'the wrapper is so loud' },
    { id: 257, author: 'leo', text: 'mission impossible fr' },
    { id: 258, author: 'amy', text: 'everyone hears it somehow' },
    { id: 259, author: 'emma', text: 'stealth 0' },
    { id: 260, author: 'zoe', text: 'why is it that loud 😭' }
  ],
},
{
  id: 43,
  authorId: 'user_102',
  authorName: 'NewsByte',
  authorAvatar: 'https://i.pravatar.cc/80?img=46',
  timestamp: '3h ago',
  caption: 'Breaking: Indian study shows young people spend an average of over 7 hours daily on social media 📱',
  likeCount: 31200,
  interactionCount: 6000,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203692/1773659106731_istfcs.jpg', alt: 'social media stats' }
  ],
  comments: [
    { id: 261, author: 'leo', text: 'im above average then 💀' },
    { id: 262, author: 'amy', text: 'only 7??' },
    { id: 263, author: 'emma', text: 'no way its that low' },
    { id: 264, author: 'zoe', text: 'thats just insta time' },
    { id: 265, author: 'max', text: 'we cooked' }
  ],
},
{
  id: 44,
  authorId: 'user_27',
  authorName: 'Ethan',
  authorAvatar: 'https://i.pravatar.cc/80?img=9',
  timestamp: '4h ago',
  caption: 'when u look for ur phone while holding it 🤡',
  likeCount: 22100,
  interactionCount: 4500,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203690/EAbTgJYXUAE9mUl_zkdtsa.jpg', alt: 'phone meme' }
  ],
  comments: [
    { id: 266, author: 'amy', text: 'done this too many times' },
    { id: 267, author: 'leo', text: 'brain not braining' },
    { id: 268, author: 'emma', text: 'im embarrassed 😭' },
    { id: 269, author: 'zoe', text: 'same energy as glasses on head' },
    { id: 270, author: 'max', text: 'why are we like this' }
  ],
},

{
  id: 50,
  authorId: 'user_12',
  authorName: 'Arjun',
  authorAvatar: 'https://i.pravatar.cc/80?img=33',
  timestamp: '5h ago',
  caption: 'morning view from the hike today 🌄',
  likeCount: 9800,
  interactionCount: 1400,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203261/IMG_2811_s6ichd.heic', alt: 'mountain sunrise' }
  ],
  comments: [
    { id: 296, author: 'zoe', text: 'this is unreal' },
    { id: 297, author: 'leo', text: 'worth the climb?' },
    { id: 298, author: 'amy', text: 'i need this rn' },
    { id: 299, author: 'max', text: 'where is this??' },
    { id: 300, author: 'nina', text: 'peaceful vibes' }
  ],
},
{
  id: 51,
  authorId: 'user_77',
  authorName: 'Chris',
  authorAvatar: 'https://i.pravatar.cc/80?img=41',
  timestamp: '1d ago',
  caption: 'they said “just be yourself” so now what',
  likeCount: 22100,
  interactionCount: 4800,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203657/bc95173cd6c73978cce6762e6bb53c92_lbtef4.jpg', alt: 'identity crisis meme' }
  ],
  comments: [
    { id: 301, author: 'ella', text: 'instructions unclear' },
    { id: 302, author: 'noah', text: 'still figuring that out' },
    { id: 303, author: 'mia', text: 'same honestly' },
    { id: 304, author: 'jack', text: 'deep for no reason' },
    { id: 305, author: 'leo', text: 'existential crisis unlocked' }
  ],
},
{
  id: 52,
  authorId: 'user_65',
  authorName: 'Sofia',
  authorAvatar: 'https://i.pravatar.cc/80?img=18',
  timestamp: '3h ago',
  caption: 'new movie just dropped and it actually lived up to the hype 🎬',
  likeCount: 13400,
  interactionCount: 2100,
  viewerLiked: true,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203629/81o4R4G_xHL._UF1000_1000_QL80__yyajff.jpg', alt: 'cinema screen' }
  ],
  comments: [
    { id: 306, author: 'kai', text: 'no spoilers pls' },
    { id: 307, author: 'amy', text: 'worth watching?' },
    { id: 308, author: 'max', text: 'i loved it too' },
    { id: 309, author: 'zoe', text: 'going this weekend' },
    { id: 310, author: 'leo', text: 'soundtrack was insane' }
  ],
},
{
  id: 53,
  authorId: 'user_23',
  authorName: 'Daniel',
  authorAvatar: 'https://i.pravatar.cc/80?img=5',
  timestamp: '7h ago',
  caption: 'reminder: you don’t have to have it all figured out',
  likeCount: 17500,
  interactionCount: 2600,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203618/607057236_1290943716390805_1222723504445772216_n_pbvuam.jpg', alt: 'calm sky' }
  ],
  comments: [
    { id: 311, author: 'mia', text: 'needed this today' },
    { id: 312, author: 'nina', text: 'thank you 🫶' },
    { id: 313, author: 'kai', text: 'facts' },
    { id: 314, author: 'leo', text: 'one step at a time' },
    { id: 315, author: 'ella', text: 'so true' }
  ],
},
{
  id: 55,
  authorId: 'user_46',
  authorName: 'Isla',
  authorAvatar: 'https://i.pravatar.cc/80?img=21',
  timestamp: '6h ago',
  caption: 'coffee + rain + no plans = perfect day ☕🌧️',
  likeCount: 11200,
  interactionCount: 1500,
  viewerLiked: false,
  media: [
    { type: 'image', src: 'https://res.cloudinary.com/dknc0pbl6/image/upload/q_auto/f_auto/v1776203615/cozy-Rainy-Day-1024x683_ckzrvm.jpg', alt: 'coffee by window' }
  ],
  comments: [
    { id: 321, author: 'nina', text: 'cozy vibes' },
    { id: 322, author: 'kai', text: 'best combo' },
    { id: 323, author: 'amy', text: 'jealous' },
    { id: 324, author: 'leo', text: 'add a book and it’s perfect' },
    { id: 325, author: 'ella', text: 'sounds like heaven' }
  ],
}
]

export const stories: StoryItem[] = [
  {
    id: 'story-sammie',
    authorId: 'sammie',
    authorName: 'Sammie Lee',
    avatar: 'https://i.pravatar.cc/80?img=21',
    videoSrc: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776374971/8472338-uhd_2160_3840_30fps_-_Trim_z6yeie.mp4',
  },
  {
    id: 'story-rina',
    authorId: 'rina',
    authorName: 'Rina Shah',
    avatar: 'https://i.pravatar.cc/80?img=47',
    videoSrc: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776200554/Lix_on_TikTok_1_-_Trim_ebdkic.mp4',
  },
  {
    id: 'story-devon',
    authorId: 'devon',
    authorName: 'Devon Clark',
    avatar: 'https://i.pravatar.cc/80?img=55',
    videoSrc: 'https://res.cloudinary.com/dknc0pbl6/video/upload/q_auto/f_auto/v1776202756/Pov_Your_Phone_Is_at_1_and_Cant_Find_Charger_TikTok_xrm85n.mp4',
  },
]
