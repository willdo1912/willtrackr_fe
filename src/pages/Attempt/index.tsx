import { ArrowDownOnSquareIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DashboardNavbar from 'src/shared/DashboardNavbar'

const Attempt = () => {
  const [attempts, setAttempts] = useState<any>([])

  const getAttempts = () => {
    axios
      .get(`${import.meta.env.VITE_BE_PATH}/api/daily/${window.localStorage.getItem('id')}/`)
      .then(response => response.data)
      .then(data => setAttempts(data.attempts))
  }

  const getAttemptAnswers = (id: string) => {
    axios
      .get(`${import.meta.env.VITE_BE_PATH}/api/daily/answer/${id}/`)
      .then(response => response.data)
      .then(data => {
        const dataStr = JSON.stringify(data, null, 2) // Pretty print JSON
        const blob = new Blob([dataStr], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        window.open(url, '_blank')
      })
  }

  useEffect(() => {
    getAttempts()
  }, [])
  return (
    <div className="flex h-fit w-full">
      <DashboardNavbar />
      <div className="base-bg-normal flex h-dvh w-full flex-col gap-8 p-8">
        <h4 className="base-text-teal">All Attempts</h4>
        <div className="base-bg-off custom-shadow-outer h-full overflow-y-scroll rounded">
          <table className="h-fit w-full border-collapse border border-slate-500">
            <thead className="sticky top-0">
              <tr className="base-bg-off-inverted">
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Attempt ID</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Start Date</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Start Time</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Submit Date</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Submit Time</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((attempt: any) => (
                <tr>
                  <td className="border border-slate-500 p-4 text-center">{attempt.id}</td>
                  <td className="border border-slate-500 p-4 text-center">
                    {new Date(attempt.start_at).toDateString()}
                  </td>
                  <td className="border border-slate-500 p-4 text-center">
                    {new Date(attempt.start_at).toTimeString()}
                  </td>
                  <td className="border border-slate-500 p-4 text-center">
                    {new Date(attempt.submit_at).toDateString()}
                  </td>
                  <td className="border border-slate-500 p-4 text-center">
                    {new Date(attempt.submit_at).toTimeString()}
                  </td>
                  <td className="border border-slate-500 p-4 text-center">
                    <button className="btn-none" onClick={() => getAttemptAnswers(attempt.id)}>
                      <ArrowDownOnSquareIcon className="size-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attempt
