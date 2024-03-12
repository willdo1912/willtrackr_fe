import { FormEvent, useState } from 'react'
import { QuoteInputModel } from './models'
import axios from 'axios'
import { snakelize } from 'src/shared/utils'

const GetQuote = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [formInput, setFormInput] = useState<QuoteInputModel>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    comment: '',
    term: false
  })

  const handleQuoteSubmit = (e: FormEvent<HTMLFormElement>) => {
    setErrorMsg('')
    e.preventDefault()
    let { term, ...remainingInput } = formInput
    for (let key in remainingInput) {
      if (formInput[key as keyof typeof remainingInput].trim() === '') {
        setErrorMsg(`${key} cannot be empty`)
        return
      }
    }
    // console.log(snakelize(formInput))
    axios
      .post(`${import.meta.env.VITE_BE_PATH}/api/quote/`, snakelize(formInput))
      .then(response => console.log(response))
      .then(() => setErrorMsg(''))
  }

  function handleInput(inputName: string, inputValue: any): void {
    const newInput = { ...formInput, [inputName]: inputValue }
    setFormInput(newInput)
  }

  return (
    <div className="base-bg-normal start-section gap-8 p-8">
      <h1 className="my-4">GET A QUOTE</h1>
      <div className="flex items-center justify-center gap-8">
        <form
          className="grid size-[40rem] grid-cols-2 items-center justify-center gap-4 p-4"
          onSubmit={e => handleQuoteSubmit(e)}
        >
          <div className="w-full flex-col space-y-4">
            <label className="my-2">First Name</label>
            <input
              name="firstName"
              type="text"
              id="first-name-input"
              className="w-full"
              value={formInput.firstName}
              onChange={e => handleInput(e.target.name, e.target.value.trim())}
              placeholder="ex: John"
            />
          </div>
          <div className="w-full flex-col space-y-4">
            <label className="my-2">Last Name</label>
            <input
              name="lastName"
              type="text"
              id="last-name-input"
              className="w-full"
              value={formInput.lastName}
              onChange={e => handleInput(e.target.name, e.target.value.trim())}
              placeholder="ex: Doe"
            />
          </div>
          <div className="w-full flex-col space-y-4">
            <label className="my-2">Email</label>
            <input
              name="email"
              type="email"
              id="email-input"
              className="w-full"
              value={formInput.email}
              onChange={e => handleInput(e.target.name, e.target.value.trim())}
              placeholder="ex: john.doe@gmail.com"
            />
          </div>
          <div className="w-full flex-col space-y-4">
            <label className="my-2">Phone Number</label>
            <input
              name="phone"
              type="tel"
              id="phone-input"
              className="w-full"
              value={formInput.phone}
              onChange={e => handleInput(e.target.name, e.target.value.trim())}
              placeholder="ex: +1 123-456-678"
            />
          </div>
          <div className="col-span-2 w-full flex-col space-y-4">
            <label className="my-2">Select your country</label>
            <select
              name="country"
              id="countries"
              className="w-full"
              value={formInput.country}
              onChange={e => handleInput(e.target.name, e.target.value.trim())}
            >
              <option disabled value="">
                Choose a country
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="BR">England</option>
              <option value="X">Other</option>
            </select>
          </div>
          <div className="col-span-2 w-full flex-col space-y-4">
            <label className="my-2">Comments or feedback</label>
            <textarea
              name="comment"
              rows={6}
              className="w-full resize-none"
              placeholder="Write your thoughts here..."
              value={formInput.comment}
              onChange={e => handleInput(e.target.name, e.target.value.trim())}
            ></textarea>
          </div>
          <div className="col-span-2 flex h-8 items-center justify-center gap-3.5">
            <input
              type="checkbox"
              id="consent-checkbox"
              name="term"
              checked={formInput.term}
              onChange={e => handleInput(e.target.name, e.target.checked)}
            />
            <label htmlFor="consent-checkbox" className="h-4 shrink grow basis-0">
              By submitting, you are agreed to the Terms & Conditions, and Privacy Policy
            </label>
          </div>
          <small className="col-span-2 text-red-500">{errorMsg}</small>
          <button className="btn-filled col-span-2" disabled={!formInput.term}>
            Submit
          </button>
        </form>
        <img
          className="hidden size-[40rem] [@media(min-width:1400px)]:block"
          src="https://mlxlpjcrp09r.i.optimole.com/w:800/h:800/q:mauto/f:avif/https://eleconone.com/wp-content/uploads/2020/03/Services-2.png"
        />
      </div>
    </div>
  )
}

export default GetQuote
