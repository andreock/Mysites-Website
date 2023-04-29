<script>
	import Contatti from '$lib/Contatti.svelte';

	import Form from '$lib/Form.svelte';
	import FirstDialog from '$lib/first_dialog.svelte';
	import Header from '$lib/Header.svelte';
	import LavoriamoCosi from '$lib/lavoriamo_cosi.svelte';
	import { is_mobile } from '$lib/js/mobile';
	import { onMount } from 'svelte';
	import FormMobile from '$lib/Form_Mobile.svelte';

	let mobile = false;

	onMount(() => (mobile = is_mobile()));
</script>

<Header />

<div class="white">
	<br />
	<br />
	<FirstDialog />
	<br />
</div>

<LavoriamoCosi />

{#if !mobile}
	<div class="grid grid-cols-2 gap-4">
		<Form />
		<Contatti mobile={false}/>
	</div>
{:else}
	<div class="flex justify-center content-center text-center">
		<FormMobile />
		<Contatti mobile={true}/>
	</div>
{/if}
<!-- </div> -->
