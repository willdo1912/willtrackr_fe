import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DashboardNavbar from 'src/shared/DashboardNavbar'
import { camelize, snakelize } from 'src/shared/utils'
import { useAppContext } from 'src/stores/app-context-manager.tsx'
import Drawer from './components/Drawer'
import FilterPane from './components/FilterPane'
import PriceRangePane from './components/PriceRangePane'
import ProductCard from './components/ProductCard'
import SortDropdown from './components/SortDropdown'


const AllFilterPane = ({ priceRange, filterFieldCount }: any) => {
  // console.log(filterFieldCount)
  return (
    <div className="flex flex-col divide-y-2 divide-solid divide-slate-500">
      <PriceRangePane priceRange={priceRange ?? { minPrice: 0, maxPrice: 1 }} />
      {Object.keys(filterFieldCount).map((key: any) => (
        <FilterPane
          showSearch={filterFieldCount[key].length > 5}
          openByDefault={true}
          id={key}
          valueCount={filterFieldCount[key]}
          name={key}
          key={key}
        />
      ))}
    </div>
  )
}

const AllProducts = () => {
  const { queryParam, setQueryParam } = useAppContext()
  const [priceRange, setPriceRange] = useState<any>({})
  const [filterFieldCount, setFilterFieldCount] = useState<any>({})
  const [productList, setProductList] = useState<any>([])
  const [searchInput, setSearchInput] = useState('')
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1600)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageInput, setPageInput] = useState(0)
  const [pageSize, setPageSize] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  const [allParam, setAllParam] = useSearchParams()

  const getProducts = () => {
    const queryParamStr = window.location.href.split('?')[1]
    axios
      .get(
        `${import.meta.env.VITE_BE_PATH}/api/boots/perfume/product/${queryParamStr === undefined ? '' : `?${queryParamStr}`}`
      )
      .then(response => response.data)
      .then((data: any) => {
        setProductList(data.product)
        setCurrentPage(data.page)
        setPageInput(data.page)
        setPageSize(data.size)
        setTotalProducts(data.total)

        const { price_range, ...rest } = data.filter_count
        setPriceRange(price_range[0])
        setFilterFieldCount(camelize(rest))
      })
  }

  const applySearchFilter = () => {
    setQueryParam!({ ...queryParam, search: searchInput })
  }

  const applyPageFilter = () => {
    if (pageInput === currentPage) {
      return
    }
    setQueryParam!({ ...queryParam, page: pageInput, page_size: pageSize })
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1600)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setQueryParam!({ ...queryParam, page: 1, page_size: 48 })
  }, [])

  useEffect(() => {
    getProducts()
  }, [window.location.href])

  useEffect(() => setAllParam(snakelize(queryParam!)), [queryParam])

  return (
    // <div></div>
    <>
      <div className="flex h-fit w-full">
        <DashboardNavbar />
        <div className="base-bg-normal flex w-full flex-col items-center justify-center gap-4">
          <img
            className="my-8 h-[4rem] object-cover"
            loading="eager"
            alt=""
            src="https://www.boots.com/wcsstore/eBootsStorefrontAssetStore/MasterLogo2019/BVI%20Logo%20v2.png"
          />
          <main className="flex w-full flex-row justify-center gap-8 p-4">
            {isLargeScreen ? <AllFilterPane priceRange={priceRange} filterFieldCount={filterFieldCount} /> : <Drawer>{<AllFilterPane priceRange={priceRange} filterFieldCount={filterFieldCount} />}</Drawer>}
            <section className="flex flex-col items-center gap-4">
              <h2 className="text-center font-georgia text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Perfume
              </h2>
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  className="w-full"
                  placeholder="Enter product title here..."
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                />
                <button className="btn-filled" onClick={() => applySearchFilter()}>
                  <MagnifyingGlassIcon className="size-5" onClick={() => applySearchFilter()} />
                </button>
              </div>
              <nav className="flex flex-row items-end justify-between gap-4 self-stretch">
                <div className="space-x-4">
                  <span>
                    Showing {(currentPage - 1) * pageSize + productList.length} of {totalProducts}
                  </span>
                  <button className="btn-none" onClick={() => applyPageFilter()}>
                    Go to page
                  </button>
                  <input
                    type="number"
                    className="range-input h-fit w-12 py-1"
                    value={pageInput}
                    onChange={e => setPageInput(parseInt(e.target.value))}
                  />
                </div>
                <SortDropdown />
              </nav>
              <div className="relative grid size-fit max-w-full grid-cols-2 items-center justify-start gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {productList.length > 0 &&
                  productList.map((product: any) => <ProductCard key={product._id.$oid} product={product} />)}
              </div>
              <div className="space-x-4">
                <span>
                  Showing {(currentPage - 1) * pageSize + productList.length} of {totalProducts}
                </span>
                <button className="btn-none">Go to page</button>
                <input
                  type="number"
                  className="range-input h-fit w-12 py-1"
                  value={pageInput}
                  onChange={e => setPageInput(parseInt(e.target.value))}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default AllProducts
