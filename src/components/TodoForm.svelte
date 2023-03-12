<script lang="ts">
	import { createTodo } from '../store/todos';

	let todoText = '';

	function createTodoHandler(e: SubmitEvent) {
		e.preventDefault();
		if (!todoText.trim()) return;
		createTodo({
			id: Date.now(),
			text: todoText,
			completed: false
		});
		todoText = '';
	}
</script>

<form on:submit={createTodoHandler}>
	<input type="text" bind:value={todoText} class="border p-1 rounded-sm shadow-sm" />
	<button type="submit">투두 추가</button>
</form>

<style>
</style>
