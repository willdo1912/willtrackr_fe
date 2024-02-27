import DashboardNavbar from 'src/shared/DashboardNavbar'

const Chatbot = () => {
  return (
    <div className="flex h-fit w-full">
      <DashboardNavbar />
      <div className="base-bg-normal flex h-dvh w-full flex-col gap-8 p-8">
        <h4 className="base-text-teal">Chat with AI</h4>
        <div className="base-bg-off custom-shadow-outer flex h-full flex-col gap-8 rounded p-8">
          <div className="base-bg-normal custom-shadow-inner size-full border-collapse rounded border"></div>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Chatbot
