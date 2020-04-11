import React from "react";
import BookmarkIcon from "../utils/BookmarkIcon";
import "../css/treeStructure.css";
export const FavouriteRepo = (props) => {
    return (
        <>
            <div className="rowContainer">
                <BookmarkIcon />
                <a href="">{props.name}</a>
            </div>
        </>
    );
}