import "./HotHashtagSection.css"
import {Fragment} from "react";

export default function HotHashtagSection(){


    return(
        <Fragment>
            <div className="content d-flex flex-column col-xl col-12 shadow-sm py-3 gap-2 px-sm-4 px-2">
                <div className="d-flex flex-row">
                    <div className="title-parent w-100">
                        <h5 className="main-title- text-capitalize header-title">
                            هشتگ های داغ
                        </h5>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap gap-lg-4 gap-3 px-3">
                    <a className="text-dark" href="#">
                        #قیمت_دلار
                    </a>
                    <a className="text-dark" href="#">
                        #اپل
                    </a>
                    <a className="text-dark" href="#">
                        #استارتاپ
                    </a>
                    <a className="text-dark" href="#">
                        #اپل
                    </a>
                    <a className="text-dark" href="#">
                        #اپل
                    </a>
                    <a className="text-dark" href="#">
                        #اپل
                    </a>
                    <a className="text-dark" href="#">
                        #اپل
                    </a>
                    <a className="text-dark" href="#">
                        #اپل
                    </a>
                </div>
            </div>

        </Fragment>
    )
}