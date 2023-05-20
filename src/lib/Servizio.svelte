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

<div class="card">
	<div class="flex justify-start pb-2">
		<img src={image} alt="" class="rounded-lg h-28 w-26" />
	</div>
	<h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{titolo}</h4>

	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{descrizione}</p>
	<a href={link}>Scopri di più <span class="animate__animated animate__fadeIn">&#8594;</span></a>
</div>

<style>
	.card {
		position: relative;
		border-radius: 30px;
		background-color: rgb(255, 255, 255);
		width: 30em;
		height: 22em;
		padding: 3em;
		box-shadow: 2px 2px 5px #2b52ff75;
		text-align: left;
		background: linear-gradient(to right, rgba(16, 99, 251, 0.5) 50%, white 50%);
		background-size: 200% 100%;
		background-position: right top;
		transition: all 0.5s ease-out;
	}
	.card:hover {
		background-position: left top;
	}

	@media (max-width: 600px) {
		.card {
			width: 26em;
			height: 24em;
			padding: 3em;
		}
	}
</style>
