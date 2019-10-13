import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="container" id="contact-container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 contact-section">
                        <div className="widget-title">
                            <h1 title="Liên hệ">Liên hệ</h1>
                        </div>
                        <div className="main-content">
                            <div className="row">
                                <div className="col-md-6 leftPanel">
                                    <h1><span><strong>THIẾT BỊ VÀ VẬT LIỆU XÂY DỰNG BÌNH DƯƠNG</strong></span></h1>
                                    <div className="info">
                                        <h4 className="noidung"><span>Email: nghitruong@gmail.com</span></h4>
                                        <h4 className="noidung"><span>Địa chỉ: VĨNH PHÚ 41, HÒA LONG, THUẬN AN, BÌNH DƯƠNG</span></h4>
                                    </div>
                                </div>
                                <div className="col-md-6 rightPanel">
                                    <p className="notice-help" align="center">Quý khách có thể liên hệ với chúng tôi từ website này bằng cách điền đầy đủ những thông tin vào form liên hệ bên dưới. Chúng tôi sẽ liên hệ với Quý khách trong thời gian sớm nhất. Xin chân thành cảm ơn.</p>
                                    <form action="" method="post" className="contact-form" novalidate="novalidate">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Họ và tên" type="text" name="your-name" size="40" aria-required="true" aria-invalid="false" />
                                            <span className="field-required">*</span>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Địa chỉ" type="text" name="your-address" size="40" aria-required="true" aria-invalid="false" />
                                            <span className="field-required">*</span>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Số  điện thoại" type="text" name="your-phone" size="40" aria-required="true" aria-invalid="false" />
                                            <span className="field-required">*</span>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Email" type="email" name="your-email" size="40" aria-required="true" aria-invalid="false" />
                                                <span className="field-required">*</span>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Chủ đề" type="text" name="your-subject" size="40" aria-required="true" aria-invalid="false" />
                                            <span className="field-required">*</span>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Nội dung" name="your-message" cols="40" rows="10" aria-required="true" aria-invalid="false" />
                                            <span className="field-required">*</span>
                                        </div>
                                        <button type="submit" className="btn btn-success">Gửi thông tin</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




