import ax from "axios";

const  axios = ax.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

export default axios;