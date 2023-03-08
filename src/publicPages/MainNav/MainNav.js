import {Fragment} from "react";
import TopNav from "./TopNav/TopNav";
import MegaMenu from "./MegaMenu/MegaMenu";
export default function MainNav(){


    return(
        <Fragment>
            <TopNav></TopNav>
            <MegaMenu></MegaMenu>
        </Fragment>
    )
}