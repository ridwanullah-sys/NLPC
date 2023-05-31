import { useContext } from "react";
import { WorkerContext } from "../context/workerContext";

const UseWorker = () => {
  const context = useContext(WorkerContext);
  if (!context) {
    throw Error("WorkerContext must be used inside an WorkerContextProvider");
  }
  return context;
};

export default UseWorker;
