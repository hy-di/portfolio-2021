import einweghandschuhe from '@/assets/img/emit/einweghandschuhe.jpg';
import emitposter1 from '@/assets/img/emit/emitposter1.jpg';
import emitposter2 from '@/assets/img/emit/emitposter2.jpg';
import emitposter3 from '@/assets/img/emit/emitposter3.jpg';
import emitposter4 from '@/assets/img/emit/emitposter4.jpg';
import knetei1 from '@/assets/img/emit/knetei1.jpg';
import knetei2 from '@/assets/img/emit/knetei2.jpg';

import uvboxversion1 from '@/assets/img/emit/uvboxversion1.jpg';
import uvboxversion21 from '@/assets/img/emit/uvboxversion2-1.jpg';
import uvboxversion22 from '@/assets/img/emit/uvboxversion2-2.jpg';
import uvboxversion23 from '@/assets/img/emit/uvboxversion2-3.jpg';
import uveiversion11 from '@/assets/img/emit/uveiversion1-1.jpg';
import uveiversion12 from '@/assets/img/emit/uveiversion1-2.jpg';
import uveiversion21 from '@/assets/img/emit/uveiversion2-1.jpg';
import uveiversion22 from '@/assets/img/emit/uveiversion2-2.jpg';


export default {
	id: 'emit',
	title: 'Emit',
	description:{
		de: [
			'3er-Gruppenarbeit',
			'Fusion360, Rhino6, Blender und Adobe Creative Cloud',
			'3. Semester',
		],
		en: [
			'3-person group work',
			'Fusion360, Rhino6, Blender und Adobe Creative Cloud',
			'3rd semester',
		],
	},

	imageRows: [[{
		src: knetei1,
		description: [{ de: 'Lehrmodell - Anwendung', en: 'Mockup - application'}],
	}, {
		src: knetei2,
		description: [{ de: 'Lehrmodell - Draufsicht', en: 'Mockup - top view'}],
	}],
	[{
		src: einweghandschuhe,
		description: [{ de: 'Handschuh Studie zur Formstabilität', en: 'Glove study on dimensional stability'}],
	}],
	[{
		src: uveiversion11,
		description: [{ de: 'erster CAD Entwurf des Handtaschen-Desinfektionsspenders (Orb)', en: 'First CAD design of the handbag disinfectant dispenser (Orb)'}],
	}, {
		src: uveiversion12,
		description: [{ de: 'zweiter CAD Entwurf des Handtaschen-Desinfektionsspenders', en: 'second CAD design of the handbag disinfectant dispenser'}],
	},{
		src: uveiversion21,
		description: [{ de: 'zweiter CAD Entwurf des Handtaschen-Desinfektionsspenders', en: 'second CAD design of the handbag disinfectant dispenser'}],
	}, {
		src: uveiversion22,
		description: [{ de: 'zweiter CAD Entwurf des Handtaschen-Desinfektionsspenders - Fokus Riffelung', en: 'second CAD design of the handbag disinfectant dispenser - Focus corrugation'}],
	}],
	[{
		src: uvboxversion1,
		description: [{ de: 'erster CAD Entwurf des Tragebox-Desinfektionsspenders (Case)', en: 'first CAD draft of the carrying box disinfection dispenser (case)'}],
	},{
		src: uvboxversion21,
		description: [{ de: 'zweiter CAD Entwurf des Tragebox-Desinfektionsspenders - Fokus langer Tragegurt', en: 'first CAD draft of the carrying box disinfection dispenser - Focus long shoulder strap'}],
	},{
		src: uvboxversion22,
		description: [{ de: 'zweiter CAD Entwurf des Tragebox-Desinfektionsspenders - Gesamtübersicht', en: 'first CAD draft of the carrying box disinfection dispenser - General overview'}],
	}, {
		src: uvboxversion23,
		description: [{ de: 'zweiter CAD Entwurf des Tragebox-Desinfektionsspenders - Fokus Innenleben', en: 'first CAD draft of the carrying box disinfection dispenser - Focus internals'}],
	}],
	[{
		src: emitposter1,
		description: [{ de: 'Produktposter (Orb, Case und Glove)', en: 'Product poster (Orb, Case and Glove)'}],
	}, {
		src: emitposter2,
		description: [{ de: 'Produktposter Handtaschen-Desinfektionsspender', en: 'Product poster handbag disinfectant dispenser'}],
	}], 
	[{
		src: emitposter3,
		description: [{ de: 'Produktposter Tragebox-Desinfektionsspender', en: 'Product poster carrying box disinfectant dispenser'}],
	},{
		src: emitposter4,
		description: [{ de: 'Produktposter UV-C-Licht-Handschuh', en: 'Product poster UV-C light glove'}],
	}]],
};
