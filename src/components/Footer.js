import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook, faPhone, faMailBulk, faMobile } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-custom">
                    <div className="container">


                        <div className="row">
                            <div className="info-company col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                <div className="row">
                                    <div className="fm_company_left col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                        <div>
                                            <img alt="" style={{ width: 200, height: 200 }} src="https://gachviahe.vn/wp-content/uploads/2017/09/logo-my-thanh-14752410845.png" />
                                        </div>
                                    </div>
                                    <div className="fm_company_right col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                        <div className="wg-title">
                                            <span>
                                                <FontAwesomeIcon icon={faHome} className="icon-awesome" />
                                                <strong>THIẾT BỊ VÀ VẬT LIỆU XÂY DỰNG BÌNH DƯƠNG</strong>
                                            </span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAddressBook} className="icon-awesome" />
                                            <span>VĨNH PHÚ 41, HÒA LONG, THUẬN AN, BÌNH DƯƠNG</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faPhone} className="icon-awesome" />
                                            &nbsp;091.129.7.129
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faMailBulk} className="icon-awesome" />
                                            <span>nghitruong@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear">
                                </div>
                            </div>
                            <div className="info_link col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div id="nav_menu-2">
                                            <div className="wg-title"><span><strong>THÔNG TIN</strong></span></div>
                                            <div className="link-content">
                                                <div className="menu-thong-tin-container">
                                                    <ul id="menu-thong-tin">
                                                        <li><a href="#">Giới thiệu</a></li>
                                                        <li><a href="#">Liên hệ</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div id="nav_menu-3" className="widget node widget_nav_menu">
                                            <div className="wg-title"><span><strong>SẢN PHẨM</strong></span></div>
                                            <div className="link-content">
                                                <div className="menu-san-pham-container">
                                                    <ul id="menu-san-pham">
                                                        <li><a href="#">Sản phẩm 01</a></li>
                                                        <li><a href="#">Sản phẩm 01</a></li>
                                                        <li><a href="#">Sản phẩm 01</a></li>
                                                        <li><a href="#">Sản phẩm 01</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div id="nav_menu-4">
                                            <div className="wg-title"><span><strong>HƯỚNG DẪN</strong></span></div>
                                            <div className="link-content">
                                                <div className="menu-huong-dan-container">
                                                    <ul id="menu-huong-dan">
                                                        <li><a href="#">Giao Nhận – Thanh Toán</a></li>
                                                        <li><a href="#">Tiêu chí bán hàng</a></li>
                                                        <li><a href="#">Hướng dẫn thanh toán</a></li>
                                                        <li><a href="#">Chính sách bảo mật</a></li>
                                                        <li><a href="#">Hỗ trợ T2 – T7</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
