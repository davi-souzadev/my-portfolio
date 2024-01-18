import { Routes, Route } from "react-router-dom"
import React from "react"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Projects } from "../pages/Projects"

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/my-portfolio/"
        element={<Home />}
      />
      <Route
        path="/my-portfolio/projects"
        element={<Projects />}
      />
      <Route
        path="/my-portfolio/*"
        element={<NotFound />}
      />
    </Routes>
  )
}
