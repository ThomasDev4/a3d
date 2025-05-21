import styles from './contactform.module.css';

export default function ContactForm() {
	return (
		<div className={styles.contactContainer}>
		  <h1>Contactez-nous</h1>
	
		  <div className={styles.buttonGroup}>
			<a href="tel:+33123456789" className={styles.contactButton}>
			  📞 01 23 45 67 89
			</a>
			<a href="tel:+33987654321" className={styles.contactButton}>
			  📞 09 87 65 43 21
			</a>
		  </div>
	
		  <div className={styles.emailSection}>
			<h2>📧 Par email</h2>
			<a href="mailto:contact@example.com" className={styles.emailLink}>
			  contact@example.com
			</a>
		  </div>
		</div>
	  );
	};
