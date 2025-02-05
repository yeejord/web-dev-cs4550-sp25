import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px"}}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={150} />
              <Card.Body>
                <Card.Title> CS1234 React JS </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Full Stack software developer  </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px"}}>
          <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
              <Card>
                <Card.Img variant ="top" src="/images/stacked.jpg" width="100%" height={150} />
                <Card.Body>
                  <Card.Title> CS2345 HCI </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Human Centered Interaction  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px"}}>
          <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
              <Card>
                <Card.Img src="/images/algo.jpg" width="100%" height={150}/>
                <Card.Body>
                  <Card.Title> CS3000 Algo </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Algorithms and Data  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px"}}>
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
              <Card>
                <Card.Img src="/images/www.jpg" width="100%" height={150} />
                <Card.Body>
                  <Card.Title> CS4550 WebDev </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Web Development  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
              <Card>
                <Card.Img src="/images/vanGogh.jpg" width="100%" height={150} />
                <Card.Body>
                  <Card.Title> ART2000 Draw </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Drawing with different mediums  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style= {{ width: "300px"}}>
          <Link to="/Kambaz/Courses/1500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
              <Card>
                <Card.Img src="/images/frenchHorn.jpg" width="100%" height={150} />
                <Card.Body>
                  <Card.Title> MUSC1500 FRHORN </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    French Horn Section  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style = {{ width: "300px"}}>
          <Link to="/Kambaz/Courses//2310"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
              <Card>
                <Card.Img src="/images/spongebob.jpg" width="100%" height={150} />
                <Card.Body>
                  <Card.Title> EECE2310 scary course </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Digital Architecture and Computer Design  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
          </Link>
        </Col>
        </Row>
      </div>
    </div>
);}
