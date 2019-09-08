import React, { Component } from 'react';

export default class AddressMap extends Component {
    render() {
        return (
            <div>
                <div className="widget-title">
                    <span className="clr-light">Bản </span>đồ chỉ đường
            </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="100%" height="400" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=180%20Ly%20Thuong%20Kiet%2C%20Quan%2010%2C%20Ho%20Chi%20Minh%2C%20Viet%20Nam&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://www.pureblack.de">pureblack.de</a>
                    </div>
                </div>
            </div>
        );
    }
}
