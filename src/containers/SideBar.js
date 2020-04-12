import React from "react";
import { FavouriteRepo } from "../components/FavouriteRepo";
import { PullRequest } from "../components/PullRequest";

export function SideBarFunction(props) {
  let favourite = props.favourites;
  let favRow = favourite.map((value) => <FavouriteRepo name={value} />);
  let pullRequests = props.pullRequests;
  let prRows = pullRequests.map((value) => <PullRequest name={value} />);
  return (
    <>
      {props.showSideBar && (
        <div className="sideBar">
          <div>
            <h2>Favourties</h2>
            {favRow}
          </div>
          <div>
            <h2>Pull Request</h2>
            {prRows}
          </div>
          <div>
            <h2>Tree</h2>
          </div>
        </div>
      )}
    </>
  );
}
