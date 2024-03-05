<template>
	<header
		class="flex flex-row items-center justify-between desktop:p-8 mobile:p-2 bg-white dark:bg-neutralVariant-10 shadow-2xl shadow-gray-200 desktop:h-16"
	>
		<router-link to="/">
			<Logo v-if="!isDark" />
			<LogoWhite v-if="isDark" />
		</router-link>

		<div class="flex jsutify-center items-center">
			<span
				:aria-label="isDark ? 'Light Mode' : 'Dark Mode'"
				@click="toggleDark()"
				class="cursor-pointer hover:bg-primaryBg rounded-full p-2 mobile:hidden"
			>
				<Icon
					:icon="isDark ? 'twemoji:sun' : 'emojione-v1:new-moon'"
					:inline="true"
					:style="{ fontSize: '24px', color: '#01004E' }"
				/>
			</span>
			<Icon
				@click="settingsStore.showMobileSideMenu = !settingsStore.showMobileSideMenu"
				icon="solar:hamburger-menu-linear"
				:inline="true"
				:style="{ fontSize: '32px', color: '#01004E' }"
				
			/>
			<MobileSideMenu/>	
			<DropDownMenu
				class="mobile:hidden"
				title="Letizia Lane"
				:menuItems="headerMenuItems"
				key="HeaderMenu"
			/>
		</div>
	</header>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import LogoWhite from '@/components/LogoWhite.vue';
import DropDownMenu from '@/components/DropDownMenu.vue';
import MobileSideMenu from '@/components/MobileSideMenu.vue';
import { computed, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import { useSettingsStore } from '@/stores/settings';


const settingsStore = useSettingsStore();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const headerMenuItems = computed(() => {
	return [
		{
			label: 'Menu',
			items: [
				{
					icon: 'fluent:share-ios-48-filled',
					label: 'Logout',
					command: null,
				},
			],
		},
	];
});

</script>