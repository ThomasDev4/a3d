import styles from "./Homepage.module.css";

export default function Homepage() {
	return (
		<main>
			<div className={styles.backgroundImage}>
				<section className={styles.textTopRight}>
					<h1>Notre mission ?</h1>
					<p>
						Vous débarrasser durablement des nuisibles pour protéger votre
						santé, votre habitation et votre activité.
					</p>
				</section>
			</div>
			<section className={styles.description}>
				<h2>Presentation</h2>
				<div className={styles.descriptionContent}>
					<img src="/images/CarreLogoA3D.png" alt="" />
					<p>
						Chez Assistance 3D, nous mettons notre expertise au service des
						particuliers, professionnels, collectivités et exploitants agricoles
						pour lutter efficacement contre tous types de nuisibles. Installés
						localement, nous intervenons rapidement dans les départements de la
						Manche (50) et du Calvados (14) pour des traitements fiables,
						durables et respectueux de votre environnement.
					</p>
				</div>
			</section>
		</main>
	);
}
