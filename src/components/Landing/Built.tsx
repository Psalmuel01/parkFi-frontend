import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const ImageCard: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="grow w-full shadow-sm aspect-[2.7] max-md:mt-10"
    />
  </div>
);

const Built: React.FC = () => {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c1b8c80e8b18d9212fc0c4debd608c474d4ec19f277b70ea54329259bd4228b?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Ethereum" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e325c45b8028929c108991eb49d9635cdac3cd200ea98f8183a303933727c6e5?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "ZKPass" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/138e7c16689bc2b93e67cea8da871a71df7f3ed5a8a293d14ee5550c033f1a2d?apiKey=6d09e386ed084a5db605f780c970c7a9&", alt: "Graph" },
  ];
  return (
    <section className="flex flex-col justify-center items-center px-20 py-16 bg-white border-0 border-black border-solid max-md:px-5">
      <h1 className="text-4xl font-semibold text-primary max-md:max-w-full">
        BUILT ON LEADING TECHNOLOGIES
      </h1>
      <div className="mt-12 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {images.map((image, index) => (
            <ImageCard key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Built;