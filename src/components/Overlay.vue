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
	top: -12px;
	left: -12px;
	right: -12px;
	bottom: -12px;
	z-index: 10;

	filter: blur(6px);

	&.dark { background-color: rgba(var(--col-background), 0.5); }
	&.light { background-color: rgba(var(--col-foreground), 0.5); }
}
</style>
