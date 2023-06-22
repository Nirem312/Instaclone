import '../App.css'

export default function Dashboard(props) {
  const animals =["cat", "dog", "bird", "redpanda", "koala", "fox", "bunny", "frog", "duck", "penguin", "axolotl", "capybara"]
  console.log(animals[Math.floor(Math.random()*animals.length)])
  const image = "https://api.animality.xyz/images/"+animals[Math.floor(Math.random()*animals.length)]+"/"+props.number+".png"

  return (
    <div>
      <div className='imageDiv'>
        <img src="../public/icons/like.png" className='dashboardIcons'/>
        <p className='dashboardNumber'>{Math.floor(Math.random() * 20000)}</p>
        <img src="../public/icons/black-speech-bubble.png" className='dashboardIcons2'/>
        <p className='dashboardNumber2'>{Math.floor(Math.random() * 200)}</p>
        <img src={image} className='dashboardContent'/>
      </div>
    </div>
  )
}