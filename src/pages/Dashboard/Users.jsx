
import { useContext, useEffect, useState } from 'react';
import { FaEdit, FaEnvelope, FaLock, FaPenAlt, FaPhone, FaTrashAlt, } from 'react-icons/fa'
import axios from '../../config/axios';
import Select from '../../Components/input/select';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContent } from '../../context/user';
import Notiflix, { Notify } from 'notiflix';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';



export const usersMock = [
    {
        id: 1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",
        role: "admin",

    },
    {
        id: 1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",
        role: "user",

    },
    {
        id: 1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",
        role: "admin",

    },
    {
        id: 1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",
        role: "user",

    },
    {
        id: 1,
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918524858-4HA3SDC8ZWAJLNFZDBHB/NAB+Fun-2.jpg?format=500w",
        name: "Yves",
        email: "yve@gmail.com",
        phone: "(+250) 782045468",
        password: "G76FSF@$khG87",
        role: "user",

    },


];
function Users() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const navigateAdd = () => {
        setIsAddModalOpen(true)
    }
    const navigateAddfalse = () => {
        setIsAddModalOpen(false)
    }
    const navigate = () => {
        setIsModalOpen(true)
    }
    const navigatefalse = () => {
        setIsModalOpen(false)
    }
    const [user, setUsers] = useState([])

    // let userr=JSON.parse(localStorage.getItem("isLogin"));
    // let token =userr.access_token;
    // let userData=userr.user;
    // const FetchData = async () => {
    //     try {
    //         const { data } = await axios.get('/api/v1/auth/users',{
    //             headers: {
    //                 Authorization: "Bearer" + token,
    //             }
    //         })
    //         if (data) {
    //             console.log({ data });
    //             setUsers(data)
    //         }
    //     } catch (error) {
    //         console.error({ error })
    //     }
    // };
    // useEffect(() => {
    //     FetchData()
    // }, [])
    let userr=JSON.parse(localStorage.getItem("isLogin"));
    let token =userr.access_token;
    const [load,setLoad]=useState(false)
    const deleteUser = async (id) => {
        
        Confirm.show(
            'Delete Confim',
            'Do u want to Delete this User?',
            'Yes',
            'No',
            async() => {  
                setLoad(()=>true)
                try {
                    const { data } = await axios.delete('/api/v1/auth/users/delete/'+id,{
                        headers:{
                            Authorization:"Bearer "+token,
                        },
                    })
                    if (data) {
                        Notify.success('User successfully deleted');
                        console.log('hy');
                    }
                } catch (error) {
                    if (error.response && error.response.data) {
                        const errorResponse = error.response.data;
                        const errorMessage = errorResponse.message;
                        Notify.failure(errorMessage);
                      }
                }
                setLoad(() => false)
            },
            () => {
             
            },
            {
            },
            );
    }
    if(load){
        Notiflix.Loading.pulse();
      }
      else{
        Notiflix.Loading.remove();
      }
    const UpdateUser = async (email) => {

        try {
            const { data } = await axios.delete('/api/v1/auth/users/update/:email ' + email)
            if (data) {

                console.log({ data });
            }
        } catch (error) {
            console.error({ error })
        }

    }

    const { users } = useContext(UserContent)
    { users && console.log({ users }); }



    return (
        <>
            {isModalOpen && (
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
                                                <span className="icon"><div className="i"><FaPenAlt /></div></span>
                                                <input type="text" placeholder="User Name..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEnvelope /></div></span>
                                                <input type="text" placeholder="Tour Email..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPhone /></div></span>
                                                <input type="text" placeholder="User Phone.." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaLock /></div></span>
                                                <input type="text" placeholder="User Password..." className="form-input" />
                                            </span>
                                        </div>

                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <Select name='roles' options={['admin', 'user']} icon={<><FontAwesomeIcon icon={faUser} className='faicon' /></>} className='faicon' />

                                            </span>
                                        </div>


                                        <div className="colrow12">
                                            <input type="button" className="sec-btn find-now-btn" value="edit" />
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
            {isAddModalOpen && (
                <div className="row-right">
                    <div className="right-side">
                        <div className="widget ">
                            <div className="line-title">
                                <h4 className="h4-title">Create New User</h4>
                            </div>
                            <div className="find-tour-form">
                                <form >
                                    <div className="row">
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPenAlt /></div></span>
                                                <input type="text" placeholder="User Name..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEnvelope /></div></span>
                                                <input type="text" placeholder="Tour Email..." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPhone /></div></span>
                                                <input type="text" placeholder="User Phone.." className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaLock /></div></span>
                                                <input type="text" placeholder="User Password..." className="form-input" />
                                            </span>
                                        </div>

                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <Select name='roles' options={['admin', 'user']} icon={<><FontAwesomeIcon icon={faUser} className='faicon' /></>} className='faicon' />


                                            </span>
                                        </div>


                                        <div className="colrow12">
                                            <input type="button" className="sec-btn find-now-btn" value="Create" />
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
                           
                            <td>Role</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </thead>
                      {users?.map((item, index) => (


                            <tbody key={index}>
                                <tr>
                                    <td>
                                        <div className="img-box-small">
                                            <img src="https://thumbs.dreamstime.com/z/close-up-portrait-young-rasta-boy-22152046.jpg?w=992" alt="" />
                                        </div>
                                    </td>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    {/* <td>{item.password}</td> */}
                                    <td>{item.role}</td>
                                    <td>
                                        <button type="submit" className="i" onClick={navigate} style={{ cursor: 'pointer' }}><FaEdit className='fa-edit' /></button>
                                    </td>
                                    <td>

                                        <button type='submit' className="i" style={{ cursor: 'pointer' }}><FaTrashAlt className='fa-trash' onClick={() => deleteUser(item._id)} /></button>
                                    </td>
                                </tr>

                            </tbody>
                        ))}
                    
                    </table>
                    <button className="sec-btn" style={{ cursor: 'pointer' }} onClick={navigateAdd}>ADD NEW USER</button>
                </div>
            </div>

        </>
    )
}

export default Users