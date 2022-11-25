import { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Chart = () => {
  const { data, error } = useSWR("http://localhost:8800/api/logs", fetcher);
  if (error) return "Something went wrong";
  if (!data) return "Loading...";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "My Weight Log",
      },
    },
  };

  const labels = data.map((item) => item.title);
  const weightLogs = data.map((item) => item.weight);

  const myData = {
    labels,
    datasets: [
      {
        label: "Daily logs",
        data: weightLogs,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full">
      <Line options={options} data={myData} />
    </div>
  );
};

export default Chart;
