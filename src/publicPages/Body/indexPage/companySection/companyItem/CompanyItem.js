import "./CompanyItem.css"
import {Fragment} from "react";

export default function CompanyItem(props){

    return(
        <Fragment>
            <div className="company-card d-flex flex-column align-items-start">
                <div className="company-img-div d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img className="company-img h-100"
                         src={props.image}/>
                </div>
                <div className="company-card-content px-4">
                    <h4>{props.name}</h4>
                    <p className="text-justify">
                        {props.description}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}