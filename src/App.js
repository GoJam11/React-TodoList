import React from 'react';
import { combineReducers, createStore } from 'redux'
import {Provider} from 'react-redux'
import { AppBar, Typography, Toolbar, makeStyles, Grid, IconButton, MenuItem, Input } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import './App.css';
import { addTodo, toggleTodo, editTodo, todos, color } from './store'
import FormDialog from './Dialog'
import TodoList from './TodoList'

//store
export let app;//根组件的引用




/*let appReducer = function (state = {}, action) {
  return {
    todos: todo_reducer(state.todos, action),
    color: config_reducer(state.color, action)
  }
}*/

let appReducer = combineReducers({ todos, color })
export let store = createStore(appReducer)
//console.log(store.getState(),store)
export let dispatch = function (action) {
  store.dispatch(action);
  //app.setState({})
}




class App extends React.Component {
  constructor() {
    super();
    app = this;
    this.state = {
      openDialog: false
    }

  }
  createItem() {
    dispatch(addTodo('HI'))
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App" >
        <Grid container>
          <Grid item xs={12}>
            <AppBar position="sticky" style={{ backgroundColor: '#61b0fb' }}>
              <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Todo</Typography>
                <IconButton onClick={() => this.setState({ openDialog: true })} >
                  <AddIcon style={{ color: 'white' }}></AddIcon>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <TodoList ></TodoList>
          </Grid>
        </Grid>
        <FormDialog open={this.state.openDialog} onClose={() => { this.setState({ openDialog: false }) }}></FormDialog>
      </div>
      </Provider>
    );
  }
}

export default App;


/*class Provider extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <>
  }
}*/

