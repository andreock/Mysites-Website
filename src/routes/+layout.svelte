<script>
	import Navbar from '../lib/Navbar.svelte';
	import { page } from '$app/stores';
	import './app.css';
</script>

<div class="app">

<main>
	{#if $page.route.id != '/'}
	<Navbar />
{/if}

	<slot />

	<br />
</main>
<hr
style="  border-top: 1px solid black;
"
/>
<footer class="text-center lg:text-left">


		<div class="p-4 text-center">
			© 2023 Copyright:
			<a href="/">mySites</a>
		</div>
	</footer>
</div>

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

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: rgb(219, 213, 213);
	}

</style>
