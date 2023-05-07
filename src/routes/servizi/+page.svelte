<script>
	import Servizio from '$lib/Servizio.svelte';
</script>

<h1 class="title" id="servizi">I nostri servizi</h1>
<br />
<br />
<br />
<!--TODO: Remove this center -->
<center>
	<div class="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4">
		<div>
			<Servizio
				titolo="Creazione siti web"
				descrizione="Creiamo siti web responsive, con i più moderni CMS, veloci e adatti a tutte le piattaforme"
				image="/sito.png"
				link="/siti"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione app mobili"
				descrizione="Creiamo applicazioni per tutte le piattaforme, scritte con i migliori framework tra qui Flutter e Nativescript."
				image="/app.png"
				link="/app"
			/>
		</div>
		<div>
			<Servizio
				titolo="Upgrade sito già esistente"
				descrizione="Hai un sito già esistente ma è vecchio e lento? 
					Noi possiamo rinnovarlo offrendo una nuova grafica e velocizzarlo."
				image="/upgrade.png"
				link="/upgrade"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
		<div>
			<Servizio
				titolo="Installazione SO e preparazione computer"
				descrizione="La tua azienda deve configurare dei computer? Ci pensiamo noi!"
				image="/manutenzione.png"
				link="/install_so"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione post, storie o reel"
				descrizione="Vuoi essere più presente sui social? MySites può aiutarti!
					Possiamo gestire il tuo account Instagram o TikTok."
				image="/social.png"
				link="/post"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>

		<div>
			<Servizio
				titolo="Server Minecraft"
				descrizione="Hai bisogno di un server Minecraft? Offriamo server MC controllabili via interfaccia web e anti-DDoS."
				image="/minecraft.png"
				link="/mc"
			/>
		</div>

		<div>
			<Servizio
				titolo="Creazione bot Telegram e Discord"
				descrizione="Hai bisogno di un bot per Discord o Telegram? Mysites fa per te! 
					Creaiamo bot Telegram e Discord per tutte le tue esigenze."
				image="/tg.png"
				link="/bot"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
	</div>
</center>

<br />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	.title {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3em;
		font-weight: 800;
		text-align: left;
		padding-left: 1.2em;
	}
</style>
