<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-main overflow-hidden flex flex-row">
	<main class="flex justify-start items-center ml-32 w-8/10">
		<div class="text-main prose prose-invert prose-headings:text-[#d3c6aa]">
			{@render children()}
		</div>
	</main>
	<Navbar/>
</div>
