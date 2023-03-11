<script>
	let text = 'text';
</script>

<h1>Hello {text}!</h1>
<input
	type="text"
	value={text}
	on:input={(e) => {
		text = e.target.value;
	}}
/>
<input bind:value={text} />
<button
	on:click={() => {
		text = ':>';
	}}>click me</button
>

<style>
	input {
		padding: 2px;
		border: 2px solid royalblue;
	}
</style>
