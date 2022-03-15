import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/homepage";
import ShopPage from "./pages/shop-page/shoppage";
import Header from "./components/header/header";
import SingInAndSignUpPage from "./pages/singn-in-and-sing-up/singn-in-and-sign-up";
import {useContext} from "react";
import {UserContext} from "./contexts/user-context";

function App() {
    const {currentUser} = useContext(UserContext);
    // useEffect(
    //     () => {
    //         const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
    //             if (user) {
    //                 const userRef = createUserProfileDocument(user);
    //                 (await userRef).onSnapshot((snapShot) => {
    //                     setCurrentUser({id: snapShot.id, ...snapShot.data()});
    //                 });
    //             } else {
    //                 setCurrentUser(user);
    //             }
    //             // Now you either return just unregisterAuthObserver
    //             // which will be called when the component is unmounted
    //         });
    //         return unregisterAuthObserver;
    //     },
    //     [] // Important, pass an empty array so to execute useEffect hook only once
    // );

    return (
        <div>
            <Header/>
            {/* react-router-dom@6 --> Switch has been replaced with Routes and Route take JSX element*/}
            <Routes>
                {/* react-router-dom@6 --> Redirect has been replaced with Navigate  */}
                <Route path="/" element={<Navigate replace to="/home"/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path="/signin" element={currentUser ? <Navigate replace to="/home"/> : <SingInAndSignUpPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
