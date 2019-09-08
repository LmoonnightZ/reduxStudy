/**
 * Created by lychee on 2019/8/17.
 */
import React from 'react';
import { connect } from "react-redux";
import './BookShelf.css';
import  { getBookList , addBook ,deleteOneBook }   from './../actions/actions';


class BookShelf extends React.Component {

    componentWillMount(){
        this.props.getBookList();
    }

    handleAdd = () => {
        this.props.history.push("/AddBook");


       /* console.log("执行component的增加");
        let payload ={
            title:"指南针",
            description:"指南针指南针指南针"
        }
        //可以从prop中获取到addBook action,并自动触发
        this.props.addBook(payload);*/

    };

    handleDelete = ( item ) =>{
        //可以从prop中获取到addBook action,并自动触发
        this.props.deleteOneBook(item);
    }


    render() {
        return (
            <ul className="table">
                <table className="table1">
                    <tbody>
                        <tr>
                            <td className="td">标题</td>
                            <td className="td">描述</td>
                            <td className="td">操作</td>
                        </tr>
                    </tbody>
                </table>
                {this.props.bookList && this.props.bookList.length
                    ? this.props.bookList.map((item, index) => {
                        return <li key={index} >
                            <table className="table1">
                                <tbody>
                                <tr>
                                    <td className="td">{item.title}</td>
                                    <td className="td">{item.description}</td>
                                    <td className="td">
                                        <button  onClick={this.handleDelete.bind(this, item)}>
                                            删除
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </li>
                    })
                    :
                    <div>
                        <p style={{color:"green"}}>无任何书籍</p>
                    </div>
                    }
                <button  onClick={this.handleAdd}>
                    去增加
                </button>
            </ul>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        bookList: state.bookList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addBook: (...args) => dispatch(addBook(...args)),
        deleteOneBook:(...args) => dispatch(deleteOneBook(...args)),
        getBookList: () => dispatch(getBookList())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShelf);
