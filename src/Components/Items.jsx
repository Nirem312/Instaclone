import '../App.css'

export default function Item(props) {
  return (
    <div className="itemDiv">
        <img src={props.icon} className="icon"/>
        <p>{props.text}</p>
    </div>
  )
}