import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AssignmentEditor from "./AssignmentEditor";
import { useState } from "react";

export default function AssignmentsControls(
    { assignmentName, setAssignmentName, assignmentDescription, setAssignmentDescription, assignmentPoints, setAssignmentPoints,
        assignmentDueDate, setAssignmentDueDate, assignmentAvailableFromDate, setAssignmentAvailableFromDate, assignmentAvailableUntilDate, setAssignmentAvailableUntilDate, addAssignment }:
        { assignmentName: string; setAssignmentName: (name: string) => void;
            assignmentDescription: string; setAssignmentDescription: (name: string) => void; assignmentPoints: string; setAssignmentPoints: (points: string) => void; 
            assignmentDueDate: string; setAssignmentDueDate: (name: string) => void;
            assignmentAvailableFromDate: string; setAssignmentAvailableFromDate: (name: string) => void; assignmentAvailableUntilDate: string; setAssignmentAvailableUntilDate: (name: string) => void; 
            addAssignment: () => void; }) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true); {}
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
            <Button variant="danger" onClick={handleShow} size="lg" className="me-1 float-end" id="wd-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Assignment"
                assignmentName={assignmentName} setAssignmentName={setAssignmentName} assignmentDescription={assignmentDescription} 
                setAssignmentDescription={setAssignmentDescription} assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints} assignmentDueDate={assignmentDueDate}
                setAssignmentDueDate={setAssignmentDueDate} assignmentAvailableFromDate={assignmentAvailableFromDate} setAssignmentAvailableFromDate={setAssignmentAvailableFromDate}
                assignmentAvailableUntilDate={assignmentAvailableUntilDate} setAssignmentAvailableUntilDate={setAssignmentAvailableUntilDate} addAssignment={addAssignment} />
        </div>
    );
}