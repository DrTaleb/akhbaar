import "./VideoSection.css"
import VideoItem from "./VideoItem/VideoItem";


export default function VideoSection() {
    const videoData = [
        {
            id: 1,
            title: "شیائومی از عینک واقعیت افزوده جدیدی با قابلیت‌های پیشرفته و وزن کم رونمایی کرد",
            image: "./img/Apple_MacBook_Pro_M2_Pro_and_M2_Max_hero_230117_Full_Bleed_Image-910x600.jpg",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 2,
            title: "تمام تراشه‌های اسنپدراگون و  آینده کوالکام از ارتباط ماهواره‌ای پشتیبانی خواهند کرد",
            image: "./img/camera_lense_0.jpeg",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 3,
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/image-file-extensions.webp",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 4,
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/image-optimization.webp",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 5,
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 6,
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/realestate-image-design-maker.jpg",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 7,
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/realestate-image-design-maker.jpg",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 8,
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/realestate-image-design-maker.jpg",
            author: "شرکت طالب گستر",
            authorProfileImg: "",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
    ]


    const videoCardItems = videoData
    const firstXlColItems = videoCardItems.filter((item, index) => index <= Math.floor(videoCardItems.length / 3))
    const secondXlColItems = videoCardItems.filter((item, index) => index <= Math.floor(videoCardItems.length / 3 * 2) && index > Math.floor(videoCardItems.length / 3))
    const thirdXlItems = videoCardItems.filter((item, index) => index > Math.floor(videoCardItems.length / 3 * 2))

    // constants of each col in sm to xl = to 1200px size
    const firstSmColItems = videoData.filter((item, index) => index < videoData.length / 2)
    const secondSmColItems = videoData.filter((item, index) => index >= videoData.length / 2)
    return (
        <div className={"container mt-4"}>
            <div className="content px-2 px-sm-4 pt-4">
                <div className="d-flex flex-row my-2">
                    <div className="title-parent w-100">
                        <h5 className="main-title- text-capitalize header-title">
                            ویدیو های پربازدید
                        </h5>
                    </div>
                    <div className="d-flex flex-row justify-content-end col-lg-2 col-md-3 col-5 align-items-center">
                        <a href="#" className="btn btn-outline-secondary border-3">مشاهده همه</a>
                    </div>
                </div>
                <div className="video-section d-flex flex-row py-3">
                    <div className={"col-xl-9 col-lg-12 rounded-3 overflow-hidden shadow mt-4"}>
                        <div className={"d-none d-lg-flex col-12"}>
                            <div className="col-12 video-card-section d-flex flex-row rounded-3">
                                <div className={"col-4"}>
                                    {firstXlColItems.map((item) =>
                                        <VideoItem key={item.id} {...item}></VideoItem>
                                    )}
                                </div>
                                <div className={"col-4"}>
                                    {secondXlColItems.map((item) =>
                                        <VideoItem key={item.id} {...item}></VideoItem>
                                    )}
                                </div>
                                <div className={"col-4"}>
                                    {thirdXlItems.map((item) =>
                                        <VideoItem key={item.id} {...item}></VideoItem>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={"d-block d-lg-none col-12"}>
                            <div className="col-12 video-card-section d-flex flex-row rounded-3">
                                <div className={"col-12 col-md-6"}>
                                    {firstSmColItems.map((item) =>
                                        <VideoItem key={item.id} {...item}></VideoItem>
                                    )}
                                </div>
                                <div className={"col-12 col-md-6"}>
                                    {secondSmColItems.map((item) =>
                                        <VideoItem key={item.id} {...item}></VideoItem>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}