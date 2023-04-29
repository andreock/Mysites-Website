<script>
	import Typewriter from 'svelte-typewriter';
	import 'animate.css';
	import Navbar from './Navbar.svelte';
	import { is_mobile } from '../lib/js/mobile.ts';
	import { onMount } from 'svelte';
	import { scroll_to_id } from './js/scroll';
	let mobile = false;
	let grid = 'custom_grid';
	let container = "container_color";

	onMount(() => {
		mobile = is_mobile();
		if (mobile){
			container = "container_color_mobile";
			grid = '';
		} 
	});
</script>

<div class="{container}">
	<Navbar />

	<div class={grid}>
		<div class="flex justify-end">
			{#if !mobile}
				<div class="pt-32 pl-20" style="width: 70em;">
					<Typewriter interval={50} cursor={true}>
						<h1 class="text-white font-medium bold font_bold" style="font-size: 4em">
							<p>mySites,</p>
							<p>la soluzione che fa per te.</p>
						</h1>
					</Typewriter>

					<br />
					<button
						class="bg-yellow-500 hover:bg-yellow-700 text-dark font-bold py-2 px-4 rounded h-12"
						><a href="/servizi">
							Scopri i nostri servizi
						</a></button
					>
				</div>
			{:else}
				<div>
					<h1 class="text-white font-medium bold font_bold pl-5 mt-8" style="font-size: 3em;">
						<p>mySites,</p>
						<p>la soluzione che fa per te.</p>
					</h1>
					<br />
					<div class="pl-5">
						<button
							class="bg-yellow-500 hover:bg-yellow-700 text-dark font-bold py-2 px-4 rounded h-12"
						>
							<a href="/servizi"> Scopri i nostri servizi </a>
						</button>
					</div>
				</div>
			{/if}
			<br />
		</div>
		{#if !mobile}
			<div class="flex justify-start animate__animated animate__fadeIn pl-36">
				<img src="phone.png" alt="phone" style="width: 31em; z-index: -2" />
			</div>
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
	.container_color_mobile {
		background: linear-gradient(134deg, rgb(15, 166, 147) 0%, rgb(21, 32, 64) 100%);
		height: 33em;
	}

	.container_color{
		background: linear-gradient(134deg, rgb(15, 166, 147) 0%, rgb(21, 32, 64) 100%);
		height: 48em;
	}

	/*Responsive text padding*/
	@media screen and (max-width: 1600px) {
		.custom_grid {
			padding: 3em;
		}
	}
	.font_bold {
		font-family: 'Inter', sans-serif;
	}
</style>
