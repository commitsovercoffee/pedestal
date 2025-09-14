<script>
	import Button from './Button.svelte';

	const projects = [
		{
			name: 'Pixel Pockets',
			desc: 'A tiny web app that saves little doodles and notes in your browser like a pocket-sized sketchbook.'
		},
		{
			name: 'Coffee Timer++',
			desc: 'A minimalist coffee brewing timer with gentle sounds because I drink way too much coffee.'
		},
		{
			name: 'Starwhisper',
			desc: 'A mood-based journaling app that matches your entry with a random constellation. Half therapy, half stargazing.'
		},
		{
			name: 'Shortcut Gremlin',
			desc: 'A desktop toy that playfully swaps your most-used keyboard shortcuts for silly ones, just to keep you on your toes.'
		}
	];
</script>

<article class="my-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
	{#each projects as project (project.name)}
		<div
			class="flex flex-col justify-between gap-2 rounded-xl border border-border bg-project-card-bg p-4 shadow"
		>
			<div>
				<h3 class="mt-0">{project.name}</h3>
				<p class="leading-tight">{project.desc}</p>
			</div>
			<div class="flex gap-2">
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
