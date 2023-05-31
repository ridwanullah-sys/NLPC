import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import useLogin from "../hooks/useLoginHook";
import Navbar from "./navbar";

const Login = ({ setWorker }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [visibility, setVisibility] = useState();
  const [user, setUser] = useState("employer");
  const { isLoading, error, login } = useLogin();

  const Pick = ({ text }) => {
    return (
      <div>
        <button
          className="flex gap-2 items-center hover:bg-emerald-600 hover:text-white rounded-md p-1"
          onClick={() => {
            setUser(text);
          }}
        >
          <div
            className={`w-4 h-4 rounded-full border-2 border-slate-900 ${
              user === text && "bg-blue-500"
            }`}
          ></div>
          <div>{text}</div>
        </button>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-2 rounded-lg font-semibold mt-[20%] w-5/6 p-4 h-fit border-2 border-emerald-700 max-w-[30rem]">
      <div className="text-2xl font-bold text-indigo-800">Login</div>
      <div className="flex flex-col gap-1">
        <label>Email or UserName</label>
        <input
          className="outline-none border-[1px] bg-indigo-100 rounded-lg border-slate-400 px-2 py-1"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
      </div>
      <div className="flex flex-col gap-1">
        <label>password</label>
        <div className="border-[1px] bg-indigo-100 rounded-lg border-slate-400 grid grid-cols-12">
          <input
            className="bg-indigo-100 outline-none col-span-11 rounded-lg px-2 py-1"
            type={visibility ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          ></input>
          <button
            onClick={() => {
              visibility ? setVisibility(false) : setVisibility(true);
            }}
            className="col-span-1 flex justify-center items-center "
          >
            {visibility ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </button>
        </div>
      </div>
      <div className="md:flex justify-between">
        <Pick text="employer" />
        <Pick text="worker" />
      </div>
      <div className="flex justify-end">
        <button
          className="button w-full text-lg"
          disabled={isLoading}
          onClick={() => {
            login(email, password, user);
            setEmail("");
            setPassword("");
          }}
        >
          Login
        </button>
      </div>
      {error && (
        <div className="bg-red-300 border-2 border-red-600 p-2 w-full">
          {error}
        </div>
      )}
    </div>
  );
};
export default Login;
