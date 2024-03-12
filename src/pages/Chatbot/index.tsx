import { useEffect, useState } from 'react'
import { runGemini } from './utils'
import { MessagesProps } from './models'
import DashboardNavbar from 'src/shared/DashboardNavbar'
import MessageBubble from './components/MessageBubble'

const Chatbot = () => {
  const [msgList, setMsgList] = useState<MessagesProps[]>([])
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const pushMsgList = (text: string, bot: boolean) => {
    setMsgList([
      ...msgList,
      {
        id: msgList.length + 1 + '',
        text: text,
        bot: bot,
        createdAt: new Date().toISOString().replace('T', ' ')
      }
    ])
  }

  const handleSubmit = () => {
    if (prompt.trim() !== '') {
      pushMsgList(prompt, false)
      runGemini(prompt, setResponse)
      setPrompt('')
    }
  }

  useEffect(() => {
    if (response.trim() !== '') {
      pushMsgList(response, true)
    }
  }, [response])

  return (
    <div className="flex h-dvh w-full">
      <DashboardNavbar />
      <div className="base-bg-normal flex size-full flex-col gap-8 p-8">
        <h4 className="base-text-teal">Chat with AI</h4>
        <div className="base-bg-off custom-shadow-outer flex h-full max-h-[80vh] min-w-96 flex-col gap-4 rounded p-4">
          <div className="base-bg-normal custom-shadow-inner size-full overflow-scroll rounded border p-4">
            {msgList.map((msg: any) => (
              <MessageBubble key={msg.id} text={msg.text} bot={msg.bot} createdAt={msg.createdAt} id={''} />
            ))}
          </div>
          <div className="flex w-full flex-row gap-2">
            <textarea
              rows={1}
              className="w-full resize-none"
              onChange={e => setPrompt(e.target.value)}
              value={prompt}
            />
            <button className="btn-filled aspect-square h-full" onClick={() => handleSubmit()}>
              &#8679;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
