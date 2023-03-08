import "./TopNav.css"
import {Fragment, useState} from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Image} from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import {Fab} from "@mui/material";
import {Link} from "react-router-dom";
import MyVerticallyCenteredModal from "../../LoginModal/LoginModal";

export default function TopNav() {
    let isLogin = true
    const [modalShow, setModalShow] = useState(false);


    return (
        <Fragment>
            <Navbar sticky={"top"} bg={"white"} className={"shadow-sm dir-sm-ltr"}>
                <Container fluid={true} className={"mx-md-5 mx-2"}>
                    <Navbar.Brand>
                        <Link to={"/"}>
                            <Image className={"main-logo"} src={"/img/main-paya360-logo.webp"}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <div className={"d-none d-md-flex justify-content-end gap-3"}>
                        <Fab size={"small"} className={"bg-white shadow-sm"}>
                            <BedtimeRoundedIcon color="action"/>
                        </Fab>
                        <Link to={"/search"}>
                            <Fab color="text" className={"bg-white shadow-sm"} size={"small"}>
                                <SearchIcon color="action"/>
                            </Fab>
                        </Link>
                        {isLogin ?
                            <Fragment>


                            </Fragment>
                            :
                            <Fab color="text" className={"bg-white shadow-sm"} size={"small"}
                                 onClick={() => setModalShow(true)}>
                                <PersonIcon color="action"/>
                            </Fab>}
                    </div>
                </Container>
            </Navbar>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </Fragment>
    )
}