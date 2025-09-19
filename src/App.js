import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner'
import UserCard from './components/UserCard';
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUsers = async () => {
      const options = { method: "GET" };
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);


  const renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  return (
    <div className="profile-craft-bg-container">
      <div className="profile-cart-header">
        <h1 className="profile-craft-main-heading">Simpli FI Profile Craft</h1>
        <p className="profile-craft-caption">Beginner version.Avatars via DiceBear.</p>
      </div>

      {loading ? (
        renderLoadingView()
      ) : <div className="grid">
        {users.map(u => <UserCard key={u.id} user={u} />)}
      </div>}
    </div>
  );
}

export default App