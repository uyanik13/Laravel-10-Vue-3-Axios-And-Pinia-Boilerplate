import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref([]);

    const addTodo = (todoItem) => {
        todos.value.push({
            id: Date.now(), // Use current timestamp as unique ID
            text: todoItem,
            done: false
        });
    };

    const removeTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const toggleTodoStatus = (id) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.done = !todo.done;
        }
    };

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodoStatus
    };
});
