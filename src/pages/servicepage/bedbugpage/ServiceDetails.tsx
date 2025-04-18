import { Link, useParams } from "react-router-dom";
import { services } from "../services.all"; // <-- adapte ce chemin à ton projet
import styles from "./servicedetails.module.css";

export default function ServiceDetail() {
	const { slug } = useParams();
	const service = services.find((s) => s.slug === slug);

	if (!service) {
		return <p>Service introuvable.</p>;
	}

	return (
		<div className={styles.container}>
			{/* HERO */}
			<section className={styles.hero}>
				<div className={styles.imageWrapper}>
					<img
						src={service.image_path}
						alt={service.title}
						className={styles.coveredImage}
					/>
				</div>
				<div className={styles.textSide}>
					<h1 className={styles.title}>
						Pourquoi se méfier des {service.title} ?
					</h1>
					<div className={styles.iconGrid}>
						{service.dangers?.map((danger) => (
							<div key={danger.texte} className={styles.iconItem}>
								<span role="img" aria-label="danger">
									{danger.emoji}
								</span>
								<p>{danger.texte}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* DANGER / SOLUTION SECTIONS */}
			<section className={styles.dangerSolution}>
				<div className={styles.sectionDangerAlert}>
					<h2>{service.details.danger.title}</h2>
					<ul>
						{service.details.danger.points.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
				</div>

				<div className={styles.sectionSolution}>
					<h2>{service.details.solution.title}</h2>
					<ul>
						{service.details.solution.points.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
					<p>
						<strong>
							Ne laissez pas les {service.title.toLowerCase()} gâcher votre
							tranquillité.
						</strong>
					</p>
					<Link to={`/contact?service=${service.title}`} className={styles.btn}>
						{service.details.solution.cta}
					</Link>
				</div>
			</section>
		</div>
	);
}
