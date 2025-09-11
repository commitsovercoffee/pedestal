<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [src]
	 * @property {string} [alt]
	 */

	/** @type {Props} */
	let { src = '', alt = '' } = $props();
</script>

<img class="custom" {src} {alt} loading="lazy" />
