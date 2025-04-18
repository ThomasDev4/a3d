import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { services } from "../servicepage/services.all"; // adapte selon ton projet
import styles from "./contactform.module.css";

type FormData = {
	id: number;
	date: number;
	first_name: string;
	last_name: string;
	email: string;
	number: string;
	service: string;
	message: string;
};

export default function ContactForm() {
	const [searchParams] = useSearchParams();
	const serviceParam = searchParams.get("service");

	const [formData, setFormData] = useState<FormData>({
		id: 0,
		date: Date.now(),
		first_name: "",
		last_name: "",
		email: "",
		number: "",
		service: "",
		message: "",
	});

	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	useEffect(() => {
		if (serviceParam) {
			setFormData((prev) => ({
				...prev,
				service: serviceParam,
			}));
		}
	}, [serviceParam]);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log("Formulaire envoyé :", formData);
		setSuccessMessage("Votre message a été envoyé avec succès.");

		setFormData((prev) => ({
			...prev,
			id: 0,
			date: Date.now(),
			first_name: "",
			last_name: "",
			email: "",
			number: "",
			message: "",
		}));

		setTimeout(() => {
			setSuccessMessage(null);
		}, 3000);
	};

	return (
		<main className={styles.main}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2>Contactez-nous</h2>

				<div className={styles.field}>
					<label htmlFor="first_name">Nom :</label>
					<input
						type="text"
						id="first_name"
						name="first_name"
						value={formData.first_name}
						onChange={handleChange}
						required
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="last_name">Prénom :</label>
					<input
						type="text"
						id="last_name"
						name="last_name"
						value={formData.last_name}
						onChange={handleChange}
						required
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="email">Email :</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="number">Numéro :</label>
					<input
						type="tel"
						id="number"
						name="number"
						value={formData.number}
						onChange={handleChange}
						required
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="service">Service :</label>
					<select
						id="service"
						name="service"
						value={formData.service}
						onChange={handleChange}
						required
					>
						<option value="">-- Sélectionnez un service --</option>
						{services.map((s) => (
							<option key={s.id} value={s.title}>
								{s.title}
							</option>
						))}
					</select>
				</div>

				<div className={styles.field}>
					<label htmlFor="message">Message :</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>

				<button type="submit" className={styles.submitButton}>
					Envoyer
				</button>

				{successMessage && (
					<div className={styles.successMessage}>{successMessage}</div>
				)}
			</form>
		</main>
	);
}
