import './index.scss'
import techCards from './data.json'

const Tech = () => {
  return (
    <div className="start-section base-bg-normal gap-8 pt-8">
      <h1 className="my-4">OUR TECHNOLOGIES</h1>
      <div className="flex size-full flex-col items-center justify-center gap-16 px-16 lg:flex-row">
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
          <div className="sliding-container flex w-full gap-16 px-16">
            <img
              className="transition-full h-16 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="transition-full h-16 pb-4 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/2560px-Facebook_logo_%282023%29.svg.png"
              alt="facebook"
            />
            <img
              className="transition-full h-16 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
              alt="instagram"
            />
            <img
              className="transition-full h-16 pb-2 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/800px-TikTok_logo.svg.png"
              alt="tiktok"
            />
            <img
              className="transition-full h-16 pb-4 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Twitter_logo.svg/2560px-Twitter_logo.svg.png"
              alt="twitter"
            />
            <img
              className="transition-full h-16 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              className="transition-full h-16 pb-4 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/2560px-Facebook_logo_%282023%29.svg.png"
              alt="facebook"
            />
            <img
              className="transition-full h-16 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
              alt="instagram"
            />
            <img
              className="transition-full h-16 pb-2 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/800px-TikTok_logo.svg.png"
              alt="tiktok"
            />
            <img
              className="transition-full h-16 pb-4 duration-100 hover:scale-90"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Twitter_logo.svg/2560px-Twitter_logo.svg.png"
              alt="twitter"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
