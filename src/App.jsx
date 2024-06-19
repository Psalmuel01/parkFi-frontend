import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join from "./pages/Join";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { useActiveWalletChain } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { useSwitchActiveWalletChain } from "thirdweb/react";

function NoMatch() {
  return (
    <div className=" flex flex-col items-center justify-center mt-24 text-4xl">
      <h2>404: Page Not Found</h2>
      <p>Uh oh! Wrong page 😞</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <><Header /><NoMatch /></>,
  },
  {
    path: "/",
    element: <><Header /><Landing /></>,
  },
  {
    path: "/join",
    element: <><Header /><Join /></>,
  },
  {
    path: "/about",
    element: <><Header /><About /></>,
  },
]);



function App() {
  const chainId = useActiveWalletChain();
  const switchChain = useSwitchActiveWalletChain();

  useEffect(() => {
    if (chainId !== sepolia.id) {
      switchChain(sepolia);
    }
  }, [chainId, switchChain]);

  return (
    <div className="px-8 py-6 lg:px-20 lg:py-10">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
