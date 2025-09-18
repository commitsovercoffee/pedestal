<script>
	import '../app.css';
	import '@fontsource-variable/inter'; // supports 100-900

	import { theme } from '$lib/shared.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navigating } from '$app/state';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-bg text-fg selection:bg-fg selection:text-bg">
	<Nav />
	{#if !navigating.to}
		<div
			in:fly={{ easing: cubicOut, y: 40, duration: 300, delay: 300 }}
			out:fly={{ easing: cubicIn, y: -40, duration: 300 }}
			class="mx-auto prose p-4 prose-hr:border-border {theme.prefers === 'dark' && 'prose-invert'}"
		>
			{@render children?.()}
		</div>
	{/if}
	<Footer />
</div>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
