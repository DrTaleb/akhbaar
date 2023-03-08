import "./SideBarItem.css"
import {Fragment, useState} from "react";

export default function SideBarItem(props){
    const [myHideClass , setHideClass] = useState("sub-hide")
    function subMenuHandler(event){
        const element = event.target.classList[1]
        if(element === "main-menu-title") {
            myHideClass==="sub-hide" ? setHideClass("") : setHideClass("sub-hide")
        }
    }
    return(
        <Fragment>
            <li onClick={subMenuHandler} className={"menu-item sub-menu cursor-pointer"}>
                <a>
                    <span className="menu-title main-menu-title">{props.label}</span>
                </a>
                <div className={`side-bar-sub-menu ${myHideClass}`}>
                    <ul className="sub-ul">
                        {props.subRoutes.map((item, index)=>
                            <li key={index} className="menu-item">
                                <a >
                                    <span className="menu-title">{item}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

            </li>
        </Fragment>
    )
}