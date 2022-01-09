import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Mainpage from "./Components/Mainpage/Mainpage";
import "./App.css";
import Home from "./Components/Home";
import { io } from "socket.io-client";
import { baseUrl } from "./Constants/baseUrl";

const token = JSON.parse(localStorage.getItem("profile"))?.token;
var socket = io(baseUrl, {
  extraHeaders: {
    Authorization: `Bearer ${token}`,
  },
});

function App() {
  return (
    <BrowserRouter>
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
            <Mainpage socket={socket} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
