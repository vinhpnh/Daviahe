import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProductListComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="product-item">
                            <Link to={'/productDetail/1'}>
                                <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                                <div className="product-item-title">Gach via he so 1</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item"> 
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="product-item">
                            <img className="product-item-img" src="http://localhost:3000/img/gach1.jpg" alt="First image" />
                            <div className="product-item-title">Gach via he so 1</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
