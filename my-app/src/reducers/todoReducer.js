export const initialState = [
    
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }

]

export const simpleReducer = (state, action) => {
switch(action.type) {
    case 'ADD_TODO':
        return [...state, { item: action.payload, completed: false, id: new Date() }];
        
     case 'TOGGLE_COMPLETE':
        return  state.map((todo) => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        });

    case 'CLEAR_COMPLETE':
        return state.filter(todo => todo.completed === false)

    default: 
        return state
}
}