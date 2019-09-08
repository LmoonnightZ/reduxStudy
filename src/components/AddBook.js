/**
 * Created by lychee on 2019/9/8.
 */
import React from "react";
import { connect } from "react-redux";
import { addBook } from   './../actions/actions';

/*允许用户在点击Add Todo按钮后，向todo list中加入一个新的待办项：

 使用一个受控input监听onChange事件以设置state
 当用户单击Add Todo按钮后，该组件dispatch一个action,向store中添加一个新的待办项。（这个action是我们由React-Redux提供的）*/
class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
    }

    updateTitle = title => {
        this.setState({ title });
    };

    updateDescription = description => {
        this.setState({ description });
    };

    handleAddBook = () => {
        //可以从prop中获取到addBook action,并自动触发
        this.props.addBook(this.state);
        this.setState( {
            title: "",
            description: ""
        });
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <div>
                    标题：
                    <input onChange={e => this.updateTitle(e.target.value)} value={this.state.title}/>
                </div>
                <div>
                    描述：
                    <input onChange={e => this.updateDescription(e.target.value)} value={this.state.description}/>
                </div>
                <div>
                    <button onClick={this.handleAddBook}>
                        添加书籍
                    </button>
                </div>
            </div>
        );
    }
}

/*把它传递到connect，我们的组件就能够以一个prop接收到它。并且一旦我们调用，它就能够自动的分发actions。
 注意到现在<AddTodo/>已经被一个父组件<Connect(AddTodo)/>所包装。同时，<AddTodo/>现在拥有了一个prop：addTodo action*/
export default connect(
    null,
    { addBook }
)(AddBook);
// export default AddTodo;
