import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './TodoSlice';

const TodosView = () => {
    const {isLoading, todos, error} = useSelector((state) => state.todos);
    console.log(todos.todos);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTodos());
    },);
    return (
        <div>
            <h1 className='text-red-500'>Todos</h1>
            {isLoading & <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {todos && todos && todos.map((todo)=>{
                return<article>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </article>
            })}
            
        </div>
    );
};

export default TodosView;