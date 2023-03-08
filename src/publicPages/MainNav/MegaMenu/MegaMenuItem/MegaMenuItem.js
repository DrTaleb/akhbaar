import {Fragment} from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "./MegaMenuItem.css"
import {Link} from "react-router-dom";
export default function MegaMenuItem(props){
    const subMenus = props.subRoutes


    return(
        <Fragment>
            <Link className="mega-menu-opener nav-item nav-link active" to={`category/${props.label}`}>{props.label}</Link>
            <div className="mega-menu container pt-3">
                <h5>{props.label}</h5>
                <div className="mega-menu-ul d-flex flex-row flex-wrap align-items-start">
                    {subMenus ?
                        subMenus.map((item, index)=>
                            <Link key={index} to={`category/${props.label}/${item}`} className="mega-menu-item col-2">
                                <KeyboardDoubleArrowLeftIcon className={"nav-item-icon"}></KeyboardDoubleArrowLeftIcon>
                                {item}
                            </Link>
                        ) : null
                    }
                </div>
            </div>
        </Fragment>
    )
}