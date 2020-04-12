import React from "react";
import { connect } from "react-redux";

import { createTestAdd, createTestClear } from "./actionCreators/actions";
import "./App.css";
import { SideBarFunction } from "./containers/SideBar";

const App = (props) => {
  const buttonPress = (event) => {
    props.createTestAdd("Testing this");
    event.stopPropagation();
  }

  const clear = (e) => {
    props.createTestClear();
    e.stopPropagation();
  }
  let localProps = {
    showSideBar: true,
    favourites : ["err_404", "BE_Project", "Angular Template"],
    pullRequests : ["added tree", "something", "another pull request"],
  }
  return (
    <>
    <div className="">
      <div id="add" className="button" onClick={buttonPress}>Add</div>
      <div id="clear" className="button" onClick={clear}>Clear</div>
      <SideBarFunction {...localProps}/>
      <br />
      <ol>
        {props.list.map((x, i) => <li key={i}>{x}</li>)}
      </ol>
    </div>
    </>
  );
}

const mapStateToProps = state => {
  return { list: [...state.list] };
};

export default connect(mapStateToProps, { createTestAdd, createTestClear })(App);
// export default App;
