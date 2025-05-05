import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			{/* Logo indépendant, en dehors de <ul> */}
			<Link to="/">
				<img src="/images/logo.png" alt="Logo" className={styles.logoImg} />
			</Link>

			<nav>
				<ul className={styles.navlink}>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/a-propos">A propos</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
