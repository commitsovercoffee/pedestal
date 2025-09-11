<script>
	import Button from './Button.svelte';

	const projects = [
		{
			name: 'GPT 404',
			desc: "An AI that only says 'I dunno, man.' Surprisingly honest. Surprisingly unhelpful."
		},
		{
			name: 'Tab Goblin',
			desc: 'A Chrome extension that spawns three new tabs every time you close one.'
		},
		{
			name: 'Yellow Duckie',
			desc: 'A virtual duck that listens while you talk through your code.'
		},
		{
			name: 'Infinite To-Do',
			desc: 'A to-do list that automatically adds tasks as you complete them.'
		}
	];
</script>

<article class="my-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
	{#each projects as project (project.name)}
		<div class="flex flex-col justify-between rounded-xl border border-secondary p-4">
			<div>
				<h3 class="mt-0 font-bold">{project.name}</h3>
				<p>{project.desc}</p>
			</div>
			<div class="mt-4 flex gap-2">
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">
					<Button label="Demo" />
				</a>
				<a target="_blank" href="https://github.com/username/repo">
					<Button label="Source" type="secondary" />
				</a>
			</div>
		</div>
	{/each}
</article>
