import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../config/axios"
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

 export const AppProvider = () => {
 

  const { data: tours} = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const tourdata = await axios.get( '/api/v1/tour/');
      return tourdata.data;
    },
    
  });
  return (
    <AppContext.Provider value={{ tours}}>
      {/* {children} */}
    </AppContext.Provider>
  )
}


export default AppProvider
