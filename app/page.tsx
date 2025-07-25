'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Typewriter } from '@/components/ui/typewriter';

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

	useEffect(() => {
		setIsMounted(true);
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
						src={isDark ? '/mentat-red.png' : '/mentat.png'}
						alt='Mentat Industries'
						width={120}
						height={40}
						className='h-8 w-auto'
					/>
					<span
						className={`text-2xl lg:text-3xl font-black ${hoverColor} transition-colors`}
					>
						Mentat
					</span>
				</button>

				<nav className='hidden md:flex items-center gap-8'>
					<Link
						href='/manifesto'
						className={`${hoverColor} transition-colors font-medium tracking-wide text-sm lg:text-base`}
					>
						MANIFESTO
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
					</div>
				</div>
			)}

			{/* Main Content - Full Screen */}
			<main className='relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-0 px-6 lg:px-12 py-12 lg:py-24'>
				{/* Left Content - Title */}
				<div className='flex-1 max-w-2xl z-10'>
					<h1 className='text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight'>
						<Typewriter
							text='“If you know the enemy and know yourself, you need not fear the result of a hundred battles.”
'
							speed={30}
						/>
					</h1>
				</div>

				{/* Right Content - Description */}
				<div className='flex-1 max-w-md z-10'>
					<p className='text-base lg:text-lg leading-relaxed opacity-90 font-medium'>
						<Typewriter
							text='Mentat is a real-time battlefield intelligence engine that fuses data from drones, UGVs, cameras, and soldier-worn devices. Using edge AI models for detection and tracking, it identifies threats, maps changes, and answers tactical queries. Mentat delivers decision-grade awareness to squads and autonomous systems operating at the edge.'
							speed={10}
							startDelay={1000} // Start after 1 second
						/>
					</p>
				</div>
			</main>

			{/* Simplified Footer */}
			<footer className='relative z-10 flex items-center justify-between pt-4 pb-8 px-6 lg:px-12'>
				<div className='text-sm lg:text-base opacity-60 font-medium'>
					© 2025 Mentat Industries
				</div>

				<a href='mailto:deo@arlo1.com'>
					<Button
						variant='outline'
						size='sm'
						className={`${buttonBorder} ${buttonText} ${buttonHover} bg-transparent font-medium tracking-wide rounded-none transition-colors text-sm lg:text-base`}
					>
						GET IN TOUCH
					</Button>
				</a>
			</footer>
		</div>
	);
}
