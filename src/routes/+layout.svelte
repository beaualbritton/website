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
	<Navbar/>
	<main class="flex justify-start items-center w-full max-w-full">
		<div class="text-main prose prose-invert max-w-full
      prose-headings:text-[#d3c6aa]
			prose-p:text-main prose-p:leading-relaxed
			prose-a:text-green prose-a:no-underline hover:prose-a:text-aqua
			prose-strong:text-main
			prose-code:rounded prose-code:font-normal
			prose-pre:bg-surface prose-pre:border-0
			prose-ul:text-main prose-ol:text-main
			prose-li:marker:text-green
			prose-blockquote:border-l-green prose-blockquote:text-main">
			{@render children()}
		</div>
	</main>
</div>
