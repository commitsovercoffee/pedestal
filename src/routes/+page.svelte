<script>
	import Posts from '$lib/components/Posts.svelte';
	let { data } = $props();
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
<Posts {data} />
