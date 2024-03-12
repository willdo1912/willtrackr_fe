import { MagnifyingGlassIcon, MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'
import { useAppContext } from 'src/stores/app-context-manager.tsx'
import { FilterPaneModel } from './model'

const FilterPane = ({ id, showSearch, openByDefault, valueCount, name }: FilterPaneModel) => {
  const { queryParam, setQueryParam } = useAppContext()
  const [showFilter, setShowFilter] = useState(openByDefault)
  const [showMore, setShowMore] = useState(false)
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState(valueCount)
  const [filterValue, setFilterValue] = useState<any>([])

  const handleCheckboxChange = (isChecked: any, id: any) => {
    if (isChecked) {
      setFilterValue((prev: any) => [...prev, id])
    } else {
      setFilterValue((prev: any[]) => prev.filter((value: any) => value !== id))
    }
  }

  const checkValue = (valueId: any) => {
    try {
      console.log((queryParam as any)[id].split(";"), valueId + "")
      return (queryParam as any)[id].split(";").includes(valueId + "")
    } catch {
      return false
    }
  }

  useEffect(() => {
    if (search.trim()) {
      const results = valueCount.filter((value: any) => value.id.includes(search))
      setSearchResult(results)
    } else {
      setSearchResult(valueCount)
    }
  }, [search])

  useEffect(() => {
    setQueryParam!({ ...queryParam, [id]: filterValue.join(';') })
  }, [filterValue])

  useEffect(() => {
    setSearch('')
    setSearchResult(valueCount)
  }, [valueCount])

  return (
    <div className="flex w-72 flex-col gap-4 p-4">
      <div>
        <input
          type="checkbox"
          id={`dropdown-checkbox-${id}`}
          name="term"
          className="hidden"
          checked={showFilter}
          onChange={e => {
            setShowFilter(e.target.checked)
            setShowMore(false)
          }}
        />
        <label htmlFor={`dropdown-checkbox-${id}`} className="flex h-4 items-center">
          <span className="mr-auto text-xl font-semibold">
            {name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
              return str.toUpperCase()
            })}
          </span>
          {showFilter ? <MinusIcon className="size-6" /> : <PlusIcon className="size-6" />}
        </label>
      </div>
      <ul className={`space-y-4 ${showFilter ? '' : 'hidden'}`}>
        <li className={`relative w-full ${showSearch ? '' : 'hidden'}`}>
          <input
            type="text"
            className="h-fit w-full p-2"
            value={search}
            onChange={e => setSearch(e.target.value)}
          ></input>
          <MagnifyingGlassIcon className="absolute right-2.5 top-2.5 size-5 text-slate-500" />
        </li>
        {(showMore ? searchResult : searchResult.slice(0, 5)).map((value: any, index: number) => (
          <li className="items-top inline-flex w-full gap-2" key={index}>
            <input
              type="checkbox"
              id={`filter-checkbox-${id}-${index}`}
              name="term"
              className="mt-0.5 size-5 min-w-5"
              onChange={e => handleCheckboxChange(e.target.checked, value.id)}
              checked={checkValue(value.id)}
            />
            <label htmlFor={`filter-checkbox-${id}-${index}`} className="flex items-center">
              <p>
                {value.id} ({value.count})
              </p>
            </label>
          </li>
        ))}
        <li className="inline-flex w-full items-center gap-2">
          <input
            type="checkbox"
            id={`show-more-checkbox-${id}`}
            name="term"
            className="hidden"
            checked={showMore}
            onChange={e => setShowMore(e.target.checked)}
          />
          <label
            htmlFor={`show-more-checkbox-${id}`}
            className={`flex h-4 items-center hover:text-blue-500 hover:underline ${searchResult.length <= 10 && 'hidden'}`}
          >
            Show {showMore ? 'less' : 'more'}
          </label>
        </li>
      </ul>
    </div>
  )
}

export default FilterPane
