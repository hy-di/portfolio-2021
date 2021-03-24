<template>
	<div style="padding: 16px">
		<div style="height: var(--navbar-height);" />
		<h1>This is a heading level 1</h1>
		<h2>This is a heading level 2</h2>
		<h3>This is a heading level 3</h3>
		<p>Lorem Ipsum dolor sit amet.</p>
		<h1>Projects</h1>
		<Project
			v-for="(project, i) in projects"
			:key="i"
			:title="project.title"
		>
			<ImageRow
				v-for="(images, j) in project.imageRows"
				:key="j"
				:images="images"
				@image-click="image => openImageOverlay(image)"
			/>
		</Project>
	</div>
	<ImageOverlay :image="overlayImage" @close="closeImageOverlay()" />
</template>

<script>
import Project from '@/components/Project.vue';
import ImageRow from '@/components/ImageRow.vue';
import ImageOverlay from '@/components/ImageOverlay.vue';

export default {
	name: 'Index',
	components: {
		Project,
		ImageRow,
		ImageOverlay,
	},
	data() {
		return {
			overlayImage: null,
			projects: [{
				title: 'Project 1',
				imageRows: [
					[{
						src: 'src/assets/img/placeholder.jpg',
						description: 'Platzhalterbild',
					}, {
						src: 'src/assets/img/placeholder.jpg',
						description: 'Platzhalterbild',
					}],
					[{
						src: 'src/assets/img/placeholder.jpg',
						description: 'Platzhalterbild',
					}, {
						src: 'src/assets/img/placeholder.jpg',
						description: 'Platzhalterbild',
					}, {
						src: 'src/assets/img/placeholder.jpg',
						description: 'Platzhalterbild',
					}, {
						src: 'src/assets/img/placeholder.jpg',
						description: 'Platzhalterbild',
					}],
				],
			}, {
				title: 'Project 2',
				imageRows: [[{
					src: 'src/assets/img/placeholder.jpg',
					description: 'Platzhalterbild',
				}]],
			}],
		};
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
</style>
