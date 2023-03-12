<script lang="ts">
	import { todos } from '../store/todos';
	import TodoItem from './TodoItem.svelte';
</script>

<ul class="my-2 border rounded-sm shadow-sm">
	{#each $todos as todo}
		<TodoItem {todo} />
	{/each}
</ul>
