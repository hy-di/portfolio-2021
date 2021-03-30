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
		],
	},
	sections: [impres],
};
