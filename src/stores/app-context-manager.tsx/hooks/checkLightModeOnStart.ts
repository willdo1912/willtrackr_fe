import { useEffect } from 'react'

export const checkLightModeOnStart = (lightModeOn: boolean) => {
  useEffect(() => {
    if (lightModeOn) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [lightModeOn])
}
