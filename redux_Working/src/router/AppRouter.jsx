import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterComponent from "../components/counter-component/CounterComponent";
import ToDoApp from "../components/todoapps/ToDoApp";
import RouterButton from "../RouterButton";

function AppRouter() {
  return (
    <div>
      
      <BrowserRouter>
      <RouterButton />
        <Routes>
          <Route path="/counter" element={<CounterComponent />} />
          <Route path="/todoapp" element={<ToDoApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
