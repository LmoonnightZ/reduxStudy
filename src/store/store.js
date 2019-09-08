/**
 * Created by lychee on 2019/8/17.
 */
import { createStore } from "redux";
import pageMainReducer from "./../reducers/reducers";

export default createStore(
    pageMainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //配置调试工具
);

export const getBookList = store => store.bookList;