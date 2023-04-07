<script>
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	let mobile = true;
	let grid = "";
	onMount(() => {
		mobile = is_mobile();
		if(!mobile)
			grid = "grid grid-cols-2";
	});	
</script>
<div class="flex justify-center">
	<div class={grid}>
		{#if !mobile}
		<div>
			<img
				src="https://static.vecteezy.com/system/resources/previews/002/136/381/original/mobile-application-development-free-vector.jpg"
				alt="main illustration"
				width="450"
			/>
		</div>
		{/if}
		<div style="text-align: center; ">
			<h1>Creazione app mobili</h1>
			<p>
				Creiamo app mobili, con i più moderni framework come Nativescript, Ionic o per chi vuole le massime performance Kotlin e Flutter
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

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.3em;
	}
</style>
