import { cva } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const buttonVariants = cva(
  "px-8 py-3 rounded-md shadow-md text-white transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-dark",
        secondary: "bg-ntrl hover:bg-ntrl-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}

const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant }), className)}
    >
      {children}
    </button>
  )
}

export default Button
