import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Timer from "./components/Timer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="timer" element={<Timer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
