import "./CompanySection.css"
import CompanyItem from "./companyItem/CompanyItem";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function CompanySection() {
    const topCompanies = [
        {
            id: 1,
            name : "دلتاگروپ",
            image: "img/105-02-2022-mtBkSmlCmmYKSVFNYoC4HcQb4bi2TbpT1.png",
            description : "مجری طرح های فوق العاده فرانت"
        },
        {
            id: 1,
            name : "دیجیکالا",
            image: "img/divar.svg",
            description : "مجری طرح های فوق العاده فرانت"
        },
        {
            id: 1,
            name : "دیوار",
            image: "img/digikala.svg",
            description : "مجری طرح های فوق العاده فرانت"
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
                    {topCompanies.map((item) =>
                        <SwiperSlide key={item.id}>
                            <CompanyItem {...item}></CompanyItem>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>

    );
};