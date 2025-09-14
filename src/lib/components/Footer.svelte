<script>
	import { theme } from '$lib/shared.svelte';
</script>

<footer
	class="prose mt-14 flex max-w-none justify-between bg-highlight px-8 py-16 {theme.prefers ===
		'dark' && 'prose-invert'} prose-a:no-underline"
>
	<a href="/">
		© {new Date().getFullYear()} Ana Baker
	</a>
	<div class="flex flex-row gap-4">
		<a target="_blank" href="https://github.com/commitsovercoffee/pedestal">Github</a>
		<a target="_blank" href="https://commitsovercoffee.com">Author</a>
	</div>
</footer>
