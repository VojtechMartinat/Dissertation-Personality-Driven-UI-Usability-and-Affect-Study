export interface ChatMessage {
  id: number
  sender: 'You' | string
  text: string
  time: string
}

export interface ChatThread {
  id: string
  person: string
  avatar: string
  preview: string
  updatedAt: string
  messages: ChatMessage[]
}

export const chats: ChatThread[] = [
  {
    id: 'sam',
    person: 'Sam',
    avatar: 'https://i.pravatar.cc/80?img=21',
    preview: 'For sure! So, are we hitting the library later or just gonna wing it?',
    updatedAt: '2m ago',
    messages: [
      
      { id: 1, sender: 'Sam', text: 'Real. We should just drop out and become skateboarders.', time: '10:21 AM' },
      { id: 2, sender: 'Sam', text: 'So, are we hitting the library later or just gonna wing it?', time: '10:23 AM' }
    ],
  },
  {
    id: 'rina',
    person: 'Rina',
    avatar: 'https://i.pravatar.cc/80?img=47',
    preview: 'Yesss! Wait, should we invite Devon too or just make it a duo trip?',
    updatedAt: '18m ago',
    messages: [
      { id: 1, sender: 'Rina', text: 'Maybe around 3 after my shift? We can grab boba too.', time: '9:32 AM' },
      { id: 2, sender: 'Rina', text: 'Wait, should we invite Bryan too or just make it a duo trip?', time: '9:40 AM' }
    ],
  },
  {
    id: 'devon',
    person: 'Devon',
    avatar: 'https://i.pravatar.cc/80?img=55',
    preview: 'Honestly! Any ideas on what specifically I should focus on for that?',
    updatedAt: '1h ago',
    messages: [
      { id: 2, sender: 'Devon', text: 'He just reminded us that the essay outline is due Thursday night.', time: '1:05 PM' },
      { id: 4, sender: 'Devon', text: 'He changed it just so you know. Everyone was groaning.', time: '1:10 PM' },

    ],
  }
]

