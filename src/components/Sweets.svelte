<script lang="ts">
	// Props
	export let title = 'Sweets';
	export const sweets: string[] = [];
</script>

<h2>{title}</h2>
<ul>
	{#each sweets as sweet}
		<li>{sweet}</li>
	{/each}
</ul>
