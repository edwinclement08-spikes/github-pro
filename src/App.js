import React from "react";
import { connect } from "react-redux";

import { createTestAdd, createTestClear } from "./actions";
import "./App.css";

const App = (props) => {
  const buttonPress = (event) => {
    console.log("Adding")
    props.createTestAdd("Testing this");
    event.stopPropagation();
  }

  const clear = (e) => {
    console.log("clear")
    props.createTestClear();
    e.stopPropagation();
  }

  return (
    <div className="App">
      <div id="add" className="button" onClick={buttonPress}>Add</div>
      <div id="clear" className="button" onClick={clear}>Clear</div>
      <br />
      <ol>
        {props.list.map(x => <li>{x}</li>)}
      </ol>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("State Changed", state)
  return { list: [...state.list]  };
};

export default connect(mapStateToProps, { createTestAdd, createTestClear })(App);
// export default App;
