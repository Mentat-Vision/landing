'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const roles = [
	{
		title: 'Mechanical / Systems Engineer',
		subtitle: '(Field-Deployed Platforms)',
		description:
			'You will design, build, and deploy physical systems intended to operate in real-world environments. The work spans mechanical design, opto-mechanical integration, platform hardening, and field modification. You will work closely with sensing hardware, embedded compute, and deployed platforms, and iterate designs based on live testing rather than simulations alone.',
		details: [
			'This role is hands-on, fast-moving, and field-oriented.',
			'Frequent travel is required, including to remote and conflict-affected regions.',
		],
		responsibilities: [
			'Design and build mechanical and structural components for deployed systems',
			'Integrate opto-mechanical assemblies, sensors, antennas, and compute modules',
			'Support platform integration involving UAVs, ground mounts, or fixed installations',
			'Perform field testing, diagnostics, and rapid redesign under time constraints',
			'Work alongside software and electronics engineers to close system-level gaps',
		],
		skills: [
			'Mechanical engineering or similar discipline',
			'Experience with real hardware: aerospace, UAVs, robotics, ISR, or defence systems',
			'Familiarity with optics, photonics, or sensor mounting is a strong plus',
			'Comfortable working with embedded systems, power, and thermal constraints',
			'Military, defence, or field-deployment experience preferred',
			'Willingness to travel extensively, including to conflict or post-conflict zones',
		],
	},
	{
		title: 'Sensing / Applied Physics Engineer',
		subtitle: '',
		description:
			'You will work on sensing systems across optical, RF, and hybrid domains. This role involves experimentation with different sensing modalities, signal characteristics, and environmental effects. You will prototype, test, and evaluate systems that must operate under noise, interference, and adversarial conditions.',
		details: [
			'The work is exploratory and applied, not academic.',
			'This role involves on-site testing and travel to challenging environments.',
		],
		responsibilities: [
			'Work with sensing technologies including optics, photonics, and RF systems',
			'Experiment with FMCW radar, passive sensing approaches, and multi-sensor setups',
			'Analyze signal behavior in cluttered and degraded environments',
			'Support integration of sensing hardware with embedded compute platforms',
			'Participate in field tests and live evaluations',
		],
		skills: [
			'Background in physics, electrical engineering, or related field',
			'Experience with sensing systems such as radar, RF, EO/IR, or photonics',
			'Familiarity with FMCW radar concepts, signal processing, or detection theory',
			'Comfortable working with incomplete data and imperfect sensors',
			'Defence, aerospace, or military R&D experience preferred',
			'Willingness to travel to field sites, including conflict-adjacent areas',
		],
	},
	{
		title: 'UAV / Systems Operations & Partnerships',
		subtitle: '',
		description:
			'You will work at the intersection of engineering, operations, and external partners. This role involves understanding how UAVs and related systems are built, deployed, and countered in real operational contexts, and feeding that knowledge back into engineering decisions.',
		details: [
			'This is not a desk role. You will be present where systems are tested and evaluated.',
			'Significant travel is required, including time spent in active or post-conflict environments.',
		],
		responsibilities: [
			'Work with UAV platforms and related systems in field environments',
			'Support deployments, demonstrations, and pilot programs',
			'Engage with operators, units, and technical partners',
			'Translate operational realities into system and product requirements',
			'Coordinate logistics and on-site execution',
		],
		skills: [
			'Strong familiarity with UAVs, aerospace systems, or defence platforms',
			'Military or operational experience strongly preferred',
			'Ability to operate independently in high-pressure environments',
			'Comfortable bridging technical and operational conversations',
			'Willingness to travel extensively, including to conflict zones',
		],
	},
];

