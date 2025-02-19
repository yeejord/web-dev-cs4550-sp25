import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="d-flex text-nowrap">
            <InputGroup size="lg" className="me-5 bg-white float-end" id="wd-search-bar">
                <InputGroup.Text><FaMagnifyingGlass /></InputGroup.Text>
                <FormControl placeholder="Search..."/> 
            </InputGroup>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-group-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
        </div>
    );
}