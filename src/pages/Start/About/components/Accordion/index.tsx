interface Props {
  title: string
  data: string
  isOpen: boolean
  toggleAccordion: () => void
}

const Accordion = ({ title, data, isOpen, toggleAccordion }: Props) => {
  return (
    <div className="custom-shadow-outer w-full divide-y-2 divide-slate-500 rounded-xl">
      <button className={`btn-none w-full ${isOpen && 'rounded-b-none'}`} onClick={toggleAccordion}>
        {title}
        <span
          className={`float-right transform ${isOpen ? 'rotate-180' : 'rotate-0'}  
                                 transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && <div className="base-bg-off rounded-b-xl p-4">{data}</div>}
    </div>
  )
}

export default Accordion
