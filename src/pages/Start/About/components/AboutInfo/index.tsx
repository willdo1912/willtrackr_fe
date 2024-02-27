import { useState } from 'react'
import './index.scss'
import aboutInfo from './data.json'

const AboutInfo = () => {
  const [navTab, setNavTab] = useState(0)

  return (
    <div className="about-info-container">
      <ul className="flex flex-row gap-2 lg:flex-col">
        {aboutInfo.map(info => (
          <li className="about-nav-btn" key={info.id}>
            <input
              id={info.input}
              type="radio"
              value={0}
              name="about-radio"
              className="hidden"
              onChange={() => setNavTab(info.value)}
              checked={navTab === info.value}
            />
            <label htmlFor={info.input}>{info.button}</label>
          </li>
        ))}
      </ul>
      <div className="custom-shadow-inner base-bg-off size-full rounded-lg p-2 lg:p-6">
        <p>{aboutInfo[navTab].content}</p>
      </div>
    </div>
  )
}

export default AboutInfo
