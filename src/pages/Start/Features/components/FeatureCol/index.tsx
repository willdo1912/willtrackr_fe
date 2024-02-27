import { FeatureColProps } from './models'

const FeatureCol = ({ feature }: FeatureColProps) => {
  return (
    <div
      className={`flex ${feature.reversed ? 'flex-col-reverse' : 'flex-col'} overflow-hidden transition-all duration-100 ease-in-out hover:scale-105 hover:rounded-lg`}
    >
      <div className="base-bg-off flex aspect-square max-h-80 flex-col items-center justify-center gap-4 p-4">
        <h5 className="text-center">{feature.heading}</h5>
        <small className="base-text-normal">{feature.body}</small>
      </div>
      <img className="aspect-square" src={feature.image} alt="features" />
    </div>
  )
}

export default FeatureCol
