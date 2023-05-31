import { useState } from "react";
import positions from "../util";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RegisterWorker = ({ setShowRegister }) => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState("manager");
  const [showPos, setShowPos] = useState(false);
  const Form = ({ label, func }) => {
    return (
      <div className="flex flex-col gap-1 w-full text-emerald-950">
        <label className="text-lg font-bold">{label}</label>
        <input
          className="outline-none border-[1px] bg-fuchsia-100 rounded-lg border-slate-400 px-2 py-1"
          onChange={(e) => {
            func(e.target.value);
          }}
        ></input>
      </div>
    );
  };
  return (
    <div className="absolute inset-0 backdrop-blur-sm bg-opacity-25">
      <div className="flex justify-center pt-[20%]">
        <div className="flex flex-col gap-2 rounded-lg font-semibold w-5/6 p-4 h-fit border-2 border-emerald-700 max-w-[30rem]">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Register Worker</div>
            <button
              className="bg-red-500 px-2 py-1 rounded-lg"
              onClick={() => {
                setShowRegister(false);
              }}
            >
              Close
            </button>
          </div>
          <Form label="Firstname" func={setFirstName} />
          <Form label="Lastname" func={setLastName} />
          <Form label="Email" func={setEmail} />
          <div>
            <div className="flex flex-col gap-1 w-full text-emerald-950 relative">
              <label className="text-lg font-bold">Position</label>
              <div className="border-[1px] bg-fuchsia-100 rounded-lg border-slate-400 px-2 py-1 flex justify-between">
                <div>{position}</div>
                <button
                  onClick={() => {
                    if (showPos) {
                      setShowPos(false);
                    } else {
                      setShowPos(true);
                    }
                  }}
                  className="rounded-full p-1 hover:bg-slate-300"
                >
                  {showPos ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              <div className={`${!showPos && "hidden"}`}>
                <div className="border-[1px] bg-fuchsia-100 rounded-lg border-slate-400 px-2 py-1">
                  {Object.keys(positions).map((pos) => {
                    return (
                      <div className="border-b-[0.1rem] border-emerald-400">
                        <button className="w-full text-start hover:bg-emerald-200]">
                          {pos}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <button className="button">Register</button>
        </div>
      </div>
    </div>
  );
};
export default RegisterWorker;
