<template>
	<transition name="fade">
		<div v-if="loading" class="loading-spinner">
			<LoadingSpinner />
		</div>
		<div v-else>
			<NavBar v-model:menu-open="menuOpen" />
			<NavMenu v-model:open="menuOpen" />
			<main>
				<Index />
			</main>
		</div>
	</transition>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import NavBar from '@/components/NavBar.vue';
import NavMenu from '@/components/NavMenu.vue';

import Index from '@/pages/Index.vue';

import bgImageSrc from '@/assets/img/bg.png';
import introBgImageSrc from '@/assets/img/bg-intro.png';
import content from '@/assets/content';

export default {
	name: 'App',
	components: {
		LoadingSpinner,
		NavBar,
		NavMenu,
		Index,
	},
	data() {
		return {
			loading: true,
			menuOpen: false,
		};
	},
	created() {
		Promise.all([
			this.loadImage(bgImageSrc),
			this.loadImage(introBgImageSrc),
			this.loadImage(content.value.intro.image),
		])
			.then(() => this.loading = false)
			.catch(() => this.loading = false);
	},
	methods: {
		loadImage(src) {
			return new Promise((resolve, reject) => {
				const image = new Image();
				image.onload = resolve;
				image.onerror = reject;
				image.src = src;
			});
		},
	},
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400&display=swap');

:root {
	--col-background: 0, 0, 0;
	--col-foreground: 255, 255, 255;
	--col-hover: 93, 182, 142;
	--col-accent: 60, 86, 86;
	--navbar-height: 56px;
}

html {
	scroll-behavior: smooth;
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

	::selection {
		color: rgb(var(--col-foreground));
		background: rgb(var(--col-accent));
	}

	font-size: 13px;
	@media (min-width: 640px) {
		font-size: 16px;
	}

	h1 {
		font-size: calc(64em / 16);
		margin-top: 0;
	}
	h2 {
		font-size: calc(36em / 16);
		margin-top: 0;
	}
	h3 {
		font-size: calc(24em / 16);
		margin-top: 0;
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

.loading-spinner {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgb(var(--col--background));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
