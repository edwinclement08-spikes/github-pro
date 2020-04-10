import React from "react";
import { connect } from "react-redux";
import { createTestAdd, createTestClear } from "./actions";
import keys from "./keys.json";
import "./App.css";

const App = (props) => {
  const buttonPress = (event) => {
    fetch("https://api.github.com/repos/joshua-noronha13/portfolio/pulls", {
      headers: new Headers({
        Authorization: keys.personalAccessToken,
      }),
    })
      .then((response) => response.json())
      .then((pullRequests) => {
        console.log(pullRequests);
        props.createTestAdd(pullRequests[0].base.label);
        event.stopPropagation();
      });
  };

  const clear = (e) => {
    props.createTestClear();
    e.stopPropagation();
  };

  return (
    <div className="App">
      <div id="add" className="button" onClick={buttonPress}>
        Add
      </div>
      <div id="clear" className="button" onClick={clear}>
        Clear
      </div>
      <br />
      <ol>
        {props.list.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: [...state.list] };
};

export default connect(mapStateToProps, { createTestAdd, createTestClear })(
  App
);
// export default App;
