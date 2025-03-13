import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AssignmentLessonControls from "./AssignmentLessonControls";

export default function Assignments() {
    const { cid } = useParams();
    const [assignments, setAssignments] = useState<any[]>(db.assignments.filter((assignment) => assignment.course === cid));
    const [assignmentName, setAssignmentName] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentPoints, setAssignmentPoints] = useState("");
    const [assignmentDueDate, setAssignmentDueDate] = useState("");
    const [assignmentAvailableFromDate, setAssignmentAvailableFromDate] = useState("");
    const [assignmentAvailableUntilDate, setAssignmentAvailableUntilDate] = useState("");
    const addAssignment = () => {
      setAssignments([ ...assignments, { _id: uuidv4(), title: assignmentName, course: cid, description: assignmentDescription,
        points: assignmentPoints, due_date: assignmentDueDate, not_available_until: assignmentAvailableFromDate,
        available_from: assignmentAvailableFromDate
      }]);
      setAssignmentName(""); setAssignmentDescription(""); setAssignmentDueDate("");
      setAssignmentAvailableFromDate(""); setAssignmentAvailableUntilDate("");
    }
    const deleteAssignment = (assignmentId: string) => {
      setAssignments(assignments.filter((a) => a._id !== assignmentId));
    };
    const editAssignment = (assignmentId: string) => {
      setAssignments(assignments.map((a) => (a._id === assignmentId ? {...a, editing: true} : a)));
    };

    return (
      <div>
        <AssignmentsControls assignmentName={assignmentName} setAssignmentName={setAssignmentName} assignmentDescription={assignmentDescription} 
                setAssignmentDescription={setAssignmentDescription} assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints} assignmentDueDate={assignmentDueDate}
                setAssignmentDueDate={setAssignmentDueDate} assignmentAvailableFromDate={assignmentAvailableFromDate} setAssignmentAvailableFromDate={setAssignmentAvailableFromDate}
                assignmentAvailableUntilDate={assignmentAvailableUntilDate} setAssignmentAvailableUntilDate={setAssignmentAvailableUntilDate} addAssignment={addAssignment} /><br /><br /><br /><br />
        
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-1 fs-3" /><IoMdArrowDropdown className="me-2 fs-3"/>
              Assignments <AssignmentsControlButtons />
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {assignments.map((assignment) => (<ListGroup.Item className="wd-individual-assignment d-flex align-items-center p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-3 fs-3 text-success"/>
                  <ListGroup.Item className="d-inline-flex flex-column border-0">
                    <span className="fs-5">
                      {assignment.title}
                      </span>
                    <span className="fs-6"><span className="text-danger">Multiple Modules</span> 
                    | <b>Not available until</b> {assignment.not_available_until} |</span>
                    <span className="fs-6"><b>Due</b> {assignment.due_date} | {assignment.points} pts</span>
                  </ListGroup.Item>
                  <AssignmentLessonControls cid={cid} assignmentId={assignment._id} deleteAssignment={deleteAssignment}
                    editAssignment={editAssignment}/>
                </ListGroup.Item>))}
              
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );
}