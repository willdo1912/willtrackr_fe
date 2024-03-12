import { useEffect, useState } from 'react'
import './index.scss'
import { useAppContext } from 'src/stores/app-context-manager.tsx'

interface PriceRangeModel {
  min: number
  max: number
}

const RangeSlider = ({ min = 0, max = 100 }: PriceRangeModel) => {
  const { queryParam, setQueryParam } = useAppContext()
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(100)
  // const [minThumb, setMinThumb] = useState(0);
  // const [maxThumb, setMaxThumb] = useState(0);

  // useEffect(() => {
  //   const updateMinThumb = () => {
  //     setMinThumb(((minPrice - min) / (max - min)) * 100);
  //   };

  //   const updateMaxThumb = () => {
  //     setMaxThumb(100 - ((maxPrice - min) / (max - min)) * 100);
  //   };

  //   updateMinThumb();
  //   updateMaxThumb();
  // }, [minPrice, maxPrice, min, max]);

  const applyPriceFilter = () => {
    setQueryParam!({ ...queryParam, min: minPrice, max: maxPrice })
  }

  const handleMinPriceChange = (e: any) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1)
    setMinPrice(value)
  }

  const handleMaxPriceChange = (e: any) => {
    const value = Math.max(Number(e.target.value), minPrice + 1)
    setMaxPrice(value)
  }

  useEffect(() => {
    setMinPrice(min)
    setMaxPrice(max)
  }, [min, max])

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="base-bg-off relative flex h-6 w-full rounded-full p-1">
        <input
          type="range"
          min={isNaN(min) ? 0 : min}
          max={isNaN(max) ? 100 : max}
          className="invisible-range absolute z-10 w-[calc(100%-0.5rem)]"
          onChange={handleMinPriceChange}
          value={isNaN(minPrice) ? 0 : minPrice}
        />
        <input
          type="range"
          min={isNaN(min) ? 0 : min}
          max={isNaN(max) ? 100 : max}
          className="invisible-range absolute z-10 w-[calc(100%-0.5rem)]"
          onChange={handleMaxPriceChange}
          value={isNaN(maxPrice) ? 0 : maxPrice}
        />
        {/* <div className="absolute top-0 bottom-0 rounded-full bg-green-300" style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}></div>
        <button className="mt-8" onClick={() => console.log(minThumb, maxThumb, minPrice, maxPrice)}>OK</button> */}
      </div>
      <div className="flex">
        <div className="mr-auto flex flex-col items-center">
          <label>Min</label>
          <input
            type="number"
            className="range-input h-fit w-20 py-1"
            value={isNaN(minPrice) ? 0 : minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="ml-auto flex flex-col items-center">
          <label>Max</label>
          <input
            type="number"
            className="range-input h-fit w-20 py-1"
            value={isNaN(maxPrice) ? 100 : maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
      <button className="btn-filled" onClick={() => applyPriceFilter()}>
        APPLY FILTER
      </button>
    </div>
  )
}

export default RangeSlider
