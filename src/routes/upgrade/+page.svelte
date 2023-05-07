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
				src="https://img.freepik.com/free-vector/space-rocket-flying-space-with-moon-stars-background-print-vector-illustration_1284-2184.jpg?w=2000"
				alt="main illustration"
				width="400"
			/>
		</div>
		{/if}
		<div style="text-align: center; ">
			<h1>Upgrade sito web già esistente</h1>
			<p>
				Possiamo aggiornare il tuo vecchio sito web, rifancendo il design e ottimizzando le performance con le migliori tecnologie.
			</p>
			<p>I nostri siti sono responsive, scritti per le massime performance</p>
			<p>La SEO e l'hosting sono inclusi nel prezzo!</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
	</div>
</div>

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
