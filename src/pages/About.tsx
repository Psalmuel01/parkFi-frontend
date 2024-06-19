import Available from "../components/Available"
import CheckIn from "../components/CheckIn"
import CheckOut from "../components/CheckOut"

const About = () => {
  return (
    <div>
      <h2 className="mb-10">About</h2>
      <Available />
      <CheckIn />
      <CheckOut />
    </div>
  )
}

export default About