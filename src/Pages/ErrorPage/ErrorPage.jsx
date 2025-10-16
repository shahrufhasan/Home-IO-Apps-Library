import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar></Navbar>
      <div>{error.message}</div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
