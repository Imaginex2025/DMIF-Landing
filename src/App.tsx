import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { APPROUTES } from "./Routes/appRoutes";
import { MainLayout } from "./Layout/MainLayout";
import Programs from "./Pages/Programs";
import Error from "./Pages/Error";
import { Contact } from "./Pages/Contact";
import About from "./Pages/About";
import WhyItMatters from "./Pages/WhyItMatters";
import ScrollToTop from "./utils/Navigate";
import ScrollToTopButton from "./Components/Common/ScrollToTopButton";

function App() {
  return (
    <>
      <MainLayout>
        
        <ScrollToTop/>
        <Routes>
          <Route path="*" element={<Error/>} />
          <Route path={APPROUTES.HOME} element={<Home />} />
          <Route path={APPROUTES.PROGRAMS} element={<Programs />} />
          <Route path={APPROUTES.CONTACT_US} element={<Contact />} />
          <Route path={APPROUTES.ABOUT} element={<About />} />
          <Route path={APPROUTES.WHY_IT_MATTERS} element={<WhyItMatters />} />
    
        </Routes>
              <ScrollToTopButton/>
      </MainLayout>
    </>
  );
}

export default App;
