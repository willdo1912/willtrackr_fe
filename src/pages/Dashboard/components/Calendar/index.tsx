import { useEffect, useState } from 'react'
import { DailyFormDataModel } from 'src/shared/models'

interface CalendarAttemptModel {
  attempts: DailyFormDataModel[]
}

const Calendar = ({ attempts }: CalendarAttemptModel) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [currentMonth, setCurrentMonth] = useState(0)
  const [currentYear, setCurrentYear] = useState(0)
  const [divBlock, setDivBlock] = useState<(Date | undefined)[]>([])
  const completedDays: string[] = attempts.map(attempt => {
    const startAt = new Date(attempt.startAt)
    return new Date(startAt.getFullYear(), startAt.getMonth(), startAt.getDate()).toISOString()
  })

  const generateCalendar = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month, 1)

    const firstDayOfWeek = firstDayOfMonth.getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const tempBlock = []
    for (let i = 0; i < firstDayOfWeek; i++) {
      tempBlock.push(undefined)
    }
    for (let i = 0; i < daysInMonth; i++) {
      const nextDay = new Date(firstDayOfMonth)
      nextDay.setDate(firstDayOfMonth.getDate() + i)
      tempBlock.push(nextDay)
    }
    setDivBlock(tempBlock)
  }

  // Initialize the calendar with the current month and year
  useEffect(() => {
    const currentDate = new Date()
    setCurrentMonth(currentDate.getMonth())
    setCurrentYear(currentDate.getFullYear())
  }, [])

  useEffect(() => {
    generateCalendar(currentYear, currentMonth)
  }, [currentYear, currentMonth])

  // Event listeners for previous and next month buttons
  const getPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    generateCalendar(currentYear, currentMonth)
  }

  const getNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    generateCalendar(currentYear, currentMonth)
  }

  const setDate = (monthStr: string) => {
    let monthList = monthStr.split('-')
    setCurrentMonth(parseInt(monthList[1]) - 1)
    setCurrentYear(parseInt(monthList[0]))
  }

  const checkCompleted = (day: Date | undefined) => {
    return day !== undefined && completedDays.includes(day.toISOString())
  }

  return (
    <div className="w-full px-4 lg:w-3/5">
      <div className="custom-shadow-outer base-bg-normal overflow-hidden rounded-lg">
        <div className="base-bg-off-inverted flex items-center justify-between px-6 py-3">
          <button id="prevMonth" className="base-text-inverted" onClick={() => getPrevMonth()}>
            Previous
          </button>
          <input
            type="month"
            onChange={e => setDate(e.target.value)}
            value={`${currentYear}-${currentMonth < 9 ? '0' + (currentMonth + 1) : currentMonth + 1}`}
            className="base-bg-normal rounded border-none p-1 font-bold"
          />
          <button id="nextMonth" className="base-text-inverted" onClick={() => getNextMonth()}>
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 p-2" id="calendar">
          {daysOfWeek.map(day => (
            <div key={day} className="mx-auto h-8 w-full p-1 text-center">
              {day}
            </div>
          ))}
          {divBlock.map((day, index) => (
            <div
              key={index}
              className={`mx-auto h-8 w-full p-1 text-center ${checkCompleted(day) && 'base-bg-teal custom-shadow-inner rounded'}`}
              id={`${day?.toISOString()}`}
              onClick={() => console.log(checkCompleted(day))}
            >
              {day ? day.getDate() : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
