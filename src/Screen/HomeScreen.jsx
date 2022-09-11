import React from 'react';
import TodoListForm from '../components/TodoListForm';

function HomeScreen() {
  return (
    <div>
      <h1 className='title'>To do list</h1>
      <TodoListForm />
    </div>
  );
}

export default HomeScreen;