import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControlButtons from "./AssignmentsControlButtons";

export default function Assignments() {
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
              <ListGroup.Item className="wd-individual-assignment d-flex align-items-center p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-3 fs-3 text-success"/>
                <div className="d-inline-flex flex-column">
                   <span className="fs-5">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-black text-decoration-none" >
                      A1
                   </a></span>
                   <span className="fs-6"><span className="text-danger">Multiple Modules</span> 
                   | <b>Not available until</b> May 6 at 12:00am |</span>
                   <span className="fs-6"><b>Due</b> May 13 at 11:59pm | 100 pts</span>
                </div>
                <LessonControlButtons/>
              </ListGroup.Item>
              <ListGroup.Item className="wd-individual-assignment d-flex align-items-center p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-3 fs-3 text-success"/>
                <div className="d-inline-flex flex-column">
                <span className="fs-5">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-black text-decoration-none" >
                      A2
                   </a></span>
                   <span className="fs-6"><span className="text-danger">Multiple Modules</span> 
                   | <b>Not available until</b> May 13 at 12:00am |</span>
                   <span className="fs-6"><b>Due</b> May 20 at 11:59pm | 100 pts</span>
                </div>
                <LessonControlButtons/>
              </ListGroup.Item>
              <ListGroup.Item className="wd-individual-assignment d-flex align-items-center p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-3 fs-3 text-success"/>
                <div className="d-inline-flex flex-column">
                <span className="fs-5">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-black text-decoration-none" >
                      A3
                   </a></span>
                   <span className="fs-6"><span className="text-danger">Multiple Modules</span> 
                   | <b>Not available until</b> May 20 at 12:00am |</span>
                   <span className="fs-6"><b>Due</b> May 27 at 11:59pm | 100 pts</span>
                </div>
                <LessonControlButtons/>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );
}