import { useState, useRef, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import './index.scss'

// Data
import data from './data.json'

const Carousel = () => {
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
    <div className="relative">
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
      <div ref={carousel} className="carousel-container">
        {data.resources.map((resource, index) => {
          return (
            <div key={index} className="carousel-item">
              <a href={resource.link} className="carousel-image">
                <img src={resource.imageUrl || ''} alt={resource.title} className="aspect-square w-full rounded" />
              </a>
              <a href={resource.link} className="carousel-overlay">
                <div className="text-body mx-auto p-3 text-white">{resource.title}</div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
