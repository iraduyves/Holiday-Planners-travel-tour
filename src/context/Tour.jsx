import { createContext, useCallback, useEffect, useState } from 'react'
import axios from '../config/axios';
import { useQuery } from '@tanstack/react-query';

export const TourContent = createContext()


// export const TourContent = createContext(context)
//    const context = {
//     Tour: [],
//     setTour: () => { }
// }
// eslint-disable-next-line react/prop-types
export default function TourProvider({ children }) {
   
    const { data: tours } = useQuery({
        queryKey: ["tours"],
        queryFn: async () => {
          const res = await axios.get('/api/v1/tour/');
          return res.data;
        },
      });
    

    return (
        <TourContent.Provider value={{tours}}>
            {children}
        </TourContent.Provider>
    )
}
