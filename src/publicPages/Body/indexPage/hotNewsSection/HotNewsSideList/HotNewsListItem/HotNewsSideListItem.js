import "./HotNewsSideListItem.css"
import {Fragment} from "react";
export default function HotNewsSideListItem(props){

    return(
        <Fragment>
            <div className="news-chart-item col-12 px-1">
                <div className="news-chart-item-inner d-flex flex-column">
                    <div className="d-flex flex-column gap-2">
                        <span className="news-chart-item-title">
                            {props.date}
                        </span>
                        <span className="news-chart-item-text fw-bolder">
                            {props.title}
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <img className="news-chart-img" src="img/image-file-extensions.webp"/>
                </div>
            </div>
        </Fragment>
    )
}