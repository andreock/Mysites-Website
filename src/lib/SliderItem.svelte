<script lang="ts">
    export let step_name: string, text:string, img: string;
</script>

<div class="flex justify-center">
	<img src={img} alt={step_name + "img"}/>
	<div class="pl-5">
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
		font-size: 3em;
		font-weight: 500;
	}

	p {
		font-size: 1.5em;
	}
	@media (max-width: 700px) {
		img {
			width: 100px;
		}
	}
</style>
