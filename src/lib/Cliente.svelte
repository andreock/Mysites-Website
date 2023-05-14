<script lang="ts">
	import { onMount } from 'svelte';
	import { is_mobile } from './js/mobile';

	export let right: boolean, testo: string, titolo: string, link: string, img: string, img_width: string;
	let grid = 'grid grid-cols-2 mysites_logo_color border';
	onMount(() => {
		if (is_mobile()) grid = '';
	});
</script>

{#if right && grid != ''}
	<div class={grid}>
		<div class="flex justify-center">
			<img class="object-contain" src={img} alt={titolo} style="width: {img_width}"/>
		</div>

		<div class="testo">
			<h2>{titolo}</h2>
			<p>{@html testo}</p>
			<p>Il sito è visitabile <a href={link} target="_blank" rel="noreferrer">qui</a></p>
		</div>
	</div>
{:else}
	<div class={grid}>
		<div class="testo">
			<h2>{titolo}</h2>
			<p>{@html testo}</p>
			<p>Il sito è visitabile <a href={link} rel="noreferrer" target="_blank">qui</a></p>
		</div>
		<div class="flex justify-center">
			<img class="object-contain" src={img} alt="lys gomis" style="width: {img_width}" />
		</div>
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	h2 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3em;
		margin-top: 1em;
		text-align: center;
		margin-bottom: 0.6em;
	}

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.2em;
	}

	a {
		color: blue;
	}

	img {
		border-radius: 8px;
	}

	.testo {
		padding: 3em;
	}

	@media (min-width: 700px) {
		.testo {
			color: white;
		}
	}
	.border {
		border-radius: 24px;
		margin: 2em;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	}

	.border:hover {
		border-radius: 24px;
		margin: 2em;
		background-color: white;
	}
	.border:hover > .testo {
		color: black;
	}
</style>
