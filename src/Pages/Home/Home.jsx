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
    <div className="overflow-x-hidden">
      <div className="text-center flex flex-col mb-32 px-4">
        <h1 className="text-5xl font-bold mb-6">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-gray-500 mb-6">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="btn flex items-center gap-2">
            <img src={GooglePlayImg} className="w-6" alt="Google Play" /> Google
            Play
          </button>
          <button className="btn flex items-center gap-2">
            <img src={AppStoreImg} className="w-6" alt="App Store" /> App Store
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <img src={heroImage} alt="Hero" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-5xl font-bold">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
              <p className="font-thin text-xs">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3 my-12 px-4">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="text-gray-400">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
        {featureApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <div className="mt-10 text-center px-4">
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
