<template>
	<div class="language-switch">
		<input
			:id="`lang-switch-${$options.__scopeId}`"
			:checked="lang === 'de' ? false : true"
			type="checkbox"
			@change="onChange"
		>
		<label :for="`lang-switch-${$options.__scopeId}`">
			<span :class="{ active: lang === 'de'}">DE</span>
			<span :class="{ active: lang === 'en'}">EN</span>
		</label>
	</div>
</template>

<script>
import { lang } from '@/assets/content';

export default {
	name: 'LanguageSwitch',
	data() {
		return {
			lang,
		};
	},
	methods: {
		onChange({ target: { checked } }) {
			const newLang = checked ? 'en' : 'de';
			lang.value = newLang;
		},
	},
};
</script>

<style lang="postcss" scoped>
.language-switch {
	position: relative;

	input[type=checkbox] {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	input[type=checkbox]:focus-visible + label {
		background-color: rgba(var(--col-foreground), 0.3);
	}

	label {
		display: flex;
		position: relative;
		user-select: none;
		cursor: pointer;

		span {
			padding: 0.5em 0.65em;
		}

		span.active {
			background-color: rgb(var(--col-foreground));
			color: rgb(var(--col-background));
			font-weight: bold;
		}
	}
}
</style>
