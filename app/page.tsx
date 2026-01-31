'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Typewriter } from '@/components/ui/typewriter';
import NewsletterSignup from '@/components/newsletter-signup';

// Dynamically import the Tetrahedron to avoid SSR issues
const Tetrahedron = dynamic(() => import('@/components/tetrahedron'), {
	ssr: false,
	loading: () => (
		<div className='w-full h-full flex items-center justify-center'>
			Loading...
		</div>
	),
});

export default function Component() {
	const { theme, setTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [quote, setQuote] = useState('');
	const [logoVersion, setLogoVersion] = useState<'a' | 'b'>('a');

	const quotes = [
		'“If you know the enemy and know yourself, you need not fear the result of a hundred battles.”',
		'“The eye that sees before it is seen”',
		'“The greatest victory is that which requires no battle.”',
	];

	useEffect(() => {
		setIsMounted(true);
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}, []);

	// Toggle logo version every 0.5 seconds for blinking effect
	useEffect(() => {
		const interval = setInterval(() => {
			setLogoVersion((prev) => (prev === 'a' ? 'b' : 'a'));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const isDark = theme === 'dark';
	const bgColor = isDark ? 'bg-black' : 'bg-red-600';
	const textColor = isDark ? 'text-red-500' : 'text-black';
	const hoverColor = isDark ? 'hover:text-red-700' : 'hover:text-red-900';
	const buttonBorder = isDark ? 'border-red-500' : 'border-red-900';
	const buttonText = isDark ? 'text-red-500' : 'text-red-900';
	const buttonHover = isDark
		? 'hover:bg-red-500 hover:text-black hover:border-red-500'
		: 'hover:bg-white hover:text-black hover:border-white';
	const tetrahedronColor = isDark ? '#7f1d1d' : '#fca5a5'; // dark red for dark mode, reddish white for light mode

	if (!isMounted) {
		return null;
	}

	return (
		<div
			className={`min-h-screen flex flex-col ${bgColor} ${textColor} relative overflow-hidden transition-colors duration-300`}
		>
			{/* Tactical glitchy grid background with CRT effects - Full page coverage */}
			<div className='absolute inset-0 w-full h-full'>
				<svg
					className='w-full h-full min-h-screen'
					viewBox='0 0 1200 800'
					preserveAspectRatio='xMidYMid slice'
				>
					<defs>
						{/* Main tactical grid with flicker animation */}
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
									isDark ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255,255,255,0.25)'
								}
								strokeWidth='0.7'
								className='animate-pulse'
								style={{ animationDuration: '2s', animationDelay: '0s' }}
							/>
							<path
								d='M 30 0 L 30 60 M 0 30 L 60 30'
								fill='none'
								stroke={
									isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255,255,255,0.15)'
								}
								strokeWidth='0.5'
								className='animate-pulse'
								style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
							/>
						</pattern>

						{/* Glitch overlay pattern with flicker */}
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
									isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255,255,255,0.15)'
								}
								className='animate-pulse'
								style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}
							/>
							<rect
								x='40'
								y='0'
								width='1'
								height='80'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.1)'
								}
								className='animate-pulse'
								style={{ animationDuration: '3s', animationDelay: '1s' }}
							/>
							<rect
								x='80'
								y='0'
								width='3'
								height='80'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255,255,255,0.12)'
								}
								className='animate-pulse'
								style={{ animationDuration: '2.2s', animationDelay: '0.8s' }}
							/>
							<rect
								x='0'
								y='20'
								width='120'
								height='1'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.1)'
								}
								className='animate-pulse'
								style={{ animationDuration: '3.5s', animationDelay: '0.6s' }}
							/>
							<rect
								x='0'
								y='60'
								width='120'
								height='2'
								fill={
									isDark ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.08)'
								}
								className='animate-pulse'
								style={{ animationDuration: '4s', animationDelay: '1.5s' }}
							/>
						</pattern>

						{/* Subtle scan lines with movement */}
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
									isDark ? 'rgba(239, 68, 68, 0.04)' : 'rgba(255,255,255,0.04)'
								}
								className='animate-pulse'
								style={{ animationDuration: '1s', animationDelay: '0.1s' }}
							/>
						</pattern>
					</defs>

					<rect width='100%' height='100%' fill='url(#tacticalGrid)' />
					<rect width='100%' height='100%' fill='url(#glitchGrid)' />
					<rect width='100%' height='100%' fill='url(#scanLines)' />
				</svg>
			</div>

			{/* 3D Tetrahedron as Background - Full page size */}
			<div className='absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-70'>
				<Tetrahedron color={tetrahedronColor} />
			</div>

			{/* Header */}
			<header className='relative z-10 flex items-center justify-between pt-8 pb-4 px-6 lg:px-12'>
				<button
					onClick={() => setTheme(isDark ? 'light' : 'dark')}
					className='flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer'
				>
					<Image
						src={
							isDark ? `/dark${logoVersion}.png` : `/light${logoVersion}.png`
						}
						alt='Arlo Industries'
						width={120}
						height={40}
						className='h-8 w-auto'
					/>
				</button>

				<nav className='hidden md:flex items-center gap-8'>
					<Link
						href='/manifesto'
						className={`${hoverColor} transition-colors font-medium tracking-wide text-sm lg:text-base`}
					>
						MANIFESTO
					</Link>
					<Link
						href='/careers'
						className={`${hoverColor} transition-colors font-medium tracking-wide text-sm lg:text-base`}
					>
						CAREERS
					</Link>
				</nav>

				<Button
					variant='ghost'
					size='icon'
					className='md:hidden'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? (
						<X className='w-6 h-6' />
					) : (
						<Menu className='w-6 h-6' />
					)}
				</Button>
			</header>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className='relative z-20 md:hidden'>
					<div
						className={`${bgColor} border-t ${
							isDark ? 'border-red-900' : 'border-red-800'
						} px-6 py-4`}
					>
						<Link
							href='/manifesto'
							className={`block ${hoverColor} transition-colors font-medium tracking-wide text-base py-2`}
							onClick={() => setMobileMenuOpen(false)}
						>
							MANIFESTO
						</Link>
						<Link
							href='/careers'
							className={`block ${hoverColor} transition-colors font-medium tracking-wide text-base py-2`}
							onClick={() => setMobileMenuOpen(false)}
						>
							CAREERS
						</Link>
					</div>
				</div>
			)}

			{/* Main Content - Full Screen */}
			<main className='relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-0 px-6 lg:px-12 py-12 lg:py-24'>
				{/* Left Content - Title */}
				<div className='flex-1 max-w-2xl z-10'>
					<h1 className='text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight'>
						<Typewriter text={quote} speed={30} />
					</h1>
				</div>

				{/* Right Content - Description */}
				<div className='flex-1 max-w-md z-10'>
					{/* <p className='text-base lg:text-lg leading-relaxed opacity-90 font-medium'>
						<Typewriter
							text="Europe is building the drone wall, America is building the golden dome, the world is preparing for the future of drone warfare. It's already here. The problem is, there are too many interceptor drones and too little sensing architecture. We are building Mentat - the world's first optical radar mesh which outperforms current solution by 2-3x the range while being multiple times more cost effective."
							speed={10}
							startDelay={1000} // Start after 1 second
						/>
					</p> */}

					{/* Newsletter Signup under description */}
					<div className='mt-8'>
						<NewsletterSignup />
					</div>
				</div>
			</main>

			{/* Simplified Footer */}
			<footer className='relative z-10 flex items-center justify-between w-full pt-8 pb-8 px-6 lg:px-12'>
				<div className='text-sm lg:text-base opacity-60 font-medium'>
					© 2025 Arlo Industries Inc.
				</div>

				<div className='flex items-center gap-4'>
					<a
						href='https://www.linkedin.com/in/deoarlo/'
						target='_blank'
						rel='noopener noreferrer'
						className={`${textColor} ${hoverColor} transition-colors`}
						aria-label='LinkedIn'
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path d='M20 0H4a4 4 0 00-4 4v16a4 4 0 004 4h16a4 4 0 004-4V4a4 4 0 00-4-4zM8 19H5V9h3v10zM6.5 8.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-1.34 0-1.84.99-1.84 2.23v4.44H9V9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V19z' />
						</svg>
					</a>
					{/* <a
						href='https://x.com/deoarlo'
						target='_blank'
						rel='noopener noreferrer'
						className={`${textColor} ${hoverColor} transition-colors`}
						aria-label='X (Twitter)'
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
						</svg>
					</a> */}
					<a href='mailto:hi@arlo1.com'>
						<Button
							variant='outline'
							size='sm'
							className={`${buttonBorder} ${buttonText} ${buttonHover} bg-transparent font-medium tracking-wide rounded-none transition-colors text-sm lg:text-base`}
						>
							GET IN TOUCH
						</Button>
					</a>
				</div>
			</footer>
		</div>
	);
}
