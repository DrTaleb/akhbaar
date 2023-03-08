import "./TopNewsItem.css"


export default function TopNewsItem(props) {

    return (
            <div>
                <a href={props.linkTo} className="trend-card">
                    <img src={props.image} className="trend-card-image"
                         alt=""/>
                    <div className="trend-card-overlay px-4 py-3">
                        <div className="col-12 d-flex flex-row justify-content-start">
                            <span className="border-bottom border-1 ">
                                {props.date}
                            </span>
                        </div>
                        <span className="text-center">
                            {props.title}
                        </span>
                        <div className="col-12 d-flex flex-row justify-content-end">
                            <span className="border-top border-1">
                                {props.author}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
    )
}