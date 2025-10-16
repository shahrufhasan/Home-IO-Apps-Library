import React, { useState } from "react";
import useApps from "../../Hooks/useAppData";
import AppCard from "../../Components/AppCard/AppCard";
import NoAppFound from "../NoAppFound/NoAppFound";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.companyName.toLowerCase().includes(term))
    : apps;

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Our All Applications</h1>
          <p className="text-gray-500">
            Explore all apps on the market developed by us. We code for
            millions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-[650px] my-8">
          <h4 className="text-lg font-semibold min-h-[40px] flex items-center">
            ({searchedApps.length}) Apps Found
          </h4>
          <label className="w-full md:w-auto flex-shrink-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search App"
              className="input input-bordered w-full md:w-64 py-2"
            />
          </label>
        </div>

        {searchedApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div>
            <NoAppFound></NoAppFound>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
