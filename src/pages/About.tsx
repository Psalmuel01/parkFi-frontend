import CheckOut from "../components/CheckOut"

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">About ParkFi</h1>
      <div className="w-[75%] m-auto text-xl font-medium text-gray-700 flex flex-col gap-10 mb-10 leading-loose">
        <p>ParkFi is your go-to solution from now on! Our platform is designed to make parking easy, convenient, and secure. With ParkFi, you can find and reserve a parking spot with ease, anywhere in the city. We're partnering with existing parking spaces to tokenize them as Park Space NFTs on our platform, making them safer and more secure.</p>
        <p>This means that owners of these parking spaces can now tokenize them on our network, making them more secure and valuable. And with our ParkFi Membership, you can park anywhere on the network for a low rate, with the added benefit of individual recording and tracking of each space and its amenities.</p>
        <p>ParkFi will operate on a fee-based model, charging a small transaction fee for each parking space reservation. This fee will be significantly lower than the costs associated with traditional parking methods, ensuring affordability and sustainability.</p>
        <p>Additionally, ParkFi will offer premium membership options that provide users with benefits such as discounted rates, priority reservations, and access to exclusive parking spaces.</p>
      </div>
    </div>
  )
}

export default About