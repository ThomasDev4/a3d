import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.navlink}>
					<Link className={styles.logo} to="/">
						<img src="/images/logo.png" alt="Logo" className={styles.logoImg} />
					</Link>
					<Link to="/">Accueil</Link>
					<Link to="/services">Services</Link>
					<Link to="/a-propos">A propos</Link>
					<Link to="/contact">Contact</Link>
				</ul>
			</nav>
		</header>
	);
}
