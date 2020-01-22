import React, { useState, useReducer} from 'react';

import { simpleReducer, initialState } from '../reducers/reducer.js';

function Todo() {
const [state, dispatch] = useReducer(simpleReducer, initialState)
    return (
        <div>
            {
                state.todos.map((todo => 
                    <div key={todo.id}>
                        <h3> {todo.item} </h3>
                    </div>
                    ))
            }
        </div>
    )
}

export default Todo;