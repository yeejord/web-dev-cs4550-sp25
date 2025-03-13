import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: db.assignments, };
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment}) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                due_date: assignment.due_date,
                not_available_until: assignment.not_available_until,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a : any) => a._id != assignmentId);
        },
        updateAssignment: (state, { payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;

// "_id": "A303", "title": "Systems Engineering Exam", "course": "RS103", "description": "This exam assesses understanding of systems engineering principles, including requirements analysis, system design, integration, testing, and lifecycle management, with applications across various industries such as aerospace, automotive, and manufacturing.",
//"points": 45, "due_date": "February 28 at 10:00pm", "not_available_until": "February 20 at 8:00am"}