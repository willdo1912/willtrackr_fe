import { Widget } from '@typeform/embed-react'
import axios from 'axios'
import { redirectTo, snakelize } from 'src/shared/utils'

const Typeform = () => {
  const handleTypeformSubmit = (e: any) => {
    axios
      .post(
        `${import.meta.env.VITE_BE_PATH}/api/typeform/response/`,
        snakelize({ ...e, customer: window.localStorage.getItem('id') })
      )
      .then(response => response.data)
      .then(data => console.log(data))
      .then(() => redirectTo('/dashboard'))
      .catch(error => alert(error.msg))
  }

  return (
    <div className="h-dvh w-full">
      {/* <Widget id="ojNCGPIm" style={{ width: '100%', height: '100%' }} className="typeform" onSubmit={() => alert("Done")} /> */}
      <button onClick={() => redirectTo('/dashboard')} className="btn-filled absolute left-5 top-5">
        To dashboard
      </button>
      <Widget
        id={`${import.meta.env.VITE_TYPEFORM_ID}`}
        style={{ width: '100%', height: '100%' }}
        className="typeform border-none"
        onSubmit={e => handleTypeformSubmit(e)}
        onReady={({ formId }) => {
          console.log(`Form ${formId} is ready`)
        }}
        onEndingButtonClick={({ formId }) => {
          console.log(`Ending button clicked in form ${formId}`)
          redirectTo('/dashboard')
        }}
        onStarted={({ formId, responseId }) => {
          console.log(`Form ${formId} started with response ID ${responseId}`)
        }}
      />
    </div>
  )
}

export default Typeform
