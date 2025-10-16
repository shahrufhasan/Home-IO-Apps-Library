import React from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useAppData";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";
import reviewImg from "../../../public/icon-review.png";
const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const app = apps?.find((a) => a.id === Number(id));

  if (!app) {
    return <p>Loading app details...</p>;
  }
  console.log(app);
  const { image, title, companyName, downloads, ratingAvg, reviews } = app;
  const downloadsInMillions = (downloads) =>
    Math.floor(downloads / 1_000_000) + "M";
  return (
    <div className="flex items-center gap-12">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="mb-2 ">
          Developed by :{" "}
          <span className="text-purple-600 font-semibold">{companyName}</span>
        </p>
        <div className="border-b-2 border-purple-600"></div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="space-y-3 flex flex-col items-center">
            <img src={downloadImg} alt="" />
            <p className="text-gray-500 font-thin">Downloads</p>
            <p className="text-5xl font-bold">
              {downloadsInMillions(downloads)}
            </p>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <img src={ratingImg} alt="" />
            <p className="text-gray-500 font-thin">Avarage Ratings</p>
            <p className="text-5xl font-bold">{ratingAvg}</p>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <img src={reviewImg} alt="" />
            <p className="text-gray-500 font-thin">Totol Reviews</p>
            <p className="text-5xl font-bold">{reviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
