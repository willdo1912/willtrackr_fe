import { FunctionComponent } from 'react'
import { MinusCircleIcon } from '@heroicons/react/16/solid'
import ButtonGroup from './components/ButtonGroup'
import FrameComponent1 from './components/FrameComponent1'
import Container1 from './components/Container1'
import ImageCollection from './components/ImageCollection'
import Container from './components/Container'
import DashboardNavbar from 'src/shared/DashboardNavbar'

const AllProducts: FunctionComponent = () => {
  return (
    <div className="flex h-fit w-full">
      <DashboardNavbar />
      <div className="bg-fill-bg py-spacing-spacing-xl mq750:gap-[4rem] relative box-border flex w-full flex-col items-center justify-start gap-[4rem] overflow-hidden px-[1.25rem] tracking-[normal] shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] lg:gap-[4rem]">
        <img
          className="relative my-4 h-[4rem] rounded object-cover"
          loading="eager"
          alt=""
          src="https://www.boots.com/wcsstore/eBootsStorefrontAssetStore/MasterLogo2019/BVI%20Logo%20v2.png"
        />
        <main className="font-body-large mq750:gap-[0rem_2rem] flex w-[71.313rem] max-w-full flex-row items-start justify-start gap-[0rem_2rem] text-left text-[1rem] text-gray-100">
          <div className="mq750:hidden flex w-[12.125rem] flex-col items-start justify-start gap-[0.5rem_0rem]">
            <div className="font-display-medium flex flex-row items-start justify-start px-[0rem] pb-[1.5rem] pt-[0rem] text-[1.5rem]">
              <h2 className="font-inherit relative m-0 font-semibold leading-[130%] tracking-[-0.01em] text-inherit sm:text-[1.188rem] sm:leading-[1.563rem]">
                Filter by
              </h2>
            </div>
            <div className="flex flex-row items-start justify-start px-[0rem] pb-[1.5rem] pt-[0rem]">
              <div className="relative leading-[150%]">Hide out of stock items</div>
            </div>
            <div className="flex flex-row items-start justify-start self-stretch px-[0rem] pb-[1.5rem] pt-[0rem]">
              <div className="flex flex-1 flex-row items-center justify-between gap-[1.25rem] py-[0rem] pl-[0rem] pr-[0.063rem]">
                <div className="relative leading-[150%]">Price Range</div>
                <MinusCircleIcon className="size-5" />
              </div>
            </div>
            <form className="m-0 box-border flex w-[10.625rem] flex-col items-start justify-start gap-[0.688rem_0rem] px-[0rem] pb-[1.5rem] pt-[0rem]">
              <div className="flex flex-col items-start justify-start self-stretch">
                <div className="flex w-[7.75rem] flex-row items-start justify-between gap-[1.25rem]">
                  <b className="font-body-large text-darkgray-100 relative text-left text-[0.688rem] leading-[1.125rem]">
                    Min
                  </b>
                  <b className="font-body-large text-darkgray-100 relative text-left text-[0.688rem] leading-[1.125rem]">
                    Max
                  </b>
                </div>
                <div className="mt-[-0.375rem] flex flex-row items-end justify-start gap-[0rem_0.563rem] self-stretch">
                  <div className="rounded-10xs box-border flex h-[1.813rem] flex-1 flex-row items-center justify-start border-[1px] border-solid border-gray-300 bg-gray-200 pb-[0.25rem] pl-[0.5rem] pr-[2.938rem] pt-[0.313rem]">
                    <input
                      className="font-body-large relative inline-block h-[1.125rem] w-full min-w-[0.563rem] flex-1 bg-[transparent] text-left text-[0.688rem] leading-[1.125rem] text-gray-100 [border:none] [outline:none]"
                      placeholder="FO"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start px-[0rem] pb-[0.75rem] pt-[0rem]">
                    <div className="font-body-large text-indianred relative text-left text-[0.875rem] leading-[1.375rem]">
                      to
                    </div>
                  </div>
                  <div className="rounded-10xs box-border flex h-[1.813rem] flex-1 flex-row items-center justify-start border-[1px] border-solid border-gray-300 bg-gray-200 pb-[0.25rem] pl-[0.5rem] pr-[3rem] pt-[0.313rem]">
                    <input
                      className="font-body-large relative inline-block h-[1.125rem] w-full min-w-[0.5rem] flex-1 bg-[transparent] text-left text-[0.688rem] leading-[1.125rem] text-gray-100 [border:none] [outline:none]"
                      placeholder="36"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-fill-bg border-darkturquoise hover:bg-gainsboro-100 hover:border-cadetblue flex cursor-pointer flex-row items-center justify-center self-stretch overflow-hidden rounded border-[1px] border-solid p-[0.5rem] hover:box-border hover:border-[1px] hover:border-solid">
                <div className="font-body-large text-darkturquoise relative text-left text-[0.875rem] leading-[1.375rem]">
                  APPL
                </div>
              </button>
            </form>
            <ButtonGroup />
            <FrameComponent1 />
            <Container1 />
            <div className="flex flex-col items-start justify-start text-[0.875rem] text-gray-300">
              <div className="relative leading-[150%]">3 For E3 On Selected The</div>
              <div className="text-dimgray relative z-[1] leading-[150%]">Gut Stuff (2)</div>
            </div>
            <div className="flex flex-col items-start justify-start px-[0rem] pb-[1.5rem] pt-[0rem] text-[0.875rem] text-gray-300">
              <div className="relative leading-[150%]">3 For 2 On Selected Vitamins</div>
              <div className="relative z-[1] leading-[150%] text-gray-100">And Supplements</div>
              <div className="text-dimgray relative z-[2] leading-[150%]">Cheopest Free ()</div>
            </div>
            <ImageCollection />
          </div>
          <section className="text-mediumslateblue font-body-large mq750:max-w-full flex max-w-[calc(100%_-_226px)] flex-1 flex-col items-center justify-start gap-[2rem] text-left text-[0.625rem] sm:gap-[2rem]">
            <nav className="font-body-large mq750:flex-wrap m-0 flex flex-row items-end justify-between gap-[1.25rem] self-stretch whitespace-nowrap text-left text-[0.75rem] text-gray-100">
              <div className="relative leading-[150%]">Showing 48 of 96</div>
              <h2 className="font-epilogue relative m-0 text-[1.688rem] font-bold leading-[2.5rem] sm:text-[1.375rem] sm:leading-[2rem]">
                vegan food
              </h2>
              <button className="hover:bg-darkgray-200 hover:border-gray box-border flex h-[2.313rem] cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded border-[1px] border-solid border-gray-300 bg-gray-200 pb-[0.375rem] pl-[0.75rem] pr-[0.438rem] pt-[0.438rem] hover:box-border hover:border-[1px] hover:border-solid">
                <div className="font-body-large relative text-left text-[0.875rem] leading-[1.375rem] text-gray-100">
                  Sort: Most relevant
                </div>
              </button>
            </nav>
            <div className="relative grid size-fit max-w-full grid-cols-4 items-center justify-start gap-8">
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
              <Container />
            </div>
            <div className="relative leading-[1rem]">Showing 48 of 96</div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AllProducts
