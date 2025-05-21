import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footerUl}>
				<li className={styles.footerPhone}>
					<strong> Téléphone :</strong>
					<div className={styles.phoneGroup}>
						<a href="tel:+33613891348">06 13 89 13 48</a>
						<span className={styles.phoneSeparator}>ou</span>
						<a href="tel:+33233402246">02 33 40 22 46</a>
					</div>
				</li>
				<li>
					<strong> Email :</strong>
					<a href="mailto:contact@assistance3d.fr">contact@assistance3d.fr</a>
				</li>
				<li>
					<a href="https://www.facebook.com/people/Assistance-3D/61574891717785/">
						<img
							className={styles.facebook}
							src="/images/facebook.svg"
							alt="Facebook"
						/>
					</a>
				</li>
			</ul>
			<p>© Assistance 3D Tous droits réservés.</p>
		</footer>
	);
}
