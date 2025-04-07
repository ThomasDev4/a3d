import { Link } from "react-router-dom";
import styles from "./ContactButton.module.css";

export default function ContactButton() {
	return (
		<Link to="/contact" className={styles.contactButton}>
			<img src="/images/formulaire-de-contact.png" alt="" />
		</Link>
	);
}
