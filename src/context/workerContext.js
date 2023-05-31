import { createContext, useReducer } from "react";

export const WorkerContext = createContext();

export const workerContextReducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        worker: action.payload,
      };
    case "unset":
      return {
        worker: null,
      };
    default:
      return {
        worker: null,
      };
  }
};

export const WorkerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workerContextReducer, { worker: null });
  return (
    <WorkerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkerContext.Provider>
  );
};
