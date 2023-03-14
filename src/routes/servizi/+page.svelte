<script>
	import HeaderServizi from '$lib/Header_Servizi.svelte';
	import Servizio from '$lib/Servizio.svelte';
</script>

<HeaderServizi />

<br />
<br />

<center>
	<div class="grid grid-cols-2 gap-2">
		<div>
			<Servizio
				titolo="Creazione siti web"
				descrizione="Creiamo siti web responsive, con i più moderni CMS, veloci e adatti a tutte le piattaforme"
				image="https://media.istockphoto.com/id/1265041897/vector/business-team-working-together-on-web-page-design-people-building-website-interface-on.jpg?s=612x612&w=0&k=20&c=0nwzJe_VQNlN94Own93LE5pqnYG5g8E1ez7M4u0NWvk="
				link="/siti"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione app mobili"
				descrizione="Creiamo applicazioni per tutte le piattaforme, scritte con i migliori framework tra qui Flutter e Nativescript."
				image="https://static.vecteezy.com/system/resources/previews/002/136/381/original/mobile-application-development-free-vector.jpg"
			/>
		</div>
		<div>
			<Servizio
				titolo="Upgrade sito già esistente"
				descrizione="Hai un sito già esistente ma è vecchio e lento? 
				Noi possiamo rinnovarlo offrendo una nuova grafica e velocizzarlo grazie all'uso di tecnologie all'avanguardia
				come Svelte e altri framework."
				image="https://img.freepik.com/free-vector/space-rocket-flying-space-with-moon-stars-background-print-vector-illustration_1284-2184.jpg?w=2000"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione QR code"
				descrizione="Devi condividere un link con i tuoi clienti in modo rapido? Usa il codice QR.
				MySites può aiutarti! Possiamo creare codici QR per tutte le tue esigenze."
				image="http://niceillustrations.com/wp-content/uploads/2020/09/QR-Code.png"
			/>
		</div>
		<div>
			<Servizio
				titolo="Installazione SO e preparazione computer"
				descrizione="La tua azienda deve configurare dei computer? Ci pensiamo noi!"
				image="https://img.freepik.com/premium-vector/system-software-update-illustration-design-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-821.jpg?w=2000"
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione post, storie o reel"
				descrizione="Vuoi essere più presente sui social? MySites può aiutarti!
				Possiamo gestire il tuo account Instagram o TikTok e pubblicare contenuti per aumentare l'interazione con il tuo pubblico social."
				image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7147103984155.5f58fb3d5bbeb.jpg"
			/>
		</div>

		<div>
			<Servizio
				titolo="Server Minecraft"
				descrizione="Hai bisogno di un server Minecraft? MySites può aiutarti, offrendo server MC controllabili via interfaccia web, protetti da Anti-Ddos.
				I nostri server supportano qualsiasi versione di Minecraft."
				image="https://www.codiciprodotto.it/wp-content/uploads/2021/01/minecraft.jpg"
			/>
		</div>

		<div>
			<Servizio
				titolo="Creazione bot Telegram e Discord"
				descrizione="Hai bisogno di un bot per Discord o Telegram? Mysites fa per te! 
				Creaiamo bot Telegram e Discord per tutte le tue esigenze."
				image="https://chatimize.com/wp-content/uploads/2021/02/telegram-chatbots.png"
			/>
		</div>
	</div>
</center>
