<script>
	import Child from './layout/Child.svelte';
	export let name = '';
</script>

<h1>Parent</h1>
<Child {name} />
