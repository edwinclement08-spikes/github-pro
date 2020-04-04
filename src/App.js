import React from "react";
import { connect } from "react-redux";

import { createTestAction } from "./actions";
import "./App.css";


const App = (props) => {
  const buttonPress = (event) => {
    props.createTestAction("Testing this");
    event.stopPropagation();
  }
  console.log("list", typeof props.list)
  console.log( Array.from(props.list))

  return (
    <div className="App">
      <div onClick={buttonPress}>Click me</div>
      <br />
      <ol>
        {props.list.map(x => <li>{x}</li>)}
      </ol>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("state", state);
  
  return { list: [...state.list]  };
};

export default connect(mapStateToProps, { createTestAction })(App);
// export default App;
