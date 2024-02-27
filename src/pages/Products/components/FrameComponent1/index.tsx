import { MinusCircleIcon } from '@heroicons/react/16/solid'
import { FunctionComponent } from 'react'

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="text-lightslategray font-body-large flex flex-col items-start justify-start gap-[0.5rem_0rem] self-stretch px-[0rem] pb-[1.5rem] pt-[0rem] text-left text-[0.875rem]">
      <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch text-[1rem] text-gray-100">
        <div className="relative leading-[150%]">Ratings</div>
        <MinusCircleIcon className="size-5" />
      </div>
      <div className="relative leading-[150%]">***** Onl (15)</div>
      <div className="relative leading-[150%]">{`****&Up (42)`}</div>
      <div className="relative leading-[150%]">{`***&Up (45)`}</div>
      <div className="relative leading-[150%]">{`★★☆☆☆&Up (46)`}</div>
      <div className="relative leading-[150%]">{`&Up (48)`}</div>
    </div>
  )
}

export default FrameComponent1
