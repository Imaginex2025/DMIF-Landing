import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { APPROUTES } from "./Routes/appRoutes";
import { MainLayout } from "./Layout/MainLayout";
import Programs from "./Pages/Programs";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path={APPROUTES.HOME} element={<Home />} />
          <Route path={APPROUTES.PROGRAMS} element={<Programs />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
