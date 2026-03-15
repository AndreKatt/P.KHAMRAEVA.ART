import { useEffect, useState } from "react"

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeCallback = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setIsMobile(true)
        
        return
      }
      setIsMobile(false)
    }
    resizeCallback()

    window.addEventListener('resize', resizeCallback)
  
    return () => window.removeEventListener('resize', resizeCallback)
  }, [])

  return isMobile
}