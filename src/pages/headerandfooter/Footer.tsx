import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footerUl}>
				<li>
					<strong> Téléphone : </strong>
					<a href="tel:+33613891348">06 13 89 13 48 </a>
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
