<template>
	<div class="nav-bar">
		<Button
			variant="icon"
			class="hamburger-button"
			alt="open menu"
			@click="$emit('update:menuOpen', true)"
		>
			<HamburgerIcon />
		</Button>
	</div>
</template>

<script>
import Button from '@/components/Button.vue';
import HamburgerIcon from '@/assets/svg/hamburger.svg';

export default {
	name: 'NavBar',
	components: {
		Button,
		HamburgerIcon,
	},
	props: {
		menuOpen: {
			type: Boolean,
			required: true,
		},
	},
	emits: ['update:menuOpen'],
};
</script>

<style lang="postcss" scoped>
.nav-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--navbar-height);
	padding: 16px;
	pointer-events: none;
	z-index: 10;

	.hamburger-button {
		display: block;
		height: calc(100% + 32px);
		padding: 16px;
		margin: -16px;
		pointer-events: all;

		svg {
			height: 100%;
			width: auto;
		}
	}
}
</style>
