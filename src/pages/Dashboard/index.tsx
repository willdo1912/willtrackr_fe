import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import DashboardNavbar from 'src/shared/DashboardNavbar'
import Calendar from './Calendar'
import PieChart from './PieChart'
import pieData from './pie.json'
import lineData from './line.json'
import LineChart from './LineChart'

const Dashboard = () => {
  return (
    <div className="flex h-fit w-full">
      <DashboardNavbar />
      <div className="base-bg-normal flex h-fit min-h-dvh w-full flex-col gap-8 p-8">
        <div className="flex">
          <div className="mr-auto flex flex-col gap-2">
            <span className="base-text-teal">Good morning,</span>
            <h4>Username</h4>
          </div>
          <div className="ml-auto inline-flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="divide-y-2">Today,</span>
              <CalendarDaysIcon className="size-5" />
            </div>
            <h4 className="base-text-teal">15 May, 2023</h4>
          </div>
        </div>

        {/* //TODO component */}
        <div className="grid grid-cols-6 gap-8">
          <div className="base-bg-off custom-shadow-outer col-span-4 flex size-fit h-96 w-full gap-4 rounded p-4">
            <Calendar />
            <div className="flex flex-col gap-4 p-4">
              <h5 className="base-text-teal">You are on a 7-day win-streak!</h5>
              <div className="flex gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>Date :</div>
                  <div className="col-span-2">15 May, 2023</div>
                  <div>Time :</div>
                  <div className="col-span-2">15 mins</div>
                </div>
              </div>
              <button className="btn-filled">Take today's test</button>
            </div>
          </div>
          <div className="base-bg-off custom-shadow-outer col-span-2 flex size-fit h-96 w-full flex-col gap-4 rounded p-4">
            <h5 className="base-text-teal">Total Attempts</h5>
            <div className="grid grid-cols-3 gap-4 p-4">
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
            <button className="btn-filled">View all attempts</button>
          </div>
          <div className="base-bg-off custom-shadow-outer col-span-4 flex size-fit h-96 w-full gap-4 rounded p-4">
            <LineChart data={lineData} />
          </div>
          <div className="base-bg-off custom-shadow-outer col-span-2 flex size-fit h-96 w-full gap-4 rounded p-4">
            <PieChart data={pieData} />
          </div>
          <div className="base-bg-off custom-shadow-outer col-span-4 flex size-fit h-96 w-full gap-4 rounded p-4">
            <LineChart data={lineData} />
          </div>
          <div className="base-bg-off custom-shadow-outer col-span-2 flex size-fit h-96 w-full gap-4 rounded p-4">
            <PieChart data={pieData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
