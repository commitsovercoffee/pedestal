<script>
	/**
	 * @typedef {"primary" | "secondary" | "tertiary"} ButtonType
	 */
	let { label, type = 'primary' } = $props();
</script>

<button
	class={[
		type === 'primary' && 'bg-primary text-tertiary hover:bg-[#282828]',
		type === 'secondary' && 'bg-secondary text-primary hover:bg-[#dddddd]',
		type === 'tertiary' && 'bg-tertiary text-primary hover:bg-[#f3f3f3]',
		'cursor-pointer rounded-lg px-2.5 py-2 transition-colors duration-200 ease-in'
	]}
>
	{label}</button
>
