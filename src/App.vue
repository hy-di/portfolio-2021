<template>
	<NavBar v-model:menu-open="menuOpen" />
	<NavMenu v-model:open="menuOpen" />
	<main>
		<Index />
	</main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NavMenu from '@/components/NavMenu.vue';

import Index from '@/pages/Index.vue';

export default {
	name: 'App',
	components: {
		NavBar,
		NavMenu,
		Index,
	},
	data() {
		return {
			menuOpen: false,
		};
	},
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400&display=swap');

:root {
	--col-background: 0, 0, 0;
	--col-foreground: 255, 255, 255;
	--col-hover: 60, 230, 75;
	--navbar-height: 56px;
}

#app {
	font-family: 'Raleway', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: rgb(var(--col-foreground));
	background-color: rgb(var(--col-background));
	min-height: 100vh;

	box-sizing: border-box;

	*, *:before, *:after {
		box-sizing: inherit;
	}

	*:focus {
		outline: none;
	}
	*:focus-visible {
		background-color: rgba(var(--col-foreground), 0.3);
	}

	font-size: 13px;
	@media (min-width: 640px)  {
		font-size: 16px;
	}

	h1 {
		font-size: calc(64em / 16);
	}
	h2 {
		font-size: calc(36em / 16);
	}
	h3 {
		font-size: calc(24em / 16);
	}

	svg {
		display: block;
	}
}
</style>

<style lang="postcss" scoped>
main {
	overflow: hidden;
}
</style>
