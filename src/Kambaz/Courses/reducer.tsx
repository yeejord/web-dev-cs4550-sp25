/*import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: db.courses,
};
const modulesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: { 
    addCourse: (state, { payload: course }) => {
        const newCourse: any = {
            _id: uuidv4(),
        };
    state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: cid }) => {
        state.courses = state.courses.filter(
            (c: any) => c._id !== cid);
    },
    updateCourse: (state, { payload : course}) => {
        state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
        ) as any;
    }
  },
});*/
