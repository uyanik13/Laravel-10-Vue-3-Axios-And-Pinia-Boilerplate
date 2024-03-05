<template>
	<div class="desktop:p-8 ">
		<div class="flex flex-col justify-center items-center">
			<div class="flex flex-col justify-center items-center space-y-4 my-4">
				<Icon
					icon="simple-line-icons:check"
					:inline="true"
					:style="{ fontSize: '36px', color:'#01004E' }"
				/>
				<h3>Subscription preferences saved.</h3>
			</div>
			<div class="flex flex-col justify-center items-center bg-primaryBg rounded-md p-4 desktop:w-4/12 mobile:w-10/12">
				<p class="text-primaryDark dark:text-neutral-10 font-semibold"> Have questions or need help? </p>
				<a href="" class="text-primary dark:text-neutral-10"><span class="dark:text-neutral-10 font-semibold">Click here</span> for assistance.</a>
			</div>
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

const formData = ref<FormData>({
	firstName: 'John',
	lastName: 'Doe',
	email: 'john.doe@example.com',
	phoneNumber: '',
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
	if (!canSubmit.value) {
		return false;
	}
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

const canSubmit = computed(() => {
	return formData.value.channelPreferences.sms & phoneIsValid.value;
});

const phoneIsValid = computed(() => {
	//implement phone validation
	return false;
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
  