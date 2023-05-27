<script>
	import { is_mobile } from "$lib/js/mobile";
	import { onMount } from "svelte";
	let grid = "";

	onMount(() => {
		if(!is_mobile()){
			grid = "grid grid-cols-4"
		}
	})
</script>
<div class="flex justify-center">
	<div class={grid}>
		<div>
			<img
				class="h-auto max-w-full"
				src="/pages/bot.png"
				alt="main illustration"
			/>
		</div>
		<div class="mr-5 col-span-3" style="text-align: center; ">
			<h1>Creazione bot Discord o Telegram</h1>
			<br />
			<p>
				Hai bisogno di un bot Telegram per controllare un serivizio o di un bot Discord per la tua
				community? MySites può aiutarti
			</p>
			<p>Creaiamo bot veloci, scritti in JS o C# per le massime performance</p>
			<p>L'hosting del bot è incluso nel prezzo</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
	</div>
</div>

<br />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3em;
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
