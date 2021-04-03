<template>
	<button
		v-bind="$attrs"
		:class="variant"
		:aria-label="alt"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
	inheritAttrs: false,
	props: {
		alt: {
			type: String,
			default: undefined,
		},
		variant: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="postcss" scoped>
button {
	border: none;
	border-radius: 0;
	padding: 0;
	margin: 0;
	font-size: inherit;
	color: inherit;
	background: none;
	text-decoration: none;
	appearance: none;

	&:hover {
		cursor: pointer;
	}

	&.icon {
		transition: color 200ms ease;
		::v-deep(svg) {
			width: auto;
			height: auto;
			fill: currentColor;
		}

		&:hover:not(:disabled) {
			color: rgb(var(--col-hover));
		}

		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
}
</style>
