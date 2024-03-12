import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'
import { useAppContext } from 'src/stores/app-context-manager.tsx'
import sortFields from './data.json'
import './index.scss'

const SortDropdown = () => {
  const { queryParam, setQueryParam } = useAppContext()
  const [selectedField, setSelectedField] = useState(0)
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  useEffect(() => {
    setQueryParam!({ ...queryParam, sort: sortFields[selectedField].param, order: sortFields[selectedField].order })
  }, [selectedField])

  return (
    <div className="relative flex w-60 flex-col">
      <div className="base-bg-normal flex items-center rounded border border-slate-500">
        <input
          id="dropdown-check"
          type="checkbox"
          value=""
          className="hidden"
          onChange={e => setShowSortDropdown(e.target.checked)}
        />
        <label htmlFor="dropdown-check" className="text-body inline-flex w-full p-2">
          Sort: {sortFields[selectedField].title}
          <ArrowDownIcon
            className={`ml-auto size-5 transition-all duration-100 ease-in-out ${showSortDropdown ? 'rotate-180' : 'rotate-0'}`}
          />
        </label>
      </div>
      <div
        id="dropdown"
        className={`base-bg-normal custom-shadow-outer transistion-all absolute top-12 z-10 w-full origin-top rounded border border-slate-500 duration-100 ease-in-out ${showSortDropdown ? 'scale-y-100' : 'scale-y-0'}`}
      >
        <ul className="text-sm text-gray-700 dark:text-gray-200">
          {sortFields.map((field, index) => (
            <div className={`flex items-center ${selectedField === index ? 'disabled-sort-field' : 'sort-field'}`} key={index}>
              <input
                id={`radio-${index}`}
                type="radio"
                name="sort-field"
                value=""
                className="hidden"
                onChange={() => setSelectedField(index)}
              />
              <label htmlFor={`radio-${index}`} className="text-body w-full p-2">
                {field.title}
              </label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SortDropdown
