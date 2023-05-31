import { createContext, useEffect, useReducer } from "react";

export const EmployerContext = createContext();

export const EmployerContextReducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        AllWorkers: action.payload,
      };
    case "unset":
      return {
        AllWorkers: null,
      };
    default:
      return {
        AllWorkers: null,
      };
  }
};

export const EmployerContextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(EmployerContextReducer, {
    AllWorkers: null,
  });

  useEffect(() => {
    const workers = JSON.parse(localStorage.getItem("workers"));

    if (workers) {
      dispatch({ type: "set", payload: workers });
    }
  }, []);
  return (
    <EmployerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EmployerContext.Provider>
  );
};
