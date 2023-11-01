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
      const res = await axios.get('/api/v1/tour');
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      Notify.failure(error.response.data.message);
  },
  });
  const { data: contact } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get('/api/v1/contact');
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      Notify.failure(error.response.data.message);
  },
  });
  const { data: booking } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get('/api/v1/booking/view');
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
    <TourContent.Provider value={{ tours,booking,contact }}>
      {children}
    </TourContent.Provider>
  )
}
