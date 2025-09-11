<script>
	import Posts from '$lib/components/Posts.svelte';
	import Projects from '$lib/components/Projects.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Pedestal ¾ | My Blog</title>
	<meta
		name="description"
		content="My personal corner of the internet to share thoughts, ideas, projects, and experiments."
	/>
</svelte:head>

<h1>Welcome</h1>
<p>
	Hi, I’m a software developer, and this is where I share projects, ideas, and a blog about code,
	tech, and whatever else catches my curiosity. Just a small corner of the internet to show what I’m
	working on and thinking about.
</p>
<hr />

<h2>Some Stuff I Made</h2>
<p>
	A mix of experiments, happy accidents, and ideas I couldn’t resist trying, proof that I enjoy
	creating more than explaining why.
</p>
<Projects />
<hr />

<h2>Some Stuff I Wrote</h2>
<p>
	No promises of wisdom, just occasional clarity, sporadic laughs, and the faint hope someone,
	somewhere, gets it.
</p>
<Posts {data} />
