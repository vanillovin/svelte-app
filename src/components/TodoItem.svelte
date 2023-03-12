<script lang="ts">
	import { afterUpdate } from 'svelte';
	import type { ITodo } from '../store/todos';
	import { deleteTodo, completedTodo, updateTodoText } from '../store/todos';

	export let todo: ITodo;

	let newTodoText = todo.text;
	let isEditing = false;
	let inputRef: HTMLInputElement | null = null;

	afterUpdate(() => {
		if (inputRef) inputRef.focus();
	});

	function deleteTodoHandler(todoId: number) {
		if (confirm('투두를 삭제하시겠습니까?')) {
			deleteTodo(todoId);
		}
	}

	function completedTodoHandler(todoId: number) {
		completedTodo(todoId);
	}

	function onEditing() {
		isEditing = true;
	}

	function offEditing() {
		isEditing = false;
	}

	function updateTodoHandler(todoId: number, newTodoText: string) {
		if (newTodoText && newTodoText !== todo.text) {
			if (!confirm('투두를 변경하시겠습니까?')) return;
			updateTodoText(todoId, newTodoText);
			offEditing();
			alert('투두가 변경됐습니다!');
		}
	}
</script>

<li class="px-2 py-1 border-b">
	{#if !isEditing}
		<div class="flex items-center justify-between">
			<span class={todo.completed ? 'completed' : ''}>{todo.text}</span>
			<div class="ml-4">
				<button on:click={onEditing} class="rounded-sm bg-amber-100 p-1">수정</button>
				<button on:click={() => deleteTodoHandler(todo.id)} class="rounded-sm bg-rose-200 p-1"
					>삭제</button
				>
				<button on:click={() => completedTodoHandler(todo.id)} class="rounded-sm bg-violet-100 p-1"
					>{!todo.completed ? '완료' : '미완'}</button
				>
			</div>
		</div>
	{:else}
		<div class="flex items-center justify-between">
			<input bind:this={inputRef} bind:value={newTodoText} />
			<div class="ml-4">
				<button on:click={offEditing} class="rounded-sm bg-rose-100 p-1">취소</button>
				<button
					on:click={() => updateTodoHandler(todo.id, newTodoText)}
					class="rounded-sm bg-indigo-100 p-1">확인</button
				>
			</div>
		</div>
	{/if}
</li>

<style>
	.completed {
		text-decoration: line-through;
	}
	button:hover {
		opacity: 50%;
		transition: all 0.1s ease-in-out;
	}
</style>
