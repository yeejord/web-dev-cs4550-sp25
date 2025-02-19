import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import db from "../../Database";
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
      <div>
        <AssignmentsControls /><br /><br /><br /><br />
        
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-1 fs-3" /><IoMdArrowDropdown className="me-2 fs-3"/>
              Assignments <AssignmentsControlButtons/>
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {assignments.map((assignment) => (<ListGroup.Item as={Link} to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-individual-assignment d-flex align-items-center p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-3 fs-3 text-success"/>
                  <div className="d-inline-flex flex-column">
                    <span className="fs-5">
                      {assignment.title}
                      </span>
                    <span className="fs-6"><span className="text-danger">Multiple Modules</span> 
                    | <b>Not available until</b> {assignment.not_available_until} |</span>
                    <span className="fs-6"><b>Due</b> {assignment.due_date} | {assignment.points} pts</span>
                  </div>
                  <LessonControlButtons/>
                </ListGroup.Item>))}
              
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );
}