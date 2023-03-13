<script lang="ts">
	let active = false;
	const style = {
		r: 'rosybrown',
		w: '#fff',
		letterSpacing: 'letter-spacing: .25rem'
	};
</script>

<section>
	<h1 style="background-color: {style.r}; color: {style.w}; {style.letterSpacing}">Hello</h1>
	<!-- class directive(지시어). 마치 클래스 속성처럼 작성 -->
	<!-- active 라는 클래스 이름은 어떠한 데이터에 의해 붙거나 붙지 않음 -->
	<div class:active>Hello</div>
	<button
		on:click={() => {
			active = !active;
		}}>Toggle!</button
	>
</section>

<style>
	div {
		color: beige;
		width: 18.75rem;
		height: 18.75rem;
		background: cornflowerblue;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.625rem;
	}
	button {
		padding: 0.25rem;
		margin: 0.25rem;
		border: 0.125rem solid black;
		font-weight: 600;
	}
	button:hover {
		color: white;
		background-color: black;
	}
	.active {
		color: black;
		background: cadetblue;
	}
</style>
