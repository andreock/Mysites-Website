<script lang="ts">
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile';
	import SliderItem from './SliderItem.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let grid = '';
	let mobile = true;

	onMount(() => {
		mobile = is_mobile();
		if (!mobile) grid = 'pt-20 pl-32';
		else grid = 'pt-3';
	});

	let carousel; // for calling methods of the carousel instance
</script>

<div class="container_color flex justify-center items-center">
	{#if browser}
		<Carousel bind:this={carousel} autoplay={true} arrows={false} dots={false}>
			<SliderItem
				img="/labirinto.png"
				step_name="Step 1"
				text="Consulenza per il lavoro"
			/>
			<SliderItem
				img="/lampadina.png"
				step_name="Step 2"
				text="Bozza del lavoro"
			/>
			<SliderItem
				img="/documento.png"
				step_name="Step 3"
				text="Aggiornamenti e controlli"
			/>
			<SliderItem
				img="/consegna.png"
				step_name="Step 4"
				text="Consegna"
			/>
		</Carousel>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

	.container_color {
		background-color: #0a1a44;
		height: 32em;
	}
</style>
