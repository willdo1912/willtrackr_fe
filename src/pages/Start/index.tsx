import Intro from './Intro'
import About from './About'
import GetQuote from './GetQuote'
import Features from './Features'
import Navbar from './Navbar'
import Header from './Header'
import Tech from './Tech'
import NewsContact from './NewsContact'
import Footer from './Footer'
import { useRef } from 'react'

const Start = () => {
  const refList = [
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null)
  ]
  const sectionList = [<Intro />, <About />, <Features />, <Tech />, <GetQuote />, <NewsContact />]

  const moveToRef = (index: number) => {
    window.scrollTo({ behavior: 'smooth', top: refList[index].current?.offsetTop! - 56 })
  }

  return (
    <>
      <Header />
      <Navbar moveToRef={moveToRef} />
      <>
        {sectionList.map((section, index) => (
          <div ref={refList[index]} key={index} id={`section-${index}`}>
            {section}
          </div>
        ))}
      </>
      <Footer />
    </>
  )
}

export default Start
