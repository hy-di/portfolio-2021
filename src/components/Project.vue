<template>
	<section :id="`project-${id}`">
		<h1 v-if="isFirstProject">
			Projects
		</h1>
		<h2>{{ title }}</h2>
		<p
			v-for="(paragraph, i) in description"
			:key="i"
			class="description"
		>
			{{ paragraph }}
		</p>
		<slot />
	</section>
</template>

<script>
export default {
	name: 'Project',
	props: {
		isFirstProject: {
			type: Boolean,
			default: false,
		},
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="postcss" scoped>
.project {
	margin: 128px 0 0;
	+ section { margin: calc(256px + 80px) 0 calc(128px + 32px); }

	border-image-source: url('@/assets/img/bg.png');
	border-image-slice: 128 1536;
	border-image-outset: calc(128px + 32px) calc(1536px + 32px);
	border-image-width: 128px 1536px;
	border-image-repeat: round;

	@media only screen and (max-width: 1280px) {
		border-image-width: 128px 0;
		border-image-repeat: repeat;
	}

	@media only screen and (max-width: 1344px) and (min-width: 480px) {
		padding-left: 48px;
		padding-right: 48px;
	}

	scroll-margin: 32px 0 0 0;
}

.description {
	font-size: calc(24em / 16);
}
</style>