export default function Careers() {
	const { theme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const isDark = theme === 'dark';
	const bgColor = isDark ? 'bg-black' : 'bg-red-600';
	const textColor = isDark ? 'text-red-500' : 'text-black';
	const hoverColor = isDark ? 'hover:text-red-700' : 'hover:text-red-900';
	const borderColor = isDark ? 'border-red-900' : 'border-red-800';
	const cardBg = isDark ? 'bg-black/50' : 'bg-red-500/10';

	if (!isMounted) {
		return null;
	}

	return (
		<div
			className={`min-h-screen flex flex-col ${bgColor} ${textColor} relative overflow-hidden transition-colors duration-300`}
		>
			{/* Tactical Background */}
			<div className='absolute inset-0 w-full h-full pointer-events-none'>
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
						</pattern>
					</defs>

					<rect width='100%' height='100%' fill='url(#tacticalGrid)' />
					<rect width='100%' height='100%' fill='url(#glitchGrid)' />
				</svg>
			</div>

			{/* Back Button */}
			<div className='relative z-20 pt-8 pb-4 px-6 lg:px-12'>
				<Link href='/'>
					<Button
						variant='ghost'
						className={`flex items-center gap-2 ${hoverColor} transition-colors rounded-none text-sm lg:text-base pl-0 hover:bg-transparent`}
					>
						<ArrowLeft className='w-4 h-4' />
						BACK
					</Button>
				</Link>
			</div>

			<div className='relative z-10 flex-grow flex flex-col items-center px-6 py-8 lg:py-16'>
				<div className='max-w-5xl w-full mx-auto'>
					<h1 className='text-4xl lg:text-6xl font-black mb-16 text-center tracking-tight'>
						JOIN THE MISSION
					</h1>

					<div className='grid gap-12'>
						{roles.map((role, idx) => (
							<div
								key={idx}
								className={`group relative p-8 border ${borderColor} ${cardBg} backdrop-blur-sm hover:border-red-500/50 transition-all duration-300`}
							>
								{/* Corner Accents */}
								<div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50' />
								<div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current opacity-50' />
								<div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current opacity-50' />
								<div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50' />

								<div className='flex flex-col lg:flex-row gap-8 lg:items-start justify-between'>
									<div className='flex-1 space-y-6'>
										<div>
											<h2 className='text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-1'>
												{role.title}
											</h2>
											{role.subtitle && (
												<p className='text-sm lg:text-base opacity-70 font-mono'>
													{role.subtitle}
												</p>
											)}
										</div>

										<div className='space-y-4 text-base opacity-90 leading-relaxed max-w-3xl'>
											<p>{role.description}</p>
											<ul className='list-disc pl-5 space-y-1 opacity-80'>
												{role.details.map((detail, i) => (
													<li key={i}>{detail}</li>
												))}
											</ul>
										</div>

										<div className='grid md:grid-cols-2 gap-8 pt-4'>
											<div>
												<h3 className='font-bold mb-3 uppercase text-sm tracking-wider opacity-70'>
													Responsibilities
												</h3>
												<ul className='space-y-2 text-sm opacity-80'>
													{role.responsibilities.map((item, i) => (
														<li key={i} className='flex gap-2 items-start'>
															<span className='mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0' />
															<span>{item}</span>
														</li>
													))}
												</ul>
											</div>
											<div>
												<h3 className='font-bold mb-3 uppercase text-sm tracking-wider opacity-70'>
													Skills & Background
												</h3>
												<ul className='space-y-2 text-sm opacity-80'>
													{role.skills.map((item, i) => (
														<li key={i} className='flex gap-2 items-start'>
															<span className='mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0' />
															<span>{item}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>

									<div className='lg:ml-8 flex-shrink-0 pt-2'>
										<a
											href={`mailto:join@arlo1.com?subject=Application for ${role.title}`}
											className='inline-block'
										>
											<Button
												variant='outline'
												className={`h-auto py-3 px-8 text-lg font-bold uppercase tracking-wider border-2 ${
													isDark
														? 'hover:bg-red-500 hover:text-black border-red-500'
														: 'hover:bg-white hover:text-black border-black'
												} transition-all duration-300 rounded-none group-hover:scale-105`}
											>
												Apply Now
												<ArrowUpRight className='ml-2 w-5 h-5' />
											</Button>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
					
					<div className='mt-16 text-center opacity-60 text-sm font-mono'>
						<p>CLEARANCE REQUIRED FOR SOME ROLES.</p>
						<p>ARLO INDUSTRIES IS AN EQUAL OPPORTUNITY EMPLOYER.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
