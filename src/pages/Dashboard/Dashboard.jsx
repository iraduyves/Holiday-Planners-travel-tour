import{ useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import './styles.css'

const Dashboard = ( ) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container' style={{marginTop:'10rem'}}>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
};

export default Dashboard;