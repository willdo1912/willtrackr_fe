import { FunnelIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const Drawer = ({ children }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <button className="btn-filled absolute right-5 top-5" onClick={() => setOpenDrawer(!openDrawer)}>
        <FunnelIcon className="size-5" />
      </button>
      <div
        id="drawer-example"
        className={`fixed right-0 top-0 z-40 h-screen overflow-y-auto p-4 pt-12 transition-transform ${openDrawer ? 'translate-none' : 'translate-x-[calc(100%+5rem)]'} custom-shadow-outer w-80 overflow-x-clip bg-white dark:bg-gray-800`}
        aria-labelledby="drawer-label"
      >
        <button type="button" className="btn-none absolute right-2 top-2" onClick={() => setOpenDrawer(false)}>
          <XMarkIcon className="size-5" />
          <span className="sr-only">Close menu</span>
        </button>
        {children}
      </div>
    </>
  )
}

export default Drawer
