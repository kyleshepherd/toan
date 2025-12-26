<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import Menu from "@lucide/svelte/icons/menu";

	let sheetOpen = $state(false);

	// Close sheet on navigation
	$effect(() => {
		$page.url.pathname;
		sheetOpen = false;
	});
</script>

<header class="shadow-sm">
	<div class="container mx-auto flex items-center justify-between px-4 py-3">
		<a href="/" class="font-display text-xl">Tales of the Arabian Nights</a>

		<!-- Desktop nav -->
		<nav class="hidden gap-4 text-sm md:flex">
			<a
				href="/"
				class="hover:text-foreground transition-colors {$page.url.pathname === '/'
					? 'text-foreground'
					: 'text-muted-foreground'}"
			>
				Encounter Lookup
			</a>
			<a
				href="/reactions"
				class="hover:text-foreground transition-colors {$page.url.pathname === '/reactions'
					? 'text-foreground'
					: 'text-muted-foreground'}"
			>
				Reaction Matrices
			</a>
			<a
				href="/about"
				class="hover:text-foreground transition-colors {$page.url.pathname === '/about'
					? 'text-foreground'
					: 'text-muted-foreground'}"
			>
				About
			</a>
		</nav>

		<!-- Mobile menu -->
		<Sheet.Root bind:open={sheetOpen}>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="md:hidden">
						<Menu class="h-5 w-5" />
						<span class="sr-only">Toggle menu</span>
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content side="right" class="p-6 pt-12">
				<nav class="flex flex-col gap-4">
					<a
						href="/"
						class="hover:text-foreground text-lg transition-colors {$page.url.pathname === '/'
							? 'text-foreground font-medium'
							: 'text-muted-foreground'}"
					>
						Encounter Lookup
					</a>
					<a
						href="/reactions"
						class="hover:text-foreground text-lg transition-colors {$page.url.pathname ===
						'/reactions'
							? 'text-foreground font-medium'
							: 'text-muted-foreground'}"
					>
						Reaction Matrices
					</a>
					<a
						href="/about"
						class="hover:text-foreground text-lg transition-colors {$page.url.pathname === '/about'
							? 'text-foreground font-medium'
							: 'text-muted-foreground'}"
					>
						About
					</a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</header>
