import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true); // Désactive le bouton
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      if (!response.ok) {
        throw new Error("Identifiants incorrects");
      }

      const data = await response.json();

      console.info("Connexion réussie !");
    } catch (error) {
      console.error("Erreur :", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <h1>Connexion Admin</h1>
      <form onSubmit={handleLogin}>
        <div>
          <h2>Nom d'utilisateur</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <h2>Mot de passe</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
