import { Link } from "react-router";

export default function Signin() {
    return(
        <div id="wd-signin-screen">
            <h3>Sign In</h3>
            <input placeholder="username" className="wd-username" /> <br />
            <input placeholder="password" type="password" className="wd-password" /> <br />
            <Link to="/Kambaz/Dashboard" id="wd-signin-btn">Sign In</Link> |{" "}
             <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign Up</Link>
        </div>
    );
}