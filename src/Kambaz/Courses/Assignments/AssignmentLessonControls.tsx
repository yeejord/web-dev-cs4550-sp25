import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LessonControlButtons(
   { cid, assignmentId, deleteAssignment, editAssignment }: { cid: any; assignmentId: string; deleteAssignment: (assignmentId: string) => void; 
    editAssignment: (assignmentId: string) => void
   }) {
  return (
    <div className="float-end ms-auto">
      <ListGroup.Item className="border-0" as={Link} to={`/Kambaz/Courses/${cid}/Assignments/${assignmentId}`}>
        <FaPencil onClick={() => editAssignment(assignmentId)} className="text-primary me-3" />
      </ListGroup.Item>
       
      <FaTrash className="text-danger me-2 mb-1 z-10" onClick={() => deleteAssignment(assignmentId)}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}