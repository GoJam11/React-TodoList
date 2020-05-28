import React from 'react'
import { store } from './App'
import { editTodo, toggleTodo } from './store'
import { connect } from 'react-redux'
import { ListItem, ListItemSecondaryAction, ListItemText, Checkbox } from '@material-ui/core'
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            editing: false
        };
    }


    handleClick() {
        this.setState({
            editing: true
        })
    }

    handleChange(value, index) {
        this.props.onChange(index, value)
        this.setState({
            editing: false
        })

    }

    handleKeyPress(e, index) {
        if (e.key == 'Enter') {
            this.props.onChange(index, e.target.value)
            this.setState({
                editing: false
            })
        }
    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.inputRef.current.focus();
        }
    }

    render() {
        return <ListItem button>
            {this.state.editing ? <input defaultValue={this.props.text} ref={this.inputRef}
                onBlur={(e) => this.handleChange(e.target.value, this.props['data-key'])}
                onKeyPress={(e) => this.handleKeyPress(e, this.props['data-key'])} />
                : <ListItemText primary={this.props.text} onClick={() => this.handleClick()}> </ListItemText>}

            <ListItemSecondaryAction>
                <Checkbox color="default"
                    onChange={() => this.props.onCheck(this.props['data-key'])}></Checkbox>
            </ListItemSecondaryAction>
        </ListItem>
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    onCheck: index => {
        dispatch(toggleTodo(index))
    },
    onChange: (index, text) => {
        dispatch(editTodo(index, text));

    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem);
