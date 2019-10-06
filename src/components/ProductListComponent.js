import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProductListComponent extends Component {
    render() {
        const products = this.props.products;
        var elements;

        elements = products.map((item, index) => {
            return (<div className="col-sm">
                    <div className="product-item">
                        <Link to={'/productDetail/' + item.id}>
                            <img className="product-item-img" src={"http://localhost:3000/" + item.image} alt="First image" />
                            <div className="product-item-title">{item.title}</div>
                        </Link>
                    </div>
                </div>)
        })
        return (
            <div className="container">
                <div className="widget-title">Sản Phẩm Tiêu Biểu</div>
                <div className="row">
                    {elements}
                    {/* <div className="col-sm">
                        <div className="product-item"> 
                            <img className="product-item-img" src={"http://localhost:3000/" + products.image} alt="First image" />
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
                    </div> */}
                </div>
                {/* <div className="row">
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
                </div> */}
            </div>
        );
    }
}
