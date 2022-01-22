import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Suspense, lazy } from 'react';
import Loader from './Components/Loader';
import "./App.css";
// import Login from "./Components/Login";
const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
const Room = lazy(() => import("./Components/Mainpage/Mainpage"));
const Home = lazy(() => import("./Components/Home"));
// import Signup from "./Components/Signup";
// import Room from "./Components/Mainpage/Mainpage";

// import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><Loader margin/></div>}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/room/:roomId">
              <Room />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
