import React from "react";
import useSWR from "swr";
import uuid4 from "uuid4";
const fetcher = (url) => fetch(url).then((res) => res.json());

const SavedLogs = () => {
  const { data, error } = useSWR("http://localhost:8800/api/logs", fetcher);
  if (error) return "Something went wrong";
  if (!data) return "Loading...";
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Date
            </th>
            <th scope="col" className="py-3 px-6">
              Weight
            </th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody key={uuid4()}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.title}
              </th>
              <td className="py-4 px-6">{item.weight}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SavedLogs;
