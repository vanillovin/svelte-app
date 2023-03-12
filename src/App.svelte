<script>
	import Parent from './components/Parent.svelte';

	let name = 'World';
</script>

<h1>Hello {name}!</h1>
<Parent {name} />

<style>
</style>
