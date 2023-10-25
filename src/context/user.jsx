import { useMutation, useQuery } from '@tanstack/react-query'
import { createContext} from 'react'
import axios from '../config/axios'
import { Notify } from 'notiflix'

const context = {
    user: null,
    setUser: () => { }
}
export const UserContent = createContext(context)

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
    /* Login  */

    const loginMutation = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post('/api/v1/auth/login', data);
            return res.data;
        },
        onError: () => {
            // console.log(error.response.data.message);
            Notify.failure('Incorrect email or password');
        },
        onSuccess: (data) => {
            console.log(data);
            localStorage.setItem("isLogin", JSON.stringify(data));
            let userr = JSON.parse(localStorage.getItem("isLogin"));
            let userData = userr.user; 
            Notify.success('Login success');
            setTimeout(() => {
                (userData.role !== 'admin') ? window.location.href = "/" : window.location.href = "/dashboard"
            }, 3000);

        },
    });
    let userr = JSON.parse(localStorage.getItem("isLogin"));
    let token = userr?.access_token;
    console.log(token);
    /* Get All Users*/
    const { data: users } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get('/api/v1/auth/users', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            return res.data;
        },
        onError: (error) => {
            console.log(error.response.data.message);
            Notify.failure(error.res.data.message);

        },
        onSuccess: (data) => {

            console.log(data);
        },
    });

    return (
        <UserContent.Provider value={{ loginMutation, users }}>
            {children}
        </UserContent.Provider>
    )
}
