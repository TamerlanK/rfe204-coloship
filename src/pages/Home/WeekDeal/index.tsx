import { useEffect, useState } from "react"
import weekDealHero from "../../../assets/images/deal_ofthe_week.png"
import Container from "../../../components/Container"
import HeadText from "../../../components/UI/HeadText"

const WeekDeal = () => {
  const initialTime = 3 * 24 * 60 * 60

  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Convert seconds to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60))
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <section className="bg-ntrl-clr200">
      <Container>
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <img
              src={weekDealHero}
              alt="Deal of the Week Hero"
              className="w-full object-cover"
            />
            {/* Overlay content for small screens */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-8 bg-black bg-opacity-50 md:hidden text-center">
              <ContentOverlay
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </div>
          </div>

          {/* Content Section for larger screens */}
          <div className="hidden md:flex flex-col justify-center items-center gap-y-8">
            <ContentOverlay
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

const ContentOverlay = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
}) => (
  <>
    <HeadText className="max-md:text-ntrl-clr200">Deal Of The Week</HeadText>
    <div className="grid grid-cols-4 gap-x-4 w-[80%] sm:w-[90%]">
      <TimerItem label="Day" value={days} />
      <TimerItem label="Hours" value={hours} />
      <TimerItem label="Mins" value={minutes} />
      <TimerItem label="Sec" value={seconds} />
    </div>
    <button className="px-8 py-2 rounded-md bg-ntrl text-white hover:bg-ntrl-clr600 duration-300 transition-colors">
      SHOP NOW
    </button>
  </>
)

const TimerItem = ({ label, value }: { label: string; value: number }) => (
  <div className="aspect-square w-full bg-white rounded-full flex flex-col justify-center items-center">
    <div className="text-2xl leading-6 sm:leading-normal sm:text-4xl font-semibold text-primary">
      {value}
    </div>
    <div className="text-ntrl-clr500 text-sm sm:text-base">{label}</div>
  </div>
)

export default WeekDeal
