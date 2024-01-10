import { Routes, Route } from "react-router-dom"
import React from "react"
import Home from "../pages/Home"

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  )
}