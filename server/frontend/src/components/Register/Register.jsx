import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données d'inscription :", formData);
    // Tu pourras ajouter l'appel API plus tard
    alert("Inscription soumise ! (Simulation)");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "darkturquoise" }}>Inscription</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Nom d'utilisateur :</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Prénom :</label>
          <input 
            type="text" 
            name="first_name" 
            value={formData.first_name} 
            onChange={handleChange}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Nom de famille :</label>
          <input 
            type="text" 
            name="last_name" 
            value={formData.last_name} 
            onChange={handleChange}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email :</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Mot de passe :</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button 
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "darkturquoise",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;