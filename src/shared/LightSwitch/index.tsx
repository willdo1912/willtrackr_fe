import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { useAppContext } from 'src/stores/app-context-manager.tsx'

const LightSwitch = () => {
  const { lightModeOn, toggleLightModeOn } = useAppContext()

  return (
    <div
      className={
        'inline-flex h-fit w-fit items-center rounded-full p-1 shadow-inner transition-all duration-500' +
        (lightModeOn ? ' bg-yellow-500' : ' bg-purple-800')
      }
      onClick={() => toggleLightModeOn!()}
    >
      <div
        className={
          'shadow-outer inline-flex h-4 w-4 items-center justify-center rounded-full p-1 transition-all duration-500' +
          (lightModeOn ? ' mr-5 bg-purple-800' : ' ml-5 bg-yellow-500')
        }
      >
        {lightModeOn ? <SunIcon className="text-white" /> : <MoonIcon className="text-black" />}
      </div>
    </div>
  )
}

export default LightSwitch
