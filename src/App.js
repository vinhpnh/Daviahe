import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './pages/HomePage';
import ProductDetail from './pages/ProductDetailPage';
import Contact from './pages/ContactPage';
import Overview from './pages/OverviewPage';

function App() {
    return (
        <Router history={browserHistory}>
                <Route path={'/'} component={Home} />
                <IndexRoute component={Home} onEnter={Home.onEnter}/>
                <Route path={'/home'} component={Home} />
                <Route path={'/productDetail/:id'} component={ProductDetail} />
                <Route path={'/contact'} component={Contact} />  
                <Route path={'/overview'} component={Overview} />  
        </Router>
    );
}

export default App;
