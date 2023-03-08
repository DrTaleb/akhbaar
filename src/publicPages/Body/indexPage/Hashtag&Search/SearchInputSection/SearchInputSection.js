import "./SearchInputSection.css"
import {Fragment} from "react";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchInputSection(){
    return(
        <Fragment>
            <div className="content d-flex flex-column col-xl col-12 shadow-sm py-3 gap-2 px-sm-4 px-2">
                <div className="d-flex flex-row">
                    <div className="title-parent w-100">
                        <h5 className="main-title- text-capitalize header-title">
                            جستجوی میان هشتگ ها
                        </h5>
                    </div>
                </div>
                <div className="col-12 d-flex flex-row justify-content-center justify-content-xl-start">
                    <div className="col-12 col-lg-10 d-flex flex-column justify-content-center">
                        <div className="news-letter-email-parent d-flex flex-row justify-content-center">
                            <input placeholder="مثال : استارتاپ" className="news-letter-email-input"
                                   id="hashtags"
                                   type="search"/>
                                <button type="submit" className="btn news-letter-email-btn">
                                    <SearchIcon></SearchIcon>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}