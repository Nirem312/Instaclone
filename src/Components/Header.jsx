import '../App.css'
import { useState, useEffect } from 'react'
export default function Header(props) {

const verifiedIcon = "../icons/correct.png"
const downChevron = "../icons/down-chevron-svgrepo-com.svg"
const [width, setWidth] = useState(window.innerWidth);
const breakpoint = 851;

useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResizeWindow);
  return () => {
    window.removeEventListener("resize", handleResizeWindow);
  };
}, []);

if (width <= breakpoint) {
  return (
  <div>
    <div className='headerDiv'>
    <div className='profilePicDiv'>
      <img src="../profilepic.jpg" className='profilePic'/>
    </div>

    <div className='headerContent'>
      <div className='title'>
        <div className='nameDiv'>
          <p>{props.headerInfo.name}</p>
          {props.headerInfo.isVerified && <img src={verifiedIcon}/>}
        </div>
        <button>...</button>
      </div>
      <div>
          <button>Following <img src={downChevron}/></button>
          <button>Message</button>
      </div>
    </div>
  </div>
  <div>
        <div className='description'>
        <p>
          FIFA World Cup <br/>
          The Official Account of the #FIFAWorldCup <br/>
          Follow the #U20WC! ⬇️ <br/>
          www.fifa.com/fifaplus/en/tournaments/mens/u20worldcup/argentina-2023 <br/>
        </p>
    </div>
  </div>
  </div>
  );
}


return (
  <div className='headerDiv'>
    <div className='profilePicDiv'>
      <img src="../profilepic.jpg" className='profilePic'/>
    </div>

    <div className='headerContent'>
      <div className='title'>
        <div className='nameDiv'>
          <p>{props.headerInfo.name}</p>
          {props.headerInfo.isVerified && <img src={verifiedIcon}/>}
        </div>
        
        <button>Following <img src={downChevron}/></button>
        <button>Message</button>
        <button>...</button>
      </div>

      <div className='numbers'>
        <p>{props.headerInfo.posts} posts</p>
        <p><a href='https://nremigio.netlify.app/' target="_blank">{String(props.headerInfo.followers).slice(0, 2) + "M"} followers</a></p>
        <p><a href='https://nremigio.netlify.app/' target="_blank">{props.headerInfo.following} following</a></p>
      </div>

      <div className='description'>
        <p>
          FIFA World Cup <br/>
          The Official Account of the #FIFAWorldCup <br/>
          Follow the #U20WC! ⬇️ <br/>
          www.fifa.com/fifaplus/en/tournaments/mens/u20worldcup/argentina-2023 <br/>
        </p>
      </div>
    </div>
  </div>
)
}