import { getStory, getNearbyStories, type Story } from "$lib/data/stories";

export function createStoryDialogState() {
	let open = $state(false);
	let story = $state<Story | null>(null);
	let previousStory = $state<Story | undefined>(undefined);
	let nextStory = $state<Story | undefined>(undefined);
	let showSingleStory = $state(false);

	function openStory(storyNumber: number) {
		const foundStory = getStory(storyNumber);
		if (!foundStory) return;

		story = foundStory;

		if (foundStory.destinyTable) {
			showSingleStory = true;
			previousStory = undefined;
			nextStory = undefined;
		} else {
			showSingleStory = false;
			const nearby = getNearbyStories(storyNumber);
			previousStory = nearby.previous;
			nextStory = nearby.next;
		}

		open = true;
	}

	function openSingleStory(storyNumber: number) {
		const foundStory = getStory(storyNumber);
		if (!foundStory) return;

		story = foundStory;
		showSingleStory = true;
		previousStory = undefined;
		nextStory = undefined;
		open = true;
	}

	function close() {
		open = false;
	}

	return {
		get open() {
			return open;
		},
		set open(value: boolean) {
			open = value;
		},
		get story() {
			return story;
		},
		get previousStory() {
			return previousStory;
		},
		get nextStory() {
			return nextStory;
		},
		get showSingleStory() {
			return showSingleStory;
		},
		openStory,
		openSingleStory,
		close,
	};
}
