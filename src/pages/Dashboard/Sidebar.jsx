
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { BiSolidLogOutCircle } from 'react-icons/bi';
 import PropTypes from 'prop-types';
 import './styles.css'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Holiday Planners
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Tours
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Destination
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Bookings
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiSolidLogOutCircle className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}
Sidebar.propTypes = {
    OpenSidebar: PropTypes.func.isRequired,
    openSidebarToggle:PropTypes.func.isRequired, // Validate OpenSidebar as a function
  };

export default Sidebar