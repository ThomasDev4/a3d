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
						particuliers, professionnels, collectivités, agroalimentaires et
						exploitants agricoles pour lutter efficacement contre tous types de
						nuisibles. Installés localement, nous intervenons rapidement dans
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
						Si vous souhaitez laissez un avis suite à notre passage lors d'une
						intervention, voici les liens par ville pour pouvoir le faire :
					</p>
					<ul>
						<li>
							<a href="https://www.google.com/search?sca_esv=f6861048bb8aaca5&rlz=1C5CHFA_enFR1129FR1129&sxsrf=AHTn8zrUuwpU_d8dF6yeidqZ0nXcQt2RNw:1745936579066&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzc3eLuWsfhQOCk5s_ApXPdQTRg5DI1y-7vbA2LkX_3-jpOrr4k0_fHWsR8oUXaQYNIc3c74c0IP7Xiwsz2CylRV3F6v8&q=Assistance+3D+Avis&sa=X&ved=2ahUKEwj41-HMuP2MAxUeKvsDHSdSBI4Q0bkNegQINBAD&biw=1710&bih=981&dpr=2">
								Donnez un avis à Catteville
							</a>
						</li>
						<li>
							<a href="https://www.google.com/search?sca_esv=f6861048bb8aaca5&rlz=1C5CHFA_enFR1129FR1129&sxsrf=AHTn8zrx9Rez-3GiqKjMtg-_N3fEHWxBxQ:1745938457304&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzd0j67TWpK69BsTqkUB686QHGmHL78f1HbcYvUlX4jZpz1-0wTXzwVwb5acnc7PKvVVqarsH5QFKwkPKOVz3K0mabFqs&q=Assistance+3D+Avis&sa=X&ved=2ahUKEwiYorDMv_2MAxX7RaQEHRsEDQkQ0bkNegQIOBAD&biw=1710&bih=981&dpr=2">
								Donnez un avis à Saint Lô
							</a>
						</li>
						<li>
							<a href="https://www.google.com/search?sca_esv=f6861048bb8aaca5&rlz=1C5CHFA_enFR1129FR1129&sxsrf=AHTn8zqwGKxpc5MzX38NyLd05X6ljoEhTw:1745936797630&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzYSVTApwp8di56Lnm0KbmB4wcDfsHloHboe9EPAmMoOJ77k8xta9DrmQg4yGMNdUJ_auZgexO4NsT0_rxwTOO6bL5WrR&q=Assistance+3D+Avis&sa=X&ved=2ahUKEwig4_20uf2MAxU9TKQEHR2fLvIQ0bkNegQINxAD&biw=1710&bih=981&dpr=2">
								Donnez un avis à Cherbourg
							</a>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
