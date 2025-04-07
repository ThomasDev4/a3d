import styles from "./servicepage.module.css";
import abeilleImg from "../../assets/images/abeilles.jpg";
import frelonImg from "../../assets/images/frelons.jpg";
import puceImg from "../../assets/images/puces.jpg";
import cafardImg from "../../assets/images/cafards.jpg";
import sourisImg from "../../assets/images/souris.jpg";
import ratImg from "../../assets/images/rats.jpg";


const services = [
  {
    id: 1,
    title: "Abeille",
    image_path: abeilleImg,
    texte: "Résumé de l'article 1",
  },
  {
    id: 2,
    title: "Frelons",
    image_path: frelonImg,
    texte: "Résumé de l'article 2",
  },
  {
    id: 3,
    title: "Puces",
    image_path: puceImg,
    texte: "Résumé de l'article 3",
  },
  {
    id: 4,
    title: "Cafard",
    image_path: cafardImg,
    texte: "Résumé de l'article 4",
  },
  {
    id: 5,
    title: "Souris",
    image_path: sourisImg,
    texte: "Résumé de l'article 5",
  },
  {
    id: 6,
    title: "Rat",
    image_path: ratImg,
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