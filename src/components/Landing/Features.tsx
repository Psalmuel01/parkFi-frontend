import * as React from "react";
import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center px-12 py-10 rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
        <div className="flex justify-center items-center self-center px-2.5 bg-indigo-100 rounded-full h-[63px] w-[63px]">
          <img loading="lazy" src={imageSrc} alt={imageAlt} className="w-full aspect-square" />
        </div>
        <h3 className="mt-24 text-2xl font-bold leading-9 text-center text-gray-900 max-md:mt-10">{title}</h3>
      </div>
    </div>
  );
};

const features = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8fdf468314e9e8a17e790e2e0ecd7ea7bb74b3964230331d5524491aa065d78?apiKey=6d09e386ed084a5db605f780c970c7a9&",
    imageAlt: "24 hour car delivery icon",
    title: "24 hour car delivery",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/90cb3929107bc6e99e000b6f4ee659b4582b2fa2181763f136de946615fa86d9?apiKey=6d09e386ed084a5db605f780c970c7a9&",
    imageAlt: "24 hour car delivery icon",
    title: "24 hour car delivery",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c4b5cd90dd1679937614dc940c18620880e28139e1d41f25b3d286acc57d4e0?apiKey=6d09e386ed084a5db605f780c970c7a9&",
    imageAlt: "24 hour car delivery icon",
    title: "24 hour car delivery",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/26030f5a3923c8baef04f6d41087891147bb4b77d2509526798793721f86694a?apiKey=6d09e386ed084a5db605f780c970c7a9&",
    imageAlt: "24 hour car delivery icon",
    title: "24 hour car delivery",
  },
];

const Features: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-start py-16 bg-white border-t-0 border-black border-solid max-md:px-5">
      <p className="ml-3.5 text-sm font-semibold text-neutral-500 max-md:ml-2.5">TAKING CARE OF EVERY CLIENT</p>
      <h2 className="mt-3 ml-3.5 text-4xl font-bold text-gray-900 max-md:ml-2.5">Key Features</h2>
      <p className="mt-6 ml-3.5 text-lg font-medium leading-9 text-zinc-950 w-[584px] max-md:max-w-full">
        We are all about our client safety and comfort. That’s why we provide the best service you can imagine.
      </p>
      <div className="justify-between self-stretch mx-3.5 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature, index) => (
            <FeatureCard key={index} imageSrc={feature.imageSrc} imageAlt={feature.imageAlt} title={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;