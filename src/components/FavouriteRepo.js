import React from "react";
import BookmarkIcon from "../assets/image/icon/bookmark.svg";
import "../css/treestructure.css";
export const FavouriteRepo = (props) => {
  return (
    <>
      <div className="rowContainer">
        <img src={BookmarkIcon} />
        <a href="">{props.name}</a>
      </div>
    </>
  );
};
