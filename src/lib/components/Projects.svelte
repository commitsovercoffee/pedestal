<script>
	import Button from './Button.svelte';
	const projects = [
		{
			name: 'Pixel Pockets',
			desc: 'A tiny web app that saves little doodles and notes in your browser like a pocket-sized sketchbook.',
			demo: 'https://theuselessweb.com/',
			source: 'https://github.com/anna-baker/pixel-pockets'
		},
		{
			name: 'Coffee Timer++',
			desc: 'A minimalist coffee brewing timer with gentle sounds because I drink way too much coffee.',
			demo: 'https://theuselessweb.com/',
			source: 'https://github.com/anna-baker/coffee-timer'
		},
		{
			name: 'Starwhisper',
			desc: 'A mood-based journaling app that matches your entry with a random constellation. Half therapy, half stargazing.',
			demo: 'https://theuselessweb.com/',
			source: 'https://github.com/anna-baker/starwhisper'
		},
		{
			name: 'Shortcut Gremlin',
			desc: 'A desktop toy that playfully swaps your most-used keyboard shortcuts for silly ones, just to keep you on your toes.',
			demo: 'https://theuselessweb.com/',
			source: 'https://github.com/anna-baker/shortcut-gremlin'
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
				<a target="_blank" href={project.demo}>
					<Button label="Demo" />
				</a>
				<a target="_blank" href={project.source}>
					<Button label="Source" type="secondary" />
				</a>
			</div>
		</div>
	{/each}
</article>
