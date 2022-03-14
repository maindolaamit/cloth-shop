import {createContext} from "react";

const CurrentUserCtx = createContext({
    currentUser: null,
    setCurrentUser: () => {
    }
});

export default CurrentUserCtx;
