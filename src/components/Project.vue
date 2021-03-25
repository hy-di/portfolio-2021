<template>
	<section>
		<div class="test" />
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
section {
	box-sizing: content-box;
	border-style: solid;
	border-image-source: url('@/assets/img/bg.png');
	border-image-slice: 128 1536;
	border-image-outset: calc(128px + 32px) calc(1536px + 32px);
	border-image-width: 128px 1536px;
	border-image-repeat: round;

	@media only screen and (max-width: 1024px) {
		border-image-width: 128px 0;
		border-image-repeat: repeat;
	}
}

.description {
	font-size: calc(24em / 16);
}
</style>
