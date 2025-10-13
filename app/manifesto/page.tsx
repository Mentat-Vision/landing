'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Manifesto() {
	const { theme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const isDark = theme === 'dark';
	const bgColor = isDark ? 'bg-black' : 'bg-red-600';
	const textColor = isDark ? 'text-red-500' : 'text-black';
	const hoverColor = isDark ? 'hover:text-red-700' : 'hover:text-red-900';

	if (!isMounted) {
		return null;
	}

	return (
		<div
			className={`min-h-screen flex flex-col ${bgColor} ${textColor} relative overflow-hidden transition-colors duration-300`}
		>
			{/* Same tactical background with CRT effects - Full page coverage */}
			<div className='absolute inset-0 w-full h-full'>
				<svg
					className='w-full h-full min-h-screen'
					viewBox='0 0 1200 800'
					preserveAspectRatio='xMidYMid slice'
				>
					<defs>
						<pattern
							id='tacticalGrid'
							width='60'
							height='60'
							patternUnits='userSpaceOnUse'
						>
							<path
								d='M 60 0 L 0 0 0 60'
								fill='none'
								stroke={
									isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255,255,255,0.15)'
								}
								strokeWidth='0.5'
								className='animate-pulse'
								style={{ animationDuration: '3s', animationDelay: '0s' }}
							/>
							<path
								d='M 30 0 L 30 60 M 0 30 L 60 30'
								fill='none'
								stroke={
									isDark ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.08)'
								}
								strokeWidth='0.3'
								className='animate-pulse'
								style={{ animationDuration: '4s', animationDelay: '1s' }}
							/>
						</pattern>

						<pattern
							id='glitchGrid'
							width='120'
							height='80'
							patternUnits='userSpaceOnUse'
						>
							<rect
								x='0'
								y='0'
								width='2'
								height='80'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.1)'
								}
								className='animate-pulse'
								style={{ animationDuration: '2s', animationDelay: '0.5s' }}
							/>
							<rect
								x='40'
								y='0'
								width='1'
								height='80'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.05)' : 'rgba(255,255,255,0.05)'
								}
								className='animate-pulse'
								style={{ animationDuration: '5s', animationDelay: '2s' }}
							/>
							<rect
								x='80'
								y='0'
								width='3'
								height='80'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.08)'
								}
								className='animate-pulse'
								style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}
							/>
							<rect
								x='0'
								y='20'
								width='120'
								height='1'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.06)' : 'rgba(255,255,255,0.06)'
								}
								className='animate-pulse'
								style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}
							/>
							<rect
								x='0'
								y='60'
								width='120'
								height='2'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.04)' : 'rgba(255,255,255,0.04)'
								}
								className='animate-pulse'
								style={{ animationDuration: '6s', animationDelay: '3s' }}
							/>
						</pattern>

						<pattern
							id='scanLines'
							width='4'
							height='4'
							patternUnits='userSpaceOnUse'
						>
							<rect
								x='0'
								y='0'
								width='4'
								height='1'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.02)' : 'rgba(255,255,255,0.02)'
								}
								className='animate-pulse'
								style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}
							/>
						</pattern>
					</defs>

					<rect width='100%' height='100%' fill='url(#tacticalGrid)' />
					<rect width='100%' height='100%' fill='url(#glitchGrid)' />
					<rect width='100%' height='100%' fill='url(#scanLines)' />
				</svg>
			</div>

			{/* Back Button */}
			<div className='relative z-10 pt-8 pb-4 px-6 lg:px-12'>
				<Link href='/'>
					<Button
						variant='ghost'
						className={`flex items-center gap-2 ${hoverColor} transition-colors rounded-none text-sm lg:text-base`}
					>
						<ArrowLeft className='w-4 h-4' />
						Back
					</Button>
				</Link>
			</div>

			<div className='relative z-10 flex-grow flex items-center justify-center px-6 py-16 lg:py-24'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl lg:text-6xl font-bold mb-12'>MANIFESTO</h1>

					<div className='text-lg max-w-3xl mx-auto opacity-90 leading-relaxed space-y-6'>
						<p>
							Conflict is inevitable. As long as there are humans, there will be
							disagreements, misalignment, and ideologies clashing. Delaying
							conflict doesn't dissolve it, it compounds it. But the way we
							engage can evolve. Like a debate between educated minds is better
							than a chaotic fight, war too can become more concise & precise.
						</p>

						<p>
							At Mentat, we build systems that help people make better decisions
							in moments that matter most. We fuse drones, sensors, and AI into
							a unified battlefield intelligence layer that gives operators
							real-time awareness and clarity under pressure. We believe
							machines should take more risk so humans don't have to.
						</p>

						<p className='text-xl font-medium italic'>
							Or in the words of our founder:
							<br />
							"I'd rather drone fleets falling than human lives fleeting."
						</p>

						<p>We're here to make defense smarter, not louder.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
