import "./HotNewsSection.css"
import HotNewsItem from "./hotNewsItem/HotNewsItem";
import hotNewsItem from "./hotNewsItem/HotNewsItem";


export default function HotNewsSection() {
    const hotNewsData = [
        {
            id: 1,
            title: "1شیائومی از عینک واقعیت افزوده جدیدی با قابلیت‌های پیشرفته و وزن کم رونمایی کرد",
            image: "./img/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp",
            author: "شرکت طالب گستر",
            firstParagraph: "ینک شیائومی کیفیت نمایش بالایی دارد و با قابلیت‌های کاربردی خود می‌تواند یک محصول جذاب باشد.",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 2,
            title: "2تمام تراشه‌های اسنپدراگون و  آینده کوالکام از ارتباط ماهواره‌ای پشتیبانی خواهند کرد",
            image: "./img/image-optimization.webp",
            author: "شرکت طالب گستر",
            firstParagraph: "کوالکام می‌گوید نسل بعدی تمام تراشه‌های اسنپدراگون، از سری 4 گرفته تا 8، از ارتباط ماهواره‌ای اسنپدراگون Satellite پشتیبانی خواهند کرد.",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
        {
            id: 3,
            title: "3لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
            image: "./img/image-file-extensions.webp",
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
            image: "./img/vecteezy_foggy-landscape-forest-in-the-morning-beautiful-sunrise-mist_5572340_85.jpg",
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
            image: "./img/Yalda_games_to_play.jpg",
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
            image: "./img/ΤΟΙ700eNASA-JPL-Caltech-RobertHurt-scaled-1-910x600.jpeg",
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
            image: "./img/Yalda_games_to_play.jpg",
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
            image: "./img/Apple_MacBook_Pro_M2_Pro_and_M2_Max_hero_230117_Full_Bleed_Image-910x600.jpg",
            author: "شرکت طالب گستر",
            firstParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
            hashtags: ["#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار", "#قیمت_دلار"],
            date: "1401/1/2",
            views: 544,
            likes: 455,
            comments: 34,
        },
    ]
    // constants of each col in xl = 1200>px size

    const firstXlColItems = hotNewsData.filter((item, index) => index <= Math.floor(hotNewsData.length / 3))
    const secondXlColItems = hotNewsData.filter((item, index) => index <= Math.floor(hotNewsData.length / 3 * 2) && index > Math.floor(hotNewsData.length / 3))
    const thirdXlItems = hotNewsData.filter((item, index) => index > Math.floor(hotNewsData.length / 3 * 2))
    // constants of each col in sm to xl = to 1200px size
    const firstSmColItems = hotNewsData.filter((item, index) => index < hotNewsData.length / 2)
    const secondSmColItems = hotNewsData.filter((item, index) => index >= hotNewsData.length / 2)
    return (
        <div className={"container mt-4"}>
            <div className="content py-4 px-sm-4 px-2 d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="title-parent w-100">
                        <h5 className="main-title- text-capitalize header-title">
                            اخبار داغ امروز
                        </h5>
                    </div>
                    <div className="d-flex flex-row justify-content-end col-lg-2 col-md-3 col-5 align-items-center">
                        <a href="#" className="btn btn-outline-secondary border-3">مشاهده همه</a>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className={"d-none d-lg-flex col-xl-9 col-md-12 col-12"}>
                        <div className="video-card-section d-flex flex-row flex-wrap mt-4 shadow rounded">
                            <div className={"col-4"}>
                                {firstXlColItems.map((item) =>
                                    <HotNewsItem key={item.id} {...item}></HotNewsItem>
                                )}
                            </div>
                            <div className={"col-4"}>
                                {secondXlColItems.map((item) =>
                                    <HotNewsItem key={item.id} {...item}></HotNewsItem>
                                )}
                            </div>
                            <div className={"col-4"}>
                                {thirdXlItems.map((item) =>
                                    <HotNewsItem key={item.id} {...item}></HotNewsItem>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex d-lg-none col-xl-9 col-md-12 col-12"}>
                        <div className="video-card-section d-flex flex-row flex-wrap mt-4 shadow rounded">
                            <div className={"col-12 col-md-6"}>
                                {firstSmColItems.map((item) =>
                                    <HotNewsItem key={item.id} {...item}></HotNewsItem>
                                )}
                            </div>
                            <div className={"col-12 col-md-6"}>
                                {secondSmColItems.map((item) =>
                                    <HotNewsItem key={item.id} {...item}></HotNewsItem>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="news-chart-parent col-3 px-3 mt-4 d-none d-xl-block">
                        <div className="news-chart px-2 d-flex flex-column gap-3">
                            <div
                                className="news-chart-icon d-flex flex-column justify-content-center align-items-center">
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}