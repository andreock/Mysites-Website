<script>
	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) {
			grid = 'grid grid-cols-2';
		}
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		<div class="">
			<img src="/pages/seo.png" alt="main illustration" />
		</div>

		<div style="text-align: center;">
			<h1>Valutazione SEO</h1>
			<p>
				Vuoi migliorare il posizionamento sui motori di ricerca?
			</p>
			<p>Possiamo analizzare il tuo sito, mostrarti e correggere gli errori della SEO</p>
			<p>mySites non ti fornirà solo un punteggio, bensì pro e contro del tuo sito, infine, dove e come migliorarli</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
		<br />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 4em;
	}

	img {
		border-radius: 8px;
	}

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.3em;
	}
</style>
