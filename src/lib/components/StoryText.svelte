<script lang="ts">
	import { base } from "$app/paths";

	let { html, onStoryClick }: { html: string; onStoryClick?: (storyNumber: number) => void } =
		$props();

	let container: HTMLElement;

	// Process HTML to make "Matrix X" references clickable
	// Pattern matches "Matrix " followed by a letter A-Z
	const processedHtml = $derived.by(() => {
		let result = html.replace(
			/Matrix ([A-Z])\b/g,
			(match, letter) =>
				`<a href="${base}/reactions?matrix=${letter}" target="_blank" rel="noopener" class="text-primary hover:underline">${match}</a>`,
		);

		// Make "Go to paragraph XXXX" clickable
		// Matches patterns like "Go to paragraph 643"
		result = result.replace(
			/Go to paragraph (\d+)/g,
			(match, num) =>
				`<button type="button" data-story-link="${num}" class="text-primary hover:underline cursor-pointer">${match}</button>`,
		);

		return result;
	});

	$effect(() => {
		if (!container || !onStoryClick) return;

		const buttons = container.querySelectorAll<HTMLButtonElement>("[data-story-link]");
		const handlers: Array<{ btn: HTMLButtonElement; handler: () => void }> = [];

		buttons.forEach(btn => {
			const storyNumber = parseInt(btn.dataset.storyLink!, 10);
			if (!isNaN(storyNumber)) {
				const handler = () => onStoryClick(storyNumber);
				btn.addEventListener("click", handler);
				handlers.push({ btn, handler });
			}
		});

		return () => {
			handlers.forEach(({ btn, handler }) => {
				btn.removeEventListener("click", handler);
			});
		};
	});
</script>

<span bind:this={container}>
	{@html processedHtml}
</span>
