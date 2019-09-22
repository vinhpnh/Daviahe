import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './pages/HomePage';
import ProductDetail from './pages/ProductDetailPage';

function App() {
    return (
        <Router history={browserHistory}>
                <Route path={'/'} component={Home} />
                <IndexRoute component={Home} />
                <Route path={'/home'} component={Home} />
                <Route path={'/productDetail/:id'} component={ProductDetail} />                    
        </Router>
    );
}

export default App;
