import { useEffect, useState } from 'react'
import sampleMarkdown from './sample.md'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const SampleBlog = () => {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    fetch(sampleMarkdown)
      .then(res => res.text())
      .then(text => setMarkdown(text))
  })

  return (
    <article className="base-bg-off prose-img:custom-shadow-outer prose prose-slate max-w-none p-4 dark:prose-invert lg:prose-xl prose-h2:text-left prose-h3:text-left prose-li:text-base prose-img:rounded-lg md:p-8 lg:p-16">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </article>
  )
}

export default SampleBlog
