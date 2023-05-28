<script>
	import emailjs from '@emailjs/browser';
	import { dialogs } from "svelte-dialogs";

	let form;
	emailjs.init('Osw24zazxBlDpcDMK');

	function handle_submit() {
		console.log('Ciao');

		emailjs.sendForm("service_qupq7wq","template_q5lz7kg", form).then(
			function () {
				dialogs.alert("Messaggio inviato correttamente");
			},
			function (error) {
				dialogs.alert("Errore durante l'invio del messaggio. Per favore, scrivici direttamente alla seguente email: contact@mysites-service.com");
			}
		);
	}
</script>

<div
	class="py-16 px-4 ml-5 text-center mysites_bg_color rounded-lg m-10 shadow-md shadow-blue-300"
	id="form"
>
	<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
		Contattaci
	</h2>
	<form action="#" class="space-y-8" bind:this={form} on:submit|preventDefault={handle_submit}>
		<div class="flex flex-col justify-center items-center">
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>La tua email</label
			>
			<input
				type="email"
				id="email"
				class="fixed_width shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
				placeholder="name@gmail.com"
				name="email"
				required
			/>
		</div>
		<div class="flex flex-col justify-center items-center">
			<label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Oggetto</label
			>
			<input
				type="text"
				id="subject"
				class="block p-3 fixed_width text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
				placeholder="Oggetto della richiesta"
				name="oggetto"
				required
			/>
		</div>
		<div class="flex flex-col justify-center items-center">
			<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
				>Il tuo messaggio</label
			>
			<textarea
				id="message"
				rows="6"
				class="block p-2.5 fixed_width text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
				placeholder="Salve, vorrei una ..."
				name="messaggio"
			/>
		</div>
		<button
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>Invia messaggio</button
		>
	</form>
</div>

<style>
	label {
		color: black;
	}

	h2 {
		color: black;
	}

	.fixed_width {
		width: 90%;
	}
</style>
