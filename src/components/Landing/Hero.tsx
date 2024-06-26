import * as React from "react";

const Hero: React.FC = () => {
  return (
    <section className="justify-center py-7 w-full max-w-[1337px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <header className="flex flex-col self-stretch my-auto text-xl font-medium max-md:mt-10 max-md:max-w-full">
            <h2 className="font-semibold text-gray-500 max-md:max-w-full">WELCOME TO THE FUTURE</h2>
            <h1 className="mt-3 text-6xl font-bold text-gray-900 leading-[72px] max-md:max-w-full">
              Finally, Decentralized Parking for All.
            </h1>
            <p className="my-6 mr-14 text-2xl leading-10 text-zinc-900 max-md:mr-2.5 max-md:max-w-full">
              Find a parking space or charging station wherever you need it with realtime availability and dynamic pricing.
            </p>
            <div className="flex gap-5 justify-between self-start mt-6 max-md:flex-wrap">
              <a href="https://www.loom.com/share/0f41008b7a784177b5eaf1ed1e5904a6?sid=cc9cfec8-ffef-42b2-8786-ccb5229f46d6" className="justify-center px-5 py-3 rounded-3xl text-white bg-gray-900">Watch Demo</a>
              <a href="#" className="justify-center px-5 py-3 rounded-3xl text-gray-900 border border-gray-900">Parking Simulator</a>
            </div>
          </header>
        </div>
        <figure className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1570605b16ed07e0b970745ad61eb0aa1e1bdcca4b0bab54817480e7de2cef26?apiKey=6d09e386ed084a5db605f780c970c7a9&"
            className="grow w-full aspect-[1.52] max-md:mt-7 max-md:max-w-full"
            alt="Decentralized parking"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;