import { Link } from 'react-router-dom';
import NavButton from "./NavButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useChainId, useSwitchChain } from "wagmi";
import { useEffect, useState } from "react";
import { sepolia } from "viem/chains";

const Header = () => {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const [clickedButton, setClickedButton] = useState('home');

  const handleClick = (button: SetStateAction<string>) => {
    setClickedButton(button);
  };


  useEffect(() => {
    if (Number(chainId) !== sepolia.id) {
      switchChain({ chainId: sepolia.id })
    }
  }, [chainId]);
  return (
    <header>
      <nav
        className="flex items-center justify-between mb-10"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <Link
            to="/"
            className="text-3xl major-flex font-bold gap-2 bg-clip-text max-md:text-2xl max-sm:text-xl"
          >
            ParkFi
          </Link>
          <div className="flex lg:hidden">
            <NavButton />
          </div>
          <div className="items-start text-gray-600 font-medium text-xl hidden lg:flex max-w-full justify-between gap-24 my-auto max-md:flex-wrap max-md:justify-center">
            <Link to="/" className={clickedButton === 'home' ? "text-primary font-semibold" : ""} onClick={() => handleClick('home')}>
              Home
            </Link>
            <Link to="/about" className={clickedButton === 'about' ? "text-primary font-semibold" : ""} onClick={() => handleClick('about')}>
              About
            </Link>
            <Link to="/join" className={clickedButton === 'join' ? "text-primary font-semibold" : ""} onClick={() => handleClick('join')}>
              Join Network
            </Link>
          </div>
          <div className="max-lg:hidden"><ConnectButton /></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
