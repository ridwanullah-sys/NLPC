import { useState } from "react";
import Login from "../components/login";
import Worker from "../components/worker";
import UseEmployer from "../hooks/useEmployerContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const [show, setShow] = useState(false);
  const { AllWorkers } = UseEmployer();

  const LoginButton = ({ set }) => {
    return (
      <div className="p-2 md:hidden">
        <botton
          className="button flex gap-1 items-center"
          onClick={() => {
            setShow(set);
          }}
        >
          <div>
            {set === true ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
          </div>
          <div> {set === false ? <div>Back </div> : <div>Login </div>}</div>
        </botton>
      </div>
    );
  };
  return (
    <div className="md:grid md:grid-cols-3 h-full relative">
      <div className="h-full bg-green-700 w-full md:col-span-2">
        <div className="w-full flex justify-end">
          <LoginButton set={true} />
        </div>
      </div>
      <div
        className={`md:transition-none transition ease-in-out delay-150 md:col-span-1 absolute top-0 right-0 left-0 md:relative h-full ${
          show ? "translate-x-[0%]" : "translate-x-[100%]"
        } md:translate-x-0`}
      >
        <div className="relative h-full bg-red-700">
          <div className="h-full bg-emerald-200 origin-top-left md:skew-x-[-10deg]"></div>
          <div className="absolute top-0 right-0 left-0 bg-emerald-200 h-full flex flex-col items-center">
            <div className="w-full flex justify-start">
              <LoginButton set={false} />
            </div>
            <Login />
          </div>
        </div>
      </div>

      {/* <Worker /> */}
    </div>
  );
};
export default Home;
