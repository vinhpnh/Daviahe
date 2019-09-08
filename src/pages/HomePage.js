import React, { Component } from 'react';
import Menu from '../components/Menu';
import SlideHeader from '../components/SlideHeader';
import AddressMap from '../components/AddressMap';
import Footer from '../components/Footer';
import ProductList from '../components/ProductListComponent';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <SlideHeader />
                <ProductList />
                <AddressMap />
                <Footer />
            </div>
        );
    }
}