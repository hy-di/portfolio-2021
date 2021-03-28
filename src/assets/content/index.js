import radio from './projects/radio.js';
import emit from './projects/emit.js';
import dummyProject from './projects/dummy-project.js';
import dummyProject2 from './projects/another-project.js';

export default {
	intro: {
		title: 'About Me', // used in e. g. the navigation sidebar
		headline: 'Hello,<br>I am Heidi Meyer',
		text: [
			'and I am a product design student at the HdM Stuttgart.',
		],
	},
	projects: {
		title: 'Projects',
		projects: [
			radio,
			emit,
			dummyProject,
			dummyProject2,
		],
	},
};
