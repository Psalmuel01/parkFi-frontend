import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join from "./pages/Join";
import About from "./pages/About";
import Landing from "./pages/Landing";

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
    element: <NoMatch />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="px-8 py-6 lg:px-20 lg:py-10">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
