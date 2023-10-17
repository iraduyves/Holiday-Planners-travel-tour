
import { useState } from 'react';
import { FaClock, FaEdit, FaEnvelope, FaLock, FaMoneyCheckAlt, FaPenAlt, FaPhone, FaTrashAlt, FaUserEdit } from 'react-icons/fa'



export const users = [
   

    {
        id:1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",

    },
    {
        id:1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",

    },
    {
        id:1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",

    },
    {
        id:1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",

    },
    {
        id:1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",

    },


];
function Users() {
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
                                                <span className="icon"><div className="i"><FaLock/></div></span>
                                                <input type="text" placeholder="User Password..." className="form-input" />
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
                        <h2 >Our Users</h2>
                        <a href="#" className="sec-btn">Vieuw All</a>
                    </div>
                    <table className="bookings">
                        <thead>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Emails</td>
                            <td>Phone</td>
                            <td>password</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </thead>
                        {users.map((item,index)=>(

                        
                        <tbody key={index}>
                            <tr>
                                <td>
                                    <div className="img-box-small">
                                       <img src={item.img} alt=""/>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.password}</td>
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

export default Users