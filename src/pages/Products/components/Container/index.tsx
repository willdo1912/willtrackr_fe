import { FunctionComponent } from 'react'

const Container: FunctionComponent = () => {
  return (
    <div className="custom-shadow-outer relative h-fit w-56 rounded bg-white">
      <div className="custom-shadow-outer inline-flex h-fit w-56 flex-col items-center justify-center gap-2 rounded bg-white px-2 py-4">
        <div className="custom-shadow-outer inline-flex items-center justify-center rounded bg-white p-2.5">
          <img className="h-44 w-44 rounded" src="https://picsum.photos/id/110/900/600" />
        </div>
        <div className="flex h-52 flex-col items-start justify-center gap-2">
          <div className="self-stretch font-['Inter'] text-base font-normal leading-normal text-zinc-900">
            Doisy & Dam Peanut & Salted Caramel Dark
          </div>
          <div className="font-['Inter'] text-sm font-normal leading-snug text-gray-700">***** (2)</div>
          <div className="inline-flex items-start justify-center gap-2.5 self-stretch rounded-sm border border-orange-500 bg-white px-2 py-1.5">
            <div className="font-['Inter'] text-xs font-normal leading-tight text-orange-500">
              Save 1/3 on selected Doisy and
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-6">
            <div className="inline-flex flex-col items-start justify-start gap-1">
              <div className="font-['Inter'] text-xs font-normal leading-tight text-zinc-400">l.67 Wos f2.50</div>
              <div className="font-['Inter'] text-xs font-normal leading-none text-gray-700">8DG|E2O9 por1ODG</div>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-red-50 px-2 py-1">
              <div className="font-['Inter'] text-xs font-normal leading-none text-orange-500">Save E0.03</div>
            </div>
          </div>
          <div className="inline-flex items-start justify-center gap-2.5 self-stretch rounded bg-cyan-500 px-9 py-1.5">
            <div className="font-['Inter'] text-sm font-normal leading-snug text-white">ADD TO BASKET</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
