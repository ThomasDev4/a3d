import styles from "./aboutpage.module.css";

export default function AboutPage() {
  return (
    <section className={styles.aboutContainer}>
      <h2>À propos</h2>

      <section className={styles.location}>
        <h3>Zone d'intervention</h3>
        <p>Intervention dans toute la région de la Manche.</p>
      </section>

      <section className={styles.contactInfo}>
        <h3>Contact</h3>
        <p>
          <strong>Adresse :</strong> 123 Rue Exemple, Normandie, France
        </p>
        <p>
          <strong>Téléphone :</strong>
          <a href="tel:+33000000000">00 00 00 00 00</a>
        </p>
        <p>
          <strong>Email :</strong>
          <a href="mailto:exemple@email.com">exemple@email.com</a>
        </p>
      </section>
    </section>
  );
}
