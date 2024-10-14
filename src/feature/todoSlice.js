import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        updateTodo: (state,action) => {
        const {id,text} = action.payload
        const todo = state.todos.find((todo) => todo.id === id)
        if(todo){
            todo.text = text
        }
        },
        deleteTodo: (state,action) => {
            const id = action.payload
            const index = state.todos.findIndex((todo) => todo.id === id)
            state.todos.splice(index,1)
        }
    }
})

export default todoSlice.reducer;

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions ;