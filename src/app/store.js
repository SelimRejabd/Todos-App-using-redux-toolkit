import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  }
});

export default store;
