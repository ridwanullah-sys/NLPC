import { useState } from "react";
import UseWorker from "./useWorkerContext";
import UseEmployer from "./useEmployerContext";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const { dispatch } = UseWorker();
  const { dispatch: employerDispatch } = UseEmployer();

  const login = async (email, password, user) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`/employee/${user}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.err);
      setIsLoading(false);
    }
    if (response.ok) {
      if (user === "employer") {
        localStorage.setItem("token", JSON.stringify(json.token));
        localStorage.setItem("workers", JSON.stringify(json.employee));
        employerDispatch({ type: "set", payload: json.employee });
      } else if (user === "worker") {
        dispatch({ type: "set", payload: json.employee });
      }
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    error,
    login,
  };
};
export default useLogin;
