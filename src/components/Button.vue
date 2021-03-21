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
			default: 'reset',
		},
	},
};
</script>

<style lang="postcss" scoped>
button.reset {
	border: none;
	border-radius: 0;
	padding: 0;
	margin: 0;
	font-size: inherit;
	color: inherit;
	background: none;
	text-decoration: none;
	appearance: none;
}

button:hover {
	cursor: pointer;
}
</style>
