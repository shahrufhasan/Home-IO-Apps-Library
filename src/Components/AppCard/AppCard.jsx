import React, { useState } from "react";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";
import { Link, useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const downloadsInMillions = (downloads) =>
    Math.floor(downloads / 1_000_000) + "M";

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(`/apps/${id}`);
      setLoading(false);
    }, 200);
  };

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-16 h-16 border-4 border-t-purple-600 border-r-purple-400 border-b-purple-200 border-l-purple-400 rounded-full animate-spin"></div>
        </div>
      )}
      <Link
        to={`/apps/${id}`}
        onClick={handleClick}
        className="bg-white card p-2 shadow-md hover:scale-105 w-65 transition ease-in-out"
      >
        <figure className="p-4 bg-gray-100">
          <img src={image} className="w-40" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-700 text-xl">{title}</h2>
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
      </Link>
    </div>
  );
};

export default AppCard;
