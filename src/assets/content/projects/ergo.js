import zaehneputzenlinks from '@/assets/img/ergo/zaehneputzenlinks.png';
import zaehneputzenrechts from '@/assets/img/ergo/zaehneputzenrechts.png';
import zaehneputzenvorne from '@/assets/img/ergo/zaehneputzenvorne.png';

import fahrrad from '@/assets/img/ergo/fahrrad.jpg';
import fahrradablauf from '@/assets/img/ergo/fahrradablauf.jpg';
import fahrradbewegung from '@/assets/img/ergo/fahrradbewegung.jpg';

import diagramm1 from '@/assets/img/ergo/diagramm1.png';
import diagramm2 from '@/assets/img/ergo/diagramm2.png';


export default {
	id: 'ergo',
	title: 'Ergonomische Untersuchungen',
	description: [
		'Einzelarbeit',
		'Rhino6 & Adobe Creative Cloud',
		'3. Semester',
	],
	imageRows: [[{
		src: fahrradablauf,
		description: ['Fahrrad Haltungsanalysa'],
	}],
	[{
		src: fahrradbewegung,
		description: ['Fahrrad Bewegungsanalyse'],
	}, {
		src: fahrrad,
		description: ['personalisiertes Fahrrad'],
	}],
	[{
		src: diagramm1,
		description: ['Zähneputzen Ablauf'],
	}, {
		src: diagramm2,
		description: ['Zähneputzen Zeit-/ Bewegungsablaug'],
	}],
	[{
		src: zaehneputzenlinks,
		description: ['Zähne putzen Haltungsanalyse'],
	},{
		src: zaehneputzenvorne,
		description: ['Zähne putzen Haltungsanalyse'],
	},{
		src: zaehneputzenrechts,
		description: ['Zähne putzen Haltungsanalyse'],
	}]],
};
