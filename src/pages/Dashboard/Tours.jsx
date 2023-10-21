/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect, useState } from 'react';
// import { tourlist } from '../Tourpage/Tourlist'
import { FaClock, FaEdit, FaImages, FaMoneyCheckAlt, FaPenAlt, FaUserEdit, } from 'react-icons/fa';
import { TourContent } from '../../context/Tour';
import axios from '../../config/axios';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line react/prop-types
function EditModal({ selectedItem, navigatefalse }) {

    const onSubmit = async (body) => {

        try {
            const { data } = await axios.put('/api/v1/tour/update/' + selectedItem._id, {}, { params: body })
            if (data) {
                console.log({ data });
            }
        } catch (error) {
            console.error({ error })
        }

    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    return (
        <div className="row-right">
            <div className="right-side">
                <div className="widget ">
                    <div className="line-title">
                        <h4 className="h4-title">Edit Tour</h4>
                    </div>
                    <div className="find-tour-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaPenAlt /></div></span>
                                        <input defaultValue={selectedItem?.destination} type="text" placeholder="Tour Name" className="form-input" name='destination' {...register("destination", { required: true })} />
                                        {errors.destination && <p style={{ color: 'red', fontSize: 'small' }} >Destination is required and must be valid</p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaEdit /></div></span>
                                        <input defaultValue={selectedItem?.Title} type="text" placeholder="Tour Title" className="form-input" name='title' {...register("title", { required: true })} />
                                        {errors.title && <p style={{ color: 'red', fontSize: 'small' }} >Tour Title  </p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaEdit /></div></span>
                                        <input defaultValue={selectedItem?.Description} type="text" placeholder="Tour Description" className="form-input" name='descripption' {...register("title", { required: true })} />
                                        {errors.description && <p style={{ color: 'red', fontSize: 'small' }} >Tour description </p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaMoneyCheckAlt /></div></span>
                                        <input defaultValue="$1200" type="text" placeholder="Tour Price" className="form-input" name='price' {...register("price", { required: true })} />
                                        {errors.price && <p style={{ color: 'red', fontSize: 'small' }} >Price is required </p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaMoneyCheckAlt /></div></span>
                                        <input defaultValue="15%" type="text" placeholder="Tour Discount" className="form-input" name='discount' {...register("discount", { required: true })} />
                                        {errors.discount && <p style={{ color: 'red', fontSize: 'small' }} >Discount is required </p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaUserEdit /></div></span>
                                        <input defaultValue={selectedItem?.GroupSize ?? ""} type="text" placeholder="Tour Users" className="form-input" name='users' {...register("users", { required: true })} />
                                        {errors.users && <p style={{ color: 'red', fontSize: 'small' }} >Users are required </p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        <span className="icon"><div className="i"><FaClock /></div></span>
                                        <input defaultValue={selectedItem?.fromMonth ?? ""} type="text" placeholder="Tour Duration" className="form-input" name='duration' {...register("duration", { required: true })} />
                                        {errors.duration && <p style={{ color: 'red', fontSize: 'small' }} >Duration is required </p>}
                                    </span>
                                </div>
                                <div className="colrow12">
                                    <span className="form-control-span">
                                        {/* <span className="icon"><div className="i"><FaImages/></div></span> */}
                                        <input id="image" type="file" name="image" accept="image/*" className="form-input" {...register("image", { required: true })} />
                                        {errors.image && <p style={{ color: 'red', fontSize: 'small' }} >Image is required and must be valid</p>}

                                    </span>
                                </div>


                                <div className="colrow12">
                                    <input type="submit" className="sec-btn find-now-btn" value="edit" />
                                    {/* <button className="sec-btn find-now-btn"><span>Edit</span></button> */}
                                    <button type='button' className="sec-btn find-now-btn" onClick={navigatefalse}><span>Close</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Tour() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { Tour, setTour } = useContext(TourContent)
    // const onSubmit = async (body) => {
    //     //   const data = new FormData();


    //     try {
    //         const { data } = await axios.post('/api/v1/tour/create', body, { headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token') } })
    //         if (data) {
    //             console.log({ data });
    //         }
    //     } catch (error) {
    //         console.error({ error })
    //     }

    // };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('users', data.users);
        formData.append('duration', data.duration);
        formData.append('image', data.image[0]); // Assuming 'image' is the name of your input field.
      
        try {
          const response = await axios.post('/api/v1/tour/create', formData);
      
          if (response.data) {
            console.log('Tour created:', response.data);
            // You can add code here to handle the success response.
          }
        } catch (error) {
          console.error('Error creating tour:', error);
          // You can add code here to handle the error.
        }
      };
      

    const deletetour = async (id) => {
        try {
            const { data } = await axios.delete('/api/v1/tour/delete/' + id)
            if (data) {

                console.log({ data });
            }
        } catch (error) {
            console.error({ error })
        }

    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const handleEditClick = (item) => {
        // Open the modal and set the selected item
        console.log({ item })
        setSelectedItem(() => item);
        setIsModalOpen(true);
    };




    const navigateadd = () => {
        setIsAddModalOpen(true)
    }
    const navigateaddfalse = () => {
        setIsAddModalOpen(false)
    }
    const navigatefalse = () => {
        setIsModalOpen(false)
    }


    const FetchData = useCallback(async () => {
        try {
            const { data } = await axios.get('/api/v1/tour/')
            if (data) {
                console.log({ data });
                setTour(data)
            }
        } catch (error) {
            console.error({ error })
        }
    }, [setTour]);

    useEffect(() => {
        FetchData()
    }, [FetchData])


    return (

        <>
            {isModalOpen && selectedItem && (
                <EditModal selectedItem={selectedItem} navigatefalse={navigatefalse} />
            )}
            {isAddModalOpen && (
                <div className="row-right">
                    <div className="right-side">
                        <div className="widget ">
                            <div className="line-title">
                                <h4 className="h4-title">Add New Tour</h4>
                            </div>
                            <div className="find-tour-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaPenAlt /></div></span>
                                                <input type="text" placeholder="Tour Name" className="form-input" name='name' {...register("name", { required: true })} />
                                                {errors.name && <p style={{ color: 'red', fontSize: 'small' }} >Your Tour name is required and must be a Full name</p>}
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEdit /></div></span>
                                                <input type="text" name='title' placeholder="Tour Title" className="form-input" {...register("title", { required: true })} />
                                                {errors.title && <p style={{ color: 'red', fontSize: 'small' }} >Your Title name  is required and must be a Full name</p>}
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaEdit /></div></span>
                                                <input type="text" name='description' placeholder="Tour Description" className="form-input" {...register("description", { required: true })} />
                                                {errors.description && <p style={{ color: 'red', fontSize: 'small' }} >Title Description  is required and must be a Full name</p>}
                                            </span>
                                        </div>

                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaUserEdit /></div></span>
                                                <input type="text" name='users' placeholder="Tour Users" className="form-input" {...register("users", { required: true })} />
                                                {errors.users && <p style={{ color: 'red', fontSize: 'small' }} >Tour Users  is required and must be a Full name</p>}
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaClock /></div></span>
                                                <input type="text" name='duration' placeholder="Tour Duration" className="form-input" {...register("duration", { required: true })} />
                                                {errors.duration && <p style={{ color: 'red', fontSize: 'small' }} >Tour Duration is required and must be a Full name</p>}
                                            </span>
                                        </div>
                                        <div className="colrow12">
                                            <span className="form-control-span">
                                                <span className="icon"><div className="i"><FaImages /></div></span>
                                                <input type="file" name="image" accept="image/*" className="form-input"  {...register("image", { required: true })} />
                                                {errors.image && <p style={{ color: 'red', fontSize: 'small' }} >Tour Background  is required and must be a Full name</p>}
                                            </span>
                                        </div>


                                        <div className="colrow12">
                                            <button className="sec-btn find-now-btn" type='submit'><span>Edit</span></button>
                                            <button className="sec-btn find-now-btn" type='submit' onClick={navigateaddfalse}><span>Close</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            )}
            <div className='row1'>
                {Tour.map((item, index) => (
                    <div className="colrow61" key={index}>
                        <div className="tour-box1">
                            <div className="tour-box-image1 back-image1" style={{ backgroundImage: `url("${item.backdropImage}")` }}><span className="discount-label">15%</span></div>
                            <div className="tour-box-content">
                                <div className="tour-box-label">
                                    <div className="tour-box-inner-label1">
                                        <h4 className="h4-title1">{item.destination}</h4>
                                    </div>
                                </div>
                                <div className="tour-box-title1">
                                    <h4 className="h4-title1">{item.Title}</h4>
                                </div>
                                <div className="tour-box-description1">
                                    <p style={{ color: '#9E9EA4', fontSize: 'small' }}>{item.Description ?? 'No description'}</p>
                                </div>

                                <div className="tour-box-bottom1">

                                    <div className="book-now-button1">
                                        <div className="a"><button type='submit' className="sec-btn1" onClick={() => handleEditClick(item)} >Edit</button></div>
                                        <div className="a"><button type='submit' className="sec-btn1" onClick={() => deletetour(item._id)}>Delete</button></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                <div className="book-now-button12">
                    <div className="a"><span className="sec-btn1" onClick={navigateadd}>Add New</span></div>


                </div>

            </div>

        </>
    )
}

export default Tour
