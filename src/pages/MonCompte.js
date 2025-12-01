import { useEffect, useState } from "react";
import { myFetch } from "../comm/myFetch";

const MonCompte = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await myFetch("/users");
      setUsers(data);
    } catch (err) {
      console.error("Erreur chargement users :", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center text-primary mb-4">Utilisateurs</h2>

      <div className="d-flex flex-column align-items-center">
        {users.map(u => (
          <div
            key={u.id}
            className="card m-2 p-3 shadow"
            style={{ width: "350px" }}
          >
            <h5>Nom complet : {u.fullname}</h5>
            <p>Login : {u.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonCompte;
