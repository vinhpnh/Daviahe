import React, { Component } from 'react';

export default class SlideHeader extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-custom">
                        <img className="d-block w-100" src="img/img.jpg" alt="First slide" />
                        <div className="container">
                            <div className="carousel-text">
                                <div className="carousel-topheading">Chất lượng được đảm bảo</div>
                                <div className="carousel-heading">
                                    <h1>Khu vườn của bạn phát triển tự nhiên nhất</h1>
                                </div>
                                <div className="carousel-content">
                                    <p>
                                        <a href="#" className="btn btn-introduce">Giới Thiệu</a>&nbsp;
                            <a href="#" className="btn btn-contact">Liên Hệ</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-custom">
                        <img className="d-block w-100" src="img/img2.jpg" alt="Second slide" />
                        <div className="container">
                            <div className="carousel-text">
                                <div className="carousel-topheading">Chăm sóc chế độ đặc biệt</div>
                                <div className="carousel-heading">
                                    <h1>Cây xanh của bạn luôn xanh hơn phía sau hàng rào</h1>
                                </div>
                                <div className="carousel-content">
                                    <p>
                                        <a href="#" className="btn btn-introduce">Giới Thiệu</a>&nbsp;
                            <a href="#" className="btn btn-contact">Liên Hệ</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-custom">
                        <img className="d-block w-100" src="img/img3.jpg" alt="Third slide" />
                        <div className="container">
                            <div className="carousel-text">
                                <div className="carousel-topheading">Chất lượng được đảm bảo</div>
                                <div className="carousel-heading">
                                    <h1>Khu vườn của bạn phát triển tự nhiên nhất</h1>
                                </div>
                                <div className="carousel-content">
                                    <p>
                                        <a href="#" className="btn btn-introduce">Giới Thiệu</a>&nbsp;
                            <a href="#" className="btn btn-contact">Liên Hệ</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
