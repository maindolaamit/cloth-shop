import {createContext, useState} from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {
    }
});

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;