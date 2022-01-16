import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Room from "./Components/Mainpage/Mainpage";
import "./App.css";
import Home from "./Components/Home";

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
            <Room />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
