// import "./VideoItem.css"
//
// export default function VideoItem(props){
//
//     return(
//             <div className="video-card card mb-3 border-0">
//                 <div className="row g-0 h-100">
//                     <div className="video-card-img col-md-4">
//                         <img src={props.image}
//                              className="h-100 w-100 rounded-start" alt="..."/>
//                         <a className="video-link btn bg-white border-0 rounded-circle">
//                             <img className="col-8" src={"img/Vector.svg"} alt=""/>
//                         </a>
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body d-flex flex-column justify-content-between h-100">
//                             <div className="d-flex flex-row justify-content-between">
//                                 <span className="small text-secondary">
//                                     {props.date}
//                                 </span>
//                                 <div className="d-flex flex-row gap-4">
//                                     <div className="d-flex flex-column align-items-center">
//                                         <span>
//                                             <i className="fa fa-eye text-secondary"></i>
//                                         </span>
//                                         <span className="text-secondary">
//                                             {props.views}
//                                         </span>
//                                     </div>
//                                     <div className="d-flex flex-column align-items-center">
//                                         <span>
//                                             <i className="fa fa-heart text-danger"></i>
//                                         </span>
//                                         <span>
//                                             {props.likes}
//                                         </span>
//                                     </div>
//                                     <div className="d-flex flex-column align-items-center">
//                                         <span>
//                                             <i className="fa fa-comment text-primary"></i>
//                                         </span>
//                                         <span>
//                                             {props.comments}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className="card-text">
//                                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
//                                 از
//                                 طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
//                                 سطرآنچنان که
//                                 لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
//                             </p>
//                             <div
//                                 className="d-flex flex-row align-items-center justify-content-start gap-3">
//                                 <img alt="" className="video-profile-img rounded-circle"
//                                      src={"img/yalda-books-main.jpg"}/>
//                                 <span className="small">
//                                     محمد جواد طالب کارگر
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

import Card from "react-bootstrap/Card";
import "./VideoItem.css"
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

function VideoItem(props) {
    const title = props.title.slice(0,80).concat("...");
    return (
        <Card className={"video-card rounded-0 border-1 border-white overflow-hidden"}>
            <Card.Img variant="top" src={props.image} className={"rounded-0 position-relative"}/>
            <div className={"video-overlay d-flex flex-row align-items-center justify-content-center"}>
                <img alt={""} className={"bg-white p-3 rounded-circle"} src={"img/Vector.svg"}/>
            </div>
            <div className={"video-card-statistics justify-content-around"}>
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

export default VideoItem;