<template>
	<footer
		class="desktop:p-8 mobile:p-2 bg-white border-b-0.5 shadow-gray-700 shadow-sm dark:border-gray-600 dark:bg-neutralVariant-10"
	>
		<div class="flex flex-row mobile:flex-col mobile:space-y-8 desktop:items-center justify-between py-8 ">
			<div>
				<FooterLogo v-if="!isDark"/>
				<FooterLogoWhite v-if="isDark" />
			</div>
			<div class="flex mobile:flex-col mobile:space-y-4 desktop:space-x-12">
				<div class="flex flex-col mobile:space-y-2">
					<a class="font-semibold text-[24px]" >About Pfizer</a>
					<a class="font-semibold text-[24px]">Contact Pfizer</a>
				</div>
				<div class="flex flex-col mobile:space-y-2">
					<a class="font-semibold text-[16px]">Terms of use</a>
					<a class="font-semibold text-[16px]">Privacy policy</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col mobile:space-y-2 text-xs text-gray-600 border-t border-gray-300 pt-8 ">
			<p>Information on this website is directed toward U.S. residents only.</p>
			<p>© 2023 Pfizer Inc. All rights reserved.</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import FooterLogo from '@/components/FooterLogo.vue';
import FooterLogoWhite from '@/components/FooterLogoWhite.vue';
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
const isDark = useDark();

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