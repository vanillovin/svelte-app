<script>
	import { storeName } from './store';
	import Parent from './components/Parent.svelte';
	let name = 'World';

	console.log(storeName); // {set: f, update: f, subscribe: f}
	console.log($storeName); // 'hello'
	// set, update, subscribe 메소드를 구현하는 대신,
	// 간단하기 $ 표시를 사용하는 것을 Auto-subscription(자동 구독)이라고 함

	$storeName = name;
	console.log($storeName); // 'World'
</script>

<h1>Hello {name}!</h1>
<Parent />

<style>
</style>
