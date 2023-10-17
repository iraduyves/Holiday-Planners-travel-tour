import { FaCalendar, FaEdit, FaEnvelope, FaPenAlt, FaPhone,  FaTrashAlt, FaUserEdit } from 'react-icons/fa'
import './book.css'
import { useState } from 'react';

export const bookings = [
   

    {
        id:1,
        place:'ITALY',
        img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        date: "12 02 2002",
        ticket:3,
        message:"thanks in advance!",

    },
    {
        id:2,
        img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image4.jpg",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        date: "12 02 2002",
        ticket:1,
        message:"thanks in advance!",

    },
    {
        id:3,
        img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image3.jpg",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        date: "12 02 2002",
        ticket:6,
        message:"thanks in advance!",

    },
    {
        id:4,
        img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image4.jpg1",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        date: "12 02 2002",
        ticket:2,
        message:"thanks in advance!",

    },
    {
        id:5,
        img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        date: "12 02 2002",
        ticket:1,
        message:"thanks in advance!",


    },


];

const Bookings = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate =()=> {
         setIsModalOpen(true)
    }
    const navigatefalse =()=> {
         setIsModalOpen(false)
    }
    return (
        <>
        {isModalOpen &&(
                <div className="row-right">
                    <div className="right-side">
                        <div className="widget ">
                            <div className="line-title">
                                <h4 className="h4-title">Edit User</h4>
                            </div>
                            <div className="find-tour-form">
                                <form >
                                    <div className="row">
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPenAlt/></div></span>
                                                <input type="text" placeholder="User Name..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEnvelope/></div></span>
                                                <input type="text" placeholder="Tour Email..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPhone/></div></span>
                                                <input type="text" placeholder="User Phone.." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaCalendar/></div></span>
                                                <input type="date" placeholder="Date ..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaUserEdit/></div></span>
                                                <input type="number" placeholder="Number of Tickets ..." className="form-input" />
                                            </span>
                                        </div>
                                      
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                {/* <span className="icon"><div className="i"><FaImages/></div></span> */}
                                                <input id="image" type="file" name="image" accept="image/*" className="form-input"/>

                                            </span>
                                        </div>
                                       
              
                                        <div className="colrow12">
                                            <input type="button" className="sec-btn find-now-btn"  value="edit"/>
                                            {/* <button className="sec-btn find-now-btn"><span>Edit</span></button> */}
                                            <button className="sec-btn find-now-btn" type='submit' onClick={navigatefalse}><span>Close</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                     
                    </div>
                </div>
            )}
            <div className="tables">
                <div className="last-bookings">
                    <div className="heading">
                        <h2 >Last Bookings</h2>
                        <a href="#" className="sec-btn">Vieuw All</a>
                    </div>
                    <table className="bookings">
                        <thead>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Date</td>
                            <td>Tickets</td>
                            <td>Message</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </thead>
                        {bookings.map((item,index)=>( 
                        <tbody key={index}>
                            <tr>
                                <td>
                                    <div className="img-box-small">
                                       <img src={item.img} alt=""/>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td> {item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.date}</td>
                                <td>{item.ticket}</td>
                                <td>{item.message}</td>
                                <td>
                                    <button type="submit" className="i" onClick={navigate} style={{cursor:'pointer'}}><FaEdit className='fa-edit'/></button>
                                </td>
                                <td>

                                    <button type='submit' className="i" style={{cursor:'pointer'}}><FaTrashAlt className='fa-trash'/></button>
                                </td>
                            </tr>
                           
                        </tbody>
                    ))}
                    </table>
                </div>
            </div>

        </>
    )
}

export default Bookings