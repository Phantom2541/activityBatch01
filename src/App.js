import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
      { id: 3, name: "Smith" },
      { id: 4, name: "Mark" },
      { id: 5, name: "Meluin" },
    ]),
    [user, setUser] = useState({});

  // Delete Function
  const deleteFxn = (_id) => setUsers(users.filter(({ id }) => id !== _id));

  // Edit Function
  const activeUser = (_id) => setUser(users.find(({ id }) => id === _id));
  const updateUsers = (_user) => {
    setUsers([...users.filter(({ id }) => id !== _user.id), _user]);
    clearUser();
  };

  const clearUser = () => setUser({ id: users.length + 1, name: "" });

  return (
    <div>
      <h1>User users</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name }) => {
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                    <button
                      type="button"
                      title="Edit"
                      onClick={() => activeUser(id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      title="Delete"
                      onClick={() => deleteFxn(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <h3>User Form</h3>
        <form>
          <button type="button" onClick={clearUser}>
            Create New
          </button>
          <br />
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </label>
          <button type="button" onClick={() => updateUsers(user)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
