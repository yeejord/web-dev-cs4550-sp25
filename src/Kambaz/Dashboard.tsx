import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course1">
          <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/stacked.jpg" width={200} />
            <div>
              <h5> CS2345 HCI </h5>
              <p className="wd-dashboard-course-title">
                Human Centered Interaction  </p>
              <button> Go </button>
            </div>
          </Link>
        </div><div className="wd-dashboard-course2">
          <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algo.jpg" width={200} />
            <div>
              <h5> CS3000 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data  </p>
              <button> Go </button>
            </div>
          </Link>
        </div><div className="wd-dashboard-course3">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/www.jpg" width={200} />
            <div>
              <h5> CS4550 WebDev </h5>
              <p className="wd-dashboard-course-title">
                Web Development  </p>
              <button> Go </button>
            </div>
          </Link>
        </div><div className="wd-dashboard-course4">
          <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/vanGogh.jpg" width={200} />
            <div>
              <h5> ART2000 Draw </h5>
              <p className="wd-dashboard-course-title">
                Drawing with different mediums  </p>
              <button> Go </button>
            </div>
          </Link>
        </div><div className="wd-dashboard-course5">
          <Link to="/Kambaz/Courses/1500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/frenchHorn.jpg" width={200} />
            <div>
              <h5> MUSC1500 FRHORN </h5>
              <p className="wd-dashboard-course-title">
                French Horn Section  </p>
              <button> Go </button>
            </div>
          </Link>
        </div><div className="wd-dashboard-course6">
          <Link to="/Kambaz/Courses//2310"
                className="wd-dashboard-course-link" >
            <img src="/images/spongebob.jpg" width={200} />
            <div>
              <h5> EECE2310 scary course </h5>
              <p className="wd-dashboard-course-title">
                Digital Architecture and Computer Design  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
