import type { Metadata } from 'next';
import DeckExperience from '@/components/deck-experience';

export const metadata: Metadata = {
	title: 'Deck | Arlo Industries',
	description: 'Interactive Arlo Industries pitch deck.',
};

export default function DeckPage() {
	return <DeckExperience />;
}
