import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    fullName: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/auth/register",
        form,
        { withCredentials: true }
      );
      alert("Compte créé !");
    } catch (err) {
      console.log(err);
      alert("Erreur côté backend");
    }
  };

  return (
    <form onSubmit={submit}>
      <input name="username" placeholder="Login" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} />
      <input name="fullName" placeholder="Nom complet" onChange={handleChange} />
      <button>Créer compte</button>
    </form>
  );
}
