import { CheckCircleIcon } from '@heroicons/react/16/solid'
import './index.scss'

const BgInfo = () => {
  return (
    <div className="pattern-bg">
      <div className="object-bg">
        <h1 className="my-4 text-white">Your source for Multiple Solutions</h1>
        <ul className="flex flex-col items-start justify-center gap-4 lg:gap-8">
          <li className="inline-flex items-center justify-center gap-4">
            <CheckCircleIcon className="size-5 text-success lg:size-8" />
            <h5 className="text-white">Equipment repair and PM Service</h5>
          </li>
          <li className="inline-flex items-center justify-center gap-4">
            <CheckCircleIcon className="size-5 text-success lg:size-8" />
            <h5 className="text-white">Guaranteed Cost Savings vs. OEM</h5>
          </li>
          <li className="inline-flex items-center justify-center gap-4">
            <CheckCircleIcon className="size-5 text-success lg:size-8" />
            <h5 className="text-white">Support for "End of life" Equipment</h5>
          </li>
          <li className="inline-flex items-center justify-center gap-4">
            <CheckCircleIcon className="size-5 text-success lg:size-8" />
            <h5 className="text-white">Replacement Equipment Available</h5>
          </li>
        </ul>
        <button className="btn-filled">View our features</button>
      </div>
    </div>
  )
}

export default BgInfo
