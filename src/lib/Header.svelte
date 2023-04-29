<script>
	import Typewriter from 'svelte-typewriter';
	import 'animate.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="container_color">
	<Navbar />

	<div class="custom_grid">
		<div class="flex justify-end">
			<div class="padding" style="width: 70em;">
				<Typewriter interval={50} cursor={true}>
					<h1 class="text-white font-medium bold font_bold">
						<p>mySites,</p>
						<p>la soluzione che fa per te.</p>
					</h1>
				</Typewriter>

				<br />
				<button class="bg-yellow-500 hover:bg-yellow-700 text-dark font-bold py-2 px-4 rounded h-12"
					><a href="/servizi"> Scopri i nostri servizi </a></button
				>
			</div>
			<br />
		</div>
		<div class="flex justify-start animate__animated animate__fadeIn pl-36">
			<img src="phone.png" alt="phone" style="width: 31em; z-index: -2" />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
	.container_color {
		background: linear-gradient(134deg, rgb(15, 166, 147) 0%, rgb(21, 32, 64) 100%);
		height: 48em;
	}

	.padding {
		padding-top: 8rem;
		padding-left: 5rem;
	}
	h1 {
		font-size: 5em;
	}

	@media (max-width: 800px) {
		img {
			display: none;
		}
		h1 {
			font-size: 3em;
		}
		.custom_grid {
			display: block;
		}
		.container_color {
			background: linear-gradient(134deg, rgb(15, 166, 147) 0%, rgb(21, 32, 64) 100%);
			height: 33em;
		}
		.padding {
			padding-top: 2rem;
			padding-left: 1rem;
		}
	}

	.font_bold {
		font-family: 'Inter', sans-serif;
	}
</style>
