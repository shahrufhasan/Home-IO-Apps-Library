import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import errorImg from "../../../public/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar></Navbar>
      <div>{error.message}</div>
      <img src={errorImg} className="mx-auto lg:py-70" alt="" />
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
