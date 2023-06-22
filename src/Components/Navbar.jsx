import Item from './Items'
import '../App.css'

const logoWord = "../icons/instagram-logo-svgrepo-com.svg"
const logoMini = "../icons/instagram-mini-svgrepo-com.svg"
const home="../icons/icons8-home.svg"
const search="../icons/icons8-search.svg"
const explore="../icons/icons8-explore.svg"
const reels="../icons/icons8-reels.svg"
const messages="../icons/icons8-messages.svg"
const notifications="../icons/icons8-notifications.svg"
const create="../icons/icons8-create.svg"
const profile="../profilepic.jpg"

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logoWord} className='logoWord'/>
      <a href='https://nremigio.netlify.app/' target="_blank">
        <Item icon={logoMini} className='logoMini'/>
        <Item text={'Home'} icon={home}/>
        <Item text={'Search'} icon={search}/>
        <Item text={'Explore'} icon={explore}/>
        <Item text={'Reels'} icon={reels}/>
        <Item text={'Messages'} icon={messages}/>
        <Item text={'Notifications'} icon={notifications}/>
        <Item text={'Create'} icon={create}/>
        <Item text={'Profile'} icon={profile}/>
      </a>
    </div>
  )
}