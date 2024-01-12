import { Separator } from "@/components/ui/separator"
import React from "react"

export function NotFound() {
  return (
    <div className="h-full w-full flex justify-center items-center gap-4 ">
      <h1 className="text-3xl">404</h1>
      <Separator
        orientation="vertical"
        className="h-12"
      />
      <span className="text-xl">Not found</span>
    </div>
  )
}
