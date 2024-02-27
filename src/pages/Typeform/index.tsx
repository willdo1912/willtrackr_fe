import { Widget } from '@typeform/embed-react'

const Typeform = () => {
  return (
    <div className="h-dvh w-full bg-red-500">
      {/* <Widget id="ojNCGPIm" style={{ width: '100%', height: '100%' }} className="typeform" onSubmit={() => alert("Done")} /> */}
      <Widget
        id="HePuknND"
        style={{ width: '100%', height: '100%' }}
        className="typeform"
        onSubmit={e => {
          alert(e)
          console.log(e)
        }}
      />
    </div>
  )
}

export default Typeform
