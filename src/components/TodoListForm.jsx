import React, { useState } from 'react';

function TodoListForm() {
  const [list, setList] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('jdfas');
    setList('');
  }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input 
          value={list} 
          type="text" 
          placeholder='Enter your list'
          onChange={(e) => setList(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default TodoListForm;
