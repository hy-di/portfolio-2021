<template>
	<div class="container">
		<Intro v-bind="content.intro" />
		<div class="projects">
			<Project
				v-for="(project, i) in content.projects.projects"
				:key="project.id"
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

import content from '@/assets/content/';

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
			content,
			overlayImage: null,
		};
	},
	computed: {
		allImages() {
			return content.projects.projects.map(p => p.imageRows.map(img => img)).flat(2);
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
