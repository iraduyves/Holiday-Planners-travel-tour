import { createContext, useState } from 'react'

const context = {
    Tour: [],
    setTour: () => { }
}
export const TourContent = createContext(context)

// eslint-disable-next-line react/prop-types
export default function TourProvider({ children }) {
    const [Tour, setTour] = useState(context.Tour)

    return (
        <TourContent.Provider value={{ Tour, setTour }}>
            {children}
        </TourContent.Provider>
    )
}
