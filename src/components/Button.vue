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

	&.icon {
		::v-deep(svg) {
			transition: fill 200ms ease;
			fill: currentColor;
		}

		&:hover {
			::v-deep(svg) { fill: rgb(var(--col-hover)); }
		}
	}

	&:hover {
		cursor: pointer;
	}
}
</style>
