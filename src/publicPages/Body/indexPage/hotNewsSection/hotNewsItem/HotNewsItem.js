// import "./HotNewsItem.css"
// import {Fragment} from "react";
//
// export default function HotNewsItem(props){
//
//     return(
//         <Fragment>
//             <div className="projcard projcard-blue">
//                 <a href="#">
//                     <div className="projcard-innerbox">
//                         <img className="projcard-img"
//                              src="img/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp"/>
//                         <div className="projcard-textbox">
//                             <div className="projcard-subtitle">{props.author}</div>
//                             <div className="projcard-title">{props.title}</div>
//                             <div className="projcard-bar"></div>
//                             <div className="projcard-description text-justify mt-2">
//                                 {props.firstParagraph}
//                             </div>
//                             <div className="projcard-tagbox">
//                                 {props.hashtags.map((item ,index) =>
//                                     <span className="projcard-tag" key={index}>{item}</span>
//                                 )}
//                             </div>
//                             {/*<div className="projcard-statistics d-flex flex-row gap-3">*/}
//                             {/*    <div className="d-flex flex-column align-items-center">*/}
//                             {/*                    <span>*/}
//                             {/*                        <i className="fa fa-eye text-secondary">*/}
//                             {/*                        </i>*/}
//                             {/*                    </span>*/}
//                             {/*        <span className="text-secondary">46</span>*/}
//                             {/*    </div>*/}
//                             {/*    <div className="d-flex flex-column align-items-center">*/}
//                             {/*                    <span>*/}
//                             {/*                        <i className="fa fa-thumbs-up text-secondary">*/}
//                             {/*                        </i>*/}
//                             {/*                    </span>*/}
//                             {/*        <span className="text-secondary">546</span>*/}
//                             {/*    </div>*/}
//                             {/*    <div className="d-flex flex-column align-items-center">*/}
//                             {/*                    <span>*/}
//                             {/*                        <i className="fa fa-comment text-secondary">*/}
//                             {/*                        </i>*/}
//                             {/*                    </span>*/}
//                             {/*        <span className="text-secondary">4</span>*/}
//                             {/*    </div>*/}
//                             {/*</div>*/}
//                         </div>
//                     </div>
//                 </a>
//             </div>
//         </Fragment>
//     )
// }

import Card from 'react-bootstrap/Card';
import "./HotNewsItem.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VisibilityIcon from '@mui/icons-material/Visibility';
function HotNewsItem(props) {
    const title = props.title.slice(0,90).concat("...");
    return (
        <Card className={"hot-news-card rounded-0 border-1 border-white"}>
            <Card.Img variant="top" src={props.image} className={"rounded-0"}/>
            <Card.Body>
                <Card.Text className={"my-card-text"}>
                    {title}
                </Card.Text>
            </Card.Body>
            <div className={"news-card-statistics justify-content-around"}>
                <div className={"d-flex flex-column text-secondary"}>
                    <span>{props.views}</span>
                    <VisibilityIcon></VisibilityIcon>
                </div>
                <div className={"d-flex flex-column text-secondary"}>
                    <span>{props.likes}</span>
                    <FavoriteIcon></FavoriteIcon>
                </div>
                <div className={"d-flex flex-column text-secondary"}>
                    <span>{props.comments}</span>
                    <ChatBubbleIcon></ChatBubbleIcon>
                </div>
            </div>
        </Card>
    );
}

export default HotNewsItem;