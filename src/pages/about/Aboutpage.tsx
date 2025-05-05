import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./aboutpage.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
	iconUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
	iconRetinaUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
	{ name: "Caen", lat: 49.1829, lng: -0.3707 },
	{ name: "Saint-Lô", lat: 49.1182, lng: -1.0905 },
	{ name: "Cherbourg", lat: 49.6396, lng: -1.6166 },
	{ name: "Avranches", lat: 48.6845, lng: -1.3561 },
	{ name: "Coutances", lat: 49.0454, lng: -1.4435 },
	{ name: "Les Pieux", lat: 49.5409, lng: -1.8061 },
	{ name: "Bayeux", lat: 49.2758, lng: -0.7039 },
	{ name: "Lisieux", lat: 49.145, lng: 0.2286 },
];

export default function AboutPage() {
	return (
		<section className={styles.zoneIntervention}>
			<h2 className={styles.zoneTitle}>Zone d'intervention</h2>
			<p className={styles.zoneIntro}>
				Nous intervenons dans les departement de la Manche et du Calvados,
				notamment :
			</p>

			<div className={styles.zoneContent}>
				<div className={styles.zoneGrid}>
					{locations.map((loc) => (
						<div key={loc.name} className={styles.zoneCard}>
							📍 {loc.name}
						</div>
					))}
				</div>

				<MapContainer
					center={[49.1829, -0.7]} // décalage vers la gauche (ouest)
					zoom={8}
					scrollWheelZoom={false}
					className={styles.mapContainer}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; OpenStreetMap"
					/>
					{locations.map((loc) => (
						<Marker key={loc.name} position={[loc.lat, loc.lng]}>
							<Popup>{loc.name}</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>

			<p className={styles.zoneFooter}>
				Vous ne trouvez pas votre ville ? Contactez-nous, nous nous déplaçons
				aussi hors secteur !
			</p>
		</section>
	);
}
