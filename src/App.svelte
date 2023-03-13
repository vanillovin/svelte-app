<script lang="ts">
	import Foods from './components/Foods.svelte';
</script>

<h2 class="text-2xl">App.svelte</h2>
<ul class="foods">
	<li>샐러드</li>
	<li>샌드위치</li>
	<li>햄버거</li>
</ul>
<hr />
<Foods />

<style>
	/**
   * 컴포넌트에 작성하는 style 내에서 작성하는 모든 스타일 들은
   * 기본적으로 컴포넌트 내부의 각각 요소들에만 영향을 줌 
	 * => 자신이 작성된 그 컴포넌트 내부에서만 스타일이 유효하다
	 * style hash를 통해 유효범위를 만들고 스타일이 외부에 영향을 미치는 것을 막음
   * :global() 수식어(Modifier)를 작성하면 외부에도 영향을 줄 수 있음
	*/

	:global(.foods) {
		color: red;
	}
</style>
