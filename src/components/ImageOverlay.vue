<template>
	<div v-if="image">
		<Overlay @click="$emit('close')" />
		<div class="content">
			<img :src="image.src">
			{{ image.description }}
			<Button
				variant="icon"
				alt="close menu"
				class="close-button"
				@click="$emit('close')"
			>
				<MenuCloseIcon />
			</Button>
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay.vue';
import Button from '@/assets/svg/menu-close.svg';
import MenuCloseIcon from '@/assets/svg/menu-close.svg';

export default {
	name: 'ImageOverlay',
	components: {
		Overlay,
		Button,
		MenuCloseIcon,
	},
	props: {
		image: {
			type: Object,
			default: undefined,
		},
	},
	emits: ['close'],
};
</script>

<style lang="postcss" scoped>
.content {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
}
</style>
