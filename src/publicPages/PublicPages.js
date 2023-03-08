import './PublicPages.css'
import {Outlet} from "react-router-dom";
import MainNav from "./MainNav/MainNav";
import {Fragment} from "react";
import Footer from "./Footer/Footer";

export default function PublicPages(){



    return(
            <Fragment>
                <MainNav/>
                <div className={"parent"}>
                    <Outlet></Outlet>
                </div>
                <Footer/>
            </Fragment>
    )
}