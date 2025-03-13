import { Modal, FormControl, Button } from "react-bootstrap";

export default function AssignmentEditor({ show, handleClose, dialogTitle, assignmentName, setAssignmentName, assignmentDescription,
    setAssignmentDescription, assignmentPoints, setAssignmentPoints, assignmentDueDate, setAssignmentDueDate,
    assignmentAvailableFromDate, setAssignmentAvailableFromDate, assignmentAvailableUntilDate, setAssignmentAvailableUntilDate, addAssignment,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void;
 assignmentDescription: string; setAssignmentDescription: (name: string) => void; assignmentPoints: string; setAssignmentPoints: (points: string) => void; 
 assignmentDueDate: string; setAssignmentDueDate: (name: string) => void;
 assignmentAvailableFromDate: string; setAssignmentAvailableFromDate: (name: string) => void; assignmentAvailableUntilDate: string; setAssignmentAvailableUntilDate: (name: string) => void;
 addAssignment: () => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <FormControl placeholder="name" value={assignmentName}
     onChange={(e) => { setAssignmentName(e.target.value); }} />
    <FormControl placeholder="description" value={assignmentDescription}
     onChange={(e) => { setAssignmentDescription(e.target.value); }} />
    <FormControl placeholder="points" value={assignmentPoints}
     onChange={(e) => { setAssignmentPoints(e.target.value); }} />
    <FormControl placeholder="due date" value={assignmentDueDate}
     onChange={(e) => { setAssignmentDueDate(e.target.value); }} />
    <FormControl placeholder="available from date" value={assignmentAvailableFromDate}
     onChange={(e) => { setAssignmentAvailableFromDate(e.target.value); }} />
    <FormControl placeholder="available until date" value={assignmentAvailableUntilDate}
     onChange={(e) => { setAssignmentAvailableUntilDate(e.target.value); }} />
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      addAssignment();
      handleClose();
     }} > Save </Button>
   </Modal.Footer>
  </Modal>
);}