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

<svelte:head>
	<title>Pedestal ¾ | My Blog</title>
	<meta
		name="description"
		content="A personal corner of the internet to share thoughts, ideas, projects, and experiments."
	/>
</svelte:head>

<h1 class="text-5xl font-extralight">Welcome</h1>
<p>
	Hi there — welcome to my little corner of the internet. This is where I share thoughts, ideas,
	projects, and the occasional ramble about whatever I’m currently interested in. It’s a mix of
	personal notes, experiments, and things I’ve picked up along the way. Nothing too formal — just a
	space to think out loud and keep track of where my curiosity leads me.
</p>
<hr />

<h2 class="font-normal">Some Stuff I Made.</h2>
<p>
	I have a habit of starting odd little experiments — some useful, some ridiculous, all fun. Here
	are a few highlights.
</p>
<ul>
	<li>
		<a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">GPT 404</a> : An AI that only
		says “I dunno, man.” Surprisingly honest. Surprisingly unhelpful.
	</li>
	<li>
		<a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Tab Goblin </a> : A Chrome
		extension that opens 3 new tabs every time you close 1. A harmless prank.
	</li>
	<li>
		<a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Yellow Duckie </a> : A virtual
		rubber duck that listens while you explain your code — no judgment, just quiet duck vibes.
	</li>
</ul>
<hr />

<h2 class="font-normal">Some Stuff I Wrote.</h2>
<p>
	I like to write things down as a way of thinking out loud. Some posts are polished essays, others
	are just half-baked notes.
</p>

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
