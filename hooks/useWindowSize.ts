import { useState, useEffect } from 'react'

export interface ISize {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
