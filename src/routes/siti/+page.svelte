<script>
	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) grid = 'grid grid-cols-2';
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		{#if !mobile}
			<div>
				<img
					src="https://media.istockphoto.com/id/1265041897/vector/business-team-working-together-on-web-page-design-people-building-website-interface-on.jpg?s=612x612&w=0&k=20&c=0nwzJe_VQNlN94Own93LE5pqnYG5g8E1ez7M4u0NWvk="
					alt="main illustration"
				/>
			</div>
		{/if}

		<div style="text-align: center; ">
			<h1>Creazione siti web</h1>
			<p>
				Creiamo siti web responsive, con i più moderni CMS, veloci e adatti a tutte le piattaforme
			</p>
			<p>I nostri siti sono responsive, scritti per le massime performance</p>
			<p>La SEO e l'hosting sono inclusi nel prezzo!</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
		{#if mobile}
			<br />
			<div>
				<img
					src="https://media.istockphoto.com/id/1265041897/vector/business-team-working-together-on-web-page-design-people-building-website-interface-on.jpg?s=612x612&w=0&k=20&c=0nwzJe_VQNlN94Own93LE5pqnYG5g8E1ez7M4u0NWvk="
					alt="main illustration"
				/>
			</div>
		{/if}
	</div>
</div>

<h1 style="text-align:center;">I nostri clienti</h1>

<div class=" grid grid-cols-1">
	<Cliente
		right={true}
		titolo="Lys Gomis"
		testo="
	Lys Gomis, ex giocatore di Serie A, si è affidato a noi per creare il sito web della sua
				scuola calcio. <br>
				Il sito è scritto con Sveltekit, un framework moderno e molto veloce
	"
		link="https://scuolaportierilysgomis.it/"
		img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnOVFzmBHxjy76NHuCkuQHfcyK_R_083Mdl43n6q5R1yvKBithA-JCeWwBQWXsQxIWys&usqp=CAU"
	/>
	<Cliente
		right={false}
		titolo="EduConSco Srl"
		testo="
	Filippo Gomez Paloma, professore all'università di Macerata, si è rivolto a noi per la sua startup nel mondo del ECS.
	<br> 
	Il sito è completo di CMS, Forum e biblioteca per inserire file che solo gli iscritti possono visualizzare.
	"
		link="https://educonsco.it"
		img="/logo_ecs.png"
	/>
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
