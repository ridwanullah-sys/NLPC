import UseEmployer from "../hooks/useEmployerContext";

const Navbar = () => {
  const { AllWorkers, dispatch } = UseEmployer();
  return (
    <div className="flex justify-between px-3 py-2 items-center w-full bg-emerald-200">
      <div className="text-xl font-bold">NLPC PFA</div>
      <div className="flex gap-2 text-sm items-center sm:text-base">
        <div>abdraufridwantemi@gmail.com</div>
        <div className={`${!AllWorkers && "hidden"}`}>
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "unset" });
              localStorage.removeItem("token");
              localStorage.removeItem("workers");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
