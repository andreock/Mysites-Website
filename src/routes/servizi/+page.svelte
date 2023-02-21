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
			/>
		</div>
		<div>
			<Servizio
				titolo="Creazione app mobili"
				descrizione="Creiamo applicazioni per tutte le piattaforme, scritte con i migliori framework tra qui Flutter e Nativescript."
				image="https://static.vecteezy.com/system/resources/previews/002/136/381/original/mobile-application-development-free-vector.jpg"
			/>
		</div>
	</div>
</center>
