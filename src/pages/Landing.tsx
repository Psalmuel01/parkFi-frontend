import Built from "../components/Landing/Built"
import Features from "../components/Landing/Features"
import Footer from "../components/Landing/Footer"
import Hero from "../components/Landing/Hero"
import Cta from "../components/Landing/Cta"
import Park from "../components/Landing/Park"

const Landing = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Park />
        <Built />
        <Cta />
        <Footer />
    </div>
  )
}

export default Landing