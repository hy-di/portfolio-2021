import { ref, computed } from 'vue';

import radio from './projects/radio.js';
import emit from './projects/emit.js';
import ergo from './projects/ergo.js';
import water from './projects/water.js';
import logo from './projects/logo.js';
import impres from './sections/impres.js';
import profileImage from '../img/profile2.jpg';
import profileImageHover from '../img/profile-hover3.jpg';

const DEFAULT_LANG = 'de';

const data = {
	intro: {
		image: profileImage,
		imageHover: profileImageHover,
		de: {
			title: 'Über Mich',
			headline: 'Hallo,<br>ich bin Heidi Meyer',
			text: [
				'und ich bin Produktdesign Studentin an der <a target="_blank" rel="noopener" href="https://www.hdm-stuttgart.de/">HdM Stuttgart</a> im 4. Semester.',
				'<strong>Gestaltung und Naturwissenschaften</strong> haben mich schon immer interessiert.',
				'Nach meinem Abitur beschloss ich zunächst den Naturwissenschaften nachzugehen, da man privat oder nach dem Bachelor immer noch kreativ aktiv werden kann – dachte ich zumindest! Dafür bin ich nach Stuttgart gezogen und um hier mein <strong>Traumstudium</strong> zu finden, welches meine persönlichen Interessen vereint.<br><strong>Produktdesign.</strong> Hier lege ich Schwerpunkte auf den <strong>Modellbau</strong>, die <strong>Ergonomie</strong> und alles rund um <strong>Materialien</strong>. Auf diese Bereiche möchte ich mich jedoch nicht beschränken, da man nie weiß was einen sonst noch erwartet.',
				'In meiner Freizeit bin ich leidenschaftliche Pflanzenhüterin und immer für einen Grillabend in der Natur zu haben. In der verbleibenden Zeit lebe ich mich gerne mit kreativen Heimwerker-Projekten aus.',
			],
		},
		en: {
			title: 'About Me',
			headline: 'Hello,<br>I am Heidi Meyer',
			text: [
				'and I am a product design student at the <a target="_blank" rel="noopener" href="https://www.hdm-stuttgart.de/">HdM Stuttgart</a>, currently in my 4th semester.',
				'<strong>Design</strong> and <strong>science</strong> have always interested me.',
				'After graduating from school, I first decided to pursue natural sciences, because one can still be creative, privately or after graduation – at least that is what I thought! Therefore, I moved to Stuttgart and to find my <strong>dream course</strong> here, which unites my personal interests.<br><strong>Product design.</strong> Here I focus on <strong>model making</strong>, <strong>ergonomics</strong> and everything to do with <strong>materials</strong>. However, I do not want to limit myself to these areas, as you never know what else to expect.',
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
