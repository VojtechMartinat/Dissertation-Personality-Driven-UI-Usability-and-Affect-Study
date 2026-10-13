export interface ChatMessage {
  id: number
  sender: 'You' | string
  text: string
  time: string
}

export interface ChatThread {
  id: string
  person: string
  profileId?: string
  avatar: string
  preview: string
  updatedAt: string
  messages: ChatMessage[]
}

export const chats: ChatThread[] = [
  {
    id: 'sam',
    person: 'Sam',
    profileId: 'sam',
    avatar: '',
    preview: 'Can you review my post draft before I publish?',
    updatedAt: '2m ago',
    messages: [
      { id: 1, sender: 'Sam', text: 'Hey! Did you see that new documentary everyone is talking about?', time: 'Yesterday' },
      { id: 2, sender: 'You', text: 'The one about the deep-sea explorers? Just finished it last night!', time: 'Yesterday' },
      { id: 3, sender: 'Sam', text: 'Yes! The cinematography was incredible, but the ending felt a bit rushed.', time: '9:00 AM' },
      { id: 4, sender: 'You', text: 'I thought the same. They skipped over a lot of the technical details.', time: '9:15 AM' },
      { id: 5, sender: 'Sam', text: 'Exactly. I’m actually writing a little breakdown of it for my blog.', time: '10:00 AM' },
      { id: 6, sender: 'You', text: 'Nice! I’d love to read that when you’re done.', time: '10:05 AM' },
      { id: 7, sender: 'Sam', text: 'I’m almost finished with the draft—would you mind giving it a quick read to see if my critique makes sense?', time: '10:22 AM' }
    ],
  },
  {
    id: 'rina',
    person: 'Rina',
    profileId: 'rina',
    avatar: '',
    preview: 'Thanks for the reply in the design thread 🙌',
    updatedAt: '18m ago',
    messages: [
      { id: 1, sender: 'Rina', text: 'Are we still on for the hiking trip this Saturday?', time: '9:30 AM' },
      { id: 2, sender: 'You', text: 'Definitely! I’ve been looking forward to some fresh air.', time: '9:45 AM' },
      { id: 3, sender: 'Rina', text: 'Me too. The weather looks clear, maybe a bit chilly.', time: '9:48 AM' },
      { id: 4, sender: 'You', text: 'I’ll bring an extra thermos of coffee then.', time: '10:00 AM' },
      { id: 5, sender: 'Rina', text: 'Life saver! I’ve already mapped out the 5-mile loop.', time: '10:15 AM' },
      { id: 6, sender: 'You', text: 'Perfect. Should we meet at the trailhead or carpool?', time: '10:20 AM' },
      { id: 7, sender: 'Rina', text: 'If you want to drive, I can bring the snacks—do you prefer the salty trail mix or those protein bars we had last time?', time: '10:30 AM' }
    ],
  },
  {
    id: 'devon',
    person: 'Devon',
    profileId: 'devon',
    avatar: '',
    preview: 'The feedback from the client is in.',
    updatedAt: '1h ago',
    messages: [
      { id: 1, sender: 'Devon', text: 'Hey, I just uploaded the latest version of the wireframes to the shared folder.', time: '8:05 AM' },
      { id: 2, sender: 'You', text: 'Thanks, I’ll take a look before the stand-up meeting.', time: '8:15 AM' },
      { id: 3, sender: 'Devon', text: 'Great. I simplified the navigation based on the user testing notes we got.', time: '8:16 AM' },
      { id: 4, sender: 'You', text: 'That makes sense. It was feeling a bit cluttered in the previous iteration.', time: '8:20 AM' },
      { id: 5, sender: 'Devon', text: 'Exactly. I also updated the color contrast to meet accessibility standards.', time: '8:22 AM' },
      { id: 6, sender: 'You', text: 'Good call. I’ll check the prototype and add my comments on the interaction flow.', time: '8:30 AM' },
      { id: 7, sender: 'Devon', text: 'Sounds like a plan. Should we schedule a quick call to finalize these changes before we present to the stakeholders?', time: '9:05 AM' }
    ],
  },
]
