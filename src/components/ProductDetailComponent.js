import React, { Component } from 'react';

export default class ProductDetailComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="detail-content">
                    <div className="row">
                        <div className="col-sm-5 col-xs-12">
                            <img className="product-detail-img" src="http://localhost:3000/img/gach-detail.jpeg" alt="First image" />
                        </div>
                        <div className="col-sm-7 col-xs-12">
                            <h1 className="title">
                                Gạch lát tự chèn chữ nhật
                            </h1>
                            <div className="description">
                                <p><span>Tiêu chuẩn: TCVN 6476: 2011 hoặc theo yêu cầu đặt hàng</span></p>
                                <p><span>Giấy chứng nhận hợp chuẩn</span></p>
                                <p><span>Chứng chỉ thí&nbsp;nghiệm: Trung Tâm 3 hoặc ĐH Bách Khoa TP HCM hoặc tương đương</span></p>
                                <p><span>Cường độ: M20, M25, M30, M35, M40, M45, M50</span></p>
                                <p><span>Kích thước: 200x100mm;&nbsp;Chiều dày: 60mm,&nbsp;</span></p>
                                <p><span>Số viên trong 1m2: 50 viên;Trọng lượng: 2.8kg/viên- 3kg/viên</span></p>
                                <p><span>Màu sắc:&nbsp;Màu xám,&nbsp;Màu đỏ,&nbsp;Màu vàng,&nbsp;Màu xanh</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-info">
                        <div class="detail-header">
                            Chi tiết sản phẩm
                        </div>
                        <div className="detail-info">
                            <div></div>
                            <p><span>Mô tả sản phẩm</span></p>
                            <p><span>Công nghệ sản xuất: Công nghệ ép rung tầng số cao kết hợp ép thủy lực, tạo độ rắn chắc cho toàn viên gạch</span></p>
                            <p><span>Thiết bị sản xuất: Gạch được sản xuất trên dây chuyền tự động: Năng suất cao, chất lượng ổn định.</span></p>
                            <p><span>Nguyên liệu: Xi măng PC 40, Phụ gia Beton, Cát, Đámi bụi, Đámi sàn, Màu công nghiệp, nước sạch</span></p>
                            <p><span>Ứng dụng: Lát vỉa hè&nbsp;đường &amp;&nbsp;mặt đường Khu Công Nghiệp, Khu dân cư, Khu cảng, Khu công viên, Sân Golf</span></p>
                            <p><span>Tùy theo cường độ, lớp gạch sau khi lát có&nbsp;thể sử dụng cho người đi bộ, các phương tiện xe lưu thông: xe hơi, xe tải, xe ben, xe container,</span></p>
                            <p><span>Mãsố: TPS-Hxx/yy</span></p>
                            <p><span>TPS: Ký&nbsp;hiệu sản phẩm gạch ngói xi măng không nung của Công Ty CP Thanh Phúc Phương Nam</span></p>
                            <p><span>H: Gạch lát kiểu Hình Chữ Nhật</span></p>
                            <p><span>xx: Màu trên bề mặt sản phẩm. "O": Màu xám, "R": Màu đỏ, "Y": Màu vàng, "G": Màu xanh</span></p>
                            <p><span>yy: Độ dày và&nbsp;Cường độ gạch. "6/20": dày 6cm - Mac 20, "6/30": dày 6cm - Mac 30, "8/30": dày 8cm - Mac 30, "8/50": dày 8cm - Mac 50.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
