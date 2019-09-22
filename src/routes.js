import React from 'react';
import Home from './pages/HomePage';
import ProductDetail from './pages/ProductDetailPage';

const routes = [
    {
        path : "/home",
        exact : true,
        main : ({match}) => <Home match={match}/>
    },
    {
        path : "/productDetail/:id",
        exact : false,
        main : () => <ProductDetail />
    }
];

export default routes;