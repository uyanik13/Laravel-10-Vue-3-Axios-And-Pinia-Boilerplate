<template>
	<div class="container mx-auto p-4">
	  <ul v-if="products.length" class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<li v-for="product in products" :key="product.id" class="border rounded-lg overflow-hidden shadow-lg">
		  <img :src="product.image" alt="" class="w-full h-48 object-cover" />
		  <div class="p-4">
			<h2 class="font-bold text-lg mb-2">{{ product.title }}</h2>
			<p class="text-gray-700 text-base mb-4">
			  {{ product.description }}
			</p>
			<p class="text-gray-900 font-bold">${{ product.price }}</p>
			<div class="flex items-center mt-2">
			  <span class="text-sm text-gray-600">Rating: {{ product.rating.rate }}/5</span>
			  <span class="ml-auto text-sm text-gray-600">{{ product.rating.count }} reviews</span>
			</div>
		  </div>
		</li>
	  </ul>
	  <p v-else class="text-center">Loading...</p>
	</div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from '@/plugins/axios';
  
  const products = ref([]);
  
  onMounted(async () => {
	try {
	  const response = await axios.get('/products');
	  products.value = response.data;
	} catch (error) {
	  console.error("Failed to fetch products:", error);
	}
  });
  </script>
  