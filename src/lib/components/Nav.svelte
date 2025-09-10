<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let scrollProgress = $state(0);

	function updateScrollProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const percent = docHeight > 0 ? scrollTop / docHeight : 0;
		scrollProgress = percent;
	}

	onMount(() => {
		updateScrollProgress();
		window.addEventListener('scroll', updateScrollProgress);
		window.addEventListener('resize', updateScrollProgress);

		return () => {
			window.removeEventListener('scroll', updateScrollProgress);
			window.removeEventListener('resize', updateScrollProgress);
		};
	});
</script>

{#if page.url.pathname.includes('/blog/')}
	<hr
		class="fixed top-0 left-0 z-50 h-1 border-none bg-slate-800 transition-all duration-200 ease-out"
		style="width: {scrollProgress * 100}%"
	/>
{/if}
<nav class="mb-16 flex flex-row justify-between bg-neutral-50 p-4 shadow">
	<a href="/" class="text-lg">Pedestal ¾</a>
	<div class="flex flex-row gap-4">
		<a href="/now">/now</a>
		<a href="/about">/about</a>
		<a href="/rss.xml">/feed</a>
	</div>
</nav>
