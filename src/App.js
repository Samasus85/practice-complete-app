import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers([...users, { name: name, age: age, id: Math.random().toString() }]);
  }
  return (
    <div className="App">
      <AddUser onAddUserHandler={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}
export default App;
