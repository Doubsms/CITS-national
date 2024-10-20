import "./App.css";
import { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import MainLayout from "./layout/MainLayout";

import Loadable from "./ui-component/Loadable";
import MinimalLayout from "./layout/MinimalLayout";
import { StyledEngineProvider, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// project imports
import NavigationScroll from "./layout/NavigationScroll";
import themes from "./themes";
import NewConsultation from './pages/NewConsultation';
import Consultation from './pages/Consultation';

const Connexion = Loadable(lazy(() => import("./pages/connexion")));
const Home = Loadable(lazy(() => import("./pages/Home")));

const DashboardDefault = Loadable(
  lazy(() => import("./views/dashboard/Default"))
);

function App() {
  const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes>
            <Route path="/" element={<MainLayout />}>
            
              <Route path="" element={<DashboardDefault />} />
              <Route path="/dashboard" element={<DashboardDefault />} />
              <Route path="/newconsultation" element={<NewConsultation />} />
              <Route path="/consultation" element={<Consultation />} />
            </Route>
            <Route
              path="/home"
              element={
                <div>
                  <h1 className="text-3xl text-center py-5 text-blue-400 font-bold uppercase">Medical Home Page</h1>
                </div>
              }
            />
            <Route
              path="/connexion"
              element={
                <>
                  <MinimalLayout />
                  <Connexion />
                </>
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <h1 className="text-3xl text-center py-5 text-red-400 font-bold uppercase">Error page 404</h1>
                   
                </div>
              }
            />
          </Routes>
          
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
serviceWorker.unregister();
export default App;
