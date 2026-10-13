import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import VariantA from './A/Select'
import VariantB from './B/MainB'
import VariantC from './C/MainC'
import Board from './A/Board'
import ChatThreadB from './B/ChatThreadB'
import ProfileB from './B/ProfileB'
import AppWrapper from './logger'
import posthog from 'posthog-js'

const variants = ['/variant-a', '/variant-b', '/variant-c']

function App() {
  
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const prolificPid = searchParams.get('PROLIFIC_PID')

  
  useEffect(() => {
    if (prolificPid) {
      
      posthog.identify(prolificPid)
      
      
      posthog.people.set({
        prolific_pid: prolificPid,
        app_entry_date: new Date().toISOString()
      })
    }
  }, [prolificPid])

  const [selectedVariant] = useState(() => {
    const seen = JSON.parse(localStorage.getItem('seenVariants') || '[]')
    let unseen = variants.filter(v => !seen.includes(v))

    if (unseen.length === 0) {
      unseen = variants
    }

    const chosen = unseen[Math.floor(Math.random() * unseen.length)]
    const currentSeen = unseen === variants ? [] : seen
    
    localStorage.setItem('seenVariants', JSON.stringify([...currentSeen, chosen]))

    return chosen
  })

  
  useEffect(() => {
    posthog.capture('variant_assigned', { 
      variant: selectedVariant,
      
      prolific_pid: prolificPid 
    })
  }, [selectedVariant, prolificPid])

  return (
    <AppWrapper>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to={`${selectedVariant}${location.search}`} replace />} 
        />
        
        <Route path="/variant-a" element={<VariantA />} />
        <Route path="/variant-b" element={<VariantB />} />
        <Route path="/variant-b/chat/:chatId" element={<ChatThreadB />} />
        <Route path="/variant-b/profile/:profileId" element={<ProfileB />} />
        <Route path="/variant-c" element={<VariantC />} />
        <Route path="/board/:boardId" element={<Board />} />
      </Routes>
    </AppWrapper>
  )
}

export default App