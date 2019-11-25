import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

function Main1() {
    return( <div>
        <Link to={'/Main'} >
        <h3>
            Click to open Blogpost
        </h3>
        </Link>
    </div>);
}

export default Main1;