import Container from "../../../components/Container"
import HeadText from "../../../components/UI/HeadText"

import blogImg1 from "../../../assets/images/blog_1.jpg"
import blogImg2 from "../../../assets/images/blog_2.jpg"
import blogImg3 from "../../../assets/images/blog_3.jpg"

interface Blog {
  id: number
  title: string
  author: string
  date: string
  image: string
  link: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Here are the trends I see coming this fall",
    author: "Admin",
    date: "Dec 01, 2017",
    image: blogImg1,
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Fashion tips for the modern woman",
    author: "Admin",
    date: "Nov 15, 2017",
    image: blogImg2,
    link: "/blog/2",
  },
  {
    id: 3,
    title: "The best accessories for every occasion",
    author: "Admin",
    date: "Oct 20, 2017",
    image: blogImg3,
    link: "/blog/3",
  },
]

const LatestBlogs = () => {
  return (
    <Container>
      <section className="w-full py-12 space-y-12">
        <HeadText>Latest Blogs</HeadText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative group">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <div className="text-center mx-4 p-4 bg-white bg-opacity-85">
                  <h3 className="text-lg font-semibold text-ntrl text-balance ">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-ntrl-clr500">
                    BY {blog.author} | {blog.date}
                  </p>
                  <a
                    href={blog.link}
                    className="text-primary mt-2 inline-block"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default LatestBlogs
