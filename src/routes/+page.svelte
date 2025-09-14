<script>
	import Posts from '$lib/components/Posts.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Passport from '$lib/components/Passport.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Ana | Blog</title>
	<meta
		name="description"
		content="My personal corner of the internet to share thoughts, ideas, projects, and experiments."
	/>
</svelte:head>

<div class="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
	<div class="order-1 flex justify-center md:order-1 md:justify-start">
		<Passport />
	</div>
	<div class="order-2 md:order-2">
		<h2>Welcome</h2>
		<p>
			Hi, I’m Ana — 27, a senior systems engineer with 5 years of experience. I'm glad you made it
			here. This is my web garden ~ just a small corner of the internet to show what I’m working on
			and thinking about.
		</p>
	</div>
</div>
<hr />

<h2>Things I’ve Built</h2>
<p>
	A collection of side projects I couldn’t resist trying. I tend to follow my curiosity more than a
	roadmap. For me, building is less about perfection and more about learning, tinkering, and seeing
	where an idea might lead.
</p>
<Projects />
<hr />

<h2>Things I’ve Written</h2>
<p>
	Not so much grand advice as scattered thoughts, sometimes clear, sometimes messy, and hopefully a
	little relatable. Every now and then there’s a spark of clarity, a laugh at my own expense, or
	just a note to remember. If any of it resonates with someone out there, that’s more than enough.
</p>
<Posts {data} />
