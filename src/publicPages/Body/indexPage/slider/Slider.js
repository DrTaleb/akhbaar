import "./Slider.css"
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel fade className={"mt-4 container d-md-block d-none"}>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-3"
                    src={"img/banner_SlideBanner_LsltaY_2fd15c7e-9609-4489-aa6c-1be353783685.webp"}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-3"
                    src={"img/banner_SlideBanner_eToHw8_400130a3-b5c2-49ab-926d-9b11891dda6e.webp"}
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-3"
                    src={"img/banner_SlideBanner_BIyorb_60c0a564-0eef-4049-943e-fd9ecc3836aa.webp"}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;