<template>
	<section :id="`section-${id}`">
		<h2>{{ title }}</h2>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<p v-for="(paragraph, i) in text" :key="i" v-html="paragraph" />
		<slot />
	</section>
</template>

<script>
export default {
	name: 'Section',
	props: {
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		text: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="postcss" scoped>
section {
	margin: calc(256px + 64px) 0 calc(128px + 32px);

	border: solid transparent;
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
</style>
