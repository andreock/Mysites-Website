<script>
	import { is_mobile } from '$lib/js/mobile';
	import { onMount } from 'svelte';

	let size = 'w-16 h-16';

	onMount(() => {
		if (is_mobile()) size = 'w-12 h-12';
	});
</script>

<div class="shrink-0">
	<div class="p-4 mysites_color rounded-md shadow-md {size} flex items-center justify-center">
		<img src="/email.png" alt="Email logo" />
	</div>
</div>
