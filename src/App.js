 import React from 'react';
import logo from './logo.svg';
import { AppBar, Typography, Toolbar, makeStyles, Grid, List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton, MenuItem } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import './App.css';


// const context = React.createContext(store)
// context.Provider <- store
// context.Consumer -> store
//Provider -< store
// connect()(TodoItem)


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    /*this.classes = makeStyles((theme) => ({
      checkBox: {
        backgroundColor: '#61b0fb'
      }
    }))();*/
    this.handleCheck = this.handleCheck.bind(this)
    this.modifyAt=this.modifyAt.bind(this)
  }
  modifyAt(e){
    
    this.props.onModify(this.props['data-key'],'fobidden')
  }
  handleCheck(e) {
    this.props.onChecked(this.props['data-key'])
  }
  render() {
    return <ListItem button>
      <ListItemText contentEditable onInput={this.modifyAt} primary={this.props.text}> </ListItemText>
      <ListItemSecondaryAction>
        <Checkbox color="default" onChange={this.handleCheck}></Checkbox>
      </ListItemSecondaryAction>
    </ListItem>
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.removeAt = this.removeAt.bind(this);
    this.modifyAt=this.modifyAt.bind(this)
  }

  removeAt(index) {
    this.props.onRemove(index)
  }
  modifyAt(index,value){
    this.props.onModify(index,value)
  }
  render() {
    const items = this.props.text.map((item, index) => <TodoItem key={index} data-key={index} onModify={this.modifyAt} onChecked={this.removeAt} text={item}></TodoItem>);
    return (<List>
      {items}
    </List>)
  }
}

class App extends React.Component {
  constructor() {
    super();
    /*this.classes = makeStyles((them) => ({
      bar: {
        backgroundColor: '#61b0fb'
      }
    }))();*/
    this.state = { todoArray: ['to', 'do'] };
    this.removeAt = this.removeAt.bind(this);
    this.newItem = this.newItem.bind(this);
    this.modifyAt=this.modifyAt.bind(this)
  }


  removeAt(index) {
    let newText = [...this.state.todoArray]
    newText.splice(index, 1)
    this.setState({
      todoArray: newText
    })

  }

  newItem() {

    this.setState({
      todoArray: [...this.state.todoArray, 'new']
    })
  }

  modifyAt(index,value){
    let newText = [...this.state.todoArray]
    newText.splice(index, 1,value)
    this.setState({
      todoArray: newText
    })
  }

  render() {
    return (
      <div className="App" >
        <Grid container>
          <Grid item xs={12}>
            <AppBar position="sticky" /*className={this.classes.bar}*/ style={{ backgroundColor: '#61b0fb' }}>
              <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Todo</Typography>
                <IconButton onClick={this.newItem} >
                  <AddIcon style={{ color: 'white' }}></AddIcon>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <TodoList text={this.state.todoArray} onModify={this.modifyAt} onRemove={this.removeAt}></TodoList>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
