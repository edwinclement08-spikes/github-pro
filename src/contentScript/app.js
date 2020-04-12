import React from "react";
import { connect } from "react-redux";

import { createTestAdd, createTestClear } from "../actionCreators/actions";
import "./App.css";

const App = (props) => {
  const buttonPress = (event) => {
    props.createTestAdd("Testing this");
    event.stopPropagation();
  }

  const clear = (e) => {
    props.createTestClear();
    e.stopPropagation();
  }

  return (
    <div className="App">
      <div id="add" className="button" onClick={buttonPress}>Add</div>
      <div id="clear" className="button" onClick={clear}>Clear</div>
      <br />
      <ol>
        {props.list.map((x,i) => <div key={i}>{x}</div>)}
      </ol>
    </div>
  );
}

const mapStateToProps = state => {
  return { list: [...state.list]  };
};

export default connect(mapStateToProps, { createTestAdd, createTestClear })(App);
