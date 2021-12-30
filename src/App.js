import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth.js"
import './App.css';
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/login' exact>
            <Auth />
        </Route>
      </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
