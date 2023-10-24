import { useMutation, useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'
import axios from '../config/axios'
import { Navigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

const context = {
    user: null,
    setUser: () => { }
}
export const UserContent = createContext(context)

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
    const [user, setUser] = useState(context.user)



    /* Login  */

    const loginMutation = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post('/api/v1/auth/login', data);
            return res.data;
        },
        onError: (error) => {
            console.log(error.response.data.message);
        },
        onSuccess: (data) => {
            console.log(data); 
            localStorage.setItem("isLogin", JSON.stringify(data));
            let userr=JSON.parse(localStorage.getItem("isLogin"));
            let token =userr.access_token;
            let userData=userr.user;
            // window.location.href = "/dashboard" 
            (userData.role !== 'admin') ? window.location.href = "/" : window.location.href = "/dashboard"

        },
    });

    /* Get All Users*/
    // const { data: users } = useQuery({
    //     queryKey: ["users"],
    //     queryFn: async () => {
    //         const res = await axios.get('/api/v1/auth/users');
    //         return res.data;
    //     },
    //     onError: (error) => {
    //         console.log(error.response.data.message);
    //     },
    //     onSuccess: (data) => {
    //         console.log(data);
    //     },
    // });

    /* Get Logged In User*/
    // let userr=JSON.parse(localStorage.getItem("isLogin"));
    // let token =userr.access_token;
    // let userData=userr.user;

    // console.log(userData.role);
    // const {data:loggedUser} = useQuery({
    //     queryKey: ["user"],
    //     queryFn: async () => {
    //         const res = await axios.get(`auth/users/getOne?fieldName=email&value=${userData.email}`,
    //             {
    //                 headers: {
    //                     Authorization: "Bearer" + token,
                           
    //                 },
    //             }
    //         );
    //         return res.data;
    //     },

    //     onError: (error) => {
    //         console.log(error.response.data.message);
    //     },
    //     onSuccess: (data) => {
    //         console.log(data);
    //         console.log(loggedUser.data);
    //     },
    // })
    return (
        <UserContent.Provider value={{ user, setUser,loginMutation }}>
            {children}
        </UserContent.Provider>
    )
}
