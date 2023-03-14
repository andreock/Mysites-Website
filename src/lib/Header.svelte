<script>
	import Typewriter from 'svelte-typewriter';
	import 'animate.css';
	import Navbar from './Navbar.svelte';
</script>


<div class="container_color">
	<Navbar></Navbar>

	<div class="custom_grid">
		<div class="flex justify-end">
			<div class="pt-32" style="width: 70em;">
				<Typewriter interval={50} cursor={true}>
					<h1 class="text-white font-medium bold font_bold" style="font-size: 80px">
						<p>mySites,</p>
						<p>la soluzione che fa per te.</p>
					</h1>
				</Typewriter>

				<br />
				<button class="bg-yellow-500 hover:bg-yellow-700 text-dark font-bold py-2 px-4 rounded h-12"
					><a href="/servizi">
						Scopri i nostri servizi
					</a></button
				>
			</div>
			<br />
		</div>
		<div class="flex justify-start animate__animated animate__fadeIn">
			<img src="phone.png" alt="phone" style="width: 25em; z-index: -2" />
		</div>
	</div>
</div>
<br><br>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
	.container_color {
		background: linear-gradient(134deg, rgb(15, 166, 147) 0%, rgb(21, 32, 64) 100%);
		height: 48em;
	}

	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	.custom_grid {
		display: grid;
		grid-template-columns: auto 30%;
	}

	.font_bold {
		font-family: 'Inter', sans-serif;	}
</style>
