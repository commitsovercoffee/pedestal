<script>
	import '../app.css';
	import '@fontsource-variable/inter'; // supports 100-900

	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />
<div class="mx-auto prose p-4">
	{@render children?.()}
</div>
<footer class="flex justify-between p-4 pt-32 shadow">
	<span>
		© {new Date().getFullYear()}
	</span>
	<p>
		Made by <a class="font-semibold underline" href="https://commitsovercoffee.com"
			>commitsovercoffee</a
		>
	</p>
</footer>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
