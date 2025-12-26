<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import StoryText from "$lib/components/StoryText.svelte";
	import type { Story } from "$lib/data/stories";

	let {
		open = $bindable(false),
		story,
		previousStory,
		nextStory,
		showSingleStory = false,
		onStoryClick,
	}: {
		open: boolean;
		story: Story | null;
		previousStory?: Story;
		nextStory?: Story;
		showSingleStory?: boolean;
		onStoryClick?: (storyNumber: number) => void;
	} = $props();
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="max-h-[90vh] {showSingleStory ? '' : 'max-w-7xl!'}  overflow-y-auto">
		<Dialog.Header>
			<Dialog.Title>
				{#if story?.title}
					{story.index}. {story.title}
				{:else if story}
					Paragraph {story.index}
				{/if}
			</Dialog.Title>
		</Dialog.Header>

		{#if story}
			{#if showSingleStory}
				<!-- Single story view for destiny table stories -->
				<div class="mx-auto max-w-2xl space-y-4">
					<div class="[&_p]:mb-3">
						<StoryText html={story.text} {onStoryClick} />
					</div>

					{#if story.choices}
						<ul class="space-y-2">
							{#each story.choices as choice, i (i)}
								<li><strong>Choice {i + 1}:</strong> {choice}</li>
							{/each}
						</ul>
					{/if}

					{#if story.destinyTable}
						<div class="mt-6">
							<h4 class="mb-2 font-semibold">Destiny Die Results</h4>
							<table class="w-full border-collapse text-sm">
								<thead>
									<tr class="border-b">
										<th class="px-3 py-2 text-left">Destiny</th>
										<th class="px-3 py-2 text-center">Choice 1</th>
										<th class="px-3 py-2 text-center">Choice 2</th>
										<th class="px-3 py-2 text-center">Choice 3</th>
									</tr>
								</thead>
								<tbody>
									<tr class="border-b">
										<td class="px-3 py-2 font-medium">Minus (1-2)</td>
										{#each story.destinyTable.minus as val, i (i)}
											<td class="px-3 py-2 text-center tabular-nums">
												{#if val === null}
													<span class="text-muted-foreground">—</span>
												{:else}
													<button
														type="button"
														class="hover:bg-accent/50 cursor-pointer rounded px-2 py-1 transition-colors hover:underline"
														onclick={() => onStoryClick?.(val)}
													>
														{val}
													</button>
												{/if}
											</td>
										{/each}
									</tr>
									<tr class="border-b">
										<td class="px-3 py-2 font-medium">Blank (3-4)</td>
										{#each story.destinyTable.blank as val, i (i)}
											<td class="px-3 py-2 text-center tabular-nums">
												{#if val === null}
													<span class="text-muted-foreground">—</span>
												{:else}
													<button
														type="button"
														class="hover:bg-accent/50 cursor-pointer rounded px-2 py-1 transition-colors hover:underline"
														onclick={() => onStoryClick?.(val)}
													>
														{val}
													</button>
												{/if}
											</td>
										{/each}
									</tr>
									<tr>
										<td class="px-3 py-2 font-medium">Plus (5-6)</td>
										{#each story.destinyTable.plus as val, i (i)}
											<td class="px-3 py-2 text-center tabular-nums">
												{#if val === null}
													<span class="text-muted-foreground">—</span>
												{:else}
													<button
														type="button"
														class="hover:bg-accent/50 cursor-pointer rounded px-2 py-1 transition-colors hover:underline"
														onclick={() => onStoryClick?.(val)}
													>
														{val}
													</button>
												{/if}
											</td>
										{/each}
									</tr>
								</tbody>
							</table>
						</div>
					{/if}
				</div>
			{:else}
				<!-- Three column view -->
				<div class="grid gap-4 md:grid-cols-3">
					<!-- Previous story -->
					<div class="order-2 md:order-1">
						{#if previousStory}
							<div class="mb-2 text-center text-lg font-bold">{previousStory.index}</div>
							<div class="bg-muted/50 rounded-lg p-4">
								{#if previousStory.title}
									<h4 class="text-muted-foreground mb-2 font-medium">
										{previousStory.title}
									</h4>
								{/if}
								<div class="text-muted-foreground [&_p]:mb-3">
									<StoryText html={previousStory.text} {onStoryClick} />
								</div>
							</div>
						{/if}
					</div>

					<!-- Current story (center) -->
					<div class="order-1 md:order-2">
						<div class="mb-2 text-center text-lg font-bold">{story.index}</div>
						<div class="bg-card border-primary/30 rounded-lg border-2 p-4">
							{#if story.title}
								<h4 class="mb-2 font-semibold">
									{story.title}
								</h4>
							{/if}
							<div class="[&_p]:mb-3">
								<StoryText html={story.text} {onStoryClick} />
							</div>

							{#if story.choices}
								<ul class="mt-4 space-y-2">
									{#each story.choices as choice, i (i)}
										<li><strong>Choice {i + 1}:</strong> {choice}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>

					<!-- Next story -->
					<div class="order-3">
						{#if nextStory}
							<div class="mb-2 text-center text-lg font-bold">{nextStory.index}</div>
							<div class="bg-muted/50 rounded-lg p-4">
								{#if nextStory.title}
									<h4 class="text-muted-foreground mb-2 font-medium">
										{nextStory.title}
									</h4>
								{/if}
								<div class="text-muted-foreground [&_p]:mb-3">
									<StoryText html={nextStory.text} {onStoryClick} />
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/if}
	</Dialog.Content>
</Dialog.Root>
