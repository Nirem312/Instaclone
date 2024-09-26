import '../App.css'

export default function Dashboard(props) {
  const image = "https:\/\/randomfox.ca\/images\/"+props.number+".jpg"

  return (
    <div>
      <div className='imageDiv'>
        <img src="../like.png" className='dashboardIcons'/>
        <p className='dashboardNumber'>{Math.floor(Math.random() * 20000)}</p>
        <img src="../black-speech-bubble.png" className='dashboardIcons2'/>
        <p className='dashboardNumber2'>{Math.floor(Math.random() * 200)}</p>
        <img src={image} className='dashboardContent'/>
      </div>
    </div>
  )
}
