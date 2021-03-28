import dummyProject from './projects/dummy-project.js';
import dummyProject2 from './projects/another-project.js';

export default {
	intro: {
		title: 'About Me', // used in e. g. the navigation sidebar
		headline: 'Hello, I am Heidi Meyer',
		text: [
			'I am a product design student at the HdM Stuttgart.',
		],
	},
	projects: {
		title: 'Projects',
		projects: [
			dummyProject,
			dummyProject2,
		],
	},
};
