<template>
	<NavBar v-model:menu-open="menuOpen" />
	<NavMenu v-model:open="menuOpen" />
	<main>
		Content goes here.
	</main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NavMenu from '@/components/NavMenu.vue';

export default {
	name: 'App',
	components: {
		NavBar,
		NavMenu,
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
	--navbar-height: 42px;
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

	svg {
		display: block;
	}
}
</style>

<style lang="postcss" scoped>
main {
}
</style>
