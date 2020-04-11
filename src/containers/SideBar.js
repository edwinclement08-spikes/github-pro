import React, { Component } from "react";
import { FavouriteRepo } from "../components/FavouriteRepo";
import { PullRequest } from "../components/PullRequest";
export class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSideBar: true,
        }
    }
    renderFavourite = () => {
        console.log("Inside Render Favourites");
        let row = [];
        let favourite = ["err_404", "BE_Project", "Angular Template"];
        favourite.map((value) => {
            row.push(<FavouriteRepo name={value} />);
        });
        return row;
    }
    renderPullRequests = () => {
        console.log("Inside Render Pull Request");
        let row = [];
        let pullRequests = ["added tree", "something", "another pull request"];
        pullRequests.map((value) => {
            row.push(<PullRequest name={value} />)
        });
        return row;
    }

    render() {
        return (
            <>
                {this.state.showSideBar && (
                    <div className="sideBar">
                        <div>
                            <h2>Favourties</h2>
                            {this.renderFavourite()}
                        </div>
                        <div>
                            <h2>Pull Request</h2>
                            {this.renderPullRequests()}
                        </div>
                        <div>
                            <h2>Tree</h2>
                        </div>
                    </div>
                )}
            </>
        );
    }
}