import { Bars2Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'
import logo_md from '/logo/logo-color-md.png'

const Navbar = () => {
  const [hideMenuInMobile, setHideMenuInMobile] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setHideMenuInMobile(true))
  })

  const navList = (
    <>
      <li>
        <button className="btn-none w-full">About</button>
      </li>
      <li>
        <button className="btn-none w-full">Features</button>
      </li>
      <li>
        <button className="btn-none w-full">Technologies</button>
      </li>
      <li>
        <button className="btn-none w-full">Quote</button>
      </li>
      <li>
        <button className="btn-none w-full">Contact</button>
      </li>
      <div className="flex gap-4">
        <button className="btn-filled w-full" onClick={() => (window.location.href = 'http://localhost:5173/login')}>
          Login
        </button>
        <button className="btn-filled w-full" onClick={() => (window.location.href = 'http://localhost:5173/register')}>
          Register
        </button>
      </div>
    </>
  )

  return (
    <nav className="base-bg-off sticky top-0 z-50 flex h-14 lg:items-center">
      <div className="flex w-full flex-row items-center justify-between px-8 py-2">
        <a href="https://www.google.com">
          <img src={logo_md} alt="medium logo" className="h-8" />
        </a>
        <div className="hidden w-full lg:block">
          <ul className="flex w-full flex-row justify-end gap-4">{navList}</ul>
        </div>
        <button className="btn-none size-10 lg:hidden" onClick={() => setHideMenuInMobile(!hideMenuInMobile)}>
          {hideMenuInMobile ? <Bars2Icon /> : <XMarkIcon />}
        </button>
      </div>
      <div className={'absolute w-full lg:hidden lg:w-auto ' + (hideMenuInMobile && 'hidden')} id="navbar-default">
        <ul className="base-bg-off mt-14 flex flex-col gap-2 overflow-hidden border-t border-slate-500 p-2">
          {navList}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
