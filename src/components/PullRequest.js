import React from "react";
import PullRequestIcon from "../assets/image/icon/pullrequest.svg";
import "../css/treestructure.css";
export const PullRequest = (props) => {
    return (
        <div className="rowContainer">
            <img src={PullRequestIcon} alt=""/>
            <a href="#"> {props.name}</a>
        </div>
    );
}
