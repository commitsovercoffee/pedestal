<script>
	let { children } = $props();
	let data = $state();
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a class="no-underline" href="#{data?.innerText.replaceAll(' ', '-')}">
		<h5 bind:this={data}>
			{@render children?.()}
		</h5>
	</a>
</section>
