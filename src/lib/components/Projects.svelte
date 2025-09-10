<script>
	import Button from './Button.svelte';

	const projects = [
		{
			name: 'GPT 404',
			desc: "An AI that only says 'I dunno, man.' Surprisingly honest. Surprisingly unhelpful.",
			demo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
			source: 'https://github.com/you/your-project'
		},
		{
			name: 'Tab Goblin',
			desc: 'A Chrome extension that opens 3 new tabs every time you close 1. A harmless prank.',
			demo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
			source: 'https://github.com/you/your-project'
		},
		{
			name: 'Yellow Duckie',
			desc: 'A virtual rubber duck that listens while you explain your code — no judgment, just quiet duck vibes.',
			demo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
			source: 'https://github.com/you/your-project'
		}
	];
</script>

<article class="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each projects as project (project.name)}
		<div class="rounded-xl border border-secondary p-4">
			<h3 class="mt-0 font-bold">{project.name}</h3>
			<p>{project.desc}</p>
			<div class="flex gap-2">
				<Button label="Demo" />
				<Button label="Source" type="secondary" />
			</div>
		</div>
	{/each}
</article>
