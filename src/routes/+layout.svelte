<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<footer class="py-6 text-center text-sm text-muted-foreground">
		<div class="divider-ornament mb-4">✦</div>
		Made by <a
			href="https://kyleshepherd.co.uk"
			target="_blank"
			rel="noopener noreferrer"
			class="underline hover:text-foreground">Kyle Shepherd</a
		>
	</footer>
</div>
