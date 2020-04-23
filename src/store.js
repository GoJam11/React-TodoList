let action_type = ['ADD_TODO', 'TOGGLE_TODO', 'REMOVE_TODO', 'EDIT_TODO', 'CHANGE_COLOR'];

export function addTodo(text = '', completed = false) {
    return {
        type: 'ADD_TODO',
        text,
        completed
    }
}

export function toggleTodo(index) {
    return {
        type: 'TOGGLE_TODO',
        index
    }
}

export function editTodo(index, text) {
    return {
        type: 'EDIT_TODO',
        index,
        text
    }
}
export let test = 10;

export let todos = function (state = [{
    text: 'Initial Content',
    completed: false
}], action) {
    let stat;
    switch (action.type) {
        case 'ADD_TODO':
            //console.log('stat', state)
            return state.concat([{ text: action.text, completed: false }])
        case 'TOGGLE_TODO':
            stat = [...state];
            
            let comp = stat[action.index].completed;
            stat[action.index].completed = !comp;
            return stat
        case 'EDIT_TODO':
            stat = [...state];
            stat[action.index].text = action.text;
            return stat
        default:
            return state
    }
}

export let color = function (state = 'default', action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return action.color;
        default:
            return state;
    }
}