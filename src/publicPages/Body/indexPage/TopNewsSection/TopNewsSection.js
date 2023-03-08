import "./TopNewsSection.css"
import TopNewsItem from "./TopNewsItem/TopNewsItem";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function TopNewsSection() {
    const data = [
        {
            id: 1,
            linkTo : "https://google.com",
            title: "حقوق تیم کوک، مدیرعامل اپل در سال 2023 حدود 40 درصد کاهش پیدا می‌کند",
            image: "img/128282429_timcook-1280x720-1-548x350.jpeg",
            date: "1401/1/2",
            author: "محمد جواد طالب کارگر"
        },
        {
            id: 2,
            title: "منصوری تنها لامورگینی اوروس دو در جهان را ساخت",
            linkTo : "https://google.com",
            image: "img/Screenshot-2023-01-13-211232-548x350.jpeg",
            date: "1401/5/3",
            author: "محمد جواد طالب کارگر"
        },
        {
            id: 3,
            title: "یک سیاره فراخورشیدی جدید با اندازه مشابه زمین در کمربند حیات ستاره‌اش کشف شد",
            linkTo : "https://google.com",
            image: "img/ΤΟΙ700eNASA-JPL-Caltech-RobertHurt-scaled-1-548x350.jpeg",
            date: "1401/4/3",
            author: "محمد جواد طالب کارگر"
        },
    ]

    return (
        <div className={"container mt-4"}>
            <div className="content px-sm-4 px-2 pt-2  pb-4">
                <div className="d-flex flex-row mt-4 mb-4">
                    <div className="title-parent w-100">
                        <h5 className="main-title- text-capitalize header-title">
                            منتخب سردبیر
                        </h5>
                    </div>
                    <div className="d-flex flex-row justify-content-end col-lg-2 col-md-3 col-5 align-items-center">
                        <a href="#" className="btn btn-outline-secondary border-3">مشاهده همه</a>
                    </div>
                </div>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        991: {
                            width: 991,
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={60}
                >
                    {data.map((item) =>
                        <SwiperSlide key={item.id}>
                            <TopNewsItem {...item}></TopNewsItem>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>

    );
};