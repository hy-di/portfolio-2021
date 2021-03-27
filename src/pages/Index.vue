<template>
	<div class="container">
		<Intro v-bind="intro" />
		<div class="projects">
			<Project
				v-for="(project, i) in projects"
				:key="i"
				v-bind="project"
				:is-first-project="i == 0"
				class="project"
			>
				<ImageRow
					v-for="(images, j) in project.imageRows"
					:key="j"
					:images="images"
					@image-click="image => openImageOverlay(image)"
				/>
			</Project>
		</div>
	</div>
	<ImageOverlay
		:current-image="overlayImage"
		:images="allImages"
		@change-image="image => overlayImage = image"
		@close="closeImageOverlay()"
	/>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Project from '@/components/Project.vue';
import ImageRow from '@/components/ImageRow.vue';
import ImageOverlay from '@/components/ImageOverlay.vue';

import placeholderImg from '@/assets/img/placeholder.jpg';
import placeholderImg2 from '@/assets/img/placeholder2.jpg';

export default {
	name: 'Index',
	components: {
		Intro,
		Project,
		ImageRow,
		ImageOverlay,
	},
	data() {
		return {
			overlayImage: null,
			intro: {
				title: 'Hello, I am Heidi Meyer',
				text: ['I am a product design student at the HdM Stuttgart.'],
			},
			projects: [{
				title: 'Project 1',
				description: ['Einzelarbeit, cooles Projekt, etc.'],
				imageRows: [
					[{
						src: placeholderImg,
						description: ['Platzhalterbild'],
					}, {
						src: placeholderImg2,
						description: ['Platzhalterbild 2'],
					}],
					[{
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
					}],
				],
			}, {
				title: 'Project 2',
				description: ['Noch ein Projekt.', 'Noch ein Absatz.'],
				imageRows: [[{
					src: placeholderImg,
					description: ['Platzhalterbild'],
				}]],
			}],
		};
	},
	computed: {
		allImages() {
			return this.projects.map(p => p.imageRows.map(img => img)).flat(2);
		},
	},
	methods: {
		openImageOverlay(image) {
			this.overlayImage = image;
		},
		closeImageOverlay() {
			this.overlayImage = null;
		},
	},
};
</script>

<style lang="postcss" scoped>
.container {
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 16px;
}
</style>
