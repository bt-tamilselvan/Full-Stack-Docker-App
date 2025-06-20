import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}/users`);
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    setName('');
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Welcome Selva!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Visited Users:</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
