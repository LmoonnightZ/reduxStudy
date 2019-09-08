/**
 * Created by lychee on 2019/9/8.
 */
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import BookShelf from './../components/BookShelf';
import AddBook from './../components/AddBook';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
           {/* <Route exact path="/" component={ BookShelf }/>
            <Route exact path="/AddBook" component={ AddBook }/>*/}
            <Route exact path="/" component={ BookShelf }/>
            <Route path="/AddBook" component={ AddBook }/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;