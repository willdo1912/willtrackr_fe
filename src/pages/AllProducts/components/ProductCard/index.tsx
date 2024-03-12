import { StarIcon } from '@heroicons/react/16/solid'
import { safeAccess } from 'src/shared/utils'

interface ProductCardModel {
  product: any
}

const ProductCard = ({ product }: ProductCardModel) => {
  const makeParentClass = (contentVar: string, baseClass: string, conditionalClass: string) => {
    const finalClass = `${baseClass} ${contentVar !== '' ? conditionalClass : ''}`.trim()
    return finalClass
  }

  return (
    <div className="base-bg-normal custom-shadow-outer flex w-64 flex-col gap-2 rounded-lg p-4 md:w-[17rem] lg:w-72">
      <img className="aspect-square rounded" src={product.iconUri} />
      <div className="flex flex-col justify-center gap-2">
        <h5 className="line-clamp-2 text-ellipsis text-left">{product.title}</h5>
        <span className="relative inline-flex items-center gap-1">
          <div className="inline-flex w-[5rem]">
            <StarIcon className="size-4 min-w-4 text-slate-500" />
            <StarIcon className="size-4 min-w-4 text-slate-500" />
            <StarIcon className="size-4 min-w-4 text-slate-500" />
            <StarIcon className="size-4 min-w-4 text-slate-500" />
            <StarIcon className="size-4 min-w-4 text-slate-500" />
          </div>
          <div
            className="absolute inline-flex overflow-hidden"
            style={{ width: `${safeAccess(product, 'reviews.average', '')}rem` }}
          >
            <StarIcon className="size-4 min-w-4 text-yellow-500" />
            <StarIcon className="size-4 min-w-4 text-yellow-500" />
            <StarIcon className="size-4 min-w-4 text-yellow-500" />
            <StarIcon className="size-4 min-w-4 text-yellow-500" />
            <StarIcon className="size-4 min-w-4 text-yellow-500" />
          </div>
          {safeAccess(product, 'reviews.count', '')}
        </span>
        <div
          className={makeParentClass(
            safeAccess(product, 'offers.0.text', ''),
            'flex h-12 items-center truncate rounded-lg p-2 font-semibold text-danger',
            'border border-danger'
          )}
        >
          {safeAccess(product, 'offers.0.text', '')}
        </div>
        <div className="inline-flex h-8 items-end gap-1">
          <h5>{safeAccess(product, 'pricing.current.text', '')}</h5>
          <small className="pb-1 text-xs sm:text-[10px] md:text-[11px]">
            Was {safeAccess(product, 'pricing.regular.text', '')}
          </small>
          <small className="base-bg-off mb-1 ml-auto rounded p-1 text-xs font-bold text-danger sm:text-[10px] md:text-[11px]">
            Save {safeAccess(product, 'pricing.saving.text', '')}
          </small>
        </div>
        <small>
          {product.ppuQuantity} | {safeAccess(product, 'pricing.perUnit', '')}
        </small>
        <button className="btn-filled truncate" onClick={() => console.log(product)}>
          ADD TO BASKET
        </button>
      </div>
    </div>
  )
}

export default ProductCard
