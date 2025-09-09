<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="mb-16 flex flex-row justify-between bg-neutral-50 p-4 shadow">
	<a href="/" class="text-lg">Pedestal ¾</a>
	<div class="flex flex-row gap-4">
		<a href="/now">/now</a>
		<a href="/about">/about</a>
		<a href="/rss.xml">/feed</a>
	</div>
</nav>
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
