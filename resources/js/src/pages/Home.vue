<template>
	<div class="desktop:p-8 mobile:p-4 bg-white shadow-lg rounded-lg">
		<div class="mb-6">
			<h1>Welcome to patient Subscription Center</h1>
			<p class="text-4 mt-2 text-gray-700">
				Stay up-to-date on Company's content, your way. Sign up for our monthly newsletter and choose to receive
				alerts as we publish new articles, announcements, features, and podcasts at the frequency you prefer.
			</p>
		</div>
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Contact Information</h2>
			<div class="grid desktop:grid-cols-2 gap-3 mb-3">
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
					<label class="text-sm my-2 text-gray-600">Last name</label>
					<input
						type="text"
						placeholder="Last name"
						class="form-input"
						v-model="formData.lastName"
					/>
				</div>
			</div>
			<div class="my-3">
				<label class="text-sm text-gray-600">Email</label>
				<input
					type="email"
					placeholder="john.doe@example.com"
					class="form-input"
					v-model="formData.email"
				/>
			</div>
			<div>
				<label class="text-sm text-gray-600">Phone number</label>
				<input
					type="number"
					placeholder="+1 304 5555"
					class="form-input"
					v-model="formData.email"
				/>
			</div>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Channel Prefences</h2>

			<div class="flex space-x-4 mb-4">
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.channelPreferences.email"
						/>
						<span class="ml-2">Email</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.channelPreferences.sms"
						/>
						<span class="ml-2">SMS</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.channelPreferences.directMail"
						/>
						<span class="ml-2">Direct mail</span>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-6" v-if="formData.channelPreferences.directMail">
			<h2 class="text-lg font-semibold mb-2">Direct mail address</h2>
			<div class="my-3">
				<label class="text-sm text-gray-600">Address line 1</label>
				<input
					type="text"
					placeholder="300 Waller Street"
					class="form-input"
					v-model="formData.address.addressLine1"
				/>
			</div>
			<div class="my-3">
				<label class="text-sm text-gray-600">Address line 2</label>
				<input
					type="text"
					placeholder="RD"
					class="form-input"
					v-model="formData.address.addressLine2"
				/>
			</div>
			<div class="my-3">
				<label class="text-sm text-gray-600">City</label>
				<input
					type="text"
					placeholder="Los Angeles"
					class="form-input"
					v-model="formData.address.city"
				/>
			</div>
			<div class="grid desktop:grid-cols-2 gap-3 mb-3">
				<div>
					<label class="text-sm my-2 text-gray-600">State</label>
					<v-select
						label="name"
						placeholder="Select a state"
						class="text-xs"
						:reduce="(option) => option.name"
						v-model="formData.address.state"
						:options="states"
						:filterable="false"
					>
					</v-select>
				</div>
				<div>
					<label class="text-sm my-2 text-gray-600">Zip code</label>
					<input
						type="text"
						placeholder="90001"
						class="form-input"
						v-model="formData.address.zipCode"
					/>
				</div>
			</div>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Topics that you want to get information</h2>

			<div>
					<v-select
						label="name"
						placeholder="Select a topic"
						class="text-xs"
						:reduce="(option) => option.name"
						v-model="formData.topics"
						multiple
						:closeOnSelect="false"
						:options="diseases"
						:filterable="false"
						:selectable="(option) => !isSelected(option)"
					>
					</v-select>
				</div>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Communication type</h2>
			
			<div class="grid desktop:grid-cols-2 gap-3 mb-4">
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.communicationType.newsletter"
						/>
						<span class="ml-2">Newsletter</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.communicationType.productSafetyUpdates"
						/>
						<span class="ml-2">Product Safety Updates</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.communicationType.events"
						/>
						<span class="ml-2">Events</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.communicationType.promotions"
						/>
						<span class="ml-2">Promotions</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.communicationType.stories"
						/>
						<span class="ml-2">Stories</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.communicationType.surveys"
						/>
						<span class="ml-2">Surveys</span>
					</div>
				</div>
	
			</div>
		</div>

		<div class="flex justify-end">
			<button
				@click="subscribe"
				class="secondary-button"
				>Save my preferences</button
			>
		</div>
	</div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { FormData } from '@/types/Form';
import { push } from 'notivue';
import axios from '@/plugins/axios';
import states from '@/resources/states.json';
import diseases from '@/resources/diseases.json';

const formData = ref<FormData>({
	firstName: 'John',
	lastName: 'Doe',
	email: 'john.doe@example.com',
	channelPreferences: {
		email: true,
		sms: true,
		directMail: true,
	},
	topics: [],
	address: {
		addressLine1: '',
		addressLine2: '',
		city: '',
		state: '',
		zipCode: '',
	},
	communicationType: {
		newsletter: true,
		productSafetyUpdates: true,
		events: true,
		promotions: true,
		stories: false,
		surveys: true,
	},
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
};

const isSelected = (option) => {
 return formData.value.topics.includes(option.name)
};

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
  