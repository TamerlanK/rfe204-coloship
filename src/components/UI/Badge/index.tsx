interface BadgeProps {
  count: number
}

const Badge = ({ count }: BadgeProps) => {
  return (
    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      {count}
    </span>
  )
}

export default Badge
