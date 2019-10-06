import React, { Component } from 'react';
import Menu from '../components/Menu';
import SlideHeader from '../components/SlideHeader';
import AddressMap from '../components/AddressMap';
import Footer from '../components/Footer';
import ProductList from '../components/ProductListComponent';

export default class HomePage extends Component {

    render() {
        const dummyData = [
            {
                id : 1,
                title : "Mẫu WH01",
                description : "",
                image : "/img/img.jpg",
                price : 0
            },
            {
                id : 2,
                title : "Mẫu YE01",
                description : "",
                image : "/img/img2.jpg",
                price : 0
            },
            {
                id : 3,
                title : "Mẫu BL01",
                description : "",
                image : "/img/img3.jpg",
                price : 0
            },
            {
                id : 3,
                title : "Mẫu BL02",
                description : "",
                image : "/img/img4.jpg",
                price : 0
            }
        ];
        return (
            <div>
                <Menu />
                <div className="main_content">
                    <SlideHeader />
                    <ProductList products={dummyData} />
                    <AddressMap />
                </div>
                <Footer />
            </div>
        );
    }
}