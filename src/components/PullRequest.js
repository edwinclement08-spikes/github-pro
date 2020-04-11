import React from "react";
import PullRequestIcon from "../utils/PullRequestIcon";
import "../css/treeStructure.css";
export const PullRequest = (props) => {
    return (
        <div className="rowContainer">
            <PullRequestIcon />
            <a href="#"> {props.name}</a>
        </div>
    );
}