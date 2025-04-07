import styles from "./servicepage.module.css";

const services = [
	{
		id: 1,
		title: "Abeille",
		image_path: "public/images/abeilles.jpg",
		texte: "Résumé de l'article 1",
	},
	{
		id: 2,
		title: "Frelons",
		image_path: "public/images/frelons.jpg",
		texte: "Résumé de l'article 2",
	},
	{
		id: 3,
		title: "Puces",
		image_path: "public/images/puces.jpg",
		texte: "Résumé de l'article 3",
	},
	{
		id: 4,
		title: "Cafard",
		image_path: "public/images/cafards.jpg",
		texte: "Résumé de l'article 4",
	},
	{
		id: 5,
		title: "Souris",
		image_path: "public/images/souris.jpg",
		texte: "Résumé de l'article 5",
	},
	{
		id: 6,
		title: "Rat",
		image_path: "public/images/rats.jpg",
		texte: "Résumé de l'article 6",
	},
];

export default function Services() {
	return (
		<section className={styles.servicesContainer}>
			{services.map((service) => (
				<article key={service.id} className={styles.serviceCard}>
					<img
						src={service.image_path}
						alt={service.title}
						className={styles.serviceImage}
					/>
					<h3 className={styles.serviceTitle}>{service.title}</h3>
					<p className={styles.serviceSummary}>{service.texte}</p>
					<a
						href={`/contact?service=${service.title}`}
						className={styles.serviceButton}
					>
						Demandez un devis
					</a>
				</article>
			))}
		</section>
	);
}
