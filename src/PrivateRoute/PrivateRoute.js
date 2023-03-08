import {Navigate, Outlet} from "react-router-dom";
import PublicPages from "../publicPages/PublicPages";
import MyVerticallyCenteredModal from "../publicPages/LoginModal/LoginModal";
import {useState} from "react";

export default function PrivateRoute(){
    let isLogin = false


    return(
        <div>
        {
           isLogin ? <Outlet/> : <Navigate to={"/"}/>
        }
        </div>
    )
}