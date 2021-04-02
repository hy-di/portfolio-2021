<template>
	<div class="spinner-icon">
		<div />
		<div />
		<div />
	</div>
</template>

<script>
export default {
	name: 'LoadingSpinner',
};
</script>

<style lang="postcss">
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
	40% {
    transform: scale(1.0);
  }
}
</style>

<style lang="postcss" scoped>
.spinner-icon {
	display: flex;
	div {
		+ div { margin-left: 4px }
		width: 20px;
		height: 20px;
		background-color: rgb(var(--col-foreground));
		border-radius: 50%;
		animation: bounce 1.5s infinite ease-in-out both;
	}
	div:nth-child(1) { animation-delay: -0.32s; }
	div:nth-child(2) { animation-delay: -0.16s; }
}
</style>
