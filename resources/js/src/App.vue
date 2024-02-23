<template>
	<main class="bg-grayer dark:bg-gray-900 min-h-screen">
		<router-view />
	</main>
	<Notivue v-slot="item">
		<Notification :item="item" />
	</Notivue>
</template>
<script setup lang="ts">
import { Notivue, Notification } from 'notivue';
</script>

