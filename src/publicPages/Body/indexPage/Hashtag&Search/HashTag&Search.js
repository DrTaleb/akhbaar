import "./Hashtag&Serch.css"
import {Fragment} from "react";
import HotHashtagSection from "./HotHashtagSection/HotHashtagSection";
import SearchInputSection from "./SearchInputSection/SearchInputSection";
export default function HashTagSearch(){
    return(
        <div className={"container mt-4"}>
            <div className="d-flex flex-row flex-wrap justify-content-between gap-2">
                <HotHashtagSection></HotHashtagSection>
                <SearchInputSection></SearchInputSection>
            </div>
        </div>

    )
}