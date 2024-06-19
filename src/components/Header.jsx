import { Link } from 'react-router-dom';
import NavButton from "./NavButton";
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
            <Link to="/" className="text-xl cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="text-xl cursor-pointer">
              About
            </Link>
            {/* <Link className="text-xl cursor-pointer">Transactions</Link> */}
            {/* <Link className="text-xl cursor-pointer">DAO Members</Link> */}
            <Link to="/join" className="text-xl cursor-pointer">
              Join Network
            </Link>
            {/* <a className="text-xl cursor-pointer">Simulator</a> */}
          </div>
          <div className="max-lg:hidden"><ConnectButton client={client} wallets={wallets} /></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
