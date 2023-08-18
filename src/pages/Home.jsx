import { Outlet } from "react-router-dom"


const Home = () => {
  return (
    <div>Home <span><Outlet/></span></div>
  )
}

export default Home