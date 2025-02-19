import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";

export default function AccountNavigation() {
    return (
        <ListGroup className="wd list-group fs-5 rounded-0">
            <ListGroup.Item as={Link} to ="/Kambaz/Account/Signin" id="wd-account-sign-in"
            className="list-group-item active border border-0">Sign In</ListGroup.Item>
            <ListGroup.Item as={Link} to ="/Kambaz/Account/Signup" id="wd-account-sign-up"
            className="list-group-item text-danger border border-0">Sign Up</ListGroup.Item>
            <ListGroup.Item as={Link} to ="/Kambaz/Account/Profile" id="wd-profile"
            className="list-group-item text-danger border border-0">Profile</ListGroup.Item>
        </ListGroup>
    );
}