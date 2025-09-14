<script>
	import '../app.css';
	import '@fontsource-variable/inter'; // supports 100-900

	import { theme } from '$lib/shared.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-bg text-fg selection:bg-fg selection:text-bg">
	<Nav />
	<div
		class="mx-auto prose p-4 prose-hr:border-border {theme.prefers === 'dark' && 'prose-invert'}"
	>
		{@render children?.()}
	</div>
	<Footer />
</div>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
