<script>
	import Cliente from '$lib/Cliente.svelte';
	import { is_mobile } from '$lib/js/mobile.ts';
	import { onMount } from 'svelte';
	let mobile = false;
	let grid = '';
	let img_center = "";
	onMount(() => {
		mobile = is_mobile();
		if (!mobile) {
			grid = 'grid grid-cols-4'
		}else {
			img_center = "flex justify-center";
		};
	});
</script>

<div class="flex justify-center">
	<div class={grid}>
		<div class={img_center}>
			<img
				src="/pages/post.png"
				alt="main illustration"
			/>
		</div>
		<div class="mr-5 col-span-3" style="text-align: center; ">
			<h1>Creazione post</h1>
			<br />
			<p>
				Possiamo aiutarti a gestire il tuo account social con creazione di post, reel, storie...
			</p>
			<p>Per maggiori informazioni contattaci in privato</p>
		</div>
	</div>
</div>

<br />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 4em;
		margin-top: 1em;
	}

	img {
		border-radius: 8px;
	}

	p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.3em;
	}
</style>
