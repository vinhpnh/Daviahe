import React, { Component } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Contact />
                <Footer />
            </div>
        );
    }
}