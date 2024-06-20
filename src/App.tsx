import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join from "./pages/Join";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { WagmiProvider } from "wagmi";
import { sepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { ContractProvider } from "./contexts/ContractContext.tsx";
import { Toaster } from 'react-hot-toast';

const config = getDefaultConfig({
  appName: 'Park FI',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

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


  return (
    <div className="bg-white px-8 py-6 lg:px-20 lg:py-10">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={darkTheme({
            accentColor: '#0D0C22',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
            overlayBlur: 'small',
          })}>
            <ContractProvider>
              <RouterProvider router={router} />
              <Toaster />
            </ContractProvider>
          </ RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
