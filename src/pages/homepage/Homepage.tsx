import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main>
      <div className={styles.backgroundImage}>
        <section className={styles.textTopRight}>
          <h1>Des nuisibles chez vous ?</h1>
          <p>
            Pas de panique, je suis là pour vous aider à retrouver votre
            tranquillité en un clin d'œil !
          </p>
        </section>
      </div>
      <section className={styles.description}>
        <h2>Presentation</h2>
        <div className={styles.descriptionContent}>
          <img src="public/images/avatar-2092113.svg" alt="" />
          <p>
            Bonjour et bienvenue ! Je m'appelle Paul et depuis 3 ans, je vous
            aide à retrouver la tranquillité en éliminant les nuisibles de votre
            quotidien. Passionné par mon métier, j'interviens rapidement et
            discrètement avec des solutions respectueuses de l'environnement.
            Vous avez un problème de rongeurs ou d'insectes ? Contactez-moi, je
            serai heureux de vous aider à retrouver un espace de vie sain et
            sécurisé.
          </p>
        </div>
        <section className={styles.contactInfo}>
          <h2>Contact</h2>
          <p>
            <strong>Adresse :</strong> 123 Rue Exemple, Normandie, France
          </p>
          <p>
            <strong>Téléphone :</strong>
            <a href="tel:+33000000000"> 00 00 00 00 00</a>
          </p>
          <p>
            <strong>Email :</strong>
            <a href="mailto:exemple@email.com">exemple@email.com</a>
          </p>
        </section>
      </section>
    </main>
  );
}
