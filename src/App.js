import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Suspense, lazy } from 'react';
import Loader from './Components/Loader';
import "./App.css";
// import Login from "./Components/Login";
const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
const Room = lazy(() => import("./Components/Mainpage/Mainpage"));
const Home = lazy(() => import("./Components/Home"));
const ResetPassword = lazy(() => import("./Components/ResetPassword"));
const SetPassword = lazy(() => import("./Components/SetPassword"));
const Changepassword = lazy(() => import("./Components/Changepassword"));
// import ResetPassword from "./Components/ResetPassword";
// import SetPassword from "./Components/SetPassword";
// import Changepassword from "./Components/Changepassword"


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
          <Route path="/forgotpassword" exact>
            <ResetPassword />
          </Route>
          <Route path="/user/resetpassword/:token" exact>
            <SetPassword />
          </Route>
          <Route path="/user/changepassword/" exact>
            <Changepassword/>
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
