import { useState } from "react";
import UseEmployer from "../hooks/useEmployerContext";
import positions from "../util";
import Worker from "../components/worker";
import UseWorker from "../hooks/useWorkerContext";
import RegisterWorker from "../components/registerWorker";
const EmployerPage = () => {
  const { AllWorkers } = UseEmployer();
  const [workers, setWorkers] = useState();
  const { worker, dispatch } = UseWorker();
  const [showRegister, setShowRegister] = useState(false);

  const getEmployerWithPosition = async (position) => {
    const workersArray = [];
    const promise = new Promise((res, rej) => {
      AllWorkers.forEach((element, index) => {
        if (element.position === position) {
          workersArray.push(element);
        }

        if (index >= AllWorkers.length - 1) {
          res();
        }
      });
    });
    await promise;
    setWorkers(workersArray);
  };

  return (
    <div className="bg-emerald-300 h-full grid grid-cols-2 text-emerald-900 relative">
      <div className="col-span-1 p-2 flex flex-col gap-2 items-center">
        <div className="text-2xl font-bold">POSITIONS</div>
        {AllWorkers &&
          Object.keys(positions).map((position) => {
            return (
              <div className="border-2 rounded-lg border-emerald-200 w-full flex justify-center font-bold hover:bg-emerald-700 hover:text-emerald-100">
                <button
                  onClick={() => {
                    getEmployerWithPosition(position);
                  }}
                  className="w-full"
                >
                  {position}
                </button>
              </div>
            );
          })}
      </div>
      <div className="col-span-1 p-2 flex flex-col gap-2 items-center bg-emerald-400">
        <div className="text-2xl font-bold">Workers</div>
        {workers &&
          workers.map((worker) => {
            return (
              <div className="border-2 rounded-lg border-emerald-200 w-full flex justify-center font-bold hover:bg-emerald-700 hover:text-emerald-100">
                <button
                  onClick={() => {
                    dispatch({ type: "set", payload: worker });
                  }}
                  className="w-full"
                >
                  {`${worker.firstname} ${worker.lastname}`}
                </button>
              </div>
            );
          })}
        <buttton
          className="button w-full text-center"
          onClick={() => {
            setShowRegister(true);
          }}
        >
          Register Worker
        </buttton>
        <div></div>
      </div>
      {showRegister && <RegisterWorker setShowRegister={setShowRegister} />}
      <Worker />
    </div>
  );
};
export default EmployerPage;
