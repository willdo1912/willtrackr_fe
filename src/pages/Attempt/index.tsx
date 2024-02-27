import DashboardNavbar from 'src/shared/DashboardNavbar'

const Attempt = () => {
  return (
    <div className="flex h-fit w-full">
      <DashboardNavbar />
      <div className="base-bg-normal flex h-dvh w-full flex-col gap-8 p-8">
        <h4 className="base-text-teal">All Attempts</h4>
        <div className="base-bg-off custom-shadow-outer h-full overflow-hidden rounded">
          <table className="h-fit w-full border-collapse border border-slate-500">
            <thead>
              <tr className="base-bg-off-inverted">
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Attempt</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Date</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Start time</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Submit time</th>
                <th className="base-text-inverted border border-slate-500 p-4 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-500 p-4 text-center">Finance monthly test</td>
                <td className="border border-slate-500 p-4 text-center">Monday, 23 February, 2024</td>
                <td className="border border-slate-500 p-4 text-center">15:30:15</td>
                <td className="border border-slate-500 p-4 text-center">16:45:00</td>
                <td className="border border-slate-500 p-4 text-center">Result</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-4 text-center">Finance monthly test</td>
                <td className="border border-slate-500 p-4 text-center">Monday, 23 February, 2024</td>
                <td className="border border-slate-500 p-4 text-center">15:30:15</td>
                <td className="border border-slate-500 p-4 text-center">16:45:00</td>
                <td className="border border-slate-500 p-4 text-center">Result</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-4 text-center">Finance monthly test</td>
                <td className="border border-slate-500 p-4 text-center">Monday, 23 February, 2024</td>
                <td className="border border-slate-500 p-4 text-center">15:30:15</td>
                <td className="border border-slate-500 p-4 text-center">16:45:00</td>
                <td className="border border-slate-500 p-4 text-center">Result</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-4 text-center">Finance monthly test</td>
                <td className="border border-slate-500 p-4 text-center">Monday, 23 February, 2024</td>
                <td className="border border-slate-500 p-4 text-center">15:30:15</td>
                <td className="border border-slate-500 p-4 text-center">16:45:00</td>
                <td className="border border-slate-500 p-4 text-center">Result</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attempt
