'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
	text: string;
	speed?: number;
	className?: string;
	onFinished?: () => void;
}

export const Typewriter = ({
	text,
	speed = 50,
	className,
	onFinished,
}: TypewriterProps) => {
	const [displayedText, setDisplayedText] = useState('');
	const [index, setIndex] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	useEffect(() => {
		if (index < text.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText((prev) => prev + text.charAt(index));
				setIndex((prev) => prev + 1);
			}, speed);
			return () => clearTimeout(timeoutId);
		}
		if (!isFinished) {
			setIsFinished(true);
			if (onFinished) {
				onFinished();
			}
		}
	}, [index, text, speed, onFinished, isFinished]);

	return <span className={className}>{displayedText}</span>;
};
