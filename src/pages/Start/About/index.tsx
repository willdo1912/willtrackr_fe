import AboutInfo from './components/AboutInfo'
import Faq from './components/Faq'

const About = () => {
  return (
    <div className="base-bg-normal start-section gap-8 p-8">
      <h1 className="text-color-normal my-4 w-full text-center">ABOUT US</h1>
      <AboutInfo />
      <div className="flex w-full grow flex-col gap-4 lg:flex-row">
        <Faq />
        <iframe
          className="aspect-video h-full"
          src="https://www.youtube-nocookie.com/embed/EAKUqzD69LI?si=t5YIwXlPiNGXlEqS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default About
