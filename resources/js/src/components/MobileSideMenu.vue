<template>
	<div>
		<aside
			class="fixed z-50 top-0 left-0 bottom-0 w-72 bg-white shadow-md transition-transform duration-300 transform"
			:class="{
				'-translate-x-full': !settingsStore.showMobileSideMenu,
				'translate-x-0': settingsStore.showMobileSideMenu,
			}"
		>
			<div class="flex justify-between items-center px-4 py-2 border-b border-gray-200">
				<Logo />
				<button
					class="text-lg focus:outline-none"
					@click="toggleSidebar"
				>
					<Icon
						icon="material-symbols:close"
						:inline="true"
						:style="{ fontSize: '24px', color: '#01004E' }"
					/>
				</button>
			</div>
			<router-link
				class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
				to="/"
				>About Pfizer</router-link
			>
			<router-link
				class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
				to="/"
				>FAQ</router-link
			>
			<router-link
				class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
				to="/"
				>Sign In / Create Account</router-link
			>
		</aside>
	</div>
</template>
  
  <script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import { Icon } from '@iconify/vue';
import { useSettingsStore } from '@/stores/settings';
const settingsStore = useSettingsStore();
const isOpen = ref(false);

const toggleSidebar = () => {
	settingsStore.showMobileSideMenu = !settingsStore.showMobileSideMenu;
};
</script>
  