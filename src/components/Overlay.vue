<template>
	<div
		class="overlay"
		:class="variant"
	>
		<slot />
	</div>
</template>

<script>

export default {
	name: 'Overlay',
	props: {
		variant: {
			type: String,
			default: 'dark',
		},
	},
};
</script>

<style lang="postcss" scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;

	backdrop-filter: blur(6px);

	&.dark { background-color: rgba(var(--col-background), 0.5); }
	&.light { background-color: rgba(var(--col-foreground), 0.5); }
}
</style>
