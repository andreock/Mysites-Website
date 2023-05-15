<script>
	import CardMC from '../../lib/CardMC.svelte';

	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	let space = '';
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) {
			space = 'p-5 gap-3';
			grid = 'grid grid-cols-3';
		}else {
			grid = 'grid grid-cols-1';
			space = "gap-3 p-2";
		}
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		{#if !mobile}
			<div>
				<img
					src="/pages/minecraft.png"
					alt="main illustration"
					width="384"
					class="p-5"
				/>
			</div>
		{/if}
		<div style="text-align: center; ">
			<h1>Server Minecraft</h1>
			<p>
				Hai bisogno di un server minecraft economico per giocare con i tuoi amici? MySites fa per te
			</p>
			<p>
				Offriamo diverse configurazioni in base al numero di giocatori. Scegli quella che fa per te,
				noi ci occuperemo del resto!
			</p>
		</div>
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
		margin-top: 1em;
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
