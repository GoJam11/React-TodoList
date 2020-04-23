import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, TextField } from "@material-ui/core";
import { store, app } from './App'
import { addTodo } from './store'


export default class FormDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state={text:''}
        
    }
    componentDidMount() {
        const unSubscribe = store.subscribe(() => {
            //console.log('listener', store.getState())
        })
    }
    render() {
        return (
            <Dialog fullWidth={true} open={this.props.open} color="primary">
                <DialogTitle>新建事项</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <TextField  style={{width:'100%'}} onChange={(e)=>{this.setState({text:e.target.value})}}></TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{this.props.onClose();this.setState({text:''})}}>取消</Button>
                    <Button onClick={() => { if(this.state.text)store.dispatch(addTodo(this.state.text));
                        this.props.onClose();this.setState({text:''}) }}>确定</Button>
                </DialogActions>
            </Dialog >
        )
    }

}