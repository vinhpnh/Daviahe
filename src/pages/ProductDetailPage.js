import React, { Component } from 'react';
import Menu from '../components/Menu';
import SlideHeader from '../components/SlideHeader';
import AddressMap from '../components/AddressMap';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetailComponent';

export default class ProductDetailPage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <SlideHeader />
                <ProductDetail />
                <Footer />
            </div>
        );
    }
}