<script>

	import Servizio from "$lib/Servizio.svelte";

</script>
<center>
	<h1 class="title" id="servizi">I nostri servizi</h1>
	<br />

	<div class="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4">
		<div>
			<Servizio
				titolo="Creazione siti web"
				descrizione="Creiamo siti web responsive, con i più moderni CMS, veloci e adatti a tutte le piattaforme"
				image="https://media.istockphoto.com/id/1277185062/vector/christmas-online-gifts-mobile-app-in-phone-for-xmas-holiday-smartphone-in-hand-with-online.jpg?s=612x612&w=0&k=20&c=HcJNemga63FQWYLQnDvmGXEzGWWtN_fq5vR5w-ugZco="
				link="/siti"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione app mobili"
				descrizione="Creiamo applicazioni per tutte le piattaforme, scritte con i migliori framework tra qui Flutter e Nativescript."
				image="https://static.vecteezy.com/system/resources/previews/002/136/381/original/mobile-application-development-free-vector.jpg"
				link="/app"
			/>
		</div>
		<div>
			<Servizio
				titolo="Upgrade sito già esistente"
				descrizione="Hai un sito già esistente ma è vecchio e lento? 
				Noi possiamo rinnovarlo offrendo una nuova grafica e velocizzarlo."
				image="https://img.freepik.com/free-vector/space-rocket-flying-space-with-moon-stars-background-print-vector-illustration_1284-2184.jpg?w=2000"
				link="/upgrade"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
		<div>
			<Servizio
				titolo="Installazione SO e preparazione computer"
				descrizione="La tua azienda deve configurare dei computer? Ci pensiamo noi!"
				image="https://img.freepik.com/premium-vector/system-software-update-illustration-design-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-821.jpg?w=2000"
				link="/install_so"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione post, storie o reel"
				descrizione="Vuoi essere più presente sui social? MySites può aiutarti!
				Possiamo gestire il tuo account Instagram o TikTok."
				image="https://img.freepik.com/free-vector/social-media-concept-illustration_114360-2525.jpg?w=2000"
				link="/post"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
	
		<div>
			<Servizio
				titolo="Server Minecraft"
				descrizione="Hai bisogno di un server Minecraft? Offriamo server MC controllabili via interfaccia web e anti-DDoS."				image="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP"
				link="/mc"
			/>
		</div>
	
		<div>
			<Servizio
				titolo="Creazione bot Telegram e Discord"
				descrizione="Hai bisogno di un bot per Discord o Telegram? Mysites fa per te! 
				Creaiamo bot Telegram e Discord per tutte le tue esigenze."
				image="https://media.istockphoto.com/id/1145772045/vector/white-paper-plane-on-blue-background-vector-illustration-telegram-icon.jpg?s=170667a&w=0&k=20&c=ye8nZBo13rGpgmxVqbLn-UPKZCU_J_W2FNW7q70uqvY="
				link="/bot"
				color="rgba(16, 99, 251, 0.4)"
			/>
		</div>
	</div>
</center>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');	.title {
            font-family: 'Inter', sans-serif;
            font-size: 3em;
            font-weight: 800;
        }
    </style>
    