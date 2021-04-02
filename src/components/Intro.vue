<template>
	<section id="intro">
		<h1 v-html="headline" />
		<p
			v-for="(paragraph, i) in text"
			:key="i"
			class="description"
		>
			{{ paragraph }}
		</p>
		<slot />
		<div class="top-leaves" />
	</section>
</template>

<script>
export default {
	name: 'Intro',
	props: {
		headline: {
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

<style lang="postcss">
/* Due to a Vite bug, this needs to be unscoped for now */
@keyframes move-up-leaves {
	0% { transform: translateY(0); }
	100% { transform: translateY(calc(-100% - 128px)); }
}
</style>

<style lang="postcss" scoped>
section {
	position: relative;
	margin: calc(256px + 64px) 0 calc(512px + 64px);
	min-height: calc(100vh - 768px);
	scroll-margin: 100vh 0 0 0;

	&, .top-leaves {
		border: solid transparent;
		border-image-source: url('@/assets/img/bg-intro.png');
		border-image-slice: 2096 1536 384;
		border-image-width: 0 1536px 384px;
		border-image-repeat: round;
		border-image-outset: calc(384px + 32px) calc(1536px + 32px);
	}
	.top-leaves {
		border-image-outset: calc(2096px - 84px) calc(1536px + 32px);
		border-image-width: 2096px 1536px 0;

		position: absolute;
		pointer-events: none;
		width: 100%;
		height: 100%;
		top: 100%;
		animation: move-up-leaves 2500ms ease 800ms forwards;
	}

	@media only screen and (max-width: 1280px) {
		border-image-width: 0 0 384px;
		border-image-repeat: repeat;

		.top-leaves {
			border-image-width: 2096px 0 0;
			border-image-repeat: repeat;
		}
	}

	@media only screen and (max-width: 1344px) and (min-width: 480px) {
		padding-left: 48px;
		padding-right: 48px;
	}
}

.description {
	font-size: calc(24em / 16);
}
</style>
