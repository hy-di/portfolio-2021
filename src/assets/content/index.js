import radio from './projects/radio.js';
import emit from './projects/emit.js';
import ergo from './projects/ergo.js';
import water from './projects/water.js';
import logo from './projects/logo.js';
import impres from './impres.js';

export default {
	intro: {
		title: 'About Me', // used in e. g. the navigation sidebar
		headline: 'Hallo,<br>ich bin Heidi Meyer',
		text: [
			'und ich bin Produkt Design Studentin an der HdM Stuttgart im 4. Semester.',
			'Ich arbeite derzeit neben meinem Studium als Werkstudenten bei DEKRA.', 
			'In meiner Freizeit bin ich leidenschaftliche Pflanzenhüterin und immer für einen Grillabend in der Natur zu haben. In der Verbleibenden Zeit lebe ich mich gerne mit kreativen Heimwerker-Projekten aus.',
		],
	},
	projects: {
		title: 'Projects',
		projects: [
			radio,
			emit,
			ergo,
			water,
			logo,
			impres,
		],
	},
	impres: {
		title: 'Impressum',
		text: [
			'Heidi Meyer',
			'Schwabstr. 90',
			'70193 Stuttgart',
			'E-Mail: hm043@hdm-stuttgart.de',

			'Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV):',
			'Heidi Meyer',
			'Disclaimer – rechtliche Hinweise',
			'§ 1 Warnhinweis zu Inhalten',
			'Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.',
			'§ 2 Externe Links',
			'Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.',
			'§ 3 Urheber- und Leistungsschutzrechte',
			'Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.',
			'§ 4 Besondere Nutzungsbedingungen',
			'Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.',
			'Basiert auf: Impressum Vorlage von JuraForum.de',
		],
	},
};
