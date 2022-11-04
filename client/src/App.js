import Tourmate from "./container/Tourmate/Tourmate";
import { Outlet, Route, Routes } from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import MainPage from "./container/MainPage/MainPage";

function App() {
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
        <Route path={"/tourmate"} element={<Tourmate />} />
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
