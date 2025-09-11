<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} | My Blog</title>
	<meta name="description" content={data.desc} />
</svelte:head>

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
</article>
