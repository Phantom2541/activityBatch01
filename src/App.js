import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
      { id: 3, name: "Smith" },
      { id: 4, name: "Mark" },
      { id: 5, name: "Meluin" },
    ]),
    [add, setAdd] = useState({}),
    [edit, setEdit] = useState({});

  // Delete Function
  const deleteFxn = (_id) => {
    const newUsers = users.filter(({ id }) => id !== _id);
    setUsers(newUsers);
  };

  // Create Function
  const creChanger = (data) => {
    setAdd({ id: users.length + 1, name: data.value });
  };

  const createList = () => setUsers([...users, add]);

  // Edit Function
  const editBtn = (user) => setEdit(user);

  const ediChanger = (data) => setEdit({ id: edit.id, name: data.value });

  const updateList = () => {
    const user = users.find(({ id }) => id === edit.id);
    user.name = edit.name;
    setUsers([...users]);
  };

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
            {users.map((user) => {
              const { id, name } = user;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                    <button
                      type="button"
                      title="Edit"
                      onClick={() => editBtn(user)}
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
        <h3>Create Form</h3>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => creChanger(e.target)}
            />
          </label>
          <button type="button" onClick={() => createList()}>
            Submit
          </button>
        </form>
      </div>
      <hr />
      <div>
        <h3>Update Form</h3>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={edit.name}
              onChange={(e) => ediChanger(e.target)}
            />
          </label>
          <button type="button" onClick={() => updateList()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
