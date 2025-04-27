import { Link } from "react-router-dom";
import { services } from "../servicepage/services.all"; // ← adapte le chemin selon ton projet
import styles from "./servicepage.module.css";

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

					<div className={styles.buttonGroup}>
						<Link
							to={`/contact?service=${service.title}`}
							className={styles.serviceButton}
						>
							Demander un devis
						</Link>
						<Link
							to={`/services/${service.slug}`}
							className={styles.serviceButton}
						>
							En savoir +
						</Link>
					</div>
				</article>
			))}
		</section>
	);
}
