import { useContext } from "react";
import { EmployerContext } from "../context/employerContext";

const UseEmployer = () => {
  const context = useContext(EmployerContext);
  if (!context) {
    throw Error("EmployerContext must be used inside an EmployerContext");
  }
  return context;
};
export default UseEmployer;
