import React, { useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApps from "../../Hooks/useAppData";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";
import reviewImg from "../../../public/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps?.find((a) => a.id === Number(id));

  const installedApps = JSON.parse(localStorage.getItem("installedApp")) || [];
  const [installed, setInstalled] = useState(
    installedApps.some((a) => a.id === Number(id))
  );

  if (!app) return <p>Loading app details...</p>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
  } = app;

  const downloadsInMillions = (downloads) =>
    Math.floor(downloads / 1_000_000) + "M";

  const handleInstall = () => {
    const existApp = JSON.parse(localStorage.getItem("installedApp")) || [];
    const isAlreadyInstalled = existApp.some((a) => a.id === app.id);

    if (!isAlreadyInstalled) {
      const updateList = [...existApp, app];
      localStorage.setItem("installedApp", JSON.stringify(updateList));
      setInstalled(true);
      toast.success("App installed successfully!");
    } else {
      setInstalled(true);
      toast.info("App is already installed");
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="p-4 rounded-md">
          <img src={image} alt="" />
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-2">{title}</h2>
          <p className="mb-2">
            Developed by:{" "}
            <span className="text-purple-600 font-semibold">{companyName}</span>
          </p>
          <div className="border-b-1 border-gray-300"></div>

          <div className="grid grid-cols-3 gap-4 mt-10 md:-ml-22">
            <div className="space-y-3 flex flex-col items-center">
              <img src={downloadImg} alt="" />
              <p className="text-gray-500 font-thin">Downloads</p>
              <p className="text-5xl font-bold">
                {downloadsInMillions(downloads)}
              </p>
            </div>
            <div className="space-y-3 flex flex-col items-center">
              <img src={ratingImg} alt="" />
              <p className="text-gray-500 font-thin">Average Ratings</p>
              <p className="text-5xl font-bold">{ratingAvg}</p>
            </div>
            <div className="space-y-3 flex flex-col items-center">
              <img src={reviewImg} alt="" />
              <p className="text-gray-500 font-thin">Total Reviews</p>
              <p className="text-5xl font-bold">{reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            className={`btn mt-6 text-white ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-400"
            }`}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="border-t-1 border-gray-300">
        <br />
        <h4>Description</h4>
        <br />
        {description}
        <br />
        <br />
        {description}
        <br />
        <br />
        {description}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AppDetails;
