<template>
	<div></div>
</template>
<script>
export default {
	mounted() {
		this.$router.replace({
			path: '/list',
			query: this.$route.query
		})
	}
}
</script>
