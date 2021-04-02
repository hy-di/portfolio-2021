<template>
	<transition name="fade">
		<Overlay v-if="open" variant="light" @click="close" />
	</transition>
	<transition name="shift-in-left">
		<div v-if="open" class="nav-menu">
			<div class="top-row">
				<LanguageSwitch class="language-switch" />
				<Button
					variant="icon"
					alt="close menu"
					class="close-button"
					@click="close"
				>
					<MenuCloseIcon />
				</Button>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#intro" @click="close">
							{{ content.intro.title }}
						</a>
					</li>
					<li>
						<a :href="`#project-${content.projects.projects[0].id}`" @click="close">
							{{ content.projects.title }}
						</a>
					</li>
					<ul>
						<li
							v-for="project in content.projects.projects"
							:key="project.id"
						>
							<a :href="`#project-${project.id}`" @click="close">
								{{ project.title }}
							</a>
						</li>
					</ul>
					<li
						v-for="section in content.sections"
						:key="section.id"
					>
						<a :href="`#section-${section.id}`" @click="close">
							{{ section.title }}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</transition>
</template>

<script>
import Overlay from '@/components/Overlay.vue';
import Button from '@/components/Button.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import MenuCloseIcon from '@/assets/svg/menu-close.svg';

import content from '@/assets/content/';

export default {
	name: 'NavMenu',
	components: {
		Overlay,
		Button,
		LanguageSwitch,
		MenuCloseIcon,
	},
	props: {
		open: {
			type: Boolean,
			required: true,
		},
	},
	emits: ['update:open'],
	data() {
		return {
			content,
		};
	},
	mounted() {
		document.addEventListener('keydown', this.onKeydown);
	},
	unmounted() {
		document.removeEventListener('keydown', this.onKeydown);
	},
	methods: {
		close() {
			this.$emit('update:open', false);
		},
		onKeydown({ key }) {
			if (key === 'Escape') this.close();
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
	width: calc(100% - 32px);
	max-width: 640px;
	padding: 16px;
	padding-left: 2em;
	background-color: rgb(var(--col-background));
	z-index: 30;

	.top-row {
		display: flex;
		justify-content: space-between;
	}

	.close-button {
		margin: -16px;
		padding: 16px;
	}

	nav {
		a {
			color: white;
			text-decoration: none;
			transition: color 300ms ease;
			&:hover, &:focus-visible {
				color: rgb(var(--col-hover));
			}
		}

		ul {
			padding-left: 0;
			font-size: calc(36em / 16);
			font-weight: bold;

			li {
				list-style-type: none;
				margin-top: 0.5em;
			}
			li + li {
				margin-top: 2em;
			}

			ul {
				padding-left: 1em;
				font-size: 0.75em;

				li + li { margin-top: 0.5em; }
			}
		}
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
