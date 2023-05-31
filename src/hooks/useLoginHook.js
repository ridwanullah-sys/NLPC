import { useState } from "react";
import UseWorker from "./useWorkerContext";
import UseEmployer from "./useEmployerContext";
import database from "../database";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const { dispatch } = UseWorker();
  const { dispatch: employerDispatch } = UseEmployer();

  const login = (email, password, user) => {
    setIsLoading(true);
    setError(null);

    // const response = await fetch(`/employee/${user}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    let response;
    if (user === "worker") {
      response = database.find(
        (data) => data.email === email && data.password === password
      );
    } else if (user === "employer") {
      if (email === "abdraufridwantemi@gmail.com" && password === "employer") {
        response = { token: "jkwnjkbjkbqwbkjqw", workers: database };
      }
    }

    if (!response) {
      setError("invalid Login credentials");
      setIsLoading(false);
    }

    if (response) {
      if (user === "employer") {
        localStorage.setItem("token", JSON.stringify(response.token));
        localStorage.setItem("workers", JSON.stringify(response.workers));
        employerDispatch({ type: "set", payload: response.workers });
      } else if (user === "worker") {
        dispatch({ type: "set", payload: response });
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
