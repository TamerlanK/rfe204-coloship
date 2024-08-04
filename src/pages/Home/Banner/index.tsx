import Container from "../../../components/Container"
import bannerImg1 from "../../../assets/images/banner_1.jpg"
import bannerImg2 from "../../../assets/images/banner_2.jpg"
import bannerImg3 from "../../../assets/images/banner_3.jpg"

const banners = [
  {
    src: bannerImg1,
    alt: "Women's Banner",
    text: "WOMEN'S",
    link: "#",
  },
  {
    src: bannerImg2,
    alt: "Accessories's Banner",
    text: "ACCESSORIES'S",
    link: "#",
  },
  {
    src: bannerImg3,
    alt: "Men's Banner",
    text: "MEN'S",
    link: "#",
  },
]

const Banner = () => {
  return (
    <Container>
      <section className="w-full flex flex-wrap gap-4 py-12 md:py-8">
        {banners.map((banner, index) => (
          <article key={index} className="relative flex-1 min-w-[250px]">
            <figure>
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-[250px] md:h-auto object-cover"
              />
              <figcaption className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-white text-center py-2 font-semibold text-ntrl hover:text-primary transition-colors duration-300">
                <a href={banner.link}>{banner.text}</a>
              </figcaption>
            </figure>
          </article>
        ))}
      </section>
    </Container>
  )
}

export default Banner
