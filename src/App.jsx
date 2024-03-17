import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  /** function to fetch users form backend using axiso */
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.data) {
      setUsers(response.data);
    }
  };

  const createUser = async () => {
    const response = await axios.post("http://localhost:5000/user", {
      name: "",
      password: "",
    });
    console.log(response);
  };

  /** it will trigger when component is render */
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}

      <button onClick={() => createUser()}>Save</button>
    </div>
  );
}

export default App;
