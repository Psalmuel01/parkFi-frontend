import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="flex flex-col w-[33%] max-md:w-full max-md:ml-0">
    <img loading="lazy" src={src} alt={alt} className="grow w-full aspect-[1.45] max-md:mt-10" />
  </div>
);

function Parking() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce317a468aef6e6d1d68f1666f808aa2266cacdf4c22e05c6e08ce1dc20c9d67?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Parking space 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf3cb040e249af6071d1444cae72efc8d88b7a3b80e0437cb14001a197bddee3?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Parking space 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cbd3eeb7ddc01f0cd7326031af457e634746b6ede388b7b6b709bbc7f040ef4?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Parking space 3" },
  ];

  return (
    <section className="flex justify-center items-center py-16 bg-white border-0 border-black border-solid max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1244px] max-md:max-w-full">
        <p className="text-sm font-semibold text-neutral-500">ONLY THE BEST SPACES</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Our Parking Spaces</h1>
        <p className="mt-6 text-lg font-medium leading-9 text-center text-zinc-950 w-[584px] max-md:max-w-full">
          We provide our customers with the best and affordable parking spaces available.
        </p>
        <div className="justify-center self-stretch mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {images.map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parking;