import React from "react";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";

const AppCard = ({ app }) => {
  const { image, companyName, downloads, ratingAvg } = app;
  const downloadsInMillions = (downloads) =>
    Math.floor(downloads / 1_000_000) + "M";

  return (
    <div className="card p-4 shadow-md hover:scale-105 w-68 transition ease-in-out">
      <figure className="p-4 bg-gray-100">
        <img src={image} className="w-40" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-700 text-xl">{companyName}</h2>
        <div className="card-actions justify-between mt-4">
          <div className="badge bg-green-100 text-green-500">
            <img src={downloadImg} className="w-3" alt="" />
            {downloadsInMillions(downloads)}
          </div>
          <div className="badge bg-yellow-100 text-yellow-600 px-3">
            <img src={ratingImg} className="w-3" alt="" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
