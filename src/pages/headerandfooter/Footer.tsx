import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerUl}>
        <p>
          <strong> ☎️ Téléphone :</strong>
          <a href="tel:+33000000000">00 00 00 00 00</a>
        </p>
        <p>
          <strong> ＠ Email :</strong>
          <a href="mailto:exemple@email.com"> exemple@email.com</a>
        </p>
        <a href="/contact">✍️ Contact </a>
      </ul>
    </footer>
  );
}
