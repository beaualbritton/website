<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="min-h-screen bg-[#2b3339] overflow-hidden">
	<main class="max-w-2xl mx-auto py-16 px-6">
		<div class="prose prose-invert max-w-none
			prose-headings:text-[#d3c6aa] prose-headings:font-normal
			prose-p:text-[#d3c6aa] prose-p:leading-relaxed
			prose-a:text-[#a7c080] prose-a:no-underline hover:prose-a:text-[#83c092]
			prose-strong:text-[#d3c6aa]
			prose-code:rounded prose-code:font-normal
			prose-pre:bg-[#374247] prose-pre:border-0
			prose-ul:text-[#d3c6aa] prose-ol:text-[#d3c6aa]
			prose-li:marker:text-[#a7c080]
			prose-blockquote:border-l-[#a7c080] prose-blockquote:text-[#d3c6aa]">
			{@render children()}
		</div>
	</main>
</div>
