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
	<div class="my-6 flex flex-wrap gap-2">
		{#each tags as tag (tag)}
			<button
				class={[
					selectedTags.has(tag) ? 'bg-highlight' : 'bg-secondary',
					'cursor-pointer rounded-lg px-2.5 py-2 transition-colors duration-200 ease-in'
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
			<a
				href={`/blog/${post.slug}`}
				class="group border-highlight px-4 no-underline transition-colors duration-300 ease-in not-last:border-b-1 hover:bg-secondary"
			>
				<dl>
					<dt class="text-fg">
						{post.title}
					</dt>
					<dd class="text-body pl-0 font-normal md:pl-4">{post.desc}</dd>
				</dl>
			</a>
		{/each}
	{:else}
		<p class="text-body">No posts found for selected tag(s).</p>
	{/if}
</ul>
