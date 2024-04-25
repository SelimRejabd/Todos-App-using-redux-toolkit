import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './TodoSlice';

const TodosView = () => {
    const {isLoading, todos, error} = useSelector((state) => state.todos);
    console.log(isLoading);
    console.log(todos.todos);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTodos());
    },[dispatch]);
    return (
        <div>
            <h1 className='h-[70px] text-6xl mb-8 mt-5 rounded-lg shadow hover:bg-gray-700'>Todos</h1>
            {isLoading && <h3>Loading...</h3>}
    
            {error && <h3>{error}</h3>}
            <div className='flex flex-wrap gap-4'>
            {todos &&  todos.map((todo)=>{
                return<div className='w-[300px] h-[200px] p-6 bg-white border rounded-lg dark:hover:bg-gray-700'>
                    <p>{todo.id}. {todo.title}</p>
                </div>
            })}
            </div>
            
        </div>
    );
};

export default TodosView;