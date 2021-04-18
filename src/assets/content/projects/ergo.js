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
	title: { de: 'Ergonomische Untersuchungen', en: 'Ergonomic examinations' },
	description: {
		de: [
			'Einzelarbeit',
			'Rhino6 & Adobe Creative Cloud',
			'3. Semester',
		],
		en: [
			'Individual work',
			'Rhino6 & Adobe Creative Cloud',
			'3rd semester',
		],
	},
	imageRows: [[{
		src: fahrradablauf,
		description: [{ de: 'Fahrrad Haltungsanalyse für Sattel und Lenker', en: 'Bicycle posture analysis for saddle and handlebars'}],
	}],
	[{
		src: fahrradbewegung,
		description: [{ de: 'Fahrrad Bewegungsanalyse und Sichtkegel', en: 'Bicycle motion analysis and cone of vision'}],
	}, {
		src: fahrrad,
		description: [{ de: 'personalisiertes Fahrradmodell', en: 'personalized bike model'}],
	}],
	[{
		src: diagramm1,
		description: [{ de: 'Zähneputzen: Ablaufanalyse', en: 'Teeth brushing: Process analysis'}],
	}, {
		src: diagramm2,
		description: [{ de: 'Zähneputzen: Zeit-/ Bewegungsanalyse', en: 'Teeth brushing: Time / movement analysis'}],
	}],
	[{
		src: zaehneputzenlinks,
		description: [{ de: 'Zähne putzen: Haltungsanalyse – linke Zahnbereich', en: 'Teeth brushing: Posture analysis – left tooth area'}],
	},{
		src: zaehneputzenvorne,
		description: [{ de: 'Zähne putzen: Haltungsanalyse – vordere Zahnbereich', en: 'Teeth brushing: Posture analysis – front tooth area'}],
	},{
		src: zaehneputzenrechts,
		description: [{ de: 'Zähne putzen: Haltungsanalyse – rechte Zahnbereich', en: 'Teeth brushing: Posture analysis – right tooth area'}],
	}]],
};
