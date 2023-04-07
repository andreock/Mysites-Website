<script lang="ts">
	export let right: boolean, testo: string, titolo: string, link: string, img: string;
</script>

{#if right}
	<div class="grid grid-cols-2">
		<div class="flex justify-center">
			<img
		 		class="object-contain"
				src={img}
				alt={titolo}
			/>
		</div>

		<div class="testo">
			<h2>{titolo}</h2>
			{@html testo}
			<p>Il sito è visitabile <a href={link} target="_blank" rel="noreferrer">qui</a></p>
		</div>
	</div>
{:else}
	<div class="grid grid-cols-2">
		<div class="testo">
			<h2>{titolo}</h2>
			{@html testo}
			<p>Il sito è visitabile <a href={link} rel="noreferrer" target="_blank">qui</a></p>
		</div>
		<div class="flex justify-center">
			<img
		 		class="object-contain"
				src={img}
				alt="lys gomis"
			/>
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
		font-size: 1.1em;
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
</style>
