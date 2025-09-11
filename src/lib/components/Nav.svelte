<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { theme } from '$lib/shared.svelte';

	let scrollProgress = $state(0);

	function updateScrollProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const percent = docHeight > 0 ? scrollTop / docHeight : 0;
		scrollProgress = percent;
	}

	onMount(() => {
		let storedTheme = localStorage.getItem('theme');
		if (!storedTheme) {
			storedTheme = 'dark';
			localStorage.setItem('theme', storedTheme);
		}
		theme.prefers = storedTheme;

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
		class="fixed top-0 left-0 z-50 h-1 border-none bg-primary transition-all duration-200 ease-out"
		style="width: {scrollProgress * 100}%"
	/>
{/if}
<nav
	class="mb-16 flex flex-row items-center justify-between border-b border-b-tertiary p-4 text-primary"
>
	<a href="/" class="text-2xl font-bold">Ana Baker</a>
	<div class="flex flex-row gap-2 font-medium">
		<button
			onclick={() => {
				theme.prefers = theme.prefers === 'light' ? 'dark' : 'light';
				localStorage.setItem('theme', theme.prefers);
			}}
			aria-label="theme toggle"
			class="cursor-pointer rounded-lg p-2 hover:bg-tertiary"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.4"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-sun-moon-icon lucide-sun-moon"
				><path d="M12 2v2" /><path
					d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"
				/><path d="M16 12a4 4 0 0 0-4-4" /><path d="m19 5-1.256 1.256" /><path d="M20 12h2" /></svg
			>
		</button>
		<a aria-label="rss" class="cursor-pointer rounded-lg p-2 hover:bg-tertiary" href="/rss.xml">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.4"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-rss-icon lucide-rss"
				><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle
					cx="5"
					cy="19"
					r="1"
				/></svg
			>
		</a>
	</div>
</nav>
