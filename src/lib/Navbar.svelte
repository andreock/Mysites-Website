<script lang="ts">
	import { onMount } from "svelte";
</script>

<!-- navbar -->
<nav class="flex justify-between text-white sticky top-0 nav_color">
	<div class="px-5 xl:px-12 py-6 flex w-full items-center">
		<a class="text-3xl font-bold font-heading" href="/">
			<img class="h-9 logo_size" src="favicon_no_bg.png" alt="logo" />
		</a>
		<!-- Nav Links -->
		<ul
			class="hidden md:flex px-4 mx-8 space-x-12 text-xl font_spesciale "
		>
			<li><a class="hover:text-gray-200" href="/">Home</a></li>
		</ul>
	</div>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
	.logo_size {
		width: 100px;
		height: 70px;
	}
	.nav_color {
		background-color: #ffffff00;
	}

	.font_spesciale {
		font-family: 'Inter', sans-serif;
	}
</style>
