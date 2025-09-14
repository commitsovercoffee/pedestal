<script>
	/**
	 * @typedef {"primary" | "secondary" } ButtonType
	 */
	let { label, type = 'primary' } = $props();
</script>

<button
	class={[
		type === 'primary' && 'bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-bg-hover',
		type === 'secondary' &&
			'bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-bg-hover',
		'cursor-pointer rounded-lg px-2.5 py-2 transition-colors duration-200 ease-in'
	]}
>
	{label}</button
>
