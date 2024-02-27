import { MinusCircleIcon } from '@heroicons/react/16/solid'
import { FunctionComponent } from 'react'

const Container1: FunctionComponent = () => {
  return (
    <div className="font-body-large flex flex-col items-start justify-start gap-[0.5rem_0rem] self-stretch text-left text-[0.875rem] text-gray-100">
      <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch text-[1rem]">
        <div className="relative leading-[150%]">Promotions</div>
        <MinusCircleIcon className="size-5" />
      </div>
      <div className="text-dimgray flex flex-col items-start justify-start">
        <div className="relative leading-[150%]">Save 20 Percent On Selected</div>
        <div className="text-lightslategray relative z-[1] leading-[150%]">Deliciously E (S)</div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%]">Only 3.00 On Selected Hue</div>
        <div className="text-darkslategray-100 relative z-[1] leading-[150%]">Ready To Drink 500ml (4)</div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%]">Scve Up To 70</div>
        <div className="text-lightslategray relative z-[1] leading-[150%]">Sale Percent (4)</div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%]">Save Up To 20 Percent On</div>
        <div className="text-dimgray relative z-[1] leading-[150%]">Selected Rhythm 103 (4)</div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%]">Save 1/3 On Selected Doisy</div>
        <div className="text-darkslategray-100 relative z-[1] leading-[150%]">And Dam (3)</div>
      </div>
    </div>
  )
}

export default Container1
