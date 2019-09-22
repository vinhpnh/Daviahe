import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
    render() {
        return (
            <header className="header-custom">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu">
                        <a href="#" className="icon-home">
                            <img src="http://localhost:3000/img/home-logo.jpg" width="95px" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto main-navbar">
                                <li className="nav-item">
                                    <Link className="nav-link" href={'/home'}>Trang Chủ <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Giới Thiệu</a>
                                </li>
                                <li className="nav-item has-sub-menu">
                                    <a className="nav-link" href="#">Sản phẩm</a>
                                    <span className="add-sub-menu"></span>
                                    <ul className="sub-menu" role="menu">
                                        <li className="sub-menu-item">
                                            <a href="#">
                                                Gạch AAA
                                            </a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="#">
                                                Gạch BBB
                                            </a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="#">
                                                Gạch CCC
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Liên Hệ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
