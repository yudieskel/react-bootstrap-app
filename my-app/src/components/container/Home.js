import React, { Component } from "react";
import HomeCart from "../ui/HomeCard";

export default class Home extends Component {

    homeCardReleases = {
        title: 'Release Planning',
        text: 'Define your Release',
        action: "/releases",
        textLink: "Start it"
    };
    homeCardBacklog = {
        title: 'Backlog Planning',
        text: 'Input your Release',
        action: "/backlog",
        textLink: "Start it"
    };
    homeCardSprints = {
        title: 'Sprint Planning',
        text: 'Define your Sprints',
        action: "/sprints",
        textLink: "Start it"
    };

    render() {
        return (
            <div className= "container text-center">
                <div className= "row">
                    <HomeCart {...this.homeCardReleases}/>
                    <HomeCart {...this.homeCardBacklog}/>
                    <HomeCart {...this.homeCardSprints}/>
                </div>
            </div>
        )
    }
}