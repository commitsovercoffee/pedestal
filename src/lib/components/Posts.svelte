<script>
	import { SvelteSet } from 'svelte/reactivity';

	let { data } = $props();
	let { posts } = data;

	// Blog list ---------------------------------------------------------------

	// Collect all unique tags.
	const tags = [...new Set(posts.flatMap((p) => p.tags || []))];

	// Reactive set for selected tags.
	let selectedTags = new SvelteSet();

	// Split pinned/unpinned once.
	const pinned = posts.filter((p) => p.pinned);
	const unpinned = posts.filter((p) => !p.pinned);

	// Always show pinned, filter unpinned if tags are selected.
	let filteredPosts = $derived([
		...pinned,
		...(selectedTags.size > 0
			? unpinned.filter((p) => p.tags?.some((t) => selectedTags.has(t)))
			: unpinned)
	]);
</script>

{#if tags.length > 0}
	<div class="flex flex-wrap gap-2">
		{#each tags as tag (tag)}
			<button
				class={[
					'cursor-pointer rounded border px-2 py-1',
					selectedTags.has(tag) && 'bg-neutral-200'
				]}
				onclick={() => selectedTags[selectedTags.has(tag) ? 'delete' : 'add'](tag)}
			>
				{tag}
			</button>
		{/each}
	</div>
{/if}

<ul class="flex flex-col pl-0">
	{#if filteredPosts.length > 0}
		{#each filteredPosts as post (post)}
			<a href={`/blog/${post.slug}`} class="group no-underline not-last:border-b">
				<dl>
					<dt class="text-fg">
						{post.title}
					</dt>
					<span
						class="bg-primary block h-0.5 max-w-12 transition-all duration-300 group-hover:max-w-sm"
					></span>
					<dd class="text-body pl-0 font-normal md:pl-4">{post.desc}</dd>
				</dl>
			</a>
		{/each}
	{:else}
		<p class="text-body">No posts found for selected tag(s).</p>
	{/if}
</ul>
