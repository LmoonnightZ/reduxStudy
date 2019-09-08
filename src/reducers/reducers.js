/**
 * Created by lychee on 2019/8/17.
 */
import actionTypes from './../actions/actionTypes';

const initialState = {
    bookList: [],
};

const pageMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BOOK_LIST_GET:
            console.log("reducer->"+actionTypes.BOOK_LIST_GET);
            return {
                ...state,
                bookList: [...state.bookList],
            };
        case actionTypes.ADD_BOOK:
            console.log("reducer->"+actionTypes.ADD_BOOK);
            return{
                ...state,
                bookList: [...state.bookList,action.payload],
            }
        case actionTypes.DELETE_ONE_BOOK:
            console.log("reducer->"+actionTypes.DELETE_ONE_BOOK);
            let bookList = state.bookList;
            let index;
            for (var i = 0; i < bookList.length; i++) {
                if (bookList[i].id === action.payload.id) {
                    index=i;
                    break;
                }
            };
            bookList.splice(index,1);
            return{
                ...state,
                bookList: [...state.bookList],
            }
        default:
            return state;
    }
};
export default pageMainReducer;