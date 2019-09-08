/**
 * Created by lychee on 2019/8/17.
 */
import actionTypes from './actionTypes';

let index = 3;
export const getBookList = () => {
    const bookList = [{
        id: '1',
        title: '标题1',
        description: '描述1',
    }, {
        id: '2',
        title: '标题2',
        description: '描述2',
    }];
    console.log("action->"+actionTypes.BOOK_LIST_GET);
    return {
        type: actionTypes.BOOK_LIST_GET,
        payload: {}
    };
};

export const addBook = (payload) => {
    console.log("action->"+actionTypes.ADD_BOOK);
    return {
        type: actionTypes.ADD_BOOK,
        payload: {
            id: index++,
            title: payload.title,
            description: payload.description
        }
    }
}


export const deleteOneBook= (payload) => {
    console.log("action>>"+actionTypes.DELETE_ONE_BOOK);
    return {
        type: actionTypes.DELETE_ONE_BOOK,
        payload:payload
    }
}