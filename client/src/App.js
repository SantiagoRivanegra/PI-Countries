import './App.css';
import {Route, Switch } from "react-router-dom"
import CountryDetail from "./components/CountryDetail"
import Countries from "./components/Countries"
import Activities from "./components/Activities"
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div className="App">
      <switch>
        <Route path={'/'} component={LandingPage}/>
        <Route path={'/country/:id'} component={CountryDetail}/>
        <Route path={'/countries'} component={Countries}/>
      
        <Route path={'/activity'} component={Activities}/>
      </switch>
    </div>
  );
}

export default App;