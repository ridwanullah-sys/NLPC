import { useState } from "react";
import positions from "../util";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const register = async (firstname, lastname, email, position) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/employee/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        position,
        earnings: positions[position].earnings,
        deduction: positions[position].deduction,
      }),
    });
  };
};
export default useRegister;
