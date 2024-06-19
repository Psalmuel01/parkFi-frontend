import * as React from "react";

type ContactDetails = {
  iconSrc: string;
  text: string;
};

const ContactDetail: React.FC<ContactDetails> = ({ iconSrc, text }) => (
  <div className="flex gap-5 mt-9 whitespace-nowrap">
    <img loading="lazy" src={iconSrc} className="shrink-0 aspect-square w-[30px]" alt="" />
    <div className="underline">{text}</div>
  </div>
);

type AddressDetails = {
  iconSrc: string;
  address: string;
};

const AddressDetail: React.FC<AddressDetails> = ({ iconSrc, address }) => (
  <div className="flex gap-5 justify-center mt-12 leading-9 max-md:mt-10">
    <img loading="lazy" src={iconSrc} className="shrink-0 my-auto w-8 aspect-square" alt="" />
    <div>{address}</div>
  </div>
);

type TimingDetails = {
  iconSrc: string;
  timings: string[];
};

const TimingDetail: React.FC<TimingDetails> = ({ iconSrc, timings }) => (
  <div className="flex gap-3 justify-center mt-9">
    <img loading="lazy" src={iconSrc} className="shrink-0 my-auto w-8 aspect-square" alt="" />
    <div className="flex flex-col justify-center">
      {timings.map((timing, index) => (
        <div key={index}>{timing}</div>
      ))}
    </div>
  </div>
);

const Location: React.FC = () => {
  const contactDetailsData = [
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23634dc0198e8574d5a21ecbc72607f5c8eff294704bd42603d752388554585?apiKey=6d09e386ed084a5db605f780c970c7a9&", text: "info@weparkparking.com" }
  ];

  return (
    <div className="flex justify-center items-center mx-[-64px] px-16 py-12 bg-neutral-900 max-md:px-5">
      <section className="justify-between w-full max-w-[1138px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e991b6552198f4f25027a7bfd21dde2de0e234370b9f30730d2d4ff446e4d9?apiKey=6d09e386ed084a5db605f780c970c7a9&" className="grow w-full aspect-[1.69] max-md:mt-10 max-md:max-w-full" alt="Lagos, Nigeria" />
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-3 mt-1 text-xl font-medium text-neutral-300 max-md:mt-10">
              <h1 className="text-3xl font-semibold text-white">Lagos, Nigeria</h1>
              <AddressDetail iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6c20b78afbf4095e55aa0f8bf5b57f324a8fb201405a1f473916a921fb3c00f3?apiKey=6d09e386ed084a5db605f780c970c7a9&" address="13C Allen Avenue. Oak Park, IL 60304" />
              {contactDetailsData.map((contactDetail, index) => (
                <ContactDetail key={index} iconSrc={contactDetail.iconSrc} text={contactDetail.text} />
              ))}
              <TimingDetail iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a93897e50c2c55f52dd6d79272cad4a451891da08f04560581169fe1d9bea825?apiKey=6d09e386ed084a5db605f780c970c7a9&" timings={["Mon - Fri: 9am - 10pm", "Sat - Sun: 11am - 8pm"]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;