// import { Link } from 'react-router-dom';
import NavButton from "./NavButton";
// import { SiHiveBlockchain } from 'react-icons/si';
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_CLIENT_ID,
});

const Header = () => {
  return (
    <header>
      <nav
        className="flex items-center justify-between mb-10"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <a
            href="/"
            className="text-3xl major-flex font-semibold gap-2 bg-clip-text max-md:text-2xl max-sm:text-xl"
          >
            ParkFi
          </a>
          <div className="flex lg:hidden">
            <NavButton />
          </div>
          <div className="items-start font-semibold hidden lg:flex max-w-full justify-between gap-20 my-auto max-md:flex-wrap max-md:justify-center">
            <a href="/" className="text-xl cursor-pointer">
              Home
            </a>
            <a href="about" className="text-xl cursor-pointer">
              About
            </a>
            {/* <a className="text-xl cursor-pointer">Transactions</a> */}
            {/* <a className="text-xl cursor-pointer">DAO Members</a> */}
            <a href="join" className="text-xl cursor-pointer">
              Join Network
            </a>
            {/* <a className="text-xl cursor-pointer">Simulator</a> */}
          </div>
          <ConnectButton client={client} wallets={wallets} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
