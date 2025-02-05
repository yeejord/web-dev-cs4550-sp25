import { Navigate, Route, Routes } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";

export default function Account() {
    return(
        <div id="wd-account-screen" >
            <div className ="d-flex">
                <div className="d-none d-md-block me-1">
                        <AccountNavigation />
                </div>
            <div className="wd list-group fs-5 rounded-0">
            <Routes>
            <Route path="/" element={<Navigate to="Signin" />}/>
                <Route path ="Signin" element={<Signin />}/>
                <Route path ="Signup" element={<Signup />}/>
                <Route path ="Profile" element={<Profile />}/>
            </Routes>
            </div>
            </div>
        </div>
    );
}