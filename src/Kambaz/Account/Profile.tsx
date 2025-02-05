import { Link} from "react-router-dom";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup} from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="123"
             className="mb-2"/>
      <Form.Control id="wd-first-name"
             placeholder="Alice" 
             className="mb-2"/>
      <Form.Control id="wd-last-name"
             placeholder="Wonderland"
             className="mb-2"/>
      <Form.Control id="wd-date"
             type="date"
             className="mb-2"/>
      <Form.Control id="wd-email"
             placeholder="alice@wonderland.com"
             className="mb-2"/>
      <Form.Control id="wd-type-account"
             placeholder="User"
             className="mb-2"/>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-primary w-100 mb-2 bg-danger text-white">
            Sign out </Link>
    </div> );}






{/*import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}*/}
