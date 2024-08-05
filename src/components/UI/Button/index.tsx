import { cva } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const buttonVariants = cva(
  "rounded-md shadow-md text-white transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-dark",
        secondary: "bg-ntrl-clr600 hover:bg-ntrl",
      },
      size: {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
)

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
}

const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
  size = "medium",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  )
}

export default Button
