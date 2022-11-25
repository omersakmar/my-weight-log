import React from "react";
import useSWR from "swr";

import { FaPlus, FaMinus } from "react-icons/fa";
const fetcher = (url) => fetch(url).then((res) => res.json());

const RecentLogs = () => {
  const { data, error } = useSWR("http://localhost:8800/api/logs", fetcher);
  if (error) return "Something went wrong";
  if (!data) return "Loading...";

  const dailyWeightDiff =
    data[data.length - 1]?.weight - data[data.length - 2]?.weight;

  return (
    <>
      {data.length >= 2 ? (
        <div className="flex flex-col">
          <div className="flex justify-center flex-row m-10">
            <div className="mx-12 flex flex-col text-center">
              <h2 className="text-2xl">{data[data.length - 2].title}</h2>
              <p className="text-lg">{data[data.length - 2].weight}</p>
            </div>
            <div className="mx-12 flex flex-col text-center">
              <h2 className="text-2xl">{data[data.length - 1].title}</h2>
              <p className="text-lg">{data[data.length - 1].weight}</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center mx-80">
            <h2 className="flex items-center text-gray-900 text-lg uppercase font-bold">
              Daily Change
              {dailyWeightDiff > 0 ? (
                <FaPlus className="text-red-500" />
              ) : (
                <FaMinus className="text-green-500" />
              )}
            </h2>
            <p className="text-2xl font-bold">{dailyWeightDiff.toFixed(1)} </p>
          </div>
        </div>
      ) : (
        <h1>
          Nothing to show here. Try having at least 2 logs (yesterday && today)
        </h1>
      )}
    </>
  );
};

export default RecentLogs;
