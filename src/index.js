import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    render() {
      return <p>React is awesome!</p>
    }
}

const wrapper = document.getElementById("main");
ReactDOM.render(<App />, wrapper);