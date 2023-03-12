<script>
	import Sweets from './components/Sweets.svelte';
	const sweets = ['마카롱', '쿠키', '스콘', '다쿠아즈', '타르트', '케이크', '와플'];
</script>

<Sweets {sweets} />
<Sweets title="Reverse Sweets" sweets={[...sweets].reverse()} />

<style>
</style>
