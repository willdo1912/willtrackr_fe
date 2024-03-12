import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { useEffect, useRef, useState } from 'react'
import Contact from './components/Contact'
import NewsCard from './components/NewsCard'
import news from './data.json'

const NewsContact = () => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<HTMLInputElement>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
  }, [])
  return (
    <div className="start-section">
      <div className="base-bg-teal flex size-full items-center justify-center gap-8">
        <h1 className="ml-8 rotate-180 [writing-mode:vertical-rl]">NEWS</h1>
        <div className="relative flex size-full items-center justify-center gap-8 overflow-hidden">
          <div className="top left absolute flex size-full justify-between overflow-hidden">
            <button onClick={movePrev} className="carousel-btn" disabled={isDisabled('prev')}>
              <ChevronLeftIcon className="size-8 text-white" />
              <span className="sr-only">Prev</span>
            </button>
            <button onClick={moveNext} className="carousel-btn" disabled={isDisabled('next')}>
              <ChevronRightIcon className="size-8 text-white" />
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div ref={carousel} className="relative z-0 flex gap-8 overflow-hidden scroll-smooth p-4">
            {news.map(newsCard => (
              <NewsCard
                key={newsCard.id}
                image={newsCard.image}
                heading={newsCard.heading}
                body={newsCard.body}
                id={newsCard.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default NewsContact
