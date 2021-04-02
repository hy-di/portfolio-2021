<template>
	<div class="unity-radio-wrapper">
		<Button
			v-if="!started"
			variant="icon"
			alt="start"
			class="play-button"
			@click="onStartClick"
		>
			<PlayCircleIcon />
		</Button>
		<LoadingSpinner v-if="started" class="loading-spinner" />
		<canvas ref="radioCanvas" />
		<Button
			v-if="started"
			variant="icon"
			alt="enter fullscreen"
			class="fullscreen-button"
			@click="onFullscreenClick"
		>
			<FullScreenIcon v-if="!fullscreen" />
			<FullScreenExitIcon v-else />
		</Button>
	</div>
</template>

<script>
import Button from '@/components/Button.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import PlayCircleIcon from '@/assets/svg/play-circle.svg';
import FullScreenIcon from '@/assets/svg/fullscreen.svg';
import FullScreenExitIcon from '@/assets/svg/fullscreen-exit.svg';

export default {
	name: 'UnityRadioEmbed',
	components: {
		Button,
		LoadingSpinner,
		PlayCircleIcon,
		FullScreenIcon,
		FullScreenExitIcon,
	},
	data() {
		return {
			started: false,
			fullscreen: false,
		};
	},
	mounted() {
		document.addEventListener('fullscreenchange', this.onFullscreenchange);
	},
	unmounted() {
		document.removeEventListener('fullscreenchange', this.onFullscreenchange);
	},
	methods: {
		onStartClick() {
			this.started = true;
			// eslint-disable-next-line no-undef
			createUnityInstance(this.$refs.radioCanvas, {
				dataUrl: '/radio/radio.data.unityweb',
				frameworkUrl: '/radio/radio.framework.js.unityweb',
				codeUrl: '/radio/radio.wasm.unityweb',
				streamingAssetsUrl: 'StreamingAssets',
				companyName: 'Heidi Meyer',
				productName: 'RadioweckerSimulator',
				productVersion: '1.0',
			});
		},
		async onFullscreenClick() {
			if (!this.fullscreen) this.$el.requestFullscreen();
			else document.exitFullscreen();
		},
		onFullscreenchange() {
			this.fullscreen = document.fullscreenElement;
		},
	},
};
</script>

<style lang="postcss" scoped>
.unity-radio-wrapper {
	position: relative;
	margin-bottom: 32px;
	background-color: #1C2E1A;
	padding-bottom: 50%;
	z-index: 1;

	.play-button {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		::v-deep(svg) {
			width: max(10%, 64px);
		}
	}

	.fullscreen-button {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 8px;
	}

	.loading-spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -2;
	}

	canvas {
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
}
</style>
