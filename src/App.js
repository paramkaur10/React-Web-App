import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main1 from "./Main1"
import Navigation from "./Navigation";
import Main from "./Main";
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import Blogpost1 from "./Blogpost1";
import Blogpost2 from "./Blogpost2";
import Blogpost3 from "./Blogpost3";

function App() {
  return (
      <Router>
      <div>
      <Header/>
    <div className="App">
     <Navigation/>
        < Main1 />
        <Switch>
            <Route path = "/Main" component = {Main}/>
            <Route path = "/Blogpost1" component = {Blogpost1}/>
            <Route path = "/Blogpost2" component = {Blogpost2}/>
            <Route path = "/Blogpost3" component = {Blogpost3}/>
        </Switch>
    </div>
      <Footer/>>
      </div>
      </Router>
  );
}

export default App;
