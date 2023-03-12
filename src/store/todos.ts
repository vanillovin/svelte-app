import { writable, type Writable } from 'svelte/store';

export interface ITodo {
	id: number;
	text: string;
	completed: boolean;
}

export const todos: Writable<ITodo[]> = writable([
	{ id: 1, text: 'Learn Svelte', completed: true },
	{ id: 2, text: 'Build a todo app', completed: false },
	{ id: 3, text: 'Deploy to production', completed: false }
]);

export const createTodo = (newTodo: ITodo) => {
	todos.update((todosArr) => [...todosArr, newTodo]);
};

export const deleteTodo = (todoId: number) => {
	todos.update((todosArr) => todosArr.filter((todo) => todo.id !== todoId));
};

export const updateTodoText = (todoId: number, newTodoText: string) => {
	todos.update((todosArr) =>
		todosArr.map((todo) => (todo.id === todoId ? { ...todo, text: newTodoText } : todo))
	);
};

export const completedTodo = (todoId: number) => {
	todos.update((todosArr) =>
		todosArr.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
	);
};
