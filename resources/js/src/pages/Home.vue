<template>
	<div class="desktop:p-8 mobile:p-4 bg-white shadow-lg rounded-lg">
		<div class="mb-6">
			<h1>Welcome to the ______ Subscription Center</h1>
			<p class="text-4 mt-2 text-gray-700">
				Stay up-to-date on Company's content, your way. Sign up for our monthly newsletter and choose to receive
				alerts as we publish new articles, announcements, features, and podcasts at the frequency you prefer.
			</p>
		</div>
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Contact Information</h2>
			<div class="grid desktop:grid-cols-2 gap-3 mb-4">
				<div>
					<label class="text-sm my-2 text-gray-600">First name</label>
					<input
						type="text"
						placeholder="First name"
						class="form-input"
						v-model="formData.firstName"
					/>
				</div>
				<div>
					<label class="text-sm my-2 text-gray-600">First name</label>
					<input
						type="text"
						placeholder="Last name"
						class="form-input"
						v-model="formData.lastName"
					/>
				</div>
			</div>
			<div>
				<label class="text-sm text-gray-600">Email</label>
				<input
					type="email"
					placeholder="john.doe@example.com"
					class="form-input"
					v-model="formData.email"
				/>
			</div>
		</div>
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Email Alerts by Topic</h2>
			<p class="text-4 mt-2 text-gray-700">
				Choose to receive email alerts only on those topics that are of particular importance to you and select
				the format of content that you are interested in, at the frequency you prefer.
			</p>

			<div class="my-4">
				<label class="inline-flex items-center">
					<input
						type="radio"
						class="form-radio"
						v-model="formData.topics"
						value="all"
					/>
					<span class="ml-2">All Topics</span>
				</label>
				<label class="inline-flex items-center ml-6">
					<input
						type="radio"
						class="form-radio"
						v-model="formData.topics"
						value="individual"
					/>
					<span class="ml-2">Individual Topics</span>
				</label>
			</div>

			<h2 class="text-lg font-semibold mb-2">Media Types</h2>
			<div class="grid desktop:grid-cols-2 gap-3 mb-4">
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.mediaTypes.articles"
						/>
						<span class="ml-2">Articles</span>
					</div>
					<p class="text-sm my-2 text-gray-700">Partnerships, manufacturing, etc.</p>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.mediaTypes.announcements"
						/>
						<span class="ml-2">Announcements</span>
					</div>
					<p class="text-sm my-2 text-gray-700">News, briefs</p>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.mediaTypes.science"
						/>
						<span class="ml-2">Behind the Science Features</span>
					</div>
					<p class="text-sm my-2 text-gray-700">Multimedia stories</p>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.mediaTypes.podcasts"
						/>
						<span class="ml-2">Podcasts</span>
					</div>
					<p class="text-sm my-2 text-gray-700">Company original streaming audio programs</p>
				</div>
			</div>
		</div>
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Frequency</h2>
			<label class="inline-flex items-center">
				<input
					type="radio"
					class="form-radio"
					value="monthly"
					v-model="formData.frequency"
				/>
				<span class="ml-2">Monthly</span>
			</label>
			<label class="inline-flex items-center ml-6">
				<input
					type="radio"
					class="form-radio"
					value="asPublished"
					v-model="formData.frequency"
				/>
				<span class="ml-2">As published</span>
			</label>
		</div>

		<div class="flex justify-end">
			<button @click="subscribe" class="secondary-button">Subscribe</button>
		</div>

	</div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { FormData } from '@/types/Form';
import {  push } from 'notivue'
import axios from '@/plugins/axios';

const formData = ref<FormData>({
	firstName: 'John',
	lastName: 'Doe',
	email: 'john.doe@example.com',
	topics: 'all',
	mediaTypes: {
		articles: true,
		announcements: true,
		science: true,
		podcasts: false,
	},
	frequency: 'asPublished',
});

const subscribe = async () => {
  try {
    const response = await axios.post('/subscription', formData.value);
    
    console.log(response); // Log response for debugging

    push.success('Subscription successful! Check your email for confirmation.');
  } catch (error) {
    // Log error for debugging
    console.error(error);
    push.error('Failed to subscribe. Please try again later.');
  }
}


</script>
  
<style scoped>
.form-radio + span,
.form-checkbox + span {
	transition: transform 0.2s ease-in-out;
	line-height: 1.5em;
	font-size: 1rem;
}

.form-radio:checked + span::before,
.form-checkbox:checked + span::before {
	transform: scale(1.1);
	border-color: #303f9f;
	background-color: #303f9f;
}

.form-radio,
.form-checkbox {
	transition: border-color 0.3s, box-shadow 0.3s;
	height: 18px;
	width: 18px;
}
</style>
  