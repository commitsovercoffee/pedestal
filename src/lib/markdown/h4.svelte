<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	let data = $state();
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a class="custom" href="#{data?.innerText.replaceAll(' ', '-')}">
		<h4 bind:this={data}>
			{@render children?.()}
		</h4>
	</a>
</section>
