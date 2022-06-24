import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserList/>
      <hr />
      <TodoList/>
    </div>
  );
}

export default App;
