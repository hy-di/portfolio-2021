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
	title: { de: 'Armaturgestaltung', en: 'Valve design' },
	description:{
		de: [
			'Einzelarbeit',
			'Fusion360, Werkstatt & Adobe Creative Cloud',
			'2. Semester',
		],
		en: [
			'Individual work',
			'Fusion360, workshop & Adobe Creative Cloud',
			'2nd semester',
		],
	},
	imageRows: [[{
		src: sinkskizze1,
		description: [{ de: 'erste Wasserhahn Ideeskizze', en: 'first tap idea sketch'}],
	}, {
		src: showerskizze1,
		description: [{ de: 'erste Duscharmatur Ideenskizzen', en: 'first shower faucet idea sketches'}],
	}],
	[{
		src: sinkskizze2,
		description: [{ de: 'Wasserhahn Skizze', en: 'Tap sketch'}],
	},{
		src: showerskizze2,
		description: [{ de: 'Duschkopf Skizze', en: 'Shower head sketch'}],
	}],
	[{
		src: tapmodel1,
		description: [{ de: 'Wasserhahn Knetmodell - leichte Seitenansicht', en: 'Faucet modeling clay - slight side view'}],
	},{
		src: tapmodel2,
		description: [{ de: 'Wasserhahn Knetmodell - leichte Draufsicht', en: 'Faucet modeling clay - slight top view'}],
	}, {
		src: tapmodel3,
		description: [{ de: 'Wasserhahn Knetmodell - leichte Frontansicht', en: 'Faucet modeling clay - slight front view'}],
	}],
	[{
		src: showerheadmodel1,
		description: [{ de: 'Duschkopf Knetmodell - leichte Draufsicht', en: 'Shower head modeling clay - slight top view'}],
	},{
		src: showerheadmodel2,
		description: [{ de: 'Duschkopf Knetmodell - leichte Frontansicht', en: 'Shower head modeling clay - slight front view'}],
	},{
		src: showerheadmodel3,
		description: [{ de: 'Duschkopf Knetmodell - leichte Seitenansicht', en: 'Shower head modeling clay - slight side view'}],
	}],
	[{
		src: sinkskizze3,
		description: [{ de: 'Waschbeckenraum Skizze', en: 'Wash basin room sketch'}],
	}, {
		src: showerskizze3,
		description: [{ de: 'Duschraum Skizze', en: 'Shower room sketch'}],
	}],
	[{
		src: sinkconzept,
		description: [{ de: 'Waschbecken Konzeptvisualisierung', en: 'Sink concept visualization'}],
	}, {
		src: sinkroom,
		description: [{ de: 'CAD Waschbeckenraum', en: 'CAD sink space'}],
	}],
	[{
		src: showerconzept,
		description: [{ de: 'Duschraum Konzeptvisualisierung', en: 'Shower room concept visualization'}],
	},{
		src: showerroom,
		description: [{ de: 'CAD Duschraum', en: 'CAD shower room'}],
	}]],
};
