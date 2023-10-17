import { useState } from 'react';
import { tourlist } from '../Tourpage/Tourlist'
import { FaClock, FaEdit, FaMoneyCheckAlt,  FaPenAlt, FaUserEdit,  } from 'react-icons/fa';

function Tour() {

   


    const [selectedItem, setSelectedItem] = useState(null);
    
    const handleEditClick = (item) => {
        // Open the modal and set the selected item
        setIsModalOpen(true);
        setSelectedItem(item);
    };
    const handleDeleteClick = (item) => {
        // Handle item deletion here
        // You can implement your delete logic
        setIsModalOpen(true);
        setSelectedItem(item);
    };
    
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
                                <h4 className="h4-title">Edit Tour</h4>
                            </div>
                            <div className="find-tour-form">
                                <form >
                                    <div className="row">
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPenAlt/></div></span>
                                                <input type="text" placeholder="Tour Name" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEdit/></div></span>
                                                <input type="text" placeholder="Tour Title" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEdit /></div></span>
                                                <input type="text" placeholder="Tour Description" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaMoneyCheckAlt /></div></span>
                                                <input type="text" placeholder="Tour Price" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaMoneyCheckAlt/></div></span>
                                                <input type="text" placeholder="Tour Discount" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaUserEdit/></div></span>
                                                <input type="text" placeholder="Tour Users" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaClock/></div></span>
                                                <input type="text" placeholder="Tour Duration" className="form-input" />
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
          {/* {isModalOpen &&(
                <div className="row-right">
                    <div className="right-side">
                        <div className="widget ">
                            <div className="line-title">
                                <h4 className="h4-title">Add New Tour</h4>
                            </div>
                            <div className="find-tour-form">
                                <form>
                                    <div className="row">
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPenAlt/></div></span>
                                                <input type="text" placeholder="Tour Name" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEdit/></div></span>
                                                <input type="text" placeholder="Tour Title" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEdit /></div></span>
                                                <input type="text" placeholder="Tour Description" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaMoneyCheckAlt /></div></span>
                                                <input type="text" placeholder="Tour Price" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaMoneyCheckAlt/></div></span>
                                                <input type="text" placeholder="Tour Discount" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaUserEdit/></div></span>
                                                <input type="text" placeholder="Tour Users" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaClock/></div></span>
                                                <input type="text" placeholder="Tour Duration" className="form-input" />
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaImages/></div></span>
                                                <input type="text" placeholder="Tour Image Url" className="form-input" />
                                            </span>
                                        </div>
                                       
              
                                        <div className="colrow12">
                                            <button className="sec-btn find-now-btn" type='submit' ><span>Edit</span></button>
                                            <button className="sec-btn find-now-btn" type='submit' onClick={navigatefalse}><span>Close</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                     
                    </div>
                </div>
            )} */}
            <div className='row1'>
                {tourlist.map((item, index) => (
                    <div className="colrow61" key={index}>
                        <div className="tour-box1">
                            <div className="tour-box-image1 back-image1" style={{ backgroundImage: `url("${item.img}")` }}><span className="discount-label">{item.discount}</span></div>
                            <div className="tour-box-content">
                                <div className="tour-box-label">
                                    <div className="tour-box-inner-label1">
                                        <h4 className="h4-title1">{item.name}</h4>
                                    </div>
                                </div>
                                <div className="tour-box-title1">
                                    <h4 className="h4-title1">{item.title}</h4>
                                </div>
                                <div className="tour-box-description1">
                                    <p style={{ color: '#9E9EA4', fontSize: 'small' }}>{item.Description}</p>
                                </div>

                                <div className="tour-box-bottom1">

                                    <div className="book-now-button1">
                                        <div className="a"><button  type='submit' className="sec-btn1" onClick={navigate} >Edit</button></div>
                                        <div className="a"><button type='submit' className="sec-btn1">Delete</button></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                <div className="book-now-button12">
                    <div className="a"><span className="sec-btn1" onClick={navigate}>Add New</span></div>


                </div>

            </div>
          
        </>
    )
}

export default Tour
