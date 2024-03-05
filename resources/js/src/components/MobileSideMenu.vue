<template>
	<div>
		<aside
			class="fixed z-50 top-0 left-0 bottom-0 w-72 bg-white dark:bg-neutralVariant-10 shadow-md transition-transform duration-300 transform"
			:class="{
				'-translate-x-full': !settingsStore.showMobileSideMenu,
				'translate-x-0': settingsStore.showMobileSideMenu,
			}"
		>
			<div class="flex justify-between items-center px-4 py-2 border-b border-gray-200">
				<Logo v-if="!isDark" />
			<LogoWhite v-if="isDark" />
				<button
					class="text-lg focus:outline-none"
					@click="toggleSidebar"
				>
					<Icon
						icon="material-symbols:close"
						:inline="true"
						:style="{ fontSize: '24px', color: isDark ? '#FFFBFF' : '#1B1B1F'}"
					/>
				</button>
			</div>
			<router-link
				class="block px-4 py-2 text-neutral-10 dark:text-neutral-90 hover:bg-gray-100"
				to="/"
				>About Pfizer</router-link
			>
			<router-link
				class="block px-4 py-2 text-neutral-10 dark:text-neutral-90 hover:bg-gray-100"
				to="/"
				>FAQ</router-link
			>
			<router-link
				class="block px-4 py-2 text-neutral-10 dark:text-neutral-90 hover:bg-gray-100"
				to="/"
				>Sign In / Create Account</router-link
			>
			<button
				:aria-label="isDark ? 'Light Mode' : 'Dark Mode'"
				@click="toggleDark()"
				class="flex space-x-2 cursor-pointer rounded-full p-2 px-4 py-2 text-neutral-10 dark:text-neutral-90 hover:bg-gray-100"
			>
				<Icon
					:icon="isDark ? 'twemoji:sun' : 'emojione-v1:new-moon'"
					:inline="true"
					:style="{ fontSize: '24px', color: '#01004E' }"
				/>
				<span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>

			</button>
		</aside>
	</div>
</template>
  
  <script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import LogoWhite from '@/components/LogoWhite.vue';
import { Icon } from '@iconify/vue';
import { useSettingsStore } from '@/stores/settings';
import { useDark, useToggle } from '@vueuse/core';
const settingsStore = useSettingsStore();
const isOpen = ref(false);

const isDark = useDark();
const toggleDark = useToggle(isDark);

const toggleSidebar = () => {
	settingsStore.showMobileSideMenu = !settingsStore.showMobileSideMenu;
};
</script>
  