<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} | My Blog</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<article class="prose-h1:text-5xl prose-h1:font-extralight prose-h2:font-normal">
	<h1 class="font-extralight">{data.title}</h1>
	<p class="italic">
		{data.desc}
	</p>
	<p>
		{Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(data.date))}
	</p>
	<hr />
	<data.content />
</article>
