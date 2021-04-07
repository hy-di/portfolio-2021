import { ref, computed } from 'vue';

import radio from './projects/radio.js';
import emit from './projects/emit.js';
import ergo from './projects/ergo.js';
import water from './projects/water.js';
import logo from './projects/logo.js';
import impres from './sections/impres.js';
import profileImage from '../img/profile.jpg';

const DEFAULT_LANG = 'de';

const data = {
	intro: {
		image: profileImage,
		de: {
			title: 'Über Mich',
			headline: 'Hallo,<br>ich bin Heidi Meyer',
			text: [
				'und ich bin Produktdesign Studentin an der HdM Stuttgart im 4. Semester.',
				'',
				'In meiner Freizeit bin ich leidenschaftliche Pflanzenhüterin und immer für einen Grillabend in der Natur zu haben. In der verbleibenden Zeit lebe ich mich gerne mit kreativen Heimwerker-Projekten aus.',
			],
		},
		en: {
			title: 'About Me',
			headline: 'Hello,<br>I am Heidi Meyer',
			text: [
				'and I am a product design student at the HdM in Stuttgart, currently in my 4th semester.',
				'Meanwhile I am working for DEKRA as a student employee.',
				'Personally, I am a plant fanatic and always ready for a peaceful evening BBQ in nature. My remaining pass-time is usually spent with creative DIY projects.',
			],
		},
	},
	projects: {
		title: { de: 'Projekte', en: 'Projects' },
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

const _lang = ref((() => {
	const url = new URL(window.location.href);
	return url.searchParams.has('lang') ? url.searchParams.get('lang') : DEFAULT_LANG;
})());

const lang = computed({
	get: () => _lang.value,
	set: newLang => {
		_lang.value = newLang;
		const url = new URL(window.location.href);
		url.searchParams.set('lang', newLang);
		window.history.pushState(null, null, url);
	},
});

// TODO: Don't do this static-file-flattening on runtime...
const flattenLang = (obj, lang, level = 0) => {
	if (level === 0) obj = JSON.parse(JSON.stringify(obj));

	for (const field in obj) {
		if (obj[field][lang]) {
			if (typeof obj[field][lang] === 'object' && !Array.isArray(obj[field][lang])) {
				obj[field] = { ...obj[field], ...obj[field][lang] };
				// If we start deleting orphaned language objects, we should delete all of them:
				// delete obj[field][lang];
			} else {
				obj[field] = obj[field][lang];
			}
		}

		if (typeof obj[field] === 'object') flattenLang(obj[field], lang, ++level);
	}
	return obj;
};

export default computed(() => {
	return flattenLang(data, lang.value);
});

export { lang };
