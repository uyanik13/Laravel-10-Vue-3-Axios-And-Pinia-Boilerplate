import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const showMobileSideMenu = ref(false)

  return {
    showMobileSideMenu
  };
});
