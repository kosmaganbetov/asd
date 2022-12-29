/* eslint-disable react/prop-types */
import Tourmate from "./container/Tourmate/Tourmate";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import MainPage from "./container/MainPage/MainPage";
import Register from "./container/Register/Register";
import RegisterEmail from "./container/RegisterEmail/RegisterEmail";
import Login from "./container/Login/Login";
import MapBlock from "./components/Map/Map";
import Tour from "./container/Tour/Tour";
import { useSelector } from "react-redux";
import ReserveTour from "./container/ReserveTour/ReserveTour";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ReservationAuth from "./container/ReservationAuth/ReservationAuth";

function App() {
  const user = useSelector((state) => state.users.user);

  return (
    <Routes>
      <Route
        element={
          <>
            <AppToolbar user={user} />
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
        <Route path="/map" element={<MapBlock />} />
        <Route path="/reservetour/:id" element={<ReserveTour />} />
        <Route
          path="/reservation/:id"
          element={
            <ProtectedRoute
              redirectUrl={"/reservetour/:id"}
              user={user}
              Navigate={Navigate}
              outlet={<Outlet />}
            >
              <ReservationAuth />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
