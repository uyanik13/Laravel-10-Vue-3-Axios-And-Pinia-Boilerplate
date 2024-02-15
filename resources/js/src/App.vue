<template>
	<Header />
	<main class="bg-grayer dark:bg-gray-900 min-h-screen">
		<router-view />
	</main>
</template>

<script setup lang="ts">
	import Header from './components/Header.vue';
</script>

