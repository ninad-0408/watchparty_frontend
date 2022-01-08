import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Mainpage from "./Components/Mainpage/Mainpage";
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
          <Route path="/main" exact>
            <Mainpage />
          </Route>
          <Route path="/main/:roomid" exact>
            <Mainpage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
