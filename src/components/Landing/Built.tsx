import * as React from "react";

interface TechnologyCardProps {
  src: string;
  alt: string;
  className: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ src, alt, className }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex grow justify-center items-center px-16 py-12 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-10">
      <img loading="lazy" src={src} alt={alt} className={className} />
    </div>
  </div>
);

const Built: React.FC = () => {
  const technologies = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/42935bca0d55bba2985f3c1d322862febf9d9f8372fc7921e83fa3d30d03c430?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Technology 1", className: "mr-4 ml-4 w-48 aspect-[7.14]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b3a222e93d3059385f55447f110d98e26cb252528d893e19c29021e57ec428d?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Technology 2", className: "w-40 max-w-full aspect-[2.22]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6467ba63cb4a7cc032b84bbfe1176204a008da8ebacc383ab3460b822944641?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Technology 3", className: "max-w-full aspect-[1.43] w-[133px]" },
  ];

  return (
    <section className="flex flex-col justify-center items-center py-16 bg-white border-0 border-black border-solid max-md:px-5">
      <h2 className="text-4xl font-semibold text-black max-md:max-w-full">
        Built on leading technologies
      </h2>
      <div className="mt-12 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} src={tech.src} alt={tech.alt} className={tech.className} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Built;