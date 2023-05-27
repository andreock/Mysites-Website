<script>
	import CardMC from '../../lib/CardMC.svelte';

	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	let space = '';
	let text_grid = '';
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) {
			space = 'p-5 gap-3';
			grid = 'grid grid-cols-3';
			text_grid = 'grid grid-cols-4';
		} else {
			grid = 'grid grid-rows-1';
			space = 'gap-3 p-2';
			text_grid = 'grid grid-rows-1';
		}
	});
</script>

<div class="flex justify-center">
	<div class={text_grid}>
		<!-- TODO: Remove this deprecated tag -->
		{#if mobile}
			<center>
				<img src="/pages/minecraft.png" alt="main illustration" width="250" class="mt-5" />
			</center>
		{:else}
			<img src="/pages/minecraft.png" alt="main illustration" width="250" class="pl-12" />
		{/if}
		<div style="text-align: center; " class="pr-12 col-span-3">
			<h1>Server Minecraft</h1>
			<br />
			<p>
				Hai bisogno di un server minecraft economico per giocare con i tuoi amici? MySites fa per te
			</p>
			<p>
				Offriamo diverse configurazioni in base al numero di giocatori. Scegli quella che fa per te,
				noi ci occuperemo del resto!
			</p>
		</div>
		<br />
	</div>
</div>

<h2>Scegli il piano che fa al caso tuo.</h2>

<center>
	<div class="{grid} {space}">
		<div>
			<CardMC type="base" ram={2} cores={2} space={6} players={8} price={3} />
		</div>
		<div>
			<CardMC type="medio" ram={4} cores={4} space={15} players={25} price={5} />
		</div>
		<div>
			<CardMC type="premium" ram={8} cores={6} space={30} players={90} price={10} />
		</div>
	</div>
</center>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 4em;
	}

	h2 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3em;
		margin-top: 1em;
		text-align: center;
	}
	img {
		border-radius: 8px;
	}

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.3em;
	}
</style>
