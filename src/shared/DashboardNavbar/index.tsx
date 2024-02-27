import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon
} from '@heroicons/react/16/solid'
import { useState } from 'react'
import LightSwitch from '../LightSwitch'
import logo_sm from '/logo/logo-sm.png'

const DashboardNavbar = () => {
  const [isTooltipOpened, setIsTooltipOpen] = useState(-1)
  return (
    <div
      id="sidebar-mini"
      className="base-bg-off relative z-10 flex min-h-full w-fit flex-col items-start justify-start gap-4 border-r border-gray-500 px-1 py-4 transition-all duration-300"
    >
      <LightSwitch />
      <img src={logo_sm} alt="logo" className="mb-8 h-10 w-10" />
      <button
        className="btn-none"
        onMouseEnter={() => setIsTooltipOpen(0)}
        onMouseLeave={() => setIsTooltipOpen(-1)}
        onClick={() => (window.location.href = 'http://localhost:5173/dashboard')}
      >
        <HomeIcon className="h-5 w-5" />
        <div
          className={`base-bg-off absolute left-14 top-0 flex h-10 w-32 items-center justify-center rounded-lg border border-slate-500 ${isTooltipOpened === 0 ? '' : 'hidden'}`}
        >
          <small>Dashboard</small>
        </div>
      </button>

      <button
        className="btn-none"
        onMouseEnter={() => setIsTooltipOpen(1)}
        onMouseLeave={() => setIsTooltipOpen(-1)}
        onClick={() => (window.location.href = 'http://localhost:5173/attempt')}
      >
        <ClipboardDocumentIcon className="h-5 w-5" />
        <div
          className={`base-bg-off absolute left-14 top-0 flex h-10 w-32 items-center justify-center rounded-lg border border-slate-500 ${isTooltipOpened === 1 ? '' : 'hidden'}`}
        >
          <small>Daily forms</small>
        </div>
      </button>

      <button
        className="btn-none"
        onMouseEnter={() => setIsTooltipOpen(2)}
        onMouseLeave={() => setIsTooltipOpen(-1)}
        onClick={() => (window.location.href = 'http://localhost:5173/chat')}
      >
        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
        <div
          className={`base-bg-off absolute left-14 top-0 flex h-10 w-32 items-center justify-center rounded-lg border border-slate-500 ${isTooltipOpened === 2 ? '' : 'hidden'}`}
        >
          <small>AI Chatbot</small>
        </div>
      </button>
      <button
        className="btn-none"
        onMouseEnter={() => setIsTooltipOpen(3)}
        onMouseLeave={() => setIsTooltipOpen(-1)}
        onClick={() => (window.location.href = 'http://localhost:5173/profile')}
      >
        <UserIcon className="h-5 w-5" />
        <div
          className={`base-bg-off absolute left-14 top-0 flex h-10 w-32 items-center justify-center rounded-lg border border-slate-500 ${isTooltipOpened === 3 ? '' : 'hidden'}`}
        >
          <small>My Profile</small>
        </div>
      </button>
      <button
        className="btn-none"
        onMouseEnter={() => setIsTooltipOpen(4)}
        onMouseLeave={() => setIsTooltipOpen(-1)}
        onClick={() => (window.location.href = 'http://localhost:5173/product')}
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
        <div
          className={`base-bg-off absolute left-14 top-0 flex h-10 w-32 items-center justify-center rounded-lg border border-slate-500 ${isTooltipOpened === 4 ? '' : 'hidden'}`}
        >
          <small>All Products</small>
        </div>
      </button>
      <button
        className="btn-none"
        onMouseEnter={() => setIsTooltipOpen(5)}
        onMouseLeave={() => setIsTooltipOpen(-1)}
        onClick={() => (window.location.href = 'http://localhost:5173')}
      >
        <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
        <div
          className={`base-bg-off absolute left-14 top-0 flex h-10 w-32 items-center justify-center rounded-lg border border-slate-500 ${isTooltipOpened === 5 ? '' : 'hidden'}`}
        >
          <small>Sign Out</small>
        </div>
      </button>
    </div>
  )
}

export default DashboardNavbar
