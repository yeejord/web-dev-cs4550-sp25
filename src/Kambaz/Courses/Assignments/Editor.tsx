import { Row, Col } from "react-bootstrap";
import { Form, FormControl, FormSelect, InputGroup} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

export default function AssignmentEditor( {assignmentName, setAssignmentName, }: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void;
    assignmentDescription: string; setAssignmentDescription: (name: string) => void; assignmentPoints: string; setAssignmentPoints: (points: string) => void; 
    assignmentDueDate: string; setAssignmentDueDate: (name: string) => void;
    assignmentAvailableFromDate: string; setAssignmentAvailableFromDate: (name: string) => void; assignmentAvailableUntilDate: string; setAssignmentAvailableUntilDate: (name: string) => void;
    addAssignment: () => void;}) {
    const { cid } = useParams();
    const { aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid)
    return (
      <div id="wd-assignments-screen">
          <Form.Group as={Row} className="mb-3 text-nowrap" controlId="wd-assignment-name">
              <Form.Label className="d-block">
              Assignment Name
              </Form.Label>
              <Col sm={12}>
                <Form.Control defaultValue={assignment?.title} value={assignmentName}
                  onChange={(e) => { setAssignmentName(e.target.value); }}/>
              </Col> 
          </Form.Group>
          <Form.Group as={Row} className="mb-3 ms-1 me-1" controlId="wd-textarea">
              <Form.Control as="textarea" rows={7} defaultValue={assignment?.description}
                />
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-points">
              <Form.Label column sm={2} className="text-end">
              Points
              </Form.Label>
              <Col sm={10}>
              <Form.Control type="number" defaultValue={assignment?.points}
                />
              </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-assignment-group">
            <Form.Label column sm={2} className="text-end">
              Assignment Group
              </Form.Label>
            <Col sm={10}>
            <FormSelect>
              <option selected>ASSIGNMENTS</option>
              </FormSelect>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-display-grade">
            <Form.Label column sm={2} className="text-end">
              Display Grade as
              </Form.Label>
            <Col sm={10}>
            <FormSelect>
              <option selected>Percentage</option>
              </FormSelect>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2} className="text-end">
                Submission Type </Form.Label>
            <Col sm={10} className="border border-1 p-3 mb-3">
                <FormSelect className="mb-3">
                  <option selected>Online</option>
                </FormSelect>
                <Form.Label><b>Online Entry Options</b></Form.Label>
                <Form.Check type="checkbox" label="Text Entry" className="mb-3"
                checked name="formHorizontalRadios"/>
                <Form.Check type="checkbox" label="Website URL" className="mb-3"
                name="formHorizontalRadios"/>
                <Form.Check type="checkbox" label="Media Recordings" className="mb-3"
                name="formHorizontalRadios"/>
                <Form.Check type="checkbox" label="Student Annotation" className="mb-3"
                name="formHorizontalRadios"/>
                <Form.Check type="checkbox" label="File Uploads" className="mb-3"
                name="formHorizontalRadios"/>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} className="text-end">
                Assign </Form.Label>
            <Col sm={10} className="border border-1 p-3">
                <Form.Label><b>Assign to</b></Form.Label>
                <FormSelect className="mb-3">
                  <option selected>Everyone</option>
                </FormSelect>
                <Form.Label><b>Due </b></Form.Label>
                <InputGroup className="mb-3">
                  <FormControl defaultValue={assignment?.due_date}/>
                </InputGroup>           
                <InputGroup className="d-flex mb-3">
                  <div className= "d-flex flex-column me-2">
                    <Form.Label>
                      <b>Available From</b> </Form.Label>
                    <div className="d-flex">
                    <FormControl defaultValue={assignment?.not_available_until}/>
                    </div>
                  </div>
                  <div className= "d-flex flex-column me-2 mb-3 ">
                    <Form.Label>
                    <b>Until</b> </Form.Label>
                    <div className="d-flex">
                    <FormControl defaultValue={assignment?.available_until}/>
                    </div>
                  </div>
                </InputGroup>
            </Col>
          </Form.Group>
          <hr />
          <div className="d-flex float-end">
            <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn bg-secondary text-black border border-0 me-2">
              Cancel
            </Link>
            <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn bg-danger text-white border border-0" 
              onClick={() => setAssignmentName(assignmentName)}>
              Save
            </Link>
          </div>
  </div>
  );}