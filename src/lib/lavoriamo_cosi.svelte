<script lang="ts">
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile';
	import SliderItem from './SliderItem.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

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
		<Carousel
			bind:this={carousel}
			autoplay={true}
			arrows={true}
			dots={false}
			let:showPrevPage
			let:showNextPage
		>
			<SliderItem img="/labirinto.png" step_name="Step 1" text="Consulenza per il lavoro" />
			<SliderItem img="/lampadina.png" step_name="Step 2" text="Bozza del lavoro" />
			<SliderItem img="/documento.png" step_name="Step 3" text="Controlli del lavoro" />
			<SliderItem img="/consegna.png" step_name="Step 4" text="Consegna" />

			<div slot="prev" on:click={showPrevPage} on:keypress={() => {}}>
				<div class="center-con left">
					<div class="round">
						<div id="cta">
							<span class="arrow primera next " />
							<span class="arrow segunda next " />
						</div>
					</div>
				</div>
			</div>
			<div slot="next" on:click={showNextPage} on:keypress={() => {}}>
				<div class="center-con right">
					<div class="round">
						<div id="cta">
							<span class="arrow primera next " />
							<span class="arrow segunda next " />
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

	.container_color {
		background-color: #0a1a44;
		height: 15em;
	}

	@media (min-width: 600px) {
		.center-con {
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 4em;
		}

		.container_color {
			height: 20em;
		}

		.left {
			padding-right: 3em;
			margin-top: 4em;
			transform: rotate(180deg);
		}

		.right {
			padding-right: 3em;
		}
		.round {
			position: absolute;
			border: 2px solid #fff;
			width: 50px;
			height: 50px;
			border-radius: 100%;
		}

		#cta {
			width: 100%;
			cursor: pointer;
			position: absolute;
		}

		#cta .arrow {
			left: 30%;
		}
		.arrow {
			position: absolute;
			bottom: 0;
			margin-left: 0px;
			width: 12px;
			height: 12px;
			background-size: contain;
			top: 18px;
		}
		.segunda {
			margin-left: 8px;
		}
		.next {
			background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
		}

		@keyframes bounceAlpha {
			0% {
				opacity: 1;
				transform: translateX(0px) scale(1);
			}
			25% {
				opacity: 0;
				transform: translateX(10px) scale(0.9);
			}
			26% {
				opacity: 0;
				transform: translateX(-10px) scale(0.9);
			}
			55% {
				opacity: 1;
				transform: translateX(0px) scale(1);
			}
		}

		.round:hover .arrow {
			animation-name: bounceAlpha;
			animation-duration: 1.4s;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
		.round:hover .arrow.primera {
			animation-name: bounceAlpha;
			animation-duration: 1.4s;
			animation-delay: 0.2s;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
	}
</style>
