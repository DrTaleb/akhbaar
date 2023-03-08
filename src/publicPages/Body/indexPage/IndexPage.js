import "./IndexPage.css"
import Slider from "./slider/Slider";
import HashTagSearch from "./Hashtag&Search/HashTag&Search";
import TopNewsSection from "./TopNewsSection/TopNewsSection";
import HotNewsSection from "./hotNewsSection/HotNewsSection";
import SocialLinkSection from "./socialLinksSection/SocialLinkSection";
import VideoSection from "./VideosSection/VideoSection";
import NewsByCategorySection from "./newsByCategorySection/NewsByCategorySection";
import CompanySection from "./companySection/CompanySection";
import {Fragment} from "react";

export default function IndexPage() {

    return (
        <Fragment>
            <Slider></Slider>
            <HashTagSearch></HashTagSearch>
            <TopNewsSection></TopNewsSection>
            <HotNewsSection></HotNewsSection>
            <SocialLinkSection></SocialLinkSection>
            <VideoSection></VideoSection>
            <NewsByCategorySection></NewsByCategorySection>
            <CompanySection></CompanySection>
        </Fragment>
    )
}