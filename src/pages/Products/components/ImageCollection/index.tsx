import { PlusCircleIcon } from '@heroicons/react/16/solid'
import { FunctionComponent } from 'react'

const ImageCollection: FunctionComponent = () => {
  return (
    <div className="font-body-large flex flex-col items-start justify-start gap-[0.5rem_0rem] self-stretch text-left text-[1rem] text-gray-100">
      <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch py-[0rem] pl-[0rem] pr-[0.063rem]">
        <div className="relative leading-[150%]">Product type</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Size</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Gift type</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Recipient</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Format</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem] self-stretch">
        <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch py-[0rem] pl-[0rem] pr-[0.063rem]">
          <div className="relative leading-[150%]">Suitable from</div>
          <PlusCircleIcon className="size-5" />
        </div>
        <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch">
          <div className="relative leading-[150%]">Free from</div>
          <PlusCircleIcon className="size-5" />
        </div>
        <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch py-[0rem] pl-[0rem] pr-[0.063rem]">
          <div className="relative leading-[150%]">Age range</div>
          <PlusCircleIcon className="size-5" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch py-[0rem] pl-[0rem] pr-[0.063rem]">
        <div className="relative leading-[150%]">Suitable for</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="text-lightslategray flex flex-row items-start justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Ingredients</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-row items-start justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Flavour</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="text-lightslategray flex flex-row items-start justify-between gap-[1.25rem] self-stretch py-[0rem] pl-[0rem] pr-[0.063rem]">
        <div className="relative leading-[150%]">Meal type</div>
        <PlusCircleIcon className="size-5" />
      </div>
      <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch">
        <div className="relative leading-[150%]">Pack size</div>
        <PlusCircleIcon className="size-5" />
      </div>
    </div>
  )
}

export default ImageCollection
