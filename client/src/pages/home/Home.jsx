import axios from "axios";
import React from "react";
import LogForm from "../../components/logForm/LogForm";
import RecentLogs from "../../components/recentLogs/RecentLogs";
import Chart from "../../components/chart/Chart";
const Home = () => {
  return (
    <>
      <LogForm />
      <RecentLogs />
      <Chart />
    </>
  );
};

export default Home;
