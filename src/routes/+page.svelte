<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import * as ToggleGroup from "$lib/components/ui/toggle-group";
	import { Button } from "$lib/components/ui/button";
	import * as Table from "$lib/components/ui/table";
	import StoryDialog from "$lib/components/StoryDialog.svelte";
	import { getEncounter } from "$lib/data/encounters";
	import { matrices, type MatrixName } from "$lib/data/matrices";
	import { createStoryDialogState } from "$lib/stores/storyDialog.svelte";

	let encounterCard = $state("");
	let diceRoll = $state<string | undefined>(undefined);
	let cityGemIcon = $state("0");
	let destinyBonus = $state("0");

	let result = $state<{
		encounter: { name: string; matrix: MatrixName };
		encounterIndex: number;
		matrixData: {
			name: MatrixName;
			actions: readonly string[];
			descriptions: readonly string[];
			mappings: Record<string, Record<string, number | null>>;
		};
		matchedDescription: string | null;
	} | null>(null);

	let error = $state<string | null>(null);

	// Story dialog state
	const storyDialog = createStoryDialogState();

	function handleStoryClick(storyNumber: number) {
		storyDialog.openStory(storyNumber);
	}

	function handleDestinyStoryClick(storyNumber: number) {
		storyDialog.openSingleStory(storyNumber);
	}

	function findMatchingDescription(
		encounterName: string,
		descriptions: readonly string[],
	): string | null {
		// Try to find a description that appears at the start of the encounter name
		for (const desc of descriptions) {
			if (encounterName.startsWith(desc)) {
				return desc;
			}
		}
		// Fallback: check if any description is contained in the encounter name
		for (const desc of descriptions) {
			if (encounterName.includes(desc)) {
				return desc;
			}
		}
		return null;
	}

	function handleSubmit() {
		error = null;
		result = null;

		if (!encounterCard || !diceRoll) {
			error = "Please fill in all required fields";
			return;
		}

		const tableIndex = parseInt(encounterCard);
		const roll = parseInt(diceRoll);
		const gem = parseInt(cityGemIcon) || 0;
		const bonus = parseInt(destinyBonus) || 0;

		// Calculate encounter index, capped at 12
		const encounterIndex = Math.min(roll + gem + bonus, 12);

		const encounter = getEncounter(tableIndex, encounterIndex);
		if (!encounter) {
			error = `No encounter found for table ${tableIndex}, index ${encounterIndex}`;
			return;
		}

		const matrix = matrices[encounter.matrix];
		if (!matrix) {
			error = `Matrix ${encounter.matrix} not found`;
			return;
		}

		const matchedDescription = findMatchingDescription(encounter.name, matrix.descriptions);

		result = {
			encounter,
			encounterIndex,
			matrixData: {
				name: matrix.name,
				actions: matrix.actions,
				descriptions: matrix.descriptions,
				mappings: matrix.mappings as Record<string, Record<string, number | null>>,
			},
			matchedDescription,
		};
	}
</script>

<div class="container mx-auto max-w-4xl space-y-6 p-4">
	<header class="text-center">
		<h1 class="font-display text-2xl md:text-3xl">Encounter Lookup</h1>
		<div class="divider-ornament mx-auto mt-3 max-w-xs">✦</div>
	</header>

	<Card.Root class="mx-auto max-w-md">
		<Card.Content class="space-y-4 pt-6">
			<div class="space-y-2">
				<Label for="encounter-card"
					>Encounter Card Number <span class="text-destructive">*</span></Label
				>
				<Input
					id="encounter-card"
					type="number"
					min="0"
					placeholder="Enter card number"
					required
					bind:value={encounterCard}
				/>
			</div>

			<div class="space-y-2">
				<Label>Dice Roll <span class="text-destructive">*</span></Label>
				<ToggleGroup.Root
					type="single"
					bind:value={diceRoll}
					variant="outline"
					class="w-full justify-between"
				>
					{#each [1, 2, 3, 4, 5, 6] as num (num)}
						<ToggleGroup.Item value={String(num)} class="bg-muted border-border flex-1 border"
							>{num}</ToggleGroup.Item
						>
					{/each}
				</ToggleGroup.Root>
			</div>

			<div class="space-y-2">
				<Label for="city-gem">City/Gem Icon Number</Label>
				<Input
					id="city-gem"
					type="number"
					min="0"
					placeholder="Enter icon number"
					bind:value={cityGemIcon}
				/>
			</div>

			<div class="space-y-2">
				<Label>Destiny Bonus</Label>
				<ToggleGroup.Root
					type="single"
					bind:value={destinyBonus}
					variant="outline"
					class="w-full justify-between"
				>
					<ToggleGroup.Item value="0" class="bg-muted border-border flex-1 border"
						>0</ToggleGroup.Item
					>
					<ToggleGroup.Item value="1" class="bg-muted border-border flex-1 border"
						>1</ToggleGroup.Item
					>
					<ToggleGroup.Item value="2" class="bg-muted border-border flex-1 border"
						>2</ToggleGroup.Item
					>
				</ToggleGroup.Root>
			</div>

			<Button class="w-full" onclick={handleSubmit}>View Reactions</Button>

			{#if error}
				<p class="text-destructive text-sm">{error}</p>
			{/if}
		</Card.Content>
	</Card.Root>

	{#if result}
		<Card.Root>
			<Card.Header>
				<Card.Title>
					{result.encounter.name}
				</Card.Title>
				<Card.Description>
					Matrix {result.matrixData.name} · Encounter Index {result.encounterIndex}
					{#if result.matchedDescription}
						· Matched: {result.matchedDescription}
					{/if}
				</Card.Description>
			</Card.Header>
			<Card.Content class="overflow-x-auto">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head class="bg-background sticky left-0 z-10"></Table.Head>
							{#each result.matrixData.actions as action (action)}
								<Table.Head class="min-w-[70px] text-center text-xs">{action}</Table.Head>
							{/each}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each result.matrixData.descriptions as description (description)}
							{@const isHighlighted = description === result.matchedDescription}
							{@const row = result.matrixData.mappings[description]}
							<Table.Row class="group {isHighlighted ? 'bg-primary/20 font-semibold' : ''}">
								<Table.Cell
									class="sticky left-0 z-10 font-medium {isHighlighted
										? '!bg-accent'
										: '!bg-background group-hover:!bg-muted'}"
								>
									{description}
								</Table.Cell>
								{#each result.matrixData.actions as action (action)}
									<Table.Cell class="text-center tabular-nums">
										{#if row[action] === null}
											<span class="text-muted-foreground">—</span>
										{:else}
											<button
												type="button"
												class="hover:bg-accent/50 cursor-pointer rounded px-2 py-1 transition-colors hover:underline"
												onclick={() => handleStoryClick(row[action]!)}
											>
												{row[action]}
											</button>
										{/if}
									</Table.Cell>
								{/each}
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	{:else}
		<p class="text-center text-sm text-muted-foreground">
			Enter your encounter details above to see the reaction matrix
		</p>
	{/if}
</div>

<StoryDialog
	bind:open={storyDialog.open}
	story={storyDialog.story}
	previousStory={storyDialog.previousStory}
	nextStory={storyDialog.nextStory}
	showSingleStory={storyDialog.showSingleStory}
	onStoryClick={handleDestinyStoryClick}
/>
