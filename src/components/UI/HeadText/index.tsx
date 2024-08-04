import React from "react"
import { cn } from "../../../lib/utils"

interface HeadTextProps {
  children: React.ReactNode
  className?: string
}

const HeadText = ({ children, className = "" }: HeadTextProps) => {
  return (
    <div className={"text-center w-fit mx-auto"}>
      <h2
        className={cn(
          "text-3xl text-ntrl md:text-5xl font-semibold mb-5",
          className
        )}
      >
        {children}
      </h2>
      <div className="w-16 h-1.5 mx-auto bg-primary"></div>
    </div>
  )
}

export default HeadText
