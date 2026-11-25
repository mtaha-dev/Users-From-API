import { useState } from "react";
import styles from "./Table.module.css";
import AddUser from "../AddUser";

function ShowUsers({ users, error, addUser }) {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newUsers, setNewUsers] = useState([]);

  const filteredUsers = users.filter((user) => {
    const searchTerm = search.toLowerCase().trim();

    if (search.length >= 3) {
      return (
        user.name.toLowerCase().includes(searchTerm) ||
        user.username.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.address.city.toLowerCase().includes(searchTerm)
      );
    }

    return user;
  });

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className={styles.searchContainer}>
            <input
              className={styles.search}
              type="text"
              placeholder="Rechercher un utilisateur---"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button className={styles.addBtn} onClick={() => setShowForm(true)}>
              Ajouter
            </button>
          </div>

          {showForm && (
            <AddUser
              onAdd={(newUser) => {
                addUser(newUser);
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          )}

          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>City</th>
                <th>Street</th>
                <th>Lat</th>
                <th>Lng</th>
                <th>Modifier/Supprimer</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.street}</td>
                  <td>{user.address.geo.lat}</td>
                  <td>{user.address.geo.lng}</td>

                  <td>
                    <div className={styles.actions}>
                      <button className={styles.updateBtn}>Modifier</button>

                      <button className={styles.deleteBtn}>Supprimer</button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="9">Aucun utilisateur trouvé</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default ShowUsers;
