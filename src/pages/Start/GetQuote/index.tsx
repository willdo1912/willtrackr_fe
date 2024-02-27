const GetQuote = () => {
  return (
    <div className="base-bg-normal start-section gap-8 p-8">
      <h1 className="my-4">GET A QUOTE</h1>
      <div className="flex items-center justify-center gap-8">
        <div className="grid size-[40rem] grid-cols-2 items-center justify-center gap-4 p-4">
          <div className="w-full flex-col space-y-4">
            <label className="my-2">First Name</label>
            <input type="text" id="first-name-input" className="w-full" />
          </div>
          <div className="w-full flex-col space-y-4">
            <label className="my-2">Last Name</label>
            <input type="text" id="last-name-input" className="w-full" />
          </div>
          <div className="w-full flex-col space-y-4">
            <label className="my-2">Email</label>
            <input type="email" id="email-input" className="w-full" />
          </div>
          <div className="w-full flex-col space-y-4">
            <label className="my-2">Phone Number</label>
            <input type="phone" id="phone-input" className="w-full" />
          </div>

          <div className="col-span-2 w-full flex-col space-y-4">
            <label className="my-2">Select your country</label>
            <select id="countries" className="w-full" defaultValue="">
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
            <textarea rows={6} className="w-full resize-none" placeholder="Write your thoughts here..."></textarea>
          </div>
          <div className="col-span-2 flex h-8 items-center justify-center gap-3.5">
            <input type="checkbox" id="consent-checkbox" />
            <label htmlFor="consent-checkbox" className="h-4 shrink grow basis-0">
              By submitting, you are agreed to the Terms & Conditions, and Privacy Policy
            </label>
          </div>
          <button
            className="btn-filled col-span-2"
            onClick={() => (window.location.href = 'http://localhost:5173/dashboard')}
          >
            Submit
          </button>
        </div>
        <img
          className="hidden size-[40rem] [@media(min-width:1400px)]:block"
          src="https://mlxlpjcrp09r.i.optimole.com/w:800/h:800/q:mauto/f:avif/https://eleconone.com/wp-content/uploads/2020/03/Services-2.png"
        />
      </div>
    </div>
  )
}

export default GetQuote
