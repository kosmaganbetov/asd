import Tourmate from "./container/Tourmate/Tourmate";
import { Outlet, Route, Routes } from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import MainPage from "./container/MainPage/MainPage";
import Register from "./container/Register/Register";
import RegisterEmail from "./container/RegisterEmail/RegisterEmail";
import Login from "./container/Login/Login";
import Tour from "./container/Tour/Tour";
// import data from "./MockUps/TourmateData.json";

function App() {
  // const tourmate = data;
  return (
    <Routes>
      <Route
        element={
          <>
            <AppToolbar />
            <main>
              <Outlet />
            </main>
          </>
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path={"/:id"} element={<Tourmate />} />
        <Route path="/tours/:id" element={<Tour />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/email" element={<RegisterEmail />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
