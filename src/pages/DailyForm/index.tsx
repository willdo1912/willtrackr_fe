import { HeartIcon } from '@heroicons/react/16/solid'
import './index.scss'
import DashboardNavbar from 'src/shared/DashboardNavbar'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import { redirectTo, snakelize } from 'src/shared/utils'
import { DailyFormDataModel } from '../../shared/models'

const DailyForm = () => {
  const [dailyFormData, setDailyFormData] = useState<DailyFormDataModel>({
    customer: window.localStorage.getItem('id')!,
    startAt: new Date().toISOString(),
    submitAt: ''
  })
  const [dailyFormInput, setDailyFormInput] = useState<any>({
    weight: { value: '', date: '2000-01-01' },
    bmi: { value: '', date: '2000-01-01' },
    waist: { value: '', date: '2000-01-01' },
    blood_pressure: { value: '', date: '2000-01-01' },
    triglyceride: { value: '', date: '2000-01-01' },
    non_hdl_cholesterol: { value: '', date: '2000-01-01' },
    hdl_cholesterol: { value: '', date: '2000-01-01' },
    blood_glucose: { value: '', date: '2000-01-01' },
    a_1_c: { value: '', date: '2000-01-01' },
    other: { value: '', date: '2000-01-01' }
  })

  const handleDailyFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(snakelize(dailyFormInput))
    const updatedFormData = { ...dailyFormData, submitAt: new Date().toISOString(), item: dailyFormInput }
    axios
      .post(`${import.meta.env.VITE_BE_PATH}/api/daily/answer/`, snakelize(updatedFormData))
      .then(response => console.log(response.data))
      .then(() => redirectTo('/dashboard'))
      .catch(error => alert(error.msg))
    setDailyFormData(updatedFormData)
  }

  function handleDailyInput(inputName: string, inputValue: string): void {
    const [field, subField] = inputName.split('-')
    const newInput = { ...dailyFormInput }
    newInput[field][subField] = inputValue.trim()
    setDailyFormInput(newInput)
  }

  return (
    <div className="relative flex h-dvh max-h-dvh w-full overflow-hidden bg-[url('https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg')] bg-cover bg-right bg-no-repeat">
      <DashboardNavbar />
      <div className="absolute z-0 size-full bg-transparent bg-white opacity-80 dark:bg-black"></div>

      <div className="z-10 flex h-dvh max-h-dvh w-full flex-col gap-8 overflow-y-scroll p-8">
        <h1 className="text-color-normal my-4 w-full text-center">DAILY REPORT</h1>
        <form className="mx-auto w-fit space-y-4" onSubmit={e => handleDailyFormSubmit(e)}>
          <table className="daily-form">
            <thead className="sticky top-[-2rem]">
              <tr>
                <th className="font-bold">Metrics</th>
                <th className="font-bold">Values</th>
                <th className="font-bold">Last Recorded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="section-row">
                  Test for common health
                </td>
              </tr>
              <tr>
                <td>Weight</td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="weight-value"
                    value={dailyFormInput.weight.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="weight-date"
                    value={dailyFormInput.weight.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Body Mass Index (BMI)
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>18.5 to 24.9</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="bmi-value"
                    value={dailyFormInput.bmi.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="bmi-date"
                    value={dailyFormInput.bmi.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Waist Measurement
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Men: 40 inches (102 centimeters) or less</small>
                  </p>
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Women: 35 inches (88 centimeters) or less</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="waist-value"
                    value={dailyFormInput.waist.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="waist-date"
                    value={dailyFormInput.waist.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Blood Pressure
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Less than 120/80 mm Hg</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="blood_pressure-value"
                    value={dailyFormInput.blood_pressure.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="blood_pressure-date"
                    value={dailyFormInput.blood_pressure.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="section-row">
                  Tests to measure cholesterol
                </td>
              </tr>
              <tr>
                <td>
                  Triglycerides
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Less than 150 mg/dL</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="triglyceride-value"
                    value={dailyFormInput.triglyceride.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="triglyceride-date"
                    value={dailyFormInput.triglyceride.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Non-HDL cholesterol
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Less than 130 mg/dL</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="non_hdl_cholesterol-value"
                    value={dailyFormInput.non_hdl_cholesterol.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="non_hdl_cholesterol-date"
                    value={dailyFormInput.non_hdl_cholesterol.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  HDL cholesterol
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Above 40 mg/dL in men</small>
                  </p>
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Above 50 mg/dL in women</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="hdl_cholesterol-value"
                    value={dailyFormInput.hdl_cholesterol.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="hdl_cholesterol-date"
                    value={dailyFormInput.hdl_cholesterol.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="section-row">
                  Tests to check sugar in the blood for diabetes
                </td>
              </tr>
              <tr>
                <td>
                  Blood Glucose
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Less than 100 mg/dL</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="blood_glucose-value"
                    value={dailyFormInput.blood_glucose.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="blood_glucose-date"
                    value={dailyFormInput.blood_glucose.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  A1C
                  <p>
                    <HeartIcon className="size-4 text-danger" />
                    <small>Less than 5.7%</small>
                  </p>
                </td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="a_1_c-value"
                    value={dailyFormInput.a_1_c.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="a_1_c-date"
                    value={dailyFormInput.a_1_c.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Other tests</td>
                <td className="input-cell">
                  <input
                    type="text"
                    name="other-value"
                    value={dailyFormInput.other.value}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
                <td className="input-cell">
                  <input
                    type="date"
                    className="px-2"
                    name="other-date"
                    value={dailyFormInput.other.date}
                    onChange={e => handleDailyInput(e.target.name, e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn-filled w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default DailyForm
