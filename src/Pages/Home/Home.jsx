import React from "react";
import { Link, NavLink } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import heroImage from "../../../public/hero.png";
import GooglePlayImg from "../../../public/playstore.png";
import AppStoreImg from "../../../public/appstore.png";
import useApps from "../../Hooks/useAppData";

const Home = () => {
  const { apps, loading, error } = useApps();

  const featureApps = apps.slice(0, 8);
  return (
    <div>
      <div className="text-center flex flex-col mb-32">
        <h1 className="text-5xl font-bold mb-6">
          We Build <br />
          <span
            className="bg-gradient-to-r
          from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-gray-500 mb-6">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex mx-auto gap-4 space-y-6">
          <button className="btn">
            <img src={GooglePlayImg} className="w-6" alt="" /> Goggle Play
          </button>
          <button className="btn">
            <img src={AppStoreImg} className="w-6" alt="" />
            App Store
          </button>
        </div>
        <img src={heroImage} alt="" />
        <div
          className="bg-gradient-to-r
          from-[#632EE3] to-[#9F62F2] text-white space-y-8 py-20
           w-screen relative left-1/2 right-1/2 -mx-[50vw] text-center"
        >
          <h2 className="text-5xl font-bold">
            Truested By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-2/3 mx-auto">
            <div className="space-y-3">
              <h4 className="font-thin text-xs">Total Downloads</h4>
              <p className="text-5xl font-bold">29.6M</p>
              <p className="font-thin text-xs">21% More Than Last Month</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-thin text-xs">Total Reviews</h4>
              <p className="text-5xl font-bold">906K</p>
              <p className="font-thin text-xs">46% More Than Last Month</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-thin text-xs">Active Apps</h4>
              <p className="text-5xl font-bold">132+</p>
              <p className="font-thin text-xs">31 More Will Launchs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-3 mb-8">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="mt-10 text-center">
        <NavLink
          to="/apps"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          See All Apps
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
