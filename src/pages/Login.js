import { useState } from "react";
import axios from "axios";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:3001/auth/login",
      form,
      { withCredentials: true }
    );

    setUser(res.data.user);
    alert("Connecté !");
  };

  return (
    <form onSubmit={submit}>
      <input name="username" placeholder="Login" onChange={handleChange} />
      <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} />
      <button>Connexion</button>
    </form>
  );
}
