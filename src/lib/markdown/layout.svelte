<script module>
	import { img, h1, h2, h3, h4, h5, h6 } from './components';
	export { img, h1, h2, h3, h4, h5, h6 };
</script>

<script>
	let { children } = $props();
</script>

{@render children?.()}
