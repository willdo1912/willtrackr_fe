import LightSwitch from './shared/LightSwitch'

const StyleTest = () => {
  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="w-full bg-gray-600 p-1 dark:bg-gray-300">
        <LightSwitch />
      </div>
      <div className="h-full w-full bg-main-pink dark:bg-main-dark-pink">
        <h1 className="text-black dark:text-white">Display Pink</h1>
        <h4 className="text-black dark:text-white">Heading Pink</h4>
        <div className="text-black dark:text-white">Body Pink</div>
        <small className="text-black dark:text-white">Label Pink</small>
      </div>
      <div className="h-full w-full bg-main-teal dark:bg-main-dark-teal">
        <h1 className="text-black dark:text-white">Display Teal</h1>
        <h4 className="text-black dark:text-white">Heading Teal</h4>
        <div className="text-black dark:text-white">Body Teal</div>
        <small className="text-black dark:text-white">Label Teal</small>
      </div>
      <div className="h-full w-full bg-main-blue dark:bg-main-dark-blue">
        <h1 className="text-black dark:text-white">Display Blue</h1>
        <h4 className="text-black dark:text-white">Heading Blue</h4>
        <div className="text-black dark:text-white">Body Blue</div>
        <small className="text-black dark:text-white">Label Blue</small>
      </div>
    </div>
  )
}

export default StyleTest
