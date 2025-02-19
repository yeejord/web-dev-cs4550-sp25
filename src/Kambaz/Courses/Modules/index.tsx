import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControlButtons from "./ModulesControlButtons";
import { useParams } from "react-router";
import db from "../../Database";

export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules.filter((module) => module.course === cid);
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0 mt-5" id="wd-modules">
            {modules.map((module) => (
              <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />{module.name}<ModulesControlButtons/>
                </div>
                {module.lessons && (
                    <ListGroup className="wd-lessons rounded-0">
                    {module.lessons.map((lesson: any) => (
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                      </ListGroup.Item>))}
                  </ListGroup>)}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
  );}
  