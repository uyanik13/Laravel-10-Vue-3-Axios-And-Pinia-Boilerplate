<template>
	<Header />
	<main class="pb-4 theme-container  dark:bg-neutral-10">
		<router-view />
	</main>
	<Footer />
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

