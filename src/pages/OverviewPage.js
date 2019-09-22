import React, { Component } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default class OverviewPage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    <h1>Overview Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}