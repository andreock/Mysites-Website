<script lang="ts">
	export let color: string;
	import { onMount } from 'svelte';
	import { is_mobile } from './js/mobile';
	import 'animate.css';

	export let titolo: string, descrizione: string, image: string, link: string;
	let fixed_height = '';

	onMount(() => {
		if (is_mobile()) fixed_height = 'fixed_height';
	});
</script>

<div class="card" style="background-color: {color}">
	<h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titolo}</h4>
	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{descrizione}</p>
	<a href={link}>Scopri di più <span class="animate__animated animate__fadeIn">&#8594;</span></a>
	<div class="flex justify-center">
		<img src={image} alt="" class="rounded-lg;"/>
	</div>
</div>

<style>
	.card {
		position: relative;
		border-radius: 30px;
		background-color: rgb(255, 255, 255);
		width: 20em;
		height: 35em;
		padding: 3em;
		box-shadow: 2px 2px 5px #2b52ff75;
	}

	.card > div > img {
		position: absolute;
		bottom: 0;
		width: 22em;
		margin-bottom: 1em;
		padding: 2em;
	}
	
</style>
