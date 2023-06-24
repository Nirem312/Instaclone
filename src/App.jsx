import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Stories from './Components/Stories'
import DashboardBar from './Components/DashboardBar'
import Content from './Components/Content'

function App() {
  let headerInfo = {
    posts: 13789,
    followers: 42391084,
    following: 1336,
    name: "fifaworldcup",
    isVerified: true
  }

  let storiesInfo = [ 
    {
      id: 1,
      name: "storie1",
      thumbnail: "worldCup.jpg"
    },
    {
      id: 2,
      name: "storie2",
      thumbnail: "worldCup.jpg"
    },
    {
      id: 3,
      name: "storie3",
      thumbnail: "worldCup.jpg"
    },
    {
      id: 4,
      name: "storie4",
      thumbnail: "worldCup.jpg"
    },
    {
      id: 5,
      name: "storie5",
      thumbnail: "worldCup.jpg"
    },
    {
      id: 6,
      name: "storie6",
      thumbnail: "worldCup.jpg"
    },
    {
      id: 7,
      name: "storie7",
      thumbnail: "worldCup.jpg"
    },
  ]

  return (
    <div>
      <Navbar />
      
      <Stories storiesInfo={storiesInfo}/>
      <div className="content"> 
        <DashboardBar />
        <div className="dashboardDiv">
          <Content />
          <div className="midDashboard">
            <Content />
          </div>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
