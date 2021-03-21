<template>
	<transition name="fade">
		<Overlay v-if="open" variant="light" @click="close" />
	</transition>
	<transition name="shift-in-left">
		<div v-if="open" class="nav-menu">
			<div class="top-row">
				<div>DE / EN</div>
				<Button
					class="close-button"
					@click="close"
				>
					<MenuCloseIcon />
				</Button>
			</div>
			<nav>
				<ul>
					<li>Entry 1</li>
					<li>Entry 2</li>
					<li>Entry 3</li>
				</ul>
			</nav>
		</div>
	</transition>
</template>

<script>
import Button from '@/components/Button.vue';
import MenuCloseIcon from '@/assets/svg/menu-close.svg';
import Overlay from '@/components/Overlay.vue';

export default {
	name: 'NavMenu',
	components: {
		Overlay,
		Button,
		MenuCloseIcon,
	},
	props: {
		open: {
			type: Boolean,
			required: true,
		},
	},
	emits: ['update:open'],
	methods: {
		close() {
			this.$emit('update:open', false);
		},
	},
};
</script>

<style lang="postcss" scoped>
.nav-menu {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: calc(100% - 16px);
	padding: 16px;
	background-color: rgb(var(--col-background));
	z-index: 20;

	.top-row {
		display: flex;
		justify-content: space-between;
	}

	.close-button {
		margin: -16px;
		padding: 16px;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 400ms ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.shift-in-left-enter-active,
.shift-in-left-leave-active {
	transition: transform 400ms ease;
}
.shift-in-left-enter-from,
.shift-in-left-leave-to {
	transform: translateX(-100%);
}
</style>
