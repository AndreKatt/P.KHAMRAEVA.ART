import { useEffect, useState } from "react"

type IWindowWidth = 'small' | 'medium' | 'large' | 'extraLarge'

export const useWindowWidth = (): IWindowWidth | null => {
  const [width, setWidth] = useState<IWindowWidth | null>(null);

  useEffect(() => {
    const resizeCallback = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setWidth('small')
        
        return
      }
      if (width < 1280) {
        setWidth('medium')
        
        return
      }
      if (width < 1920) {
        setWidth('large')
        
        return
      }
      setWidth('extraLarge')
    }
    resizeCallback()

    window.addEventListener('resize', resizeCallback)
  
    return () => window.removeEventListener('resize', resizeCallback)
  }, [])

  return width
}