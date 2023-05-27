<script>
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	let mobile = true;
	let grid = '';
	let img_center = "";
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) {
			grid = 'grid grid-cols-4';
		}else {
			img_center = "flex justify-center";
		}
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		<div class={img_center}>
			<img
				src="/pages/app.png"
				alt="main illustration"
			/>
		</div>
		<div class="mr-5 col-span-3" style="text-align: center; ">
			<h1>Creazione app mobili</h1>
			<br />
			<p>
				Creiamo app mobili, con i più moderni framework come Nativescript, Ionic o per chi vuole le
				massime performance Kotlin e Flutter
			</p>
			<p>Le app sono multi-piattaforma</p>
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

	@media (max-width: 900px) {
		img {
			width: 300px;
		}
	} 
	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.3em;
	}
</style>
