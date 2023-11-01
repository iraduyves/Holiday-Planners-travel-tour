import {  FaTrashAlt } from 'react-icons/fa'
import { TourContent } from '../../context/Tour';
import { useContext } from 'react';

const Contacts = () => {
    const { contact} = useContext(TourContent)
    let userr = JSON.parse(localStorage.getItem("isLogin"));
    let token = userr?.access_token;
    let userData=userr?.user;
     console.log(userData.email);
     console.log(userData._id);


  return (
    <div className="tables">
                <div className="last-bookings">
                    <div className="heading">
                        <h2 >Last Bookings</h2>
                        <a href="#" className="sec-btn">Vieuw All</a>
                    </div>
                    <table className="bookings">
                        <thead>
                            <td>Image</td>
                            <td>Date</td>
                            <td>Email</td>
                            <td>Message</td>
                            <td>Delete</td>
                        </thead>
                        {contact?.map((item,index)=>(  

                        <tbody key={index}>
                            <tr>
                                <td>
                                    <div className="img-box-small">
                                       <img src="https://thumbs.dreamstime.com/z/close-up-portrait-young-rasta-boy-22152046.jpg?w=992" alt=""/>
                                    </div>
                                </td>
                                <td>{"2/11/2023"}</td>
                                <td> {item.email}</td>
                                <td>{item.message}</td>
                                <td>

                                    <button type='submit' className="i" style={{cursor:'pointer'}}><FaTrashAlt className='fa-trash'/></button>
                                </td>
                            </tr>
                           
                        </tbody>
                      
                    ))}
                    </table>
                </div>
            </div>
  )
}

export default Contacts