import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth.js"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' exact>
          {/* <Navbar home /> */}
          <Auth />
        </Route>

      </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
