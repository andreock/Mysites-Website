<script>
	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) grid = 'grid grid-cols-4';
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		<div>
			<img
				src="/pages/os.png"
				alt="main illustration"
				width="450"
			/>
		</div>
		<div style="text-align: center; " class="col-span-3">
			<h1>Preparazione PC</h1>
			<br />
			<p>Hai bisogno di aggiornare i PC nella tua Azienda o di preparare nuovi PC?</p>
			<p>
				MySites può aiutarti, possiamo fornire alla tua azienda nuovi PC per le massime performance
				o aggiornare quelli già esistenti
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
