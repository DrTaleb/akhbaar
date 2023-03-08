import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./LoginModal.css"
import {useEffect} from "react";
import $ from "jquery";
export default function MyVerticallyCenteredModal(props) {
    function signinHandler(){
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }
    function loginHandler(){
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="login-modal-container" id="container">
                    <div className="form-container sign-up-container">
                        <form className="login-modal-form" action="#">
                            <h1 className="login-modal-h1">ساخت اکانت</h1>
                            <div className="social-container">
                                <a href="#" className="social login-modal-a"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social login-modal-a"><i
                                    className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social login-modal-a"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="login-modal-span">ایمیل خود را وارد کنید</span>
                            <input className="login-modal-input" type="text" placeholder="نام کاربری"/>
                            <input className="login-modal-input" type="email" placeholder="example@example.com"/>
                            <input className="login-modal-input" type="password" placeholder="رمز عبور"/>
                            <button className="login-modal-close-button">ثبت نام</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form className="login-modal-form">
                            <h1>ورود</h1>
                            <div className="social-container">
                                <a href="#" className="social login-modal-a"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social login-modal-a"><i
                                    className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social login-modal-a"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="login-modal-span">ورود با استفاده از ایمیل</span>
                            <input className="login-modal-input" type="email" placeholder="example@example.com"/>
                            <input className="login-modal-input" type="password" placeholder="رمز عبور"/>
                            <a href="#" className="login-modal-a">رمز خود را فراموش کرده اید؟</a>
                            <button className="login-modal-close-button">ورود</button>
                        </form>
                    </div>
                    <div className="login-modal-overlay-container">
                        <div className="login-modal-overlay">
                            <div className="login-modal-overlay-panel login-modal-overlay-left">
                                <h1>ورود به اکانت ...</h1>
                                <p className="login-modal-p">در صورتی که قبلا ثبت نام کردید کلیک کنید</p>
                                <button className="ghost login-modal-close-button" onClick={loginHandler}>ورود به اکانت</button>
                            </div>
                            <div className="login-modal-overlay-panel login-modal-overlay-right">
                                <h1>ثبت نام کنید !</h1>
                                <p>در صورتی که قبلا ثبت نام نکرده اید کلیک کنید.</p>
                                <button className="ghost login-modal-close-button" onClick={signinHandler}>ثبت نام</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}