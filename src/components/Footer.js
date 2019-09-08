import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-3">
                                <div className="sum-history w-footer">
                                    <h6 className="widget-title">Cty TNHH Hoàng Lam</h6>
                                    <div className="text-widget">
                                        Được thành lập vào tháng 10 năm 2003 đã có những bước phát triển không ngừng trong lĩnh
                                        vực cảnh quan đô thị.Với tác dụng cải tạo khí hậu – lá phổi của thành phố, nâng cao sức
                                        khỏe con người, cây xanh ngày càng đóng vai trò quan trọng. Để mang lại hiệu quả tối
                                        ưu, đồng thời đạt tính thẫm mỹ cao giữa kiến trúc và cây xanh cần am hiểu về các loại
                                        cây và có sự phối kết hợp lý.
                            </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-3">
                                <div className="product-list w-footer">
                                    <h6 className="widget-title">
                                        Danh mục sản phẩm
                            </h6>
                                    <div className="menu-footer-menu-container">
                                        <ul className="menu">
                                            <li className="menu-item"><a href="#">Cây Xanh</a> </li>
                                            <li className="menu-item"><a href="#">Cỏ</a> </li>
                                            <li className="menu-item"><a href="#">Dây Leo</a> </li>
                                            <li className="menu-item"><a href="#">Kiểng Có Hoa</a> </li>
                                            <li className="menu-item"><a href="#">Kiểng Lớn</a> </li>
                                            <li className="menu-item"><a href="#">Kiểng Lá</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-3">
                                <div className="service-list w-footer">
                                    <h6 className="widget-title">
                                        Dịch vụ
                            </h6>
                                    <div className="menu-footer-menu-container">
                                        <ul className="menu">
                                            <li className="menu-item"><a href="#">Tất cả dịch vụ</a> </li>
                                            <li className="menu-item"><a href="#">Tư vấn và thiết kế cảnh quan</a> </li>
                                            <li className="menu-item"><a href="#">Chăm sóc và bảo dưỡng cảnh quan</a> </li>
                                            <li className="menu-item"><a href="#">Thi công cảnh quan</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-3">
                                <div className="google-maps w-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <p>Copyright 2016. Developed by
                            <a href="#">123website</a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
