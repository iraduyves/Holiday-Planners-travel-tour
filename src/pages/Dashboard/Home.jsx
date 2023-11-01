import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import './dashboard.css'
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { FaClock, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TourContent } from '../../context/Tour';
import { UserContent } from '../../context/user';


// import { tourlist } from '../Tourpage/Tourlist';
// import Tour from '../Tourpage/Tour';
// import {tourlist}  from '../Tourpage/Tourlist'


function Home({user}) {
  
  // const [tours, setTours] = useState(tourlist);

  // const handleEditTour = (index, updatedTour) => {
  //   const updatedTours = [...tours];
  //   updatedTours[index] = updatedTour;
  //   setTours(updatedTours);
  // };

  // const handleDeleteTour = (index) => {
  //   const updatedTours = [...tours];
  //   updatedTours.splice(index, 1);
  //   setTours(updatedTours);
  // };

const {tours}=useContext(TourContent)
const {booking}=useContext(TourContent)
const {users}=useContext(UserContent)
const { contact} = useContext(TourContent)

const rwandaTours = tours?.filter(tour => tour?.Title === 'Rwanda');
const countrwandatour =(rwandaTours?.length)*1000

  const data = [
    {
      name: "Rwanda",
      uv:  {countrwandatour},
      pv: 7500,
      amt: 9000,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Dubai',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Bookings</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{booking?.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Tours</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{tours?.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Users</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{users?.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CONTACTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>{contact?.length}</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>


      </div>

      
     
    </main>
  )
}
// onClick={() => handleEditTour(index, updatedTour)}
export default Home
Home.propTypes = {
  user: PropTypes.func.isRequired,
};
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh