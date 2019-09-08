
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from "./store/store";
import BookShelf from './components/BookShelf';
import AddBook from './components/AddBook';

import BasicRoute from './Routers/routers';





/*ReactDOM.render(
    <BasicRoute>
    </BasicRoute>
    , document.getElementById('root'))*/


ReactDOM.render( <Provider store={store}>
    <BasicRoute/>
</Provider>, document.getElementById('root'))

