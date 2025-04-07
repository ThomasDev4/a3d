import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./contactform.module.css";

// Les services en dur
const servicesList = [
  { id: 1, title: "Abeille" },
  { id: 2, title: "Frelons" },
  { id: 3, title: "Puces" },
  { id: 4, title: "Cafard" },
  { id: 5, title: "Souris" },
  { id: 6, title: "Rat" },
];

// Définition locale du type du formulaire
type FormData = {
  id: number;
  date: number;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState<FormData>({
    id: 0,
    date: Date.now(),
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    service: serviceParam || "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simuler une réussite d'envoi du message
    console.log("Message simulé :", formData);
    setSuccessMessage("Votre message a été envoyé avec succès.");

    setFormData({
      id: 0,
      date: Date.now(),
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 3000);
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Contactez-moi</h2>

        <div className={styles.field}>
          <label htmlFor="first_name">Nom :</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="last_name">Prénom :</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="number">Numéro :</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="service">Service :</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">-- Sélectionnez un service --</option>
            {servicesList.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Envoyer
        </button>

        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </form>
    </main>
  );
}
