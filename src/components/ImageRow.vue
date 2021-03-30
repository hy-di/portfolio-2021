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
				<p
					v-for="(paragraph, j) in image.description"
					:key="j"
				>
					{{ paragraph }}
				</p>
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
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: rgba(var(--col-accent), 0.7);
			font-size: calc(18em / 16);
			text-shadow: 0 0 4px black;

			opacity: 0;
			transform: translateY(10%);
			transition: ease-in 300ms;
			transition-property: opacity, transform;

			p { margin-bottom: 0 }
		}
		&:hover .hover-caption {
			transition-timing-function: ease-out;
			opacity: 1;
			transform: none;
		}
	}
}
</style>
