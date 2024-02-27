export const handleToggleLightModeOn = (lightModeOn: boolean, setLightModeOn: (lightModeOn: boolean) => void) => {
  if (lightModeOn) {
    setLightModeOn(false)
    document.documentElement.classList.add('dark')
    window.localStorage.setItem('light_mode', 'dark')
  } else {
    setLightModeOn(true)
    document.documentElement.classList.remove('dark')
    window.localStorage.setItem('light_mode', 'light')
  }
}
