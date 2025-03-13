import { Container } from "react-bootstrap";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

export default function Lab3() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <Container>
                <ClickEvent />
                <PassingDataOnEvent />
                <PassingFunctions theFunction={sayHello} />
                <EventObject />
                <Counter />
                <BooleanStateVariables />
                <StringStateVariables />
                <DateStateVariable />
                <ObjectStateVariable />
                <ArrayStateVariable />
                <ParentStateComponent />
                <ReduxExamples />
            </Container>
        </div>
    )
}