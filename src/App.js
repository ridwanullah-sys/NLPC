import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployerPage from "./pages/employerPage";
import UseEmployer from "./hooks/useEmployerContext";
import Navbar from "./components/navbar";

function App() {
  const { AllWorkers } = UseEmployer();

  return (
    <div className="App h-screen overflow-hidden">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!AllWorkers ? <Home /> : <Navigate to="/employer" />}
          />
          <Route
            path="/employer"
            element={AllWorkers ? <EmployerPage /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
