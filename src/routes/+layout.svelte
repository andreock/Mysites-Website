<script>
	import Navbar from '../lib/Navbar.svelte';
    import { page } from '$app/stores';
</script>

<main>

	{#if $page.route.id != "/"}
		<Navbar></Navbar>
	{/if}

	<slot />

	<hr
		style="  border-top: 1px solid black;
	"
	/>
	<footer class="text-center lg:text-left">
		<div class="p-4 text-center">
			© 2023 Copyright:
			<a href="/">MySites</a>
		</div>
	</footer>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.nav_color {
		background-color: #095a9c69;
	}
	main {
		background-color: rgb(219, 213, 213);
	}
</style>
