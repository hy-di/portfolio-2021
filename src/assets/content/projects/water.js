import showerconzept from '@/assets/img/water/showerconzept.jpg';
import showerheadmodel1 from '@/assets/img/water/showerheadmodel1.jpg';
import showerheadmodel2 from '@/assets/img/water/showerheadmodel2.jpg';
import showerheadmodel3 from '@/assets/img/water/showerheadmodel3.jpg';
import showerroom from '@/assets/img/water/showerroom.jpg';
import showerskizze1 from '@/assets/img/water/showerskizze1.jpg';
import showerskizze2 from '@/assets/img/water/showerskizze2.png';
import showerskizze3 from '@/assets/img/water/showerskizze3.jpg';

import sinkconzept from '@/assets/img/water/sinkconzept.jpg';
import sinkroom from '@/assets/img/water/sinkroom.jpg';
import sinkskizze1 from '@/assets/img/water/sinkskizze1.jpg';
import sinkskizze2 from '@/assets/img/water/sinkskizze2.png';
import sinkskizze3 from '@/assets/img/water/sinkskizze3.jpg';

import tapmodel1 from '@/assets/img/water/tapmodel1.jpg';
import tapmodel2 from '@/assets/img/water/tapmodel2.jpg';
import tapmodel3 from '@/assets/img/water/tapmodel3.jpg';


export default {
	id: 'water',
	title: 'Amaturgestaltung',
	description: [
		'Einzelarbeit',
		'Fusion360, Modellbau & Adobe Creative Cloud',
		'2. Semester',
	],
	imageRows: [[{
		src: sinkskizze1,
		description: {
			de: ['Wasserhahn Skizze'],
			en: ['Tap Sketch'],
		},
	}, {
		src: showerskizze1,
		description: [{ de: 'Duschamatur Skizze', en: ''}],
	}],
	[{
		src: sinkskizze2,
		description: [{ de: 'Wasserhahn Skizze', en: ''}],
	},{
		src: showerskizze2,
		description: [{ de: 'Duschamatur Skizze', en: ''}],
	}],
	[{
		src: tapmodel1,
		description: [{ de: 'Wasserhahn Knetmodel', en: ''}],
	},{
		src: tapmodel2,
		description: [{ de: 'Wasserhahn Knetmodel', en: ''}],
	}, {
		src: tapmodel3,
		description: [{ de: 'Wasserhahn Knetmodel', en: ''}],
	}],
	[{
		src: showerheadmodel1,
		description: [{ de: 'Duschkopf Knetmodel', en: ''}],
	},{
		src: showerheadmodel2,
		description: [{ de: 'Duschkopf Knetmodel', en: ''}],
	},{
		src: showerheadmodel3,
		description: [{ de: 'Duschkopf Knetmodel', en: ''}],
	}],
	[{
		src: sinkskizze3,
		description: [{ de: 'Waschbecken Skizze', en: ''}],
	}, {
		src: showerskizze3,
		description: [{ de: 'Duschraum Skizze', en: ''}],
	}],
	[{
		src: sinkconzept,
		description: [{ de: 'Waschbecken Ideeskizze', en: ''}],
	}, {
		src: sinkroom,
		description: [{ de: 'Waschbecken CAD Visualisierung', en: ''}],
	}],
	[{
		src: showerconzept,
		description: [{ de: 'Duschraum Ideeskizze', en: ''}],
	},{
		src: showerroom,
		description: [{ de: 'Duschraum CAD Visualisierung', en: ''}],
	}]],
};
