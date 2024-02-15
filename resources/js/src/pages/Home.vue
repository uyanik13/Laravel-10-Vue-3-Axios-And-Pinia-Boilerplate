<template>
	<main class="container py-4">
		<h1>Home</h1>

		<div class="form-div mt-4">
			<div class="form-input-with-label">
				<label class="block mt-2 font-circular text-jacarta-700 dark:text-white"
					>First name<span class="text-red-600">*</span></label
				>
				<input
					class="form-input"
					type="text"
					v-model="form.firstname"
					placeholder="first name"
				/>
			</div>
			<div class="form-input-with-label">
				<label class="block mt-2 font-circular text-jacarta-700 dark:text-white"
					>Last name<span class="text-red-600">*</span></label
				>
				<input
					type="text"
					id="name"
					v-model="form.lastname"
					class="form-input"
					placeholder="last name"
					required
				/>
			</div>
		</div>
		<div class="form-div my-2">
			<div class="form-input-with-label">
				<label class="block mt-2 font-circular text-jacarta-700 dark:text-white"
					>Email<span class="text-red-600">*</span></label
				>
				<input
					class="form-input"
					type="text"
					v-model="form.email"
					placeholder="email"
				/>
			</div>
			<div class="form-input-with-label">
				<label class="block mt-2 font-circular text-jacarta-700 dark:text-white">Phone</label>
				<input
					type="text"
					id="name"
					v-model="form.phone"
					class="form-input"
					placeholder="555-555-5555"
					required
				/>
			</div>
		</div>

		<div class="flex items-center justify-end">
			<div class="w-32">
				<button @click="showData = !showData" class="theme-button">Submit</button>
			</div>
		</div>

		<div class="center-items">
			<div v-if="showData">
				<div class="mt-4">
					<h2 class="text-xl font-bold">Form Data</h2>
					<p>First Name: {{ form.firstname }}</p>
					<p>Last Name: {{ form.lastname }}</p>
					<p>Email: {{ form.email }}</p>
					<p>Phone: {{ form.phone }}</p>
				</div>
			</div>
		</div>
	</main>
</template>
  
  <script setup>
import { ref } from 'vue';

const form = ref({
  email: '',
  phone: '',
  firstname: 'ogur',
  lastname: 'uyanik',
});

const showData = ref(false)
</script>
  