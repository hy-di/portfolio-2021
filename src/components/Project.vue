<template>
	<h2>{{ title }}</h2>
	<slot />
</template>

<script>
export default {
	name: 'Project',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="postcss" scoped>

</style>
