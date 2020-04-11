import React from "react";
import { connect } from "react-redux";

import { createTestAdd, createTestClear } from "./actionCreators/actions";
import "./App.css";
import { PullRequest } from "./components/PullRequest";

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
    <div className="">
      <div id="add" className="button" onClick={buttonPress}>Add</div>
      <PullRequest />
      <div id="clear" className="button" onClick={clear}>Clear</div>
      <br />
      <ol>
        {props.list.map((x, i) => <li key={i}>{x}</li>)}
      </ol>
    </div>
  );
}

const mapStateToProps = state => {
  return { list: [...state.list] };
};

export default connect(mapStateToProps, { createTestAdd, createTestClear })(App);
// export default App;
