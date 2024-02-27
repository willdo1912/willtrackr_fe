import { MagnifyingGlassIcon, MinusCircleIcon } from '@heroicons/react/16/solid'
import { FunctionComponent } from 'react'

const ButtonGroup: FunctionComponent = () => {
  return (
    <div className="text-darkslategray-100 font-body-large flex flex-col items-start justify-start gap-[0.5rem_0rem] self-stretch px-[0rem] pb-[1.5rem] pt-[0rem] text-left text-[0.875rem]">
      <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch text-[1rem] text-gray-100">
        <div className="relative leading-[150%]">Brands</div>
        <MinusCircleIcon className="size-5" />
      </div>
      <div className="py-spacing-spacing-xs pl-spacing-spacing-sm border-lightslategray flex flex-row items-center justify-between gap-[1.25rem] self-stretch rounded border-[1px] border-solid bg-gray-200 pr-[1.063rem]">
        <input
          className="font-body-large relative inline-block h-[1.5rem] w-[6.563rem] bg-[transparent] text-left text-[1rem] leading-[150%] text-gray-100 [border:none] [outline:none]"
          placeholder="Search Brand"
          type="text"
        />
        <MagnifyingGlassIcon className="size-5" />
      </div>
      <div className="relative leading-[150%]">Delciously ll (3)</div>
      <div className="relative leading-[150%]">TRIP (9)</div>
      <div className="relative leading-[150%] text-gray-100">{`Doisy & Dam (7)`}</div>
      <div className="text-lightslategray relative leading-[150%]">Huel (6)</div>
      <div className="text-royalblue relative leading-[150%]">Twinings (6)</div>
      <div className="relative leading-[150%]">Graze (5)</div>
      <div className="text-dimgray relative leading-[150%]">Organix (5)</div>
      <div className="relative leading-[150%]">Forest Feast (4)</div>
      <div className="relative leading-[150%]">Love Com (4)</div>
      <div className="relative leading-[150%]">Nakd (4)</div>
      <div className="text-text-link relative text-[1rem] leading-[150%]">View all</div>
    </div>
  )
}

export default ButtonGroup
