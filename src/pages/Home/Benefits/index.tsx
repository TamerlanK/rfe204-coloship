import Container from "../../../components/Container"
import { FaTruck, FaRegMoneyBillAlt } from "react-icons/fa"
import { TfiBackLeft } from "react-icons/tfi"
import { MdOutlineAccessTime } from "react-icons/md"
import { IconType } from "react-icons"

interface Benefit {
  Icon: IconType
  title: string
  subtitle: string
}

const BENEFITS: Benefit[] = [
  {
    Icon: FaTruck,
    title: "free shipping",
    subtitle: "Suffered Alteration in Some Form",
  },
  {
    Icon: FaRegMoneyBillAlt,
    title: "cach on delivery",
    subtitle: "The Internet Tend To Repeat",
  },
  {
    Icon: TfiBackLeft,
    title: "45 days return",
    subtitle: "Making it Look Like Readable",
  },
  {
    Icon: MdOutlineAccessTime,
    title: "opening all week",
    subtitle: "8AM - 09PM",
  },
]

const Benefits = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-0 md:divide-x">
        {BENEFITS.map((benefit, idx) => (
          <div key={idx} className="flex grow items-center p-6 gap-x-4 bg-ntrl-clr200">
            <div>
              <benefit.Icon className="text-primary size-7" />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-ntrl-clr600 font-semibold">{benefit.title}</span>
              <span className="text-ntrl-clr500/80 text-xs font-semibold">{benefit.subtitle}</span>
            </div>
          </div>
        ))}
      </section>
    </Container>
  )
}

export default Benefits
