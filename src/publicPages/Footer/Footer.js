import "./Footer.css"
import {Fragment} from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer(){
    const megaMenuItems = [
        {
            id: 1,
            name: "تکنولوژی",
            subMenus: [
                {
                    id: 1,
                    name: "امنیت",
                    linkTo: "https://google.com"
                },
                {
                    id: 2,
                    name: "اینترنت و شبکه",
                    linkTo: "https://google.com"
                },
                {
                    id: 3,
                    name: "تبلت",
                    linkTo: "https://google.com"
                },
                {
                    id: 4,
                    name: "دوربین",
                    linkTo: "https://google.com"
                },
            ]
        },
        {
            id: 3,
            name: "تکنولوژی",
            subMenus: [
                {
                    id: 1,
                    name: "امنیت",
                    linkTo: "https://google.com"
                },
                {
                    id: 2,
                    name: "اینترنت و شبکه",
                    linkTo: "https://google.com"
                },
                {
                    id: 3,
                    name: "تبلت",
                    linkTo: "https://google.com"
                },
                {
                    id: 4,
                    name: "دوربین",
                    linkTo: "https://google.com"
                },
            ]
        },
        {
            id: 2,
            name: "تکنولوژی",
            subMenus: [
                {
                    id: 1,
                    name: "امنیت",
                    linkTo: "https://google.com"
                },
                {
                    id: 2,
                    name: "اینترنت و شبکه",
                    linkTo: "https://google.com"
                },
                {
                    id: 3,
                    name: "تبلت",
                    linkTo: "https://google.com"
                },
                {
                    id: 4,
                    name: "دوربین",
                    linkTo: "https://google.com"
                },
            ]
        },
        {
            id: 2,
            name: "تکنولوژی",
            subMenus: [
                {
                    id: 1,
                    name: "امنیت",
                    linkTo: "https://google.com"
                },
                {
                    id: 2,
                    name: "اینترنت و شبکه",
                    linkTo: "https://google.com"
                },
                {
                    id: 3,
                    name: "تبلت",
                    linkTo: "https://google.com"
                },
                {
                    id: 4,
                    name: "دوربین",
                    linkTo: "https://google.com"
                },
            ]
        },
        {
            id: 2,
            name: "تکنولوژی",
            subMenus: [
                {
                    id: 1,
                    name: "امنیت",
                    linkTo: "https://google.com"
                },
                {
                    id: 2,
                    name: "اینترنت و شبکه",
                    linkTo: "https://google.com"
                },
                {
                    id: 3,
                    name: "تبلت",
                    linkTo: "https://google.com"
                },
                {
                    id: 4,
                    name: "دوربین",
                    linkTo: "https://google.com"
                },
            ]
        },
    ]

    return(
        <Fragment>
            <footer className="footer">
                <section className="footer-social-section flex-wrap">
                    <div className="col-lg-5 col-12">
                        <h4>
                            مارا در شبکه های اجتماعی دنبال کنید.
                        </h4>
                        <p>
                            شبکه‌های اجتماعی دیجیاتو سریع‌ترین روش دسترسی به اخبار فناوری، علم و خودرو است. اگر
                            می‌خواهید به‌روز
                            باشید، شبکه‌های اجتماعی دیجیاتو را دنبال کنید.
                        </p>
                        <section className="social-icon-section">
                            <ul>
                                <li className="icon-item">
                                    <a href="#" className="icon-link">
                                        <i>
                                            <TwitterIcon/>
                                        </i>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li className="icon-item">
                                    <a href="#" className="icon-link">
                                        <i>
                                            <InstagramIcon/>
                                        </i>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li className="icon-item">
                                    <a href="#" className="icon-link">
                                        <i>
                                            <FacebookIcon/>
                                        </i>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li className="icon-item">
                                    <a href="#" className="icon-link">
                                        <i>
                                            <InstagramIcon/>
                                        </i>
                                    </a>
                                </li>
                            </ul>

                        </section>

                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="d-flex flex-column">
                            <label className="ps-3 mb-3" htmlFor="NewsEmail">عضویت در خبرنامه</label>
                            <div className="news-letter-email-parent d-flex flex-row">
                                <input placeholder="ایمیل خود را وارد کنید" className="news-letter-email-input"
                                       id="NewsEmail"
                                       type="email"/>
                                    <a className="btn news-letter-email-btn">ارسال</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-items-section flex-wrap">
                    {megaMenuItems.map(item =>
                        <div key={item.id} className="footer-section col-xl col-lg-2 col-md-3 col-sm-5 col-12">
                            <h5 className="footer-title">
                                {item.name}
                            </h5>
                            {item.subMenus.map(item =>
                                <a key={item.id} className="footer-item">
                                    {item.name}
                                </a>
                               )}
                        </div>
                    )}
                </section>
            </footer>
        </Fragment>
    )
}