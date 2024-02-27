import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import LightSwitch from 'src/shared/LightSwitch'

const Header = () => {
  return (
    <header className="base-bg-teal flex flex-row items-center justify-end gap-4 px-8 py-2">
      <div className="text-color-normal flex flex-row items-center gap-4">
        <PhoneIcon className="h-5 w-5" />
        <p className="sr-only md:not-sr-only">888.688.6822</p>
      </div>
      <div className="text-color-normal flex flex-row items-center gap-4">
        <EnvelopeIcon className="h-5 w-5" />
        <a href="mailto:contact@willtrackr.com" className="sr-only md:not-sr-only">
          contact@willtrackr.com
        </a>
      </div>
      <LightSwitch />
    </header>
  )
}

export default Header
