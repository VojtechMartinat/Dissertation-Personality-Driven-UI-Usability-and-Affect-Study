import { useEffect } from 'react'
import posthog from 'posthog-js'



posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: 'https://eu.posthog.com',
  capture_pageview: false, 
  
})



export interface LogEvent {
  type: 'click' | 'pageview'
  element?: string
  page: string
  timestamp: string
  durationMs?: number
}

export function logEvent(event: LogEvent) {
  console.log('[LOG]', event)

  switch (event.type) {
    case 'click':
      posthog.capture('click', {
        element: event.element,
        page: event.page,
        timestamp: event.timestamp,
      })
      break
    case 'pageview':
      posthog.capture('pageview', {
        page: event.page,
        duration_ms: event.durationMs,
        timestamp: event.timestamp,
      })
      break
  }

 
}

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      
      const elementClass = typeof target.className === 'string' ? target.className : ''

      logEvent({
        type: 'click',
        element: elementClass || target.tagName, 
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      })
    }

    document.addEventListener('click', handleClick)
    

    const start = Date.now()
    return () => {
      const duration = Date.now() - start
      logEvent({
        type: 'pageview',
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        durationMs: duration,
      })
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return <>{children}</>
}