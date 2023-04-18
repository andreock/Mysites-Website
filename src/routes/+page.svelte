<script>
	import Form from '$lib/Form.svelte';
	import FirstDialog from '../lib/first_dialog.svelte';
	import Header from '../lib/Header.svelte';
	import LavoriamoCosi from '../lib/lavoriamo_cosi.svelte';
	import Servizio from '$lib/Servizio.svelte';
</script>

<Header />

<div class="white">
	<br />
	<br />
	<FirstDialog />
	<br />
</div>

<LavoriamoCosi />

<div class="justify-center">
	<Form />
</div>