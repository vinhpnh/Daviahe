import React, { Component } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    <h1>Contact Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}