<template>
	<main class="bg-grayer dark:bg-gray-900 min-h-screen">
		<router-view />
	</main>
	<Notivue v-slot="item">
		<NotivueSwipe :item="item">
			<Notification
				:item="item"
				:theme="materialTheme"
			/>
		</NotivueSwipe>
	</Notivue>
</template>
<script setup lang="ts">
import { Notivue, Notification, NotivueSwipe, materialTheme } from 'notivue';
</script>

