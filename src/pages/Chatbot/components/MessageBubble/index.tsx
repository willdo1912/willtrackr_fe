import { useEffect, useState } from 'react'
import { MessagesProps } from '../../models'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './index.scss'

const BotMessageBubble = ({ text, createdAt }: MessagesProps) => {
  const [showCreateAt, setShowCreatedAt] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 10)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <div className="m-2 flex w-full flex-col items-start">
      <div
        className="bot-msg w-fit max-w-[calc(100%-1rem)] self-start rounded-lg rounded-bl-none bg-blue-700 p-4 lg:max-w-[calc(100%-8rem)]"
        onMouseEnter={() => setShowCreatedAt(true)}
        onMouseLeave={() => setShowCreatedAt(false)}
      >
        <Markdown remarkPlugins={[remarkGfm]}>{currentText}</Markdown>
      </div>
      <small className={`${showCreateAt ? 'scale-100' : 'scale-0'} transistion-all duration-100 ease-in-out`}>
        {createdAt}
      </small>
    </div>
  )
}

const MyMessageBubble = ({ text, createdAt }: MessagesProps) => {
  const [showCreateAt, setShowCreatedAt] = useState(false)

  return (
    <div className="m-2 flex w-full flex-col items-end">
      <div
        className="bot-msg w-fit max-w-[calc(100%-1rem)] self-end rounded-lg rounded-br-none bg-slate-700 p-4 text-white lg:max-w-[calc(100%-8rem)]"
        onMouseEnter={() => setShowCreatedAt(true)}
        onMouseLeave={() => setShowCreatedAt(false)}
      >
        <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
      </div>
      <small className={`${showCreateAt ? 'scale-100' : 'scale-0'} transistion-all duration-100 ease-in-out`}>
        {createdAt}
      </small>
    </div>
  )
}

const MessageBubble = (message: MessagesProps) => {
  const isBot = message.bot
  return (
    <>
      {isBot ? (
        <BotMessageBubble text={message.text} createdAt={message.createdAt} bot={false} id={''} />
      ) : (
        <MyMessageBubble text={message.text} createdAt={message.createdAt} bot={false} id={''} />
      )}
    </>
  )
}

export default MessageBubble
