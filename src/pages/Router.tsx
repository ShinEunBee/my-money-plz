import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Main";
import CreateView from "./CreateView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<CreateView />} />
      </Routes>
    </BrowserRouter>
  )
}