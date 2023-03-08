import "./HotNewsSideList.css"
import {Fragment} from "react";
import HotNewsSideListItem from "./HotNewsListItem/HotNewsSideListItem";
export default function HotNewsSideList(listItems){
    console.log(listItems)
    return(
        <div className="news-chart px-2 d-flex flex-column gap-3">
            <div
                className="news-chart-icon d-flex flex-column justify-content-center align-items-center">
                <i className="fa fa-angle-down"></i>
            </div>
            <HotNewsSideListItem></HotNewsSideListItem>
        </div>
    )
}