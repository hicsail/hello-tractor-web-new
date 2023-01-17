import React, { useState } from "react";
import BookingsAndServicesMap from "../components/BookingsAndServicesMap";
import TokenValueHistoryChart from "../components/TokenValueHistoryChart";

export interface Props {}

const MainDashboard: React.FC<Props> = (props) => {
  return (
    <>
      {" "}
      <BookingsAndServicesMap />
      <TokenValueHistoryChart />
    </>
  );
};

export default MainDashboard;
