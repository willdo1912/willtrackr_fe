import { NewsCardModel } from './models'

const NewsCard = (newsCard: NewsCardModel) => {
  return (
    <div className="custom-shadow-outer base-bg-normal flex h-[28rem] min-h-[28rem] w-80 min-w-80 flex-col gap-4 rounded-lg">
      <img className="h-48 w-80 rounded-t-lg" alt="" loading="eager" src={newsCard.image} />
      <div className="flex h-full flex-col items-center justify-center gap-4 self-stretch p-4">
        <h5 className="line-clamp-1 text-ellipsis">{newsCard.heading}</h5>
        <div className="line-clamp-5 text-ellipsis">{newsCard.body}</div>
        <a href={`${import.meta.env.VITE_FE_PATH}/blog`} className="self-end">
          Read more &#9654;
        </a>
      </div>
    </div>
  )
}

export default NewsCard
