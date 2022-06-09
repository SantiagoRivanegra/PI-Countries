import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Countries from "./components/Countries"
import CountryDetail from "./components/CountryDetail"
import Activities from "./components/Activities"
import PageNotFound from './components/PageNotFound'
import ActivityCreate from './components/ActivityCreate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/countries' component = {Countries}/>
        <Route exact path = '/countries/:id' component = {CountryDetail}/>
      
        <Route exact path = '/activity' component = {Activities}/>
        <Route exact path = '/activity/create' component = {ActivityCreate}/>

        <Route path = '*' component = {PageNotFound}/>
      </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;