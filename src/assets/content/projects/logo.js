import hm1 from '@/assets/img/logo/hm1.png';
import mono1 from '@/assets/img/logo/mono1.png';
import mono2 from '@/assets/img/logo/mono2.png';
import fuenfikons from '@/assets/img/logo/fuenfikons.jpg';
import imago from '@/assets/img/logo/imago.png';
import kaeferreal from '@/assets/img/logo/kaeferreal.jpg';
import simpleikons from '@/assets/img/logo/simpleikons.png';


export default {
	id: 'logo',
	title: { de: 'Logo Gestaltung', en: 'Logo design' },
	description:{
		de: [
			'Einzelarbeit',
			'Adobe Creative Cloud',
			'2. Semester',
		],
		en: [
			'Individual work',
			'Adobe Creative Cloud',
			'2nd semester',
		],
	},
	imageRows: [[{
		src: kaeferreal,
		description: [{ de: 'realistischer Käfer und Abstraktion', en: 'realistic beetle and abstraction'}],
	}],
	[{
		src: simpleikons,
		description: [{ de: 'Vereinfachung der Abstraktion', en: 'Simplification of the abstraction'}],
	},{
		src: fuenfikons,
		description: [{ de: 'Icon Varianten', en: 'Icon variants'}],
	}],
	[{
		src: imago,
		description: [{ de: 'Käfer basiertes Logo', en: 'Beetle based logo'}],
	}],
	[{
		src: hm1,
		description: [{ de: 'Monogramm Ideen', en: 'Monogram ideas'}],
	}],
	[{
		src: mono1,
		description: [{ de: 'Monogramm – dunkle Version', en: 'Monogram – dark version'}],
	},{
		src: mono2,
		description: [{ de: 'Monogramm – helle Version', en: 'Monogram – light version'}],
	}]],
};
