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
						particuliers, professionnels, collectivités, sites agroalimentaires
						et exploitants agricoles pour lutter efficacement contre tous types
						de nuisibles. Installés localement, nous intervenons rapidement dans
						les départements de la Manche (50) et du Calvados (14) pour des
						traitements fiables, durables et respectueux de votre environnement.
					</p>
				</div>
			</section>
			<section className={styles.avis}>
				<img src="/images/avis-a3d.png" alt="Avis Assistance 3D" />
				<div className={styles.avisText}>
					<h2>Laissez nous un avis !</h2>
					<p>
						Si vous souhaitez laisser un avis suite à notre passage lors d'une
						intervention, voici les liens par ville pour le faire :
					</p>
					<ul>
						<li>
							<a href="https://g.page/r/CXhBMplp_emBEBM/review">
								Donnez un avis à Catteville
							</a>
						</li>
						<li>
							<a href="https://g.page/r/CZF-PIwQcl_kEBM/review">
								Donnez un avis à Saint Lô
							</a>
						</li>
						<li>
							<a href="https://g.page/r/Ccpb7MHL-9nZEBM/review">
								Donnez un avis à Cherbourg
							</a>
						</li>
						<li>
							<a href="https://g.page/r/CR8mhJcNw2TjEBM/review">
								Donnez un avis à Caen
							</a>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
