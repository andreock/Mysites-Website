<script>
	// export let mobile;
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile.ts';

	let grid = '';
	let mobile = true;

	onMount(() => {
		mobile = is_mobile();
		if (!mobile) grid = 'grid grid-cols-2';
		else grid = 'grid grid-rows-2';
	});
</script>

<!-- <div class="container pl-20"> -->
	<div class="custom_grid">
		<div class="pl-20">
			<h1>Chi siamo</h1>
				<br />

			<p>
				mySites è una piccola startup italiana composta da tre ragazzi con una cosa che li accomuna,
				la passione per il mondo IT. mySites cerca a tutti i costi di offrire servizi di qualità a
				prezzi moderati, il nostro operato, pertanto, è basato sulla comunicazione con il cliente,
				così da poter soddisfare a pieno ogni richiesta. La nostra aspirazione è di crescere tramite
				l’esperienza e di far crescere i nostri clienti nei loro più disparati business tramite i
				nostri numerosi servizi, tra i quali; sviluppo siti web, creazione app mobile, creazione
				stories e post e molto altro ancora.
			</p>
		</div>
		<div>
			<div class="pl-20">
				<img src="/people.png" alt="prova"/>
			</div>
		</div>
	</div>
<!-- </div> -->

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500&display=swap');
	h1 {
		color: #000000;
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3em;
		font-weight: 500;
	}

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-weight: 400;
		font-size: large;
		font-size: 1.5em;
	}
</style>
