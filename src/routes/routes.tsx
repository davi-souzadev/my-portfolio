import { Routes, Route } from "react-router-dom"
import React from "react"
import Home from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Projects } from "../pages/Projects"

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/projects"
        element={<Projects />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
