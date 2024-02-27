import { createContext, useContext, useState } from 'react'
import { AppContextInf } from './models'
import { checkLightModeOnStart } from './hooks/checkLightModeOnStart'
import { handleToggleLightModeOn } from './utils/handleToggleLightModeOn'

interface Props {
  children: React.ReactNode
}

const AppContext = createContext<AppContextInf>({})

export function useAppContext() {
  return useContext(AppContext)
}

const AppContextWrapper = ({ children }: Props) => {
  const [lightModeOn, setLightModeOn] = useState(!(window.localStorage.getItem('light_mode') === 'dark'))

  checkLightModeOnStart(lightModeOn)

  return (
    <AppContext.Provider
      value={{
        lightModeOn,
        toggleLightModeOn: () => {
          handleToggleLightModeOn(lightModeOn, setLightModeOn)
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextWrapper
