import {createContext, useEffect, useState} from "react";
import {createUserProfileDocument, onAuthStateChangedListener} from "../utils/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {
    }
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChangedListener((user) => {
            if (user) {
                createUserProfileDocument(user);
            }
            setCurrentUser(user);
        });
        return unregisterAuthObserver;
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
