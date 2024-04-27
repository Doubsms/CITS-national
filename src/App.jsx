import "./App.css";
import { lazy } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
//import Connexion from "./pages/connexion";
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { store } from './store/index';
//import Home from "./pages/Home";

import Loadable from './ui-component/Loadable';
import MinimalLayout from './layout/MinimalLayout';

const Connexion = Loadable(lazy(() => import('./pages/connexion')));
const  Home = Loadable(lazy(() => import('./pages/Home')));

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<><MinimalLayout /><Connexion /></>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
serviceWorker.unregister();
export default App;
