<script>
	let { children } = $props();
	let data = $state();
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a class="no-underline" href="#{data?.innerText.replaceAll(' ', '-')}">
		<h6 bind:this={data}>
			{@render children?.()}
		</h6>
	</a>
</section>
