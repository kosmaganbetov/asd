import Tourmate from "./container/Tourmate/Tourmate";
import { Outlet, Route, Routes } from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import MainPage from "./container/MainPage/MainPage";
import data from "./MockUps/TourmateData.json";

function App() {
  const tourmate = data;
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
        <Route
          path={"/tourmate"}
          element={
            <Tourmate
              name={tourmate.name}
              timeToAnswer={tourmate.timeToAnswer}
              photo={tourmate.photo}
              verified={tourmate.verified}
              languages={tourmate.languages}
              tours={tourmate.tours}
              city={tourmate.city}
            />
          }
        />
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
