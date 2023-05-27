<script lang="ts">
	import Email from './icon/Email.svelte';
	import Github from './icon/Github.svelte';
	import Instagram from './icon/Instagram.svelte';
	import Phone from './icon/Phone.svelte';

	export let mobile: boolean;

	let space = "mb-12 mt-28";
	let space2 = "mt-28";
	if(mobile) {
		space = "m-2";
		space2 = "m-2";
	}
</script>

<div class="border_image">
	<div class="flex flex-wrap">
		<div class="{space} grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
			<div class="flex items-start">
				{#if !mobile}
					<Phone />
				{/if}
				<div class="grow ml-6">
					{#if mobile}
						<div class="flex justify-center pb-5">
							<Phone />
						</div>
					{:else}
						<p class="font-bold mb-1">Telefono</p>
					{/if}
					<p class="text-gray-500">
						<a href="telto:+393473561995">+39 347 356 1995</a></p>
				</div>
			</div>
		</div>

		<div class="{space} grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
			<div class="flex items-start">
				{#if !mobile}
					<Email />
				{/if}
				<div class="grow ml-6">
					{#if mobile}
						<div class="flex justify-center pb-5">
							<Email />
						</div>
					{:else}
						<p class="font-bold mb-1">Email</p>
					{/if}
					<p class="text-gray-500"><a href="mailto:faf.sites@gmail.com">faf.sites@gmail.com</a></p>
				</div>
			</div>
		</div>

		<div class="{space} md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
			<div class="flex align-start">
				{#if !mobile}
					<Github />
				{/if}
				<div class="grow ml-6">
					{#if mobile}
						<div class="flex justify-center pb-5">
							<Github />
						</div>
					{:else}
						<p class="font-bold mb-1">Github</p>
					{/if}
					<p class="text-gray-500">
						<a href="https://github.com/orgs/MySites-TO/repositories">@Mysites</a>
					</p>
				</div>
			</div>
		</div>

		<div class="grow-0 {space2} shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
			<div class="flex align-start">
				{#if !mobile}
					<Instagram />
				{/if}
				<div class="grow ml-6">
					{#if mobile}
						<div class="flex justify-center pb-5">
							<Instagram />
						</div>
					{:else}
						<p class="font-bold mb-1">Instagram</p>
					{/if}
					<p class="text-gray-500"><a href="https://www.instagram.com/mysites_/">@mysites_</a></p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.border_image {
			border-image-source: url(/contatti_sfondo.png);
			border-image-slice: 0 fill;
		}
	}
</style>
