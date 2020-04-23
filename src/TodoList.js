import React from 'react'
import { store, dispatch } from './App'
import { toggleTodo, editTodo } from './store'
import { List} from '@material-ui/core'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        //console.log(this.props)
        const items = store.getState().todos.map((item, index) =>
            <TodoItem key={index} data-key={index} completed={item.completed}
                text={item.text}></TodoItem>);
        return (<List>
            {items}
        </List>)
    }
}



const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onCheck: index => {
        dispatch(toggleTodo(index))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);