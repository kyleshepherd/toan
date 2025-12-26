import { stories100 } from "./stories-100";
import { stories200 } from "./stories-200";
import { stories300 } from "./stories-300";
import { stories400 } from "./stories-400";
import { stories500 } from "./stories-500";
import { stories600 } from "./stories-600";
import { stories700 } from "./stories-700";
import { stories800 } from "./stories-800";
import { stories900 } from "./stories-900";
import { stories1000 } from "./stories-1000";
import { stories1100 } from "./stories-1100";
import { stories1200 } from "./stories-1200";
import { stories1300 } from "./stories-1300";
import { stories1400 } from "./stories-1400";
import { stories1500 } from "./stories-1500";
import { stories1600 } from "./stories-1600";
import { stories1700 } from "./stories-1700";
import { stories1800 } from "./stories-1800";
import { stories1900 } from "./stories-1900";
import { stories2000 } from "./stories-2000";
import { stories2100 } from "./stories-2100";
import { stories2200 } from "./stories-2200";
import { stories2300 } from "./stories-2300";
import { stories2400 } from "./stories-2400";
import { stories2500 } from "./stories-2500";

export interface DestinyTable {
	minus: (number | null)[];
	blank: (number | null)[];
	plus: (number | null)[];
}

export interface Story {
	index: number;
	title?: string;
	text: string; // HTML formatted
	choices?: string[];
	destinyTable?: DestinyTable;
}

export const stories: Record<number, Story> = {
	...stories100,
	...stories200,
	...stories300,
	...stories400,
	...stories500,
	...stories600,
	...stories700,
	...stories800,
	...stories900,
	...stories1000,
	...stories1100,
	...stories1200,
	...stories1300,
	...stories1400,
	...stories1500,
	...stories1600,
	...stories1700,
	...stories1800,
	...stories1900,
	...stories2000,
	...stories2100,
	...stories2200,
	...stories2300,
	...stories2400,
	...stories2500,
};

// Sorted list of all story indices for navigation
const storyIndices = Object.keys(stories)
	.map(Number)
	.sort((a, b) => a - b);

export function getStory(index: number): Story | undefined {
	return stories[index];
}

export function getPreviousStory(index: number): Story | undefined {
	const currentPos = storyIndices.indexOf(index);
	if (currentPos <= 0) return undefined;
	return stories[storyIndices[currentPos - 1]];
}

export function getNextStory(index: number): Story | undefined {
	const currentPos = storyIndices.indexOf(index);
	if (currentPos === -1 || currentPos >= storyIndices.length - 1) return undefined;
	return stories[storyIndices[currentPos + 1]];
}

export function getNearbyStories(index: number): {
	previous: Story | undefined;
	next: Story | undefined;
} {
	return {
		previous: getPreviousStory(index),
		next: getNextStory(index),
	};
}
