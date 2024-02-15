<template>
	<main class="container mx-auto py-4 max-w-xl">
		<h1 class="text-2xl font-bold text-center mb-4">Todo App</h1>
		<div class="flex w-full mb-4">
			<input
				class="form-input flex-1 p-2 border rounded-l-lg"
				type="text"
				v-model="newTodo"
				@keyup.enter="addTodo"
				placeholder="Add a new todo"
			/>
			<button
				@click="addTodo"
				class="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
				>Add Todo</button
			>
		</div>
		<ul class="space-y-2">
			<li
				v-for="(todo,index) in todoStore.todos"
				:key="todo.id"
				class="flex items-center bg-gray-100 p-2 rounded-lg"
			>
				<input
					type="checkbox"
					v-model="todo.done"
					@change="toggleTodoStatus(index)"
					class="mr-2"
				/>
				<span
					:class="{ 'line-through': todo.done, 'text-gray-600': !todo.done }"
					class="flex-1"
				>
					{{ todo.text }}
				</span>
				<button
					@click="removeTodo(todo.id)"
					class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				>
					Delete
				</button>
			</li>
		</ul>
	</main>
</template>
  

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';

const todoStore = useTodoStore();
const newTodo = ref('');

const addTodo = () => {
	if (newTodo.value.trim()) {
		todoStore.addTodo(newTodo.value);
		newTodo.value = ''; // reset input
	}
};

const removeTodo = (todoId) => {
	todoStore.removeTodo(todoId);
};

const toggleTodoStatus = (index) => {
	todoStore.toggleTodoStatus(index);
};
</script>
