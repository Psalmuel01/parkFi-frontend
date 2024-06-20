import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

type NavLinkProps = {
    links: string[];
};

type IconTextProps = {
    src: string;
    alt: string;
    text: string;
};

const IconText: React.FC<IconTextProps> = ({ src, alt, text }) => (
    <div className="flex gap-3 self-stretch text-2xl whitespace-nowrap">
        <img loading="lazy" src={src} alt={alt} className="shrink-0 w-10 aspect-square" />
        <div className="my-auto">{text}</div>
    </div>
);

const NavLinks: React.FC<NavLinkProps> = ({ links }) => (
    <div className="flex flex-col">
        {links.map((link, index) => (
            <a href={`#${link.toLowerCase()}`} key={index} className="mt-8 first:mt-0">{link}</a>
        ))}
    </div>
);

const Footer: React.FC = () => {
    const firstNavLinks = ["Home", "About", "Join", "Services", "News"];
    const secondNavLinks = ["T&Cs", "Policy", "FAQs"];

    return (
        <section className="flex flex-col justify-center px-6 pt-12 pb-3 bg-white border-t border-solid border-zinc-500 border-opacity-50 max-md:px-5">
            <div className="justify-between self-center px-10 py-5 w-full max-w-[1416px] max-md:px-5 max-md:max-w-full">
                <div className="flex items-start gap-5 max-md:flex-col max-md:gap-0">
                    <article className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                        <section className="flex flex-col grow py-3 max-md:mt-10 max-md:max-w-full">
                            <header className="flex gap-3 items-center font-semibold text-gray-900 max-md:flex-wrap">
                                <Link
                                    to="/"
                                    className="text-3xl flex items-center font-bold gap-2 bg-clip-text max-md:text-2xl max-sm:text-xl"
                                >
                                    <img src={logo} alt="" />ParkFi
                                </Link>
                                <div className="shrink-0 self-stretch my-auto w-px bg-gray-900 border border-gray-900 border-solid h-[21px]" />
                                <div className="self-stretch my-auto text-xl leading-8">Decentralized Parking</div>
                            </header>
                            <p className="mt-8 text-lg font-medium leading-8 text-zinc-900 max-md:max-w-full">
                                ParkFi is a decentralized parking platform that aims to revolutionize the parking industry, providing a more efficient, convenient, and rewarding experience for all participants.
                            </p>
                            <h2 className="mt-8 text-xl font-bold text-gray-900 max-md:max-w-full">Subscribe to our newsletter</h2>
                            <form className="flex items-start gap-5 mt-3 w-full text-xl rounded-lg border border-white border-solid max-md:flex-wrap max-md:max-w-full">
                                <label htmlFor="emailInput" className="sr-only">Your email</label>
                                <input className="label" type="email" id="emailInput" placeholder="Your email" aria-label="Your email" />
                                <button className="justify-center px-5 py-3 font-medium text-white whitespace-nowrap bg-gray-900 rounded-lg">Subscribe</button>
                            </form>
                        </section>
                    </article>
                    <aside className="flex gap-20 justify-center font-medium text-lg ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                        <NavLinks links={firstNavLinks} />
                        <NavLinks links={secondNavLinks} />
                    </aside>
                    <aside className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                        <section className="flex flex-col self-stretch my-auto max-md:mt-10">
                            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                            <a href="mailto:info@parkfiparking.com" className="mt-6 text-xl font-medium underline text-zinc-700">info@parkfiparking.com</a>
                        </section>
                    </aside>
                </div>
            </div>
            <footer className="justify-center items-center px-16 py-7 text-2xl leading-8 text-center text-primary border-t border-solid border-zinc-500 border-opacity-50 max-md:px-5 max-md:max-w-full">
                <span className="font-medium">Powered by </span>
                <span className="font-bold text-blue-700">zkPass Transgate</span>
            </footer>
        </section>
    );
};

export default Footer;