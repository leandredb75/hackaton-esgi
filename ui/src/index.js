import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Nomadic from "./components/Nomadic/nomadic.component";
// import Home from "./components/Home/home.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/device" element={<Nomadic />}></Route>
      </Routes>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
serviceWorker.unregister();
