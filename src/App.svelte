<script>
	let name = 'Foods';
	let foods = ['떡볶이', '마카롱', '초밥', '샐러드', '피자', '치킨'];
	let toggle = false;
	function changeToggle() {
		toggle = !toggle;
	}
	function deleteFood(food) {
		alert(`${food} 냠냠!`);
		foods = foods.filter((oldFood) => oldFood !== food);
	}
</script>

<button on:click={changeToggle}>Toggle {toggle ? 'off' : 'on'}</button>
{#if toggle}
	<h1 class={toggle ? 'active' : ''}>Hello {name}!</h1>
	<input type="txt" bind:value={name} />
{:else}
	<div>No name!</div>
{/if}

<ul>
	{#each foods as food}
		<li>
			{food}
			<button on:click={() => deleteFood(food)}>Eat it!</button>
		</li>
	{/each}
</ul>

<style>
	.active {
		color: white;
		background-color: royalblue;
	}
</style>
