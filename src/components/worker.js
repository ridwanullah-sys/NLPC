import UseWorker from "../hooks/useWorkerContext";
import ErnAndDed from "./ernandded";

const Worker = () => {
  const { worker, dispatch } = UseWorker();
  const Component = ({ text, value }) => {
    return (
      <div>
        <div className="text-2xl font-bold">{text} :</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    );
  };
  return (
    worker && (
      <div className="fixed inset-0 backdrop-blur-sm bg-opacity-25 flex items-center justify-center p-1">
        <div className="bg-emerald-100 max-w-[50rem] p-2 md:p-3 flex flex-col gap-2 text-green-900 rounded-lg w-11/12">
          <div
            className="flex justify-end"
            onClick={() => {
              dispatch({ type: "unset" });
            }}
          >
            <button className="rounded-lg bg-red-700 px-2 py-1 font-bold text-md text-white hover:bg-red-900">
              X
            </button>
          </div>
          <Component
            text="Name"
            value={`${worker.firstname} ${worker.lastname}`}
          />
          <Component text="Position" value={worker.position} />
          <Component text="Email" value={worker.email} />
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-1/2">
              <div className="text-2xl font-bold mb-2">Earnings</div>
              <ErnAndDed Obj={worker.earnings} />
            </div>
            <div className="md:w-1/2">
              <div className="text-2xl font-bold mb-2">Deductions</div>
              <ErnAndDed Obj={worker.deduction} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Worker;
