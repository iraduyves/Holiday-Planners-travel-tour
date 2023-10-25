import { createContext} from 'react'
import axios from '../config/axios';
import { useQuery } from '@tanstack/react-query';
import { Notify } from 'notiflix';

export const TourContent = createContext()


//eslint-disable-next-line react/prop-types
export default function TourProvider({ children }) {

  const { data: tours } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axios.get('/api/v1/tour/');
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      Notify.failure(error.response.data.message);
  },
  });


  return (
    <TourContent.Provider value={{ tours }}>
      {children}
    </TourContent.Provider>
  )
}
