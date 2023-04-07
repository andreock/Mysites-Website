<script>
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile.ts';

	let grid = "";
	let mobile = true;

	onMount(() => {
		mobile = is_mobile();
		if(!mobile)
		grid = "pt-20 pl-32";
	else
		grid = "pt-3"	
	})

</script>

<div class="container_color">
	<div class={grid}>
		<h1>Noi lavoriamo così:</h1>
		<div class="grid grid-cols-3 gap-3">
			<div>
				<h1>1.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue risus erat, vulputate
					ornare urna efficitur ut. Nulla tempor est risus, ut ultrices elit ultrices vitae.
				</p>
			</div>
			<div>
				<h1>2.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue risus erat, vulputate
					ornare urna efficitur ut. Nulla tempor est risus, ut ultrices elit ultrices vitae.
				</p>
			</div>
			<div>
				<h1>3.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue risus erat, vulputate
					ornare urna efficitur ut. Nulla tempor est risus, ut ultrices elit ultrices vitae.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

	.container_color {
		background-color: #0a1a44;
		height: 32em;
	}

	h1 {
		color: white;
		font-size: 2em;
	}

	p {
		color: white;
		font-size: 1.2em;
	}

	.testimonial {
		font-family: 'Inter', sans-serif;
		font-size: 1.5em;
	}

hr {
	border-top: 1px dashed rgb(196, 186, 186)te;

}
</style>
