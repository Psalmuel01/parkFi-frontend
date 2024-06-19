import { Link } from 'react-router-dom';
import NavButton from "./NavButton";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useChainId, useSwitchChain} from "wagmi";
import {useEffect} from "react";
import {sepolia} from "viem/chains";

const Header = () => {
  const chainId = useChainId();
  const {switchChain} = useSwitchChain();

  useEffect(() => {
    if (Number(chainId) !== sepolia.id) {
      switchChain({ chainId: sepolia.id})
    }
  }, [chainId]);
  return (
    <header>
      <nav
        className="flex items-center justify-between mb-10"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <a
            href="/"
            className="text-3xl major-flex font-bold gap-2 bg-clip-text max-md:text-2xl max-sm:text-xl"
          >
            ParkFi
          </a>
          <div className="flex lg:hidden">
            <NavButton />
          </div>
          <div className="items-start font-semibold hidden lg:flex max-w-full justify-between gap-20 my-auto max-md:flex-wrap max-md:justify-center">
            <Link to="/" className="text-xl cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="text-xl cursor-pointer">
              About
            </Link>
            <Link to="/spaces" className="text-xl cursor-pointer">
              Available Spaces
            </Link>
            <Link to="/join" className="text-xl cursor-pointer">
              Join Network
            </Link>
          </div>
          <div className="max-lg:hidden"><ConnectButton  /></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
