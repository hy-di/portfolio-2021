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
		description: [{ de: 'Fahrrad Haltungsanalysa', en: ''}],
	}],
	[{
		src: fahrradbewegung,
		description: [{ de: 'Fahrrad Bewegungsanalyse', en: ''}],
	}, {
		src: fahrrad,
		description: [{ de: 'personalisiertes Fahrrad', en: ''}],
	}],
	[{
		src: diagramm1,
		description: [{ de: 'Zähneputzen Ablauf', en: ''}],
	}, {
		src: diagramm2,
		description: [{ de: 'Zähneputzen Zeit-/ Bewegungsablaug', en: ''}],
	}],
	[{
		src: zaehneputzenlinks,
		description: [{ de: 'Zähne putzen Haltungsanalyse', en: ''}],
	},{
		src: zaehneputzenvorne,
		description: [{ de: 'Zähne putzen Haltungsanalyse', en: ''}],
	},{
		src: zaehneputzenrechts,
		description: [{ de: 'Zähne putzen Haltungsanalyse', en: ''}],
	}]],
};
