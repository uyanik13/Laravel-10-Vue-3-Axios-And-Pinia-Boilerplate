<template>
	<div class="desktop:p-8 mobile:p-4">
		<div class="mb-6">
			<h1>Welcome to patient Subscription Center</h1>
			<p class="text-4 mt-4 text-neutral-10 dark:text-neutral-90">
				Stay up-to-date on Company's content, your way. Sign up for our monthly newsletter and choose to receive
				alerts as we publish new articles, announcements, features, and podcasts at the frequency you prefer.
			</p>
		</div>
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-2">Contact Information</h2>
			<div class="grid desktop:grid-cols-2 gap-3 mb-3">
				<div>
					<label class="text-sm my-2 text-neutral-10 dark:text-neutral-90">First name</label>
					<input
						type="text"
						placeholder="First name"
						class="form-input"
						v-model="formData.firstName"
					/>
				</div>
				<div>
					<label class="text-sm my-2 text-neutral-10 dark:text-neutral-90">Last name</label>
					<input
						type="text"
						placeholder="Last name"
						class="form-input"
						v-model="formData.lastName"
					/>
				</div>
			</div>
			<div class="my-3">
				<label class="text-sm text-neutral-10 dark:text-neutral-90">Email</label>
				<input
					type="email"
					placeholder="john.doe@example.com"
					class="form-input"
					v-model="formData.email"
				/>
			</div>
			<div>
				<label class="text-sm text-neutral-10 dark:text-neutral-90">Phone number</label>
				<div class="relative">
					<Icon
						icon="mdi-light:phone"
						class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
					/>
					<input
						type="number"
						placeholder="+1 304 5555"
						class="form-input-with-icon"
						v-model="formData.phoneNumber"
					/>
				</div>
				<span
					v-if="formData.channelPreferences.sms && !phoneIsValid"
					class="flex items-center space-x-1 mt-2 font-medium text-error text-xs"
				>
					<Icon
						icon="jam:alert"
						class="text-error"
					/>
					<p>Phone number is required if SMS is checked</p>
				</span>
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
						<span class="ml-2 ">Email</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.channelPreferences.sms"
						/>
						<span class="ml-2 ">SMS</span>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center">
						<input
							type="checkbox"
							class="form-checkbox"
							v-model="formData.channelPreferences.directMail"
						/>
						<span class="ml-2 ">Direct mail</span>
					</div>
				</div>
			</div>
		</div>

		<div
			class="mb-6"
			v-if="formData.channelPreferences.directMail"
		>
			<h2 class="text-lg font-semibold mb-2">Direct mail address</h2>
			<div class="my-3">
				<label class="text-sm text-neutral-10 dark:text-neutral-90">Address line 1</label>
				<input
					type="text"
					placeholder="300 Waller Street"
					class="form-input"
					v-model="formData.address.addressLine1"
				/>
			</div>
			<div class="my-3">
				<label class="text-sm text-neutral-10 dark:text-neutral-90">Address line 2</label>
				<input
					type="text"
					placeholder="RD"
					class="form-input"
					v-model="formData.address.addressLine2"
				/>
			</div>
			<div class="my-3">
				<label class="text-sm text-neutral-10 dark:text-neutral-90">City</label>
				<input
					type="text"
					placeholder="Los Angeles"
					class="form-input"
					v-model="formData.address.city"
				/>
			</div>
			<div class="grid desktop:grid-cols-2 gap-3 mb-3">
				<div>
					<label class="text-sm my-2 text-neutral-10 dark:text-neutral-90">State</label>
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
					<label class="text-sm my-2 text-neutral-10 dark:text-neutral-90">Zip code</label>
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
				:class="canSubmit ? 'primary-button' : 'disabled-button'"
				>Save my preferences
				<Icon
					icon="icon-park-outline:right"
					class="ml-1"
			/></button>
		</div>
	</div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import { FormData } from '@/types/Form';
import { push } from 'notivue';
import axios from '@/plugins/axios';
import states from '@/resources/states.json';
import diseases from '@/resources/diseases.json';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
const router = useRouter()


const formData = ref<FormData>({
	firstName: 'John',
	lastName: 'Doe',
	email: 'john.doe@example.com',
	phoneNumber: '5555555555',
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
	if(!canSubmit.value){
		return false
	}
	try {
		const response = await axios.post('/subscription', formData.value);

		if(response.data.success){
			push.success('Subscription successful! Check your email for confirmation.');
			router.push({name:'success-page'})
		}
		
	} catch (error) {
		// Log error for debugging
		console.error(error);
		push.error('Failed to subscribe. Please try again later.');
	}
};

const canSubmit = computed(() => {
	return formData.value.channelPreferences.sms & phoneIsValid.value;
});

const phoneIsValid = computed(() => {
	const phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  	return phoneRegex.test(formData.value.phoneNumber);
});

const isSelected = (option) => {
	return formData.value.topics.includes(option.name);
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
  