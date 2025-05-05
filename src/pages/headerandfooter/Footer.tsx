import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footerUl}>
				<li>
					<strong> Téléphone : </strong>
					<a href="tel:+33000000000">00 00 00 00 00</a>
				</li>
				<li>
					<strong> Email :</strong>
					<a href="mailto:exemlile@email.com"> exemple@email.com</a>
				</li>
			</ul>
			<p>© Assistance 3D Tous droits réservés.</p>
		</footer>
	);
}
