import '../App.css'

export default function Dashboard(props) {
  const animals =["cat", "dog", "bird", "redpanda", "koala", "fox", "bunny", "frog", "duck", "penguin", "axolotl", "capybara"]
  const image = "https://api.animality.xyz/images/"+animals[Math.floor(Math.random()*animals.length)]+"/"+props.number+".png"

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