<script>
	// export let mobile;
	import { onMount } from 'svelte';
	import { is_mobile } from '$lib/js/mobile.ts';

	let grid = "";
	let mobile = true;

	onMount(() => {
		mobile = is_mobile();
		if(!mobile)
		grid = "grid grid-cols-2";
	else
		grid = "grid grid-rows-2";	
	})

</script>
<div class="container mx-auto">
	<div class={grid}>
		<div class="pr-10">
			<h1>Di che cosa ci occupiamo?</h1>
			{#if mobile}
				<br>
			{/if}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non metus bibendum,
				auctor metus at, elementum risus. Ut aliquet nulla in velit rhoncus ultrices. Sed lobortis
				feugiat dui a maximus. Curabitur faucibus vestibulum metus vitae pharetra. Ut vitae massa
				sed nisl varius dignissim. Suspendisse vehicula, dolor eget laoreet volutpat, sapien risus
				accumsan nibh, eget varius ipsum est ac nibh. Nulla facilisi. Etiam varius fermentum
				ultricies. Pellentesque gravida ac neque ac gravida. Intege6r efficitur, erat vitae dictum
				porta, odio magna luctus dui, quis iaculis nisi nisi et orci.
			</p>
		</div>
		<div>
			<div>
				<br>
				<img src="prova.jpg" alt="prova" />
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500&display=swap');
	h1 {
		color: #000000;
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3em;
		font-weight: 500;
	}

	p {
        font-family: 'Plus Jakarta Sans', sans-serif;
		font-weight: 400;
        font-size: large;
	}
</style>
