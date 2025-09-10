<script>
	import '../app.css';
	import '@fontsource-variable/inter'; // supports 100-900

	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />
<div class="light mx-auto prose p-4">
	{@render children?.()}
</div>
<Footer />

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
