import React from "react";
import useApps from "../../Hooks/useAppData";
import AppCard from "../../Components/AppCard/AppCard";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center mb-2">
          Our All Applications
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between my-8">
        <h4>({apps.length}) Apss Found</h4>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
