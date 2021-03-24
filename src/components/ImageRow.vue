<template>
	<div class="row">
		<Button
			v-for="(image, i) in images"
			:key="i"
			class="image"
			@click="$emit('image-click', image)"
		>
			<img :src="image.src">
			<div class="hover-caption">
				{{ image.description }}
			</div>
		</Button>
	</div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
	name: 'ImageRow',
	components: {
		Button,
	},
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	emits: ['image-click'],
};
</script>

<style lang="postcss" scoped>
.row {
	display: flex;
	flex-wrap: wrap;
	margin: -16px;
	+ .row { margin-top: 16px }

	.image {
		position: relative;
		overflow: hidden;
		flex-shrink: 1;
		flex-grow: 1;
		width: 300px;
		margin: 16px;

		img {
			display: block;
			width: 100%;
		}

		.hover-caption {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(var(--col-hover), 0.7);
			font-size: calc(18em / 16);
			text-shadow: 0 0 4px black;

			opacity: 0;
			transform: translateY(25%);
			transition: ease 300ms;
			transition-property: opacity, transform;
		}
		&:hover .hover-caption {
			opacity: 1;
			transform: translateY(0);
		}
	}
}
</style>
