// import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {ConnectButton} from "@rainbow-me/rainbowkit";


const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
//   { name: 'Transactions', to: '#' },
//   { name: 'DAO Members', to: '#' },
  { name: 'Join Network', to: '/join' },
//   { name: 'Simulator', to: '#' },
];

const NavButton = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-" aria-hidden="true" />
      </button>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="text-[#070B12] fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="text-3xl text-primary bg-clip-text max-md:text-2xl max-sm:text-xl">
              ParkFi
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="text-red-400 cursor-pointer h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
              <ConnectButton />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default NavButton;