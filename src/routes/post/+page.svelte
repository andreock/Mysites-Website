<script>
	import Cliente from '$lib/Cliente.svelte';
       import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = "";
	onMount(() => {
		mobile = is_mobile();
		if(!mobile)
			grid = "grid grid-cols-2"
	})
</script>

<div class="flex justify-center">
	<div class={grid}>
		{#if !mobile}
		<div>
			<img
				src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7147103984155.5f58fb3d5bbeb.jpg"
				alt="main illustration"
				width="400"
			/>
		</div>
		{/if}
		<div style="text-align: center; ">
			<h1>Creazione post</h1>
			<p>
				Possiamo aiutarti a gestire il tuo account social con creazione di post, reel, storie...
			</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
	</div>
</div>

<br />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 4em;
		margin-top: 1em;
	}

	img {
		border-radius: 8px;
	}

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.3em;
	}
</style>
