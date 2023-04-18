<script>
	let y;
	console.log(y);
</script>

{#if y < 290}
	<!-- navbar -->
	<nav class="flex justify-between text-white sticky top-0 nav_color">
		<div class="px-5 xl:px-12 py-6 flex w-full items-center">
			<a class="text-3xl font-bold font-heading" href="/">
				<img class="h-9 logo_size" src="favicon_no_bg.png" alt="logo" />
			</a>
			<!-- Nav Links -->
			<ul class="hidden md:flex px-4 mx-8 space-x-12 text-xl font_spesciale ">
				<li><a class="hover:text-gray-200" href="/">Home</a></li>
				<li><a class="hover:text-gray-200" href="/servizi">Servizi</a></li>
			</ul>
		</div>
	</nav>
	{:else}
		<!-- navbar -->
		<nav class="flex justify-between text-white sticky top-0 nav_color_white">
			<div class="px-5 xl:px-12 py-6 flex w-full items-center">
				<a class="text-3xl font-bold font-heading" href="/">
					<img class="h-9 logo_size" src="favicon_no_bg.png" alt="logo" />
				</a>
				<!-- Nav Links -->
				<ul class="hidden md:flex px-4 mx-8 space-x-12 text-xl font_spesciale ">
					<li><a class="hover:text-gray-200" href="/">Home</a></li>
					<li><a class="hover:text-gray-200" href="/servizi">Servizi</a></li>
				</ul>
			</div>
		</nav>
{/if}
<svelte:window bind:scrollY={y} />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
	.logo_size {
		width: 100px;
		height: 70px;
	}
	.nav_color {
		background-color: #ffffff00;
	}

	.nav_color_white {
		background-color: rgba(96, 94, 94, 0.588);
	}
	.font_spesciale {
		font-family: 'Inter', sans-serif;
	}
</style>
