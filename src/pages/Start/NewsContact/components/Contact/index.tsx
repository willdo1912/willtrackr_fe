import { DevicePhoneMobileIcon, EnvelopeIcon, GlobeAltIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'
import logo_lg from '/logo/logo-color-lg.png'

const Contact = () => {
  return (
    <div className="base-bg-normal flex w-full flex-col items-center justify-center gap-20 p-8 lg:flex-row">
      <img alt="logo-large" src={logo_lg} className="m-auto h-64" />
      <div className="m-auto flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Important Links</p>

          <ul className="grid h-fit grid-cols-2 gap-4">
            <li>
              <small>WHO WE SERVE</small>
            </li>
            <li>
              <small>PRODUCT</small>
            </li>
            <li>
              <small>WHAT WE DO</small>
            </li>
            <li>
              <small>GET A QUOTE</small>
            </li>
            <li>
              <small>CONTACT US</small>
            </li>
            <li>
              <small>ISO CERTIFICATION</small>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Get In Touch</p>
          <div className="flex flex-col gap-4">
            <li className="flex gap-4">
              <PhoneIcon className="size-5" />
              <p>Toll Free: 888.688.6822</p>
            </li>
            <li className="flex gap-4">
              <DevicePhoneMobileIcon className="size-5" />
              <p>657.218.9447</p>
            </li>
            <li className="flex gap-4">
              <EnvelopeIcon className="size-5" />
              <p>contact@willtrackr.com</p>
            </li>
            <li className="flex gap-4">
              <GlobeAltIcon className="size-5" />
              <p>www.willtrackr.com</p>
            </li>
            <li className="flex gap-4">
              <MapIcon className="size-5" />
              <p>16 Goodyear, suite 105 Irvine California 92618</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
