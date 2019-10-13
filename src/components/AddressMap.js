import React, { Component } from 'react';

export default class AddressMap extends Component {
    render() {
        return (
            <div className="container">
                <div className="row andress-map">
                    <div className="widget-title">
                        <span className="clr-light">Bản </span>đồ chỉ đường
                    </div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="100%" height="400" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=V%C4%A8NH%20PH%C3%9A%2041%2C%20H%C3%92A%20LONG%2C%20THU%E1%BA%ACN%20AN%2C%20B%C3%8CNH%20D%C6%AF%C6%A0NG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                            <a href="https://www.pureblack.de">pureblack.de</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
