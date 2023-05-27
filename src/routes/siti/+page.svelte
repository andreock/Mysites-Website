<script>
	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) {
			grid = 'grid grid-cols-4';
		}
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		<div class="">
			<img src="/pages/website.png" alt="main illustration" />
		</div>

		<div style="text-align: center;" class="col-span-3">
			<h1>Creazione siti web</h1>
			<br />
			<p>
				Creiamo siti web responsive, con i più moderni CMS, veloci e adatti a tutte le piattaforme
			</p>
			<p>I nostri siti sono responsive, scritti per le massime performance</p>
			<p>La SEO e l'hosting sono inclusi nel prezzo!</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
		<br />
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
		img_width="30%"
	/>
	<br />
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
		img_width="45%"
	/>
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
