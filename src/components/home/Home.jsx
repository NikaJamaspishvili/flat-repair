import Header from "./Header"
import About from "./About"
import Price from "./Price"
import Contact from "./Contact"

const Home = () => {
  return (
    <div className="pt-20 flex flex-col md:gap-28 gap-12">
      <Header />
      <About />
      <Price />
      <Contact />
    </div>
  )
}

export default Home
