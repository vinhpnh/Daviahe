import React, { Component } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Overview from '../components/Overview';

export default class OverviewPage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Overview />
                <Footer />
            </div>
        );
    }
}