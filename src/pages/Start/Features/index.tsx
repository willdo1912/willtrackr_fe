import FeatureCol from './components/FeatureCol'
import features from './data.json'
import './index.scss'

const Features = () => {
  return (
    <div className="base-bg-teal start-section gap-8 p-8">
      <h1 className="my-2">OUR FEATURES</h1>
      <div className="feature-container">
        {features.map(feature => (
          <FeatureCol feature={feature} key={feature.id} />
        ))}
      </div>
    </div>
  )
}

export default Features
