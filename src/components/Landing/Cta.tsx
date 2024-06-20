import React from "react";
import { Link } from "react-router-dom";

const Cta = () => (
  <section className="flex flex-col justify-center items-center px-20 py-16 bg-neutral-900 max-md:px-5 rounded-3xl">
    <h1 className="text-4xl text-white font-bold max-md:max-w-full">
      Park with ParkFi Today
    </h1>
    <p className="mt-6 text-xl leading-8 text-center font-medium text-zinc-300 w-[587px] max-md:max-w-full">
      Seamlessly find a decentralized parking space for your car with zero worries
    </p>
    <Link to="/join" className="justify-center px-6 py-3.5 mt-14 text-xl font-semibold bg-white rounded-3xl text-neutral-900 max-md:px-5 max-md:mt-10">
      Join Network
    </Link>
  </section>
);

export default Cta;
