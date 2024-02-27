import { DevicePhoneMobileIcon, EnvelopeIcon, GlobeAltIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'
import logo_lg from '/logo/logo-color-lg.png'

const Contact = () => {
  return (
    <div className="base-bg-normal flex w-full items-center justify-center gap-20 p-8">
      <img alt="logo-large" src={logo_lg} className="m-auto h-64" />
      <div className="m-auto flex gap-12">
        <ul className="inline-flex flex-col gap-4">
          <div className="font-bold">Important Links</div>
          <li>WHO WE SERVE</li>
          <li>PRODUCT</li>
          <li>WHAT WE DO</li>
        </ul>
        <ul className="inline-flex flex-col gap-4">
          <div className="font-bold">Important Links</div>
          <li>GET A QUOTE</li>
          <li>CONTACT US</li>
          <li>ISO CERTIFICATION</li>
        </ul>
        <div className="inline-flex flex-col gap-4">
          <div className="font-bold">Get In Touch</div>
          <div className="flex flex-col gap-4">
            <li className="inline-flex gap-4">
              <PhoneIcon className="size-5" />
              <p>Toll Free: 888.688.6822</p>
            </li>
            <li className="inline-flex gap-4">
              <DevicePhoneMobileIcon className="size-5" />
              <p>657.218.9447</p>
            </li>
            <li className="inline-flex gap-4">
              <EnvelopeIcon className="size-5" />
              <p>contact@willtrackr.com</p>
            </li>
            <li className="inline-flex gap-4">
              <GlobeAltIcon className="size-5" />
              <p>www.willtrackr.com</p>
            </li>
            <li className="inline-flex gap-4">
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
