import React, {useState, useEffect} from 'react'
import Dashboard from './Dashboard'
import '../App.css'
 
function Content(props) {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
 
  useEffect(() => {
    fetchData(page)
  }, [page])
 
  const fetchData = (page) => {
    const newItems = []
    newItems.push(<Dashboard number={Math.floor(1 + Math.random() * 120)}/>)
    setItems([...items, ...newItems])
    newItems.push(<Dashboard number={Math.floor(1 + Math.random() * 120)}/>)
    setItems([...items, ...newItems])
    newItems.push(<Dashboard number={Math.floor(1 + Math.random() * 120)}/>)
    setItems([...items, ...newItems])
  }
 
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = window.innerHeight
 
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }
 
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])
 
  return (
    <div className='contentRow'>
      {items.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}
 
export default Content