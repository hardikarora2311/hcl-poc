import React from "react";
import WorkflowBuilder from "../components/WorkflowBuilder";
import dynamic from "next/dynamic";
const AppTour = dynamic(() => import("../components/AppTour"), { ssr: false });

const Home = () => {
  return (
    <>
      <AppTour />
      <WorkflowBuilder />
    </>
  );
};

export default Home;
