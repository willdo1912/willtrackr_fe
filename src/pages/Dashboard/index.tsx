import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DashboardNavbar from 'src/shared/DashboardNavbar'
import { camelize, getCurrentUser, redirectTo } from 'src/shared/utils'
import Calendar from './components/Calendar'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import './index.scss'
import lineData from './line.json'
import pieData from './pie.json'

const Dashboard = () => {
  const [currentCustomer, setCurrentCustomer] = useState<any>({})
  const [attempts, setAttempts] = useState<any>([])
  const [completedToday, setCompletedToday] = useState<boolean>(false)

  const getAttempts = () => {
    axios
      .get(`${import.meta.env.VITE_BE_PATH}/api/daily/${window.localStorage.getItem('id')}/`)
      .then(response => response.data)
      .then(data => {
        setAttempts(data.attempts)
        setCompletedToday(data.completed_today)
      })
  }

  useEffect(() => {
    getCurrentUser(setCurrentCustomer)
    getAttempts()
  }, [])

  return (
    <div className="flex h-fit w-full">
      <DashboardNavbar />
      <div className="base-bg-normal flex h-fit min-h-dvh w-full flex-col gap-8 p-8">
        <div className="flex">
          <div className="mr-auto flex flex-col gap-2">
            <span className="base-text-teal">Good morning,</span>
            <h4>{currentCustomer.email ? currentCustomer.email : 'Default User'}</h4>
          </div>
          <div className="ml-auto inline-flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="divide-y-2">Today,</span>
              <CalendarDaysIcon className="size-5" />
            </div>
            <h4 className="base-text-teal">{new Date().toLocaleDateString()}</h4>
          </div>
        </div>

        {/* //TODO component */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-6">
          <div className="base-bg-off custom-shadow-outer col-span-4 flex size-fit h-fit w-full flex-col gap-4 rounded p-8 lg:h-96 lg:flex-row">
            <Calendar attempts={camelize(attempts)} />
            <div className="flex w-full flex-col gap-4 lg:w-2/5">
              <h5 className="base-text-teal">You are on a 7-day win-streak!</h5>
              <div className="grid grid-cols-3 gap-4">
                <div>Date :</div>
                <div className="col-span-2 text-center">{new Date().toDateString()}</div>
                <div>Time :</div>
                <div className="col-span-2 text-center">15 mins</div>
              </div>
              <button
                className="btn-filled mt-auto w-full"
                onClick={() => redirectTo('/daily')}
                disabled={completedToday}
              >
                Take today's test
              </button>
            </div>
          </div>
          <div className="base-bg-off custom-shadow-outer col-span-2 flex size-fit h-96 w-full flex-col gap-4 rounded p-8">
            <h5 className="base-text-teal">Total Attempts</h5>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 w-32">Weekly test :</div>
              <div>25/28</div>
              <div className="col-span-2 w-32">Monthly :</div>
              <div>30/32</div>
              <div className="col-span-2 w-32">Quiz :</div>
              <div className="font-bold">45/45</div>
              <div className="col-span-2 w-32">Questionnairs :</div>
              <div>56/60</div>
              <div className="col-span-2 w-32">Tests :</div>
              <div>56/60</div>
            </div>
            <button className="btn-filled mt-auto" onClick={() => redirectTo('/attempt')}>View all attempts</button>
          </div>
          <div className="chart-container base-bg-off custom-shadow-outer col-span-4 flex size-fit h-96 w-full flex-col gap-4 rounded p-4">
            <LineChart data={lineData} />
          </div>
          <div className="chart-container base-bg-off custom-shadow-outer col-span-2 flex size-fit h-96 w-full flex-col gap-4 rounded p-4">
            <PieChart data={pieData} />
          </div>
          <div className="chart-container base-bg-off custom-shadow-outer col-span-4 flex size-fit h-96 w-full flex-col gap-4 rounded p-4">
            <LineChart data={lineData} />
          </div>
          <div className="chart-container base-bg-off custom-shadow-outer col-span-2 flex size-fit h-96 w-full flex-col gap-4 rounded p-4">
            <PieChart data={pieData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
