<template>
	<section id="intro">
		<div class="row">
			<div class="profile-image">
				<img class="default-img" :src="image" alt="profile image">
				<img class="hover-img" :src="imageHover">
			</div>
			<div>
				<h1 v-html="headline" />
				<p
					v-for="(paragraph, i) in text"
					:key="i"
					class="description"
					v-html="paragraph"
				/>
			</div>
		</div>
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
		image: {
			type: String,
			default: undefined,
		},
		imageHover: {
			type: String,
			default: undefined,
		},
	},
};
</script>

<style lang="postcss">
/* Due to a Vite bug, this needs to be unscoped for now */
@keyframes move-up-leaves {
	0% { transform: none }
	100% { transform: translateY(calc(-100% - 128px)); }
}

@keyframes shift-in {
	0% {
		opacity: 0;
		transform: translateY(32px) scale(0.8);
	}
	100% {
		opacity: 1;
		transform: none;
	}
}
</style>

<style lang="postcss" scoped>
section {
	position: relative;
	margin: calc(256px + 64px) 0 calc(512px + 64px);
	min-height: calc(100vh - 768px);
	scroll-margin: 100vh 0 0 0;
	@media only screen and (max-width: 480px) {
		scroll-margin: 64px 0 0 0;
	}

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

.row {
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: center;

	.profile-image {
		flex-shrink: 0;
		position: relative;
		width: 400px;
		max-width: calc(100% - 48px);
		margin-left: 64px;
		animation: shift-in 1000ms ease 1600ms both;

		img {
			display: block;
			border-radius: 50%;
		}

		img.default-img {
			width: 100%;
			border: 2px solid rgb(var(--col-foreground));

		}
		img.hover-img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 2px solid transparent;
			opacity: 0;
		}

		img.default-img:hover + img.hover-img,
		img.hover-img:hover {
			opacity: 1;
		}
	}
}

@media only screen and (max-width: 1000px) {
	.row {
		flex-wrap: wrap;

		.profile-image {
			margin-left: 0;
			margin-bottom: 32px;
		}
	}
}

.description {
	font-size: calc(20em / 16);
	line-height: 1.4;
}
</style>
