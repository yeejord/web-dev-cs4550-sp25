import { Button, FormControl, ListGroup } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center flex-row-reverse gap-5"> 
        <div className="d-flex flex-row-reverse gap-2">
          <Button className="bg-success txt-white border-0" onClick={() => dispatch(addTodo(todo))}
                  id="wd-add-todo-click"> Add </Button>
          <Button className="bg-warning text-black border-0" onClick={() => dispatch(updateTodo(todo))}
                  id="wd-update-todo-click"> Update </Button>
          </div>
        <FormControl className="d-flex float-left w-50" value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
      </ListGroup.Item >
  );}
  