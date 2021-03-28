import placeholderImg from '@/assets/img/placeholder.jpg';
import placeholderImg2 from '@/assets/img/placeholder2.jpg';

export default {
	id: 'dummy-project',
	title: 'Dummy Project',
	description: ['Einzelarbeit, cooles Projekt, etc.'],
	imageRows: [[{
		src: placeholderImg,
		description: ['Platzhalterbild'],
	}, {
		src: placeholderImg2,
		description: ['Platzhalterbild 2'],
	}], [{
		src: placeholderImg,
		description: ['Platzhalterbild', 'Zweiter Absatz'],
	}, {
		src: placeholderImg,
		description: ['Platzhalterbild'],
	}, {
		src: placeholderImg2,
		description: ['Platzhalterbild 2'],
	}, {
		src: placeholderImg,
		description: ['Platzhalterbild'],
	}]],
};
