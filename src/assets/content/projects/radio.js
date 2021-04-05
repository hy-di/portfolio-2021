import prototyp1 from '@/assets/img/radio/prototyp1.jpg';
import prototyp2 from '@/assets/img/radio/prototyp2.jpg';
import prototyp3 from '@/assets/img/radio/prototyp3.jpg';
import radiomodel1 from '@/assets/img/radio/radiomodel1.jpg';
import radiomodel2 from '@/assets/img/radio/radiomodel2.jpg';
import radiomodel3 from '@/assets/img/radio/radiomodel3.jpg';
import radiomodel4 from '@/assets/img/radio/radiomodel4.jpg';
import radiomodel5 from '@/assets/img/radio/radiomodel5.jpg';
import radiomodel6 from '@/assets/img/radio/radiomodel6.jpg';
import skizzenbedienung from '@/assets/img/radio/skizzenbedienung.png';
import skizzendrehregler from '@/assets/img/radio/skizzendrehregler.png';
import skizzenideen from '@/assets/img/radio/skizzenideen.png';
import skizzenradio from '@/assets/img/radio/skizzenradio.png';
import tz from '@/assets/img/radio/tz.png';
import werkstatt1 from '@/assets/img/radio/werkstatt1.jpg';
import werkstatt2 from '@/assets/img/radio/werkstatt2.jpg';
import werkstatt3 from '@/assets/img/radio/werkstatt3.jpg';
import werkstatt4 from '@/assets/img/radio/werkstatt4.jpg';
import werkstatt5 from '@/assets/img/radio/werkstatt5.jpg';

export default {
	id: 'radio',
	title: { de: 'Radiowecker', en: 'Radio alarm clock' },
	description:{
		de: [
			'Einzelarbeit',
			'Unity, Fusion360, Werkstatt & Adobe Creative Cloud',
			'3. Semester',
		],
		en: [
			'Individual work',
			'Unity, Fusion360, workshop & Adobe Creative Cloud',
			'3rd semester',
		],
	},
	imageRows: [[{
		src: skizzenideen,
		description: [{ de: 'Radiowecker Entwurfsskizzen', en: 'Clock radio design sketches'}],
	}, {
		src: skizzenradio,
		description: [{ de: 'Radiowecker finale Idee – Skizze', en: 'Clock radio final idea – sketch'}],
	}],
	[{
		src: prototyp3,
		description: [{ de: 'Lehrmodell – Draufsicht', en: 'Mockup – top view'}],
	}, {
		src: prototyp1,
		description: [{ de: 'Lehrmodell – Frontansicht', en: 'Mockup – front view'}],
	}, {
		src: prototyp2,
		description: [{ de: 'Lehrmodell – schrägAnsicht', en: 'Mockup – oblique view'}],
	}],
	[{
		src: skizzenbedienung,
		description: [{ de: 'Bedienungsfeld-Layout-Entwürfe', en: 'Control panel layout drafts'}],
	}, {
		src: skizzendrehregler,
		description: [{ de: 'Drehregler Entwürfe', en: 'Knob designs'}],
	}],
	[{
		src: tz,
		description: [{ de: 'Modelbauzeichnung', en: 'Model drawing'}],
	}],
	[{
		src: werkstatt1,
		description: [{ de: 'Model Grundkörper aus Ureol fräsen', en: 'Mill the basic body of the Ureol model'}],
	}, {
		src: werkstatt2,
		description: [{ de: 'Zwischenstand des Grundkörpers', en: 'Intermediate state of the basic body'}],
	}],
	[{
		src: werkstatt3,
		description: [{ de: 'weitere Bearbeitung – Feilen und Schleifen', en: 'further processing – filing and grinding'}],
	}, {
		src: werkstatt4,
		description: [{ de: 'spachteln der Grundkörpers', en: 'fill the base body'}],
	}, {
		src: werkstatt5,
		description: [{ de: 'Zwischenstand des Radioweckers (Fokus Beleuchtung)', en: 'Intermediate status of the radio alarm clock (focus lighting)'}],
	}],
	[{
		src: radiomodel1,
		description: [{ de: 'Fotomodel', en: 'Photo model'}],
	}, {
		src: radiomodel2,
		description: [{ de: 'Fotomodel – Fokus Rückseite und USB-C Anschluss', en: 'Photo model – focus on the back and USB-C connection'}],
	}],
	[{
		src: radiomodel3,
		description: [{ de: 'Fotomodel – Fokus Lautsprecher und Display', en: 'Photo model – focus speakers and display'}],
	}, {
		src: radiomodel4,
		description: [{ de: 'Fotomodel', en: 'Photo model'}],
	}, {
		src: radiomodel5,
		description: [{ de: 'Fotomodel Underseite', en: 'Photo model underside'}],
	}, {
		src: radiomodel6,
		description: [{ de: 'Fotomodel Oberseite', en: 'Photo model top'}],
	}]],
};
