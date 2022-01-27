import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers([...users, { name: name, age: age, id: Math.random().toString() }]);
  }
  const getFilteredHandler = (filteredData) => {
    setUsers(filteredData)
  }
  return (
    <div>
      <AddUser onAddUserHandler={addUserHandler} />
      <UserList users={users} onGetFilteredData={getFilteredHandler} />
    </div>
  );
}


export default App;
