import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk("todos/fetchTodos",
    async ()=> {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return res.data;
    })
export const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        isLoading: true,
        todos:[],
        error : null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.todos = action.payload;
            state.error = null;
        });
        builder.addCase(fetchTodos.rejected, (state, action)=>{
            state.isLoading = false;
            state.todos = [];
            state.error = action.error.message;
        })
    }
})

export default todoSlice.reducer;