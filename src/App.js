import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
function App() {
  return (
      <BrowserRouter>
      <TodoList></TodoList>
      <TodoForm></TodoForm>
      </BrowserRouter>
  );
}

export default App;
