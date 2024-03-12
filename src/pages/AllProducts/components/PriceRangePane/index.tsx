import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import RangeSlider from './RangeSlider'
import './index.scss'

const PriceRangePane = ({ priceRange }: any) => {
  const [showFilter, setShowFilter] = useState(true)
  return (
    <div className="flex w-72 flex-col gap-4 p-4">
      <div>
        <input
          type="checkbox"
          id="price-dropdown-checkbox"
          name="term"
          className="hidden"
          checked={showFilter}
          onChange={e => {
            setShowFilter(e.target.checked)
          }}
        />
        <label htmlFor="price-dropdown-checkbox" className="flex h-4 items-center">
          <span className="mr-auto text-xl font-semibold">Price Range</span>
          {showFilter ? <MinusIcon className="size-6" /> : <PlusIcon className="size-6" />}
        </label>
      </div>
      <div className={`${showFilter ? '' : 'hidden'}`}>
        <RangeSlider min={Math.floor(priceRange.minPrice)} max={Math.ceil(priceRange.maxPrice)} />
      </div>
    </div>
  )
}

export default PriceRangePane
