import Built from "../components/Landing/Built"
import Features from "../components/Landing/Features"
import Footer from "../components/Landing/Footer"
import Hero from "../components/Landing/Hero"
import Location from "../components/Landing/Location"
import Parking from "../components/Landing/Parking"

const Landing = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Parking />
        <Built />
        <Location />
        <Footer />
    </div>
  )
}

export default Landing