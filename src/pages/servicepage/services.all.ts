export const services = [
	{
		id: 1,
		title: "Souris",
		slug: "souris",
		image_path: "/images/souris.jpg",
		texte:
			"Petites mais destructrices, les souris représentent un risque sanitaire et matériel.",
		dangers: [
			{
				emoji: "🦠",
				texte: "Maladies transmissibles",
			},
			{
				emoji: "⚡",
				texte: "Risque d’incendie",
			},
			{
				emoji: "🧻",
				texte: "Dommages matériels",
			},
		],
		details: {
			danger: {
				title: "Les dangers liés à leur présence",
				points: [
					"Contamination par déjections",
					"Rongent câbles et structures",
					"Reproduction très rapide",
					"Grattements, nuisances sonores",
				],
			},
			solution: {
				title: "Assistance 3D : votre expert anti-souris",
				points: [
					"Diagnostic précis",
					"Traitement ciblé",
					"Obstruction des points d’entrée",
					"Suivi personnalisé",
				],
				cta: "Demander une intervention",
			},
		},
	},
	{
		id: 2,
		title: "Rats",
		slug: "rats",
		image_path: "/images/rats.jpg",
		texte:
			"Redoutables, les rats sont porteurs de maladies graves et causent de lourds dégâts.",
		dangers: [
			{
				emoji: "🧫",
				texte: "Maladies graves",
			},
			{
				emoji: "🏚️",
				texte: "Dégradent les bâtiments",
			},
			{
				emoji: "⚠️",
				texte: "Risque d’incendie",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Contamination des surfaces",
					"Transmission de la leptospirose",
					"Rongent les câbles électriques",
					"Reproduction rapide",
				],
			},
			solution: {
				title: "Assistance 3D : votre expert anti-rats",
				points: [
					"Inspection complète",
					"Traitements adaptés",
					"Obturation des accès",
					"Suivi durable",
				],
				cta: "Demander une intervention",
			},
		},
	},
	{
		id: 3,
		title: "Punaises de lit",
		slug: "punaises",
		image_path: "/images/punaises.webp",
		texte:
			"Les punaises de lit sont un véritable fléau pour les particuliers comme les professionnels.",
		dangers: [
			{
				emoji: "🩸",
				texte: "Piqûres multiples",
			},
			{
				emoji: "😨",
				texte: "Stress et anxiété",
			},
			{
				emoji: "🧳",
				texte: "Propagation rapide",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Piqûres multiples provoquant démangeaisons",
					"Propagation rapide dans le logement",
					"Stigmatisation sociale",
					"Anxiété, insomnie",
				],
			},
			solution: {
				title: "Assistance 3D : votre expert anti-punaises",
				points: [
					"Inspection minutieuse",
					"Traitement thermique ou chimique",
					"Méthodes sûres",
					"Suivi rigoureux",
				],
				cta: "Demander une intervention",
			},
		},
	},
	{
		id: 4,
		title: "Cafards",
		slug: "cafards",
		image_path: "/images/cafards.jpg",
		texte:
			"Rapides, résistants, les cafards prolifèrent vite et propagent des maladies.",
		dangers: [
			{
				emoji: "🦠",
				texte: "Propagation de bactéries",
			},
			{
				emoji: "🤧",
				texte: "Déclenche allergies",
			},
			{
				emoji: "💥",
				texte: "Endommage appareils",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Propagent virus et bactéries",
					"Déjections responsables d’allergies",
					"Contaminent les aliments",
					"Résistants aux traitements classiques",
				],
			},
			solution: {
				title: "Assistance 3D : votre expert anti-cafards",
				points: [
					"Inspection des zones à risque",
					"Identification de l’espèce",
					"Traitement professionnel ciblé",
					"Suivi régulier",
				],
				cta: "Demander une intervention",
			},
		},
	},

	{
		id: 5,
		title: "Guêpes",
		slug: "guepes",
		image_path: "/images/guepes.jpg",
		texte:
			"Les guêpes deviennent agressives lorsqu’elles défendent leur nid, rendant leur présence risquée.",
		dangers: [
			{
				emoji: "🩹",
				texte: "Piqûres douloureuses",
			},
			{
				emoji: "⚠️",
				texte: "Risque de choc allergique",
			},
			{
				emoji: "🏠",
				texte: "Nid souvent caché",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Piqûres douloureuses et répétées",
					"Danger pour les personnes allergiques",
					"Nids cachés dans les haies ou greniers",
					"Colonie pouvant atteindre 5000 individus",
				],
			},
			solution: {
				title: "Assistance 3D : votre expert anti-guêpes",
				points: [
					"Élimination sécurisée du nid",
					"Produits certifiés et sans danger",
					"Intervention rapide",
					"Prévention de la réapparition",
				],
				cta: "Éliminer un nid de guêpes",
			},
		},
	},
	{
		id: 6,
		title: "Frelons asiatiques",
		slug: "frelons-asiatiques",
		image_path: "/images/frelons-asiatiques.jpg",
		texte:
			"Invasif et dangereux, le frelon asiatique attaque en groupe s’il se sent menacé.",
		dangers: [
			{
				emoji: "🐝",
				texte: "Menace les abeilles",
			},
			{
				emoji: "⚠️",
				texte: "Agressivité proche du nid",
			},
			{
				emoji: "👶",
				texte: "Risque pour les enfants",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Piqûres multiples et douloureuses",
					"Menace pour la biodiversité (abeilles)",
					"Nid souvent en hauteur et invisible",
					"Colonies de milliers d’individus",
				],
			},
			solution: {
				title: "Assistance 3D : expert anti-frelons asiatiques",
				points: [
					"Repérage du nid",
					"Destruction sécurisée",
					"Produits homologués",
					"Suivi anti-récidive",
				],
				cta: "Neutraliser un frelon asiatique",
			},
		},
	},
	{
		id: 7,
		title: "Frelons européens",
		slug: "frelons-europeens",
		image_path: "/images/frelon-europeen.jpg",
		texte:
			"Moins agressif mais impressionnant, le frelon européen peut nicher dans vos murs ou combles.",
		dangers: [
			{
				emoji: "💢",
				texte: "Piqûre très douloureuse",
			},
			{
				emoji: "🧱",
				texte: "Nid dans les murs",
			},
			{
				emoji: "👂",
				texte: "Vol bruyant et stressant",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Nid dans des cavités sombres",
					"Peut causer des dégâts au bois",
					"Risque accru en période estivale",
					"Agression si le nid est perturbé",
				],
			},
			solution: {
				title: "Assistance 3D : anti-frelons européens",
				points: [
					"Localisation du nid",
					"Équipement professionnel",
					"Intervention rapide",
					"Prévention saisonnière",
				],
				cta: "Se débarrasser d’un nid",
			},
		},
	},
	{
		id: 8,
		title: "Fourmis",
		slug: "fourmis",
		image_path: "/images/fourmis.jpg",
		texte:
			"Petites mais envahissantes, les fourmis s’infiltrent partout et construisent leurs nids dans vos murs.",
		dangers: [
			{
				emoji: "🍽️",
				texte: "Contaminent les aliments",
			},
			{
				emoji: "🧱",
				texte: "Nidifient dans les murs",
			},
			{
				emoji: "🚫",
				texte: "Très difficile à éradiquer",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Invasion des cuisines",
					"Colonies pouvant contenir des milliers d’individus",
					"Dommages aux murs et isolants",
					"Résurgence rapide",
				],
			},
			solution: {
				title: "Assistance 3D : solution anti-fourmis",
				points: [
					"Identification des nids",
					"Traitement ciblé",
					"Barrières physiques",
					"Conseils de prévention",
				],
				cta: "Éliminer une invasion de fourmis",
			},
		},
	},
	{
		id: 9,
		title: "Puces",
		slug: "puces",
		image_path: "/images/puces.jpg",
		texte:
			"Les puces piquent, sautent, se reproduisent vite et sont un enfer pour vous et vos animaux.",
		dangers: [
			{
				emoji: "🦟",
				texte: "Piqûres multiples",
			},
			{
				emoji: "🐾",
				texte: "Contagion par animaux",
			},
			{
				emoji: "💢",
				texte: "Allergies possibles",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Piqûres nombreuses",
					"Réactions allergiques",
					"Infestation invisible mais massive",
					"Cycle de vie très rapide",
				],
			},
			solution: {
				title: "Assistance 3D : votre expert anti-puces",
				points: [
					"Diagnostic précis",
					"Traitement environnemental",
					"Conseils vétérinaires",
					"Suivi post-traitement",
				],
				cta: "Éradiquer les puces",
			},
		},
	},
	{
		id: 10,
		title: "Taupes",
		slug: "taupes",
		image_path: "/images/taupes.jpg",
		texte:
			"Les taupes détruisent les pelouses et les sols avec leurs galeries souterraines.",
		dangers: [
			{
				emoji: "🌱",
				texte: "Dommages au jardin",
			},
			{
				emoji: "🌾",
				texte: "Destruction de cultures",
			},
			{
				emoji: "🕳️",
				texte: "Instabilité du sol",
			},
		],
		details: {
			danger: {
				title: "Pourquoi faut-il s’en méfier ?",
				points: [
					"Taupinières disgracieuses",
					"Risque pour les cultures",
					"Propagation des campagnols",
					"Réseaux souterrains étendus",
				],
			},
			solution: {
				title: "Assistance 3D : expert anti-taupes",
				points: [
					"Repérage des galeries actives",
					"Piégeage mécanique",
					"Méthodes éco-responsables",
					"Suivi régulier",
				],
				cta: "Faire disparaître les taupes",
			},
		},
	},
];
