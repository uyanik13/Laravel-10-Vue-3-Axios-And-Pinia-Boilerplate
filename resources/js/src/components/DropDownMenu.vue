<script setup lang="ts">
import { ref,onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: String,
  icon: String,
  menuItems: Array,
});

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (event) => {
  if (!event.target.closest(".dropdown-container")) {
    isOpen.value = false;
  }
};

const handleCommand = (command) => {
  if (typeof command === "function") {
    command();
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
 // window.removeEventListener("click", closeDropdown);
});
</script>

<template>
  <div class="relative dropdown-container">
   
    <button
    aria-label="Toggle Dropdown" 
    @click="toggleDropdown" 
    class="text-primary-50 dark:text-neutral-90 font-bold  px-4 py-2 rounded">
    <span class="sr-only">{{ "Toggle Dropdown" }}</span>
      {{ title }}
    </button>
    <div
      v-if="isOpen"
      class="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg"
    >
      <div class="rounded-md bg-white dark:bg-gray-700 shadow-xs">
        <div class="py-1">
          <div v-for="menuItem in menuItems" :key="menuItem.label">
            <div class="font-bold text-gray-900 dark:text-gray-200 px-4 py-2">
              {{ menuItem.label }}
            </div>
            <div v-for="item in menuItem.items" :key="item.label">
              <Component
                :is="item.component ? item.component.name : 'div'"
                @click="handleCommand(item.command)"
                class="block px-4 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:dar:text-gray-200"
                v-bind="item.component ? item.component.props : {}"
                :aria-label="item.label"
              >
                <div class="flex space-x-2 text-ellipsis" v-if="!item?.component?.name">
                  <Icon
                    v-if="item.icon"
                    :name="item.icon"
                    class="text-lg mr-2"
                    :class="item.icon_class"
                  />
                  {{ item.label }}
                </div>
              </Component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
