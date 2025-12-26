<script lang="ts">
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { matrices, type Matrix, type MatrixName } from "$lib/data/matrices";
	import * as Tabs from "$lib/components/ui/tabs";
	import * as Card from "$lib/components/ui/card";
	import StoryDialog from "$lib/components/StoryDialog.svelte";
	import { createStoryDialogState } from "$lib/stores/storyDialog.svelte";

	const matrixNames = Object.keys(matrices) as (keyof typeof matrices)[];

	// Get matrix from URL param, default to "A"
	let selectedMatrix = $derived(($page.url.searchParams.get("matrix") as MatrixName) || "A");

	function handleTabChange(value: string) {
		const url = new URL($page.url);
		url.searchParams.set("matrix", value);
		goto(url.toString(), { replaceState: true, noScroll: true });
	}

	function getMatrixMappings(matrix: Matrix) {
		return Object.entries(matrix.mappings) as [string, Record<string, number | null>][];
	}

	// Story dialog state
	const storyDialog = createStoryDialogState();

	function handleStoryClick(storyNumber: number) {
		storyDialog.openStory(storyNumber);
	}

	function handleDestinyStoryClick(storyNumber: number) {
		storyDialog.openSingleStory(storyNumber);
	}
</script>

<svelte:head>
	<title>Reaction Matrices</title>
</svelte:head>

<div class="container mx-auto space-y-6 p-4">
	<header class="text-center">
		<h1 class="font-display text-2xl md:text-3xl">Reaction Matrices</h1>
		<div class="divider-ornament mx-auto mt-3 max-w-xs">✦</div>
	</header>

	<Tabs.Root value={selectedMatrix} onValueChange={handleTabChange} class="w-full">
		<Tabs.List class="mb-8 flex h-auto flex-wrap gap-2 rounded-lg p-2">
			{#each matrixNames as name (name)}
				<Tabs.Trigger value={name} class="px-4 py-2">
					{name}
				</Tabs.Trigger>
			{/each}
		</Tabs.List>

		{#each matrixNames as name (name)}
			{@const matrix = matrices[name]}
			<Tabs.Content value={name}>
				<Card.Root>
					<Card.Header>
						<Card.Title>Matrix {matrix.name}</Card.Title>
					</Card.Header>
					<Card.Content class="overflow-x-auto px-3 md:px-6">
						<table class="w-full text-sm">
							<thead>
								<tr>
									<th class="min-w-[100px] md:w-40"></th>
									{#each matrix.actions as action (action)}
										<th class="px-2 py-2 text-center font-semibold md:px-3">
											{action}
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each getMatrixMappings(matrix) as [description, actionMap], i (description)}
									<tr class={i % 2 === 0 ? "bg-muted/50" : ""}>
										<td class="py-2 pr-2 font-semibold md:pr-4">
											{description}
										</td>
										{#each matrix.actions as action (action)}
											{@const value = actionMap[action]}
											<td class="px-2 py-2 text-center tabular-nums md:px-3">
												{#if value === null}
													<span class="text-muted-foreground">—</span>
												{:else}
													<button
														type="button"
														class="hover:bg-accent/50 cursor-pointer rounded px-2 py-1 transition-colors hover:underline"
														onclick={() => handleStoryClick(value)}
													>
														{value}
													</button>
												{/if}
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>

<StoryDialog
	bind:open={storyDialog.open}
	story={storyDialog.story}
	previousStory={storyDialog.previousStory}
	nextStory={storyDialog.nextStory}
	showSingleStory={storyDialog.showSingleStory}
	onStoryClick={handleDestinyStoryClick}
/>
