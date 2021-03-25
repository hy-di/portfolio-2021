<template>
	<div v-if="currentImage">
		<Overlay @click.self="$emit('close')">
			<div class="container">
				<div class="row row-titlebar">
					<Button
						variant="icon"
						alt="close overlay"
						class="close-button"
						@click="$emit('close')"
					>
						<MenuCloseIcon />
					</Button>
				</div>
				<div class="content">
					<div class="row row-image">
						<Button
							variant="icon"
							alt="view previous image"
							:disabled="!prevImage"
							class="prev-button"
							@click="$emit('change-image', prevImage)"
						>
							<ArrowRightIcon style="transform: scaleX(-1)" />
						</Button>
						<div class="img-wrapper">
							<img :src="currentImage.src">
						</div>
						<Button
							variant="icon"
							alt="view next image"
							:disabled="!nextImage"
							class="next-button"
							@click="$emit('change-image', nextImage)"
						>
							<ArrowRightIcon />
						</Button>
					</div>
					<div class="row row-caption">
						<div class="caption">
							<p
								v-for="(paragraph, j) in currentImage.description"
								:key="j"
							>
								{{ paragraph }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Overlay>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay.vue';
import Button from '@/components/Button.vue';
import MenuCloseIcon from '@/assets/svg/menu-close.svg';
import ArrowRightIcon from '@/assets/svg/arrow-right.svg';

export default {
	name: 'ImageOverlay',
	components: {
		Overlay,
		Button,
		MenuCloseIcon,
		ArrowRightIcon,
	},
	props: {
		currentImage: {
			type: Object,
			default: undefined,
		},
		images: {
			type: Array,
			default: undefined,
		},
	},
	emits: ['change-image', 'close'],
	computed: {
		prevImage() {
			return this.getImageAtOffset(-1);
		},
		nextImage() {
			return this.getImageAtOffset(1);
		},
	},
	methods: {
		getImageAtOffset(offset) {
			const currIndex = this.images.findIndex(img => img === this.currentImage);
			const offsetIndex = currIndex + offset;
			if (offsetIndex < 0 || offsetIndex > this.images.length) return null;
			return this.images[offsetIndex];
		},
	},
};
</script>

<style lang="postcss" scoped>
.container {
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-rows: 1fr auto 1fr;
	pointer-events: none;
}

.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> * { pointer-events: all; }
}

.row {
	display: flex;
	justify-content: center;
}
.row-titlebar {
	width: 100%;
	justify-content: flex-end;
	margin-bottom: auto;
	button {
		padding: 16px;
		margin: 8px 8px 0 0;
	}
}
.row-image {
	.img-wrapper {
		height: 100%;
		flex-shrink: 2;
		img {
			display: block;
			max-width: 100%;
			max-height: calc(80vh - 64px); /* TODO: Find a way to scale this with the caption in mind */
		}
	}
	button {
		padding: 16px;
		min-width: calc(16px * 2 + 16px);
	}
}
.row-caption {
	font-weight: bold;
}
</style>
