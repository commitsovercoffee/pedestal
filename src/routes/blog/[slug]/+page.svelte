<script>
	import { onMount } from 'svelte';
	import { cubicIn, cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let { data } = $props();

	let windowHeight = 0;
	let documentHeight = 0;

	let scrollY = $state(0);
	let showScrollButton = $derived(documentHeight >= 2 * windowHeight && scrollY >= windowHeight);

	onMount(() => {
		showScrollButton = false;
		windowHeight = window.innerHeight;
		documentHeight = document.body.scrollHeight;
	});
</script>

<svelte:head>
	<title>{data.title} | My Blog</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<svelte:window bind:scrollY />

<article class="pb-32">
	<h1>{data.title}</h1>
	<p class="italic">
		{data.desc}
	</p>
	<p>
		{Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(data.date))}
	</p>
	<hr />
	<data.content />
	{#if showScrollButton}
		<button
			in:fly={{ easing: cubicInOut, x: 40, duration: 200 }}
			out:fly={{ easing: cubicIn, x: 40, duration: 200 }}
			aria-label="Scroll to Top"
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			class="fixed right-0 bottom-12 cursor-pointer rounded-l-full bg-primary p-4 text-2xl text-tertiary md:bottom-52"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg
			>
		</button>
	{/if}
</article>
