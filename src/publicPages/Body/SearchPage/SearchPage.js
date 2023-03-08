import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchPage.css"
import HotHashtagSection from "../indexPage/Hashtag&Search/HotHashtagSection/HotHashtagSection";
import {Col, Row} from "react-bootstrap";
import HotNewsItem from "../indexPage/hotNewsSection/hotNewsItem/HotNewsItem";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";


export default function SearchPage() {
    let location = useLocation()
    let params = useParams()
    const [apiItems, setApiItems] = useState([])
    let filteredApiByLabel;
    let categoryItems = []
    let subCategoryItems = []
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [ordering, setOrdering] = useState("")
    const [kindOfNews, setKindOfNews] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [searched, setSearched] = useState("")
    useEffect(async () => {
        await fetch("https://akhbaar-4800d-default-rtdb.firebaseio.com/category.json")
            .then(response => response.json())
            .then(data => Object.entries(data)).then(item => setApiItems(item))
    }, []);
    useEffect(() => {
        apiItems.map(item => categoryItems.push(item[1].label))
        apiItems.filter(item => item[1].label === params.label).map(item => item[1].subRoutes.map(item => subCategoryItems.push(item)))
    })

    useEffect(() => {
        if (location.pathname.indexOf("/category") === 0) {
            setCategory(params.label)
            setSubCategory(params.sub)
            let p = "vddv"
        }
    }, [params]);
    const categoryHandler = (value) => {
        setCategory(value)
    }
    const subCategoryHandler = (value) => {
        setSubCategory(value)
    }
    const orderingHandler = (value) => {
        setOrdering(value)
    }
    const kingOfNewsHandler = (value) => {
        setKindOfNews(value)
    }
    const orderByHandler = (value) => {
        setOrderBy(value)
    }
    const searchHandler = (value) => {
        setSearched(value)
    }


    return (
        <div className={"container mt-3"}>
            <div className={"parent mx-lg-3 rounded-3 mt-0 content d-flex flex-column py-4 px-md-3 px-1"}>
                <div className={"d-flex flex-row flex-wrap gap-3"}>
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
                                <div className="search-section-parent d-flex flex-row justify-content-center">
                                    <input placeholder="مثال : استارتاپ" className="search-section-input"
                                           value={searched}
                                           type="search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HotHashtagSection></HotHashtagSection>
                </div>
                <div className={"d-flex flex-row flex-wrap gap-md-4 gap-2 mt-4"}>
                    <Col xs={"12"} md={"3"} lg={"3"} xl={"2"}>
                        <Autocomplete
                            className={"content rounded-2"}
                            disablePortal
                            onChange={(event, value) => categoryHandler(value)}
                            value={category}
                            options={categoryItems}
                            sx={{"& fieldset": {border: 'none'}}}
                            renderInput={(item) => <TextField {...item} label="دسته بندی"/>}
                        />
                    </Col>
                    <Col xs={"12"} md={"3"} lg={"3"} xl={"2"}>
                        <Autocomplete
                            className={"content rounded-2"}
                            disablePortal
                            onChange={(event, value) => subCategoryHandler(value)}
                            value={subCategory}
                            options={subCategoryItems}
                            sx={{"& fieldset": {border: 'none'}}}
                            renderInput={(item) => <TextField {...item} label="زیر دسته"/>}
                        />
                    </Col>
                    <Col xs={"12"} md={"3"} lg={"3"} xl={"2"}>
                        <Autocomplete
                            className={"content rounded-2"}
                            disablePortal
                            onChange={(event, value) => orderingHandler(value)}
                            value={ordering}
                            id="combo-box-demo"
                            options={timeCategory}
                            sx={{"& fieldset": {border: 'none'}}}
                            renderInput={(item) => <TextField {...item} label="مرتب سازی"/>}
                        />
                    </Col>
                    <Col xs={"12"} md={"3"} lg={"3"} xl={"2"}>
                        <Autocomplete
                            className={"content rounded-2"}
                            disablePortal
                            onChange={(event, value) => kingOfNewsHandler(value)}
                            value={kindOfNews}
                            id="combo-box-demo"
                            options={kindOfPost}
                            sx={{"& fieldset": {border: 'none'}}}
                            renderInput={(item) => <TextField {...item} label="نوع خبر"/>}
                        />
                    </Col>
                    <Col xs={"12"} md={"3"} lg={"3"} xl={"2"}>
                        <Autocomplete
                            className={"content rounded-2"}
                            disablePortal
                            value={orderBy}
                            onChange={(event, value) => orderByHandler(value)}
                            id="combo-box-demo"
                            options={kindOfPost}
                            sx={{"& fieldset": {border: 'none'}}}
                            renderInput={(item) => <TextField {...item} label="مرتب سازی بر اساس"/>}
                        />
                    </Col>
                    <Col xs={"12"} md={"3"} lg={"3"} xl={"2"} className={"mt-4 mt-sm-0"}>
                        <Button className={"w-100 h-100"} color={"secondary"} endIcon={<SearchIcon/>}>
                            جستجو
                        </Button>
                    </Col>
                </div>
                <div className={"d-flex flex-row flex-wrap mt-5 shadow-sm"}>
                    {News.map((item) =>
                        <Col key={item.id} xs={"12"} md={"6"} lg={"4"} xl={"3"}>
                            <HotNewsItem {...item}></HotNewsItem>
                        </Col>)}
                </div>
            </div>
        </div>
    )
}

const timeCategory = [
    "جدید به قدیم", "قدیم به جدید"
]

const kindOfPost = [
    "متنی", "ویدیویی"
]


const News = [
    {
        id: 1,
        title: "1شیائومی از عینک واقعیت افزوده جدیدی با قابلیت‌های پیشرفته و وزن کم رونمایی کرد",
        image: "/img/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "ینک شیائومی کیفیت نمایش بالایی دارد و با قابلیت‌های کاربردی خود می‌تواند یک محصول جذاب باشد.",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        title: "2تمام تراشه‌های اسنپدراگون و  آینده کوالکام از ارتباط ماهواره‌ای پشتیبانی خواهند کرد",
        image: "/img/image-optimization.webp",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "کوالکام می‌گوید نسل بعدی تمام تراشه‌های اسنپدراگون، از سری 4 گرفته تا 8، از ارتباط ماهواره‌ای اسنپدراگون Satellite پشتیبانی خواهند کرد.",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        title: "3لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
        image: "/img/image-file-extensions.webp",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        id: 4,
        title: "4لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
        image: "/img/vecteezy_foggy-landscape-forest-in-the-morning-beautiful-sunrise-mist_5572340_85.jpg",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        id: 5,
        title: "5لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
        image: "/img/Yalda_games_to_play.jpg",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        id: 6,
        title: "6لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
        image: "/img/ΤΟΙ700eNASA-JPL-Caltech-RobertHurt-scaled-1-910x600.jpeg",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        id: 7,
        title: "7لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
        image: "/img/Yalda_games_to_play.jpg",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
    {
        id: 8,
        title: "8لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
        image: "/img/Apple_MacBook_Pro_M2_Pro_and_M2_Max_hero_230117_Full_Bleed_Image-910x600.jpg",
        category: "خودرو",
        subCategory: "آموزش خودرو",
        author: "شرکت طالب گستر",
        firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
        hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
        date: "1401/1/2",
        views: 544,
        likes: 455,
        comments: 34,
    },
]