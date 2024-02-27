import Accordion from '../Accordion'
import { useState } from 'react'
import accordionInfo from './data.json'

const Faq = () => {
  const [accordions, setAccordion] = useState(
    accordionInfo.map(info => {
      return { ...info, isOpen: false }
    })
  )

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map(accord => {
      if (accord.id === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen }
      } else {
        return { ...accord, isOpen: false }
      }
    })

    setAccordion(updatedAccordions)
  }

  return (
    <div className="w-full space-y-2">
      {accordions.map(accordion => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.id)}
        />
      ))}
    </div>
  )
}

export default Faq
