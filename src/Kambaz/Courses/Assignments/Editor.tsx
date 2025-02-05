import { Row, Col } from "react-bootstrap";
import { Button, Form, FormControl, FormSelect, InputGroup} from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-screen">
          <Form.Group as={Row} className="mb-3 text-nowrap" controlId="wd-assignment-name">
              <Form.Label className="d-block">
              Assignment Name
              </Form.Label>
              <Col sm={12}>
                <Form.Control placeholder="A1"/>
              </Col>
              
          </Form.Group>
          <Form.Group as={Row} className="mb-3 ms-1 me-1" controlId="wd-textarea">
              <Form.Control as="textarea" rows={12} placeholder="The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.">
              </Form.Control>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-points">
              <Form.Label column sm={2} className="text-end">
              Points
              </Form.Label>
              <Col sm={10}>
              <Form.Control type="number" placeholder="100"/>
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
                  <FormControl defaultValue="2024-02-15" type = "date"/>
                </InputGroup>           
                <InputGroup className="d-flex mb-3">
                  <div className= "d-flex flex-column me-2">
                    <Form.Label>
                      <b>Available From</b> </Form.Label>
                    <div className="d-flex">
                    <FormControl defaultValue="2024-02-01" type="date" />
                    </div>
                  </div>
                  <div className= "d-flex flex-column me-2 mb-3 ">
                    <Form.Label>
                    <b>Until</b> </Form.Label>
                    <div className="d-flex">
                    <FormControl type="date"/>
                    </div>
                  </div>
                </InputGroup>
            </Col>
          </Form.Group>
          <hr />
          <div className="d-flex float-end">
            <Button className="bg-secondary text-black border border-0 me-1">Cancel</Button>
            <Button className="bg-danger text-white border border-0">Save</Button>
          </div>
  </div>
  );}