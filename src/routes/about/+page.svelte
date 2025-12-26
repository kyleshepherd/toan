<script lang="ts">
	import * as Card from "$lib/components/ui/card";
</script>

<div class="container mx-auto max-w-2xl space-y-6 p-4">
	<header class="text-center">
		<h1 class="text-2xl font-bold md:text-3xl">About</h1>
		<div class="divider-ornament mx-auto mt-3 max-w-xs">✦</div>
	</header>

	<Card.Root>
		<Card.Content class="space-y-4 pt-6">
			<p>
				This site exists to make <strong>Tales of the Arabian Nights</strong> more accessible to newer
				audiences who cannot get their hands on the physical game, or the Book of Tales.
			</p>

			<p>
				All content on this site, including stories, reaction matrices, and other game materials,
				are created and owned by <strong>Z-Man Games</strong>. This is an unofficial fan project
				and is not affiliated with or endorsed by Z-Man Games.
			</p>

			<p>
				If you find this site useful and would like to support its development, you can buy me a
				coffee on Ko-fi:
			</p>

			<p class="text-center">
				<a
					href="https://ko-fi.com/kyleshepherd13"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-primary text-primary-foreground hover:bg-primary/90 inline-block rounded-md px-4 py-2 no-underline transition-colors"
				>
					Support on Ko-fi
				</a>
			</p>
		</Card.Content>
	</Card.Root>
</div>
