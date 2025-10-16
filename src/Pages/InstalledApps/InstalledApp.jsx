import React, { useEffect, useState } from "react";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";

const InstalledApp = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApp"));
    if (installedApps) setInstalled(installedApps);
  }, []);

  const sortedApps = (() => {
    if (sortOrder === "size-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-dsc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();

  const handleRemove = (id) => {
    const installedApp = JSON.parse(localStorage.getItem("installedApp"));
    let updateList = installedApp.filter((a) => a.id !== id);
    setInstalled(updateList);
    localStorage.setItem("installedApp", JSON.stringify(updateList));
  };
  return (
    <div className="min-w-3xl">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-400 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h4>({installed.length} )Apps Installed</h4>
        <label className="form-control">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="size-asc">Low-&gt; High</option>
            <option value="size-dsc">High-&gt; Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedApps.map((app) => (
          <div className="bg-white p-2 card card-side  shadow-md flex items-center">
            <figure className="bg-gray-100">
              <img src={app.image} className="h-25 p-4" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <img src={downloadImg} className="w-3" alt="" />
                  <p className="text-green-500">
                    {Math.floor(app.downloads / 1_000_000)}M
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={ratingImg} className="w-4" alt="" />
                  <p className="text-yellow-600">{app.ratingAvg}</p>
                </div>
                <div className="flex">
                  <p className="text-gray-500">{app.size}MB</p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleRemove(app.id)}
                className="btn btn-error text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApp;
