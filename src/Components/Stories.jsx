import '../App.css'

export default function Stories(props) {
  return (
    <div className="storiesDiv">
      <ul>
        {props.storiesInfo.map(({ thumbnail, name }, id) => <li key={id}><img src={thumbnail}/> <p>{name}</p> </li>)}
      </ul>
    </div>
  )
}