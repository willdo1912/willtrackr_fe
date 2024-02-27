import './index.scss'
import techCards from './data.json'

const Tech = () => {
  return (
    <div className="start-section base-bg-normal gap-8 pt-8">
      <h1 className="my-4">OUR TECHNOLOGIES</h1>
      <div className="flex size-full items-center justify-center gap-16 px-16">
        {techCards.map(card => (
          <div
            className="base-bg-off shadow-outer flex aspect-square h-[30rem] max-w-[22rem] flex-col items-center justify-start gap-4 rounded-lg p-4"
            key={card.id}
          >
            <img src={card.image} className="aspect-square w-56" />
            <h5>{card.heading}</h5>
            <small className="base-text-normal text-center">{card.body}</small>
          </div>
        ))}
      </div>
      <div className="bg-secondary-teal/40 base-bg-off flex w-full flex-col items-center justify-start gap-8 py-8">
        <h3 className="wy-1">We work with the best manufactures in the market</h3>
        <div className="flex h-fit w-full overflow-hidden">
          <div className="sliding-container flex gap-16 px-16">
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="h-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
