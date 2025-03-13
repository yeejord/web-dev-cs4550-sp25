import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo, }: {
    todo: { id: string; title: string };
    } ) {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="d-flex justify-content-between alighn-items-center" key={todo.id}>
        <div className="text-left">
            {todo.title}
        </div>
        <div className="d-flex flex-row-reverse gap-2">
            <Button className="bg-danger text-white border-0"onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"> Delete </Button>
            <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"> Edit </Button>
        </div>
        </ListGroup.Item>);
        }