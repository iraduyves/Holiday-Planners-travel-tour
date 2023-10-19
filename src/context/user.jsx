import { createContext, useState } from 'react'

const context = {
    user: null,
    setUser: () => { }
}
export const UserContent = createContext(context)

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
    const [user, setUser] = useState(context.user)

    return (
        <UserContent.Provider value={{ user, setUser }}>
            {children}
        </UserContent.Provider>
    )
}
