<script lang="ts">
	export let step_name: string, text: string, img: string;
</script>

<div class="flex justify-center">
	<img src={img} alt={step_name + "img"}/>
	<div class="md:pl-16 md:mt-7">
		<h1>{step_name}</h1>
		<p>{text}</p>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500&display=swap');
	h1,
	p {
		color: white;
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 500;
	}

	p {
		font-size: 1.4em;
	}
	@media (max-width: 700px) {
		img {
			width: 100px;
		}
	}

	img {
		width: 150px;
	}

	@media (max-width: 600px) {
		img {
			display: none;
		}
	}
</style>
