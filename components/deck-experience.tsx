'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useEffect } from 'react';
import styles from './deck-experience.module.css';
import { Container, Heading1 } from 'lucide-react';

const A = '/deck/materials/';

type BoxProps = {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
};

function Box({ children, className = '', style }: BoxProps) {
	return (
		<div className={`${styles.abs} ${className}`} style={style}>
			{children}
		</div>
	);
}

function Img({
	src,
	alt = '',
	className = '',
	style,
}: {
	src: string;
	alt?: string;
	className?: string;
	style: CSSProperties;
}) {
	return (
		<img
			src={`${A}${src}`}
			alt={alt}
			className={`${styles.img} ${className}`}
			style={style}
		/>
	);
}

function Slide({
	children,
	red = false,
	map = false,
}: {
	children: ReactNode;
	red?: boolean;
	map?: boolean;
}) {
	return (
		<section className={styles.section}>
			<div className={styles.stageWrap}>
				<div
					className={`${styles.slide} ${red ? styles.redSlide : ''} ${
						map ? styles.mapSlide : ''
					}`}
				>
					{children}
				</div>
			</div>
		</section>
	);
}

function Caption({
	children,
	style,
}: {
	children: ReactNode;
	style: CSSProperties;
}) {
	return (
		<p className={`${styles.abs} ${styles.caption}`} style={style}>
			{children}
		</p>
	);
}

function BulletList({
	children,
	style,
	className = '',
}: {
	children: ReactNode;
	style: CSSProperties;
	className?: string;
}) {
	return (
		<ul
			className={`${styles.abs} ${styles.bullets} ${className}`}
			style={style}
		>
			{children}
		</ul>
	);
}

export default function DeckExperience() {
	useEffect(() => {
		const resize = () => {
			const isMobile = window.innerWidth < 760;
			const chrome = isMobile ? 24 : 48;
			const scale = isMobile
				? (window.innerWidth - chrome) / 1440
				: Math.min(
						(window.innerWidth - chrome) / 1440,
						(window.innerHeight - chrome) / 810,
				  );
			document.documentElement.style.setProperty('--deck-scale', `${scale}`);
		};

		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<main className={styles.shell}>
			<Slide>
				<Img
					src='arlo1ndustries full Black txt no bg.png'
					className={styles.contain}
					style={{ right: 80, top: 70, width: 600 }}
				/>
				<p
					className={`${styles.abs} ${styles.mono} ${styles.red} ${styles.medium}`}
					style={{
						right: 80,
						top: 148,
						fontSize: 22,
						textAlign: 'right',
					}}
				>
					PASSIVE AERIAL SENSING MESH 15X BETTER THAN RADARS
				</p>
				<p
					className={`${styles.abs} ${styles.mono}`}
					style={{
						right: 80,
						top: 196,
						fontSize: 20,
						textAlign: 'right',
					}}
				>
					Deep Tech <span className={styles.red}>/</span> Dual-Use{' '}
					<span className={styles.red}>/</span> Space
				</p>
				<Img
					src='mockup tall prototype no bg.png.png'
					className={styles.contain}
					style={{ left: 80, top: 280, height: 450 }}
				/>
				<Img
					src='mockup short prototype no bg.png'
					className={styles.contain}
					style={{ left: 292, top: 455, height: 260 }}
				/>
			</Slide>

			<Slide>
				<h1
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 80, top: 60, fontSize: 28 }}
				>
					Team
				</h1>
				<Img
					src='deo profile pic.png'
					style={{ left: 80, top: 116, width: 180, height: 180 }}
				/>
				<Box
					style={{
						left: 310,
						top: 116,
						width: 430,
						height: 180,
					}}
				>
					<p
						className={`${styles.mono} ${styles.red} ${styles.medium}`}
						style={{ fontSize: 18, lineHeight: 1.28 }}
					>
						<b>DEO ARLO</b>
						<br />
						CEO + ENGINEER
					</p>
					<p
						className={styles.mono}
						style={{
							fontSize: 16,
							lineHeight: 1.34,
							position: 'absolute',
							bottom: 0,
						}}
					>
						2x Founder with 6 years of experience in the defence ecosystem in
						Israel. Robotics and AI researcher at Technion (Patented Invention).
						Born during riots, defence is his life mission.
					</p>
				</Box>
				<Img
					src='jainik profile pic.jpeg'
					style={{ left: 80, top: 330, width: 180, height: 180 }}
				/>
				<Box style={{ left: 310, top: 330, width: 430, height: 180 }}>
					<p
						className={`${styles.mono} ${styles.red} ${styles.medium}`}
						style={{ fontSize: 18, lineHeight: 1.28 }}
					>
						<b>JAINIK MEHTA</b>
						<br />
						ENGINEER
					</p>
					<p
						className={styles.mono}
						style={{
							fontSize: 16,
							lineHeight: 1.34,
							position: 'absolute',
							bottom: 0,
						}}
					>
						PhD in Mechatronics and Robotics at Rensselaer Polytechnic. Worked
						on UAS, LiDAR, and DDIL in IIT Bombay and Technion. Expert in sensor
						fusion, perception algorithms, and signal processing.
					</p>
				</Box>
				<h2
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 80, top: 590, fontSize: 28 }}
				>
					History
				</h2>
				<p
					className={`${styles.abs} ${styles.mono}`}
					style={{
						left: 80,
						top: 642,
						width: 205,
						fontSize: 16,
						lineHeight: 1.33,
					}}
				>
					Deo and Jainik have known each other for 6+ years, lived as flatmates
					at Technion, and won competitions together.
				</p>
				<Img
					src='deo jainik nostalgic pic 2019 at technion.png'
					style={{ left: 310, top: 590, width: 225, height: 145 }}
				/>
				<Caption style={{ left: 310, top: 744, width: 225 }}>
					2019 - Technion
				</Caption>
				<Img
					src='deo and jainik at yc office.png'
					style={{ left: 585, top: 590, width: 225, height: 145 }}
				/>
				<Caption style={{ left: 585, top: 744, width: 225 }}>
					2026 - Y Combinator
				</Caption>

				{[
					['deo at yc sign.png', 'Y-Combinator - USA', 860, 112],
					['deo with alex bouaziz.png', 'Mentored by Alex Bouaziz', 1140, 112],
					[
						'deo with israeli drone.png',
						'Defence Conference - Tel Aviv',
						860,
						330,
					],
					[
						'jainik at IGSTC - Darmstadt germany.png',
						'IGSTC - Darmstadt Germany',
						1140,
						330,
					],
					[
						'deo presenting at founders inc usa.png',
						'Founders Inc - USA',
						860,
						590,
					],
					['deo presenting at fr8 finland.png', 'FR8 - Finland', 1140, 590],
				].map(([src, caption, left, top]) => (
					<div key={src}>
						<Img
							src={src as string}
							style={{
								left: left as number,
								top: top as number,
								width: 220,
								height: top === 590 ? 145 : 180,
							}}
						/>
						<Caption
							style={{
								left: left as number,
								top: (top as number) + (top === 590 ? 154 : 188),
								width: 220,
							}}
						>
							{caption}
						</Caption>
					</div>
				))}
			</Slide>

			<Slide>
				<h1
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 80, top: 60, fontSize: 28 }}
				>
					Advisors
				</h1>
				{[
					[
						'andrew miklas.jpeg',
						'ANDREW MIKLAS',
						'STRATEGY AND SCALING',
						'General Partner at YC. Previously co-founded PagerDuty (YC S10, NYSE:PD), which became the backbone of digital operations for thousands of businesses worldwide',
						116,
					],
					[
						'antti kosunen.jpg',
						'ANTTI KOSUNEN',
						'DEFENCE ECOSYSTEMS AND MARKET ACCESS',
						'Accelerator builder with extensive experience connecting defence startups with operators, investors, and deployment partners across Europe and Ukraine.',
						330,
					],
					[
						'sami luukonen.jpg',
						'SAMI LUUKKONEN',
						'DEFENCE, AEROSPACE AND GLOBAL EXPANSION',
						'Global technology executive and investor. Managing Director at Accenture and senior executive at Singtel NCS, with decades of experience in aerospace and defence.',
						545,
					],
				].map(([src, name, role, body, top]) => (
					<div key={src as string}>
						<Img
							src={src as string}
							style={{ left: 80, top: top as number, width: 190, height: 190 }}
						/>
						<Box
							style={{ left: 310, top: top as number, width: 430, height: 190 }}
						>
							<p
								className={`${styles.mono} ${styles.red} ${styles.medium}`}
								style={{ fontSize: 16, lineHeight: 1.25 }}
							>
								{name}
								<br />
								{role}
							</p>
							<p
								className={styles.mono}
								style={{ fontSize: 14, lineHeight: 1.3, marginTop: 22 }}
							>
								{body}
							</p>
						</Box>
					</div>
				))}

				<h1
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 780, top: 60, fontSize: 28 }}
				>
					Support
				</h1>
				<p
					className={`${styles.abs} ${styles.mono} ${styles.red} ${styles.medium}`}
					style={{ left: 780, top: 128, fontSize: 17 }}
				>
					INSTITUTIONS
				</p>
				<Img
					src='technion logo.png'
					className={styles.contain}
					style={{ left: 780, top: 178, width: 230, height: 70 }}
				/>
				<Img
					src='rensselaer logo.png'
					className={styles.contain}
					style={{ left: 1040, top: 178, width: 300, height: 70 }}
				/>
				<p
					className={`${styles.abs} ${styles.mono} ${styles.red} ${styles.medium}`}
					style={{ left: 780, top: 292, fontSize: 17 }}
				>
					PROGRAMS
				</p>
				{[
					['ycombinator logo.png', 780, 342, 205, 70],
					['17tech logo.png', 1015, 342, 150, 70],
					['ewor logo.png', 1190, 342, 150, 70],
					['fr8 logo.png', 780, 442, 150, 70],
					['the residency logo.png', 1015, 442, 185, 70],
					['founders inc logo.png', 1190, 442, 150, 70],
				].map(([src, left, top, width, height]) => (
					<Img
						key={src as string}
						src={src as string}
						className={styles.contain}
						style={{
							left: left as number,
							top: top as number,
							width: width as number,
							height: height as number,
						}}
					/>
				))}
				<p
					className={`${styles.abs} ${styles.mono} ${styles.red} ${styles.medium}`}
					style={{ left: 780, top: 555, fontSize: 17 }}
				>
					TESTING PARTNERS
				</p>
				<Img
					src='jifx logo.png'
					className={styles.contain}
					style={{ left: 780, top: 595, width: 330, height: 55 }}
				/>
				<Img
					src='defence builder logo.png'
					className={styles.contain}
					style={{ left: 1190, top: 595, width: 150, height: 55 }}
				/>
				<Img
					src='17tech finland with defence builder ukraine.png'
					style={{ left: 780, top: 635, width: 270, height: 100 }}
				/>
				<Caption style={{ left: 780, top: 742, width: 270 }}>
					17 Tech Defence Accelerator - Finland
				</Caption>
				<Img
					src='17tech with defence builder and dragon sky ukraine.png'
					style={{ left: 1070, top: 635, width: 270, height: 100 }}
				/>
				<Caption style={{ left: 1070, top: 742, width: 270 }}>
					Dragon Sky &amp; Defence Builder - Ukraine
				</Caption>
			</Slide>

			<Slide map>
				<h1
					className={`${styles.abs} ${styles.head} ${styles.red}`}
					style={{ left: 80, top: 82, fontSize: 64 }}
				>
					Aerial Defense Is Broken
				</h1>
				<BulletList
					style={{
						left: 80,
						top: 200,
						width: 880,
						fontSize: 21,
						lineHeight: 1.28,
					}}
				>
					<li>
						US is building <b>&quot;Golden Dome&quot; (2028)</b> &amp; NATO{' '}
						<b>&quot;Drone Wall&quot; (EDDI 2027)</b>
					</li>
					<li>
						<b>Drone warfare spilling over into EU:</b> confirmed incursions
						over Poland, Estonia, Denmark, Germany, and Finland.
					</li>
					<li>
						There are tons of interceptors but very little innovation in sensing
						architecture. <b>Radars are a 100+ year old technology.</b>
					</li>
					<li>
						DoD LIDS architecture &amp; EU C-UAS gaps: both rely on{' '}
						<b>high-cost</b> radar.
					</li>
					<li>
						<b>3838 Act</b> mandates edge AI in defence procurement.
					</li>
					<li>
						<b>C-UAS</b> across all domain is a <b>$440B Market</b>
					</li>
				</BulletList>
				<Img
					src='missile explosion around my apartment in tel aviv.png'
					style={{
						left: 1170,
						top: 140,
						width: 155,
						height: 145,
						objectPosition: 'top center',
					}}
				/>
				<Caption style={{ left: 1170, top: 294, width: 155 }}>
					Rocket Passes Iron Dome
				</Caption>
				<Img
					src='missile explosions around my apartment in tel aviv.png'
					style={{ left: 1075, top: 382, width: 250, height: 128 }}
				/>
				<Caption style={{ left: 1075, top: 520, width: 250 }}>
					Rockets Around My Apartment in Tel Aviv
				</Caption>
				<Img
					src='nbc news about decentralised sensing.png'
					className={styles.contain}
					style={{
						left: 80,
						top: 558,
						width: 690,
						height: 172,
						objectPosition: 'top left',
					}}
				/>
				<Box
					className={styles.callout}
					style={{ left: 120, top: 675, width: 520 }}
				>
					We are building exactly this
				</Box>
				<Img
					src='us golden dome news pic.png'
					style={{ left: 790, top: 610, width: 230, height: 132 }}
				/>
				<Img
					src='eu drone wall news.png'
					style={{ left: 1075, top: 610, width: 250, height: 132 }}
				/>
			</Slide>

			<Slide>
				<h1
					className={`${styles.abs} ${styles.head} ${styles.red}`}
					style={{ left: 80, top: 92, fontSize: 70 }}
				>
					Problem
				</h1>
				{[
					[
						'drone pictures.png',
						'Shaheds and FPV drones fly slow & low below radar horizons and often ',
						'undetectable',
						' amid clutter.\n\nTraditional RF/mmWave systems struggle to identify them, especially in urban terrain.',
						null,
						76,
					],
					[
						'robin radar.png',
						'Systems like Robin Radar cost ',
						'$500k',
						' per unit with only 12 km range. US army is paying KuRFS + Coyote Radars for ',
						'$5.04B',
						510,
					],
					[
						'traditional radar.png',
						'Acoustic meshes allow large coverage but ',
						'low fidelity',
						' while RF radars offer high fidelity but are scarce and ',
						"doesn't scale",
						944,
					],
				].map(([src, before, hi1, mid, hi2, left]) => (
					<div key={src as string}>
						<Img
							src={src as string}
							style={{
								left: left as number,
								top: 225,
								width: 380,
								height: 220,
							}}
						/>
						<Box
							style={{
								left: left as number,
								top: 485,
								width: 380,
								height: 190,
							}}
						>
							<p
								className={styles.mono}
								style={{ fontSize: 22, lineHeight: 1.32 }}
							>
								{before}
								<span className={styles.highlight}>{hi1}</span>
								{mid}
								{hi2 ? <span className={styles.highlight}>{hi2}</span> : null}
								{src === 'robin radar.png'
									? ' through 2033.'
									: src === 'traditional radar.png'
									? ' effectively.'
									: ''}
							</p>
						</Box>
					</div>
				))}
				<p
					className={`${styles.abs} ${styles.mono} ${styles.underline}`}
					style={{ left: 510, top: 704, width: 380, fontSize: 18 }}
				>
					Ukrainian analysis on frontline sensing gaps
				</p>
				<p
					className={`${styles.abs} ${styles.mono} ${styles.underline}`}
					style={{ left: 944, top: 704, width: 380, fontSize: 18 }}
				>
					CSIS report on distributed Mesh Sensing
				</p>
			</Slide>

			<Slide red>
				<h1
					className={`${styles.abs} ${styles.head} ${styles.white}`}
					style={{ left: 80, top: 86, fontSize: 70 }}
				>
					Solution
				</h1>
				<Img
					src='arlo1ndustries abbreviated Black txt no bg.png'
					className={`${styles.contain} ${styles.invert}`}
					style={{ left: 1270, top: 76, width: 92, height: 74 }}
				/>
				<p
					className={`${styles.abs} ${styles.mono} ${styles.black} ${styles.medium}`}
					style={{
						left: 80,
						top: 186,
						width: 1150,
						fontSize: 21,
						lineHeight: 1.3,
					}}
				>
					The World&apos;s first Optical Mesh <i>Radar</i>. Each node is
					deployable in ~1 minute by a single operator.
				</p>
				<Img
					src='mockup tall prototype.png'
					style={{ left: 80, top: 270, width: 300, height: 440 }}
				/>
				<Box style={{ left: 430, top: 270, width: 410 }}>
					<div className={styles.label}>Range 3x Radars</div>
					<p
						className={`${styles.mono} ${styles.white}`}
						style={{ fontSize: 16, lineHeight: 1.28, marginTop: 16 }}
					>
						Future versions can even track meteorites &amp; Missiles (50-60km*)
						Competitors only 4-15km.
						<br />
						*Estimation, real-world calculation will come with frontline testing
					</p>
					<div className={styles.label} style={{ marginTop: 24 }}>
						Affordable Full Coverage
					</div>
					<p
						className={`${styles.mono} ${styles.white}`}
						style={{ fontSize: 16, lineHeight: 1.28, marginTop: 16 }}
					>
						Covers Kyiv sized area ~1000 km² for &lt;$20M, while competitors
						$30M-300M with less range.
					</p>
					<div className={styles.label} style={{ width: 220, marginTop: 34 }}>
						Scalable
					</div>
					<p
						className={`${styles.mono} ${styles.white}`}
						style={{ fontSize: 16, lineHeight: 1.28, marginTop: 16 }}
					>
						With each node the performance performance grows exponentially,
						while cost linearly.
					</p>
				</Box>
				<Img
					src='mentat screenshot dashboard tracking planes .png'
					style={{ left: 980, top: 270, width: 330, height: 230 }}
				/>
				<Caption style={{ left: 980, top: 510, width: 330 }}>
					Tracking Planes Flying in Formation
				</Caption>
				<Img
					src='mentat data showcase comparing tracking planes vs bird noise.png'
					style={{ left: 990, top: 565, width: 320, height: 128 }}
				/>
				<Caption style={{ left: 990, top: 705, width: 320 }}>
					Birds (left) vs Plane Being Detected
				</Caption>
			</Slide>

			<Slide map>
				<div
					className={`${styles.abs} ${styles.marketBox}`}
					style={{ left: 105, top: 90, width: 565, height: 620 }}
				/>
				<h1
					className={`${styles.abs} ${styles.mono} ${styles.medium}`}
					style={{
						left: 105,
						top: 140,
						width: 565,
						textAlign: 'center',
						fontSize: 24,
					}}
				>
					Market Size
				</h1>
				{[
					[
						'TAM',
						'$440B',
						'C4ISR Sensing + Border + Critical Infrastructure + Airport',
						230,
					],
					['SAM', '$60B', 'US, NATO + allied nations', 405],
					[
						'SOM',
						'$400M',
						'200 deployments by year 5 with avg deal: $1-3M',
						545,
					],
				].map(([label, value, desc, top]) => (
					<div key={label}>
						<p
							className={`${styles.abs} ${styles.mono} ${styles.red} ${styles.medium}`}
							style={{ left: 185, top: top as number, fontSize: 22 }}
						>
							{label}
						</p>
						<p
							className={`${styles.abs} ${styles.mono} ${styles.medium}`}
							style={{ left: 285, top: top as number, fontSize: 21 }}
						>
							{value}
						</p>
						<p
							className={styles.abs}
							style={{
								left: 285,
								top: (top as number) + 42,
								width: 290,
								fontSize: 18,
								lineHeight: 1.35,
							}}
						>
							{desc}
						</p>
					</div>
				))}
				<h2
					className={`${styles.abs} ${styles.mono} ${styles.medium}`}
					style={{ left: 750, top: 110, fontSize: 24 }}
				>
					Go-To-Market Strategy
				</h2>
				<BulletList
					style={{
						left: 750,
						top: 155,
						width: 515,
						fontSize: 19,
						lineHeight: 1.32,
					}}
				>
					<li>Critical Infrastructure: Power plants, Airports</li>
					<li>C-UAS Interceptors - help guide interceptors</li>
					<li>Radar companies - augment existing sensing</li>
				</BulletList>
				<h2
					className={`${styles.abs} ${styles.mono} ${styles.medium}`}
					style={{ left: 750, top: 375, fontSize: 24 }}
				>
					Current stage:
				</h2>
				<p
					className={`${styles.abs} ${styles.mono}`}
					style={{
						left: 750,
						top: 420,
						width: 535,
						fontSize: 18,
						lineHeight: 1.33,
					}}
				>
					Mentat is currently at <b>TRL-5</b>. A multi-node prototype has been
					built and demonstrated. The core voxel-based sensing algorithm has
					been validated on real aerial targets under controlled conditions.
					<br />
					<br />
					Field testing with defence partners is underway to transition the
					system to <b>TRL-7</b> with testing in non-ideal conditions and
					increased range. Pilot underway in Estonia, testing in Finland and
					Ukraine.
				</p>
			</Slide>

			<Slide>
				<h1
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 80, top: 65, fontSize: 28 }}
				>
					We Are Serious
				</h1>
				<p
					className={`${styles.abs} ${styles.mono}`}
					style={{
						left: 80,
						top: 122,
						width: 580,
						fontSize: 18,
						lineHeight: 1.35,
					}}
				>
					We have done <b>hundreds</b> of both in-person and online research
					with: Defence Companies, Industry experts, and Operators from USA,
					Ukraine, Germany, France, Finland, Estonia, Lithuania, Latvia, Poland,
					&amp; more.
				</p>
				{[
					['deo with indonesian military attache.png', 76, 245, 95, 160],
					['deo with industryfolk 1.png', 185, 245, 130, 76],
					['deo with industryfolk 2.png', 330, 245, 95, 76],
					['deo with industryfolk 3.png', 440, 245, 110, 76],
					['deo with industryfolk 4.png', 565, 245, 90, 76],
					['deo with industryfolk 5.png', 185, 335, 130, 78],
					['deo with industryfolk 6.png', 330, 335, 170, 78],
					['deo with industryfolk 8.png', 515, 335, 140, 78],
				].map(([src, left, top, width, height]) => (
					<Img
						key={src as string}
						src={src as string}
						style={{
							left: left as number,
							top: top as number,
							width: width as number,
							height: height as number,
						}}
					/>
				))}
				<p
					className={`${styles.abs} ${styles.mono} ${styles.privacy}`}
					style={{ left: 80, top: 425, fontSize: 15 }}
				>
					Blurred for privacy
				</p>
				<Img
					src='deo chat with ukraine border guard1.png'
					style={{ left: 80, top: 505, width: 360, height: 230 }}
				/>
				<Img
					src='deo chat with ukraine border guard2.png'
					style={{ left: 455, top: 505, width: 315, height: 230 }}
				/>
				<p
					className={`${styles.abs} ${styles.mono} ${styles.privacy}`}
					style={{ left: 80, top: 744, fontSize: 15 }}
				>
					Eastern Europe
				</p>
				<h1
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 780, top: 65, fontSize: 28 }}
				>
					Project Timeline - 2026
				</h1>
				<div
					className={`${styles.abs} ${styles.timeline}`}
					style={{ left: 780, top: 128, width: 600 }}
				>
					<p>Q1: Field Testing with Defence Partners</p>
					<ul>
						<li>
							Live system testing with Finnish and Ukrainian defence partners
						</li>
						<li>
							Collect real-world performance data on detection range, false
							positives, deployment speed, and robustness
						</li>
						<li>
							Validate multi-node coordination under operational conditions
						</li>
					</ul>
					<p>Q2: Iteration &amp; US DoD Benchmark Preparation</p>
					<ul>
						<li>Incorporate feedback and improve system from Q1 testing</li>
						<li>
							Participate in US Department of Defense JIFX testing and
							benchmarking
						</li>
					</ul>
					<p>Q3: Pilot Deployments</p>
					<ul>
						<li>
							Deploy Mentat in pilot configurations with defence and dual-use
							partners in US &amp; EU
						</li>
						<li>
							Validate operational workflows, installation procedures, and
							sustainment requirements
						</li>
						<li>
							Gather operator feedback and pilot-level performance metrics
						</li>
					</ul>
					<p>Q4: Post-Benchmark Improvement &amp; Critical Infrastructure</p>
					<ul>
						<li>Improve system performance based on DoD benchmark results</li>
						<li>
							Harden hardware and software for reliability and repeatability
						</li>
						<li>
							Deploy Mentat for initial critical infrastructure protection use
							cases
						</li>
					</ul>
				</div>
			</Slide>

			<Slide>
				<h1
					className={`${styles.abs} ${styles.head} ${styles.red}`}
					style={{ left: 80, top: 90, fontSize: 70 }}
				>
					The Future
				</h1>
				<p
					className={`${styles.abs} ${styles.mono}`}
					style={{
						left: 80,
						top: 190,
						width: 550,
						fontSize: 20,
						lineHeight: 1.45,
					}}
				>
					Our long-term vision is a planetary and orbital sensing architecture.
					Earlier, I deployed a distributed, edge-compute monitoring network in
					the Congo rainforest with conservation partners and Microsoft, proving
					low-power sensing grids can operate reliably at scale in the most
					remote environments.
					<br />
					<br />
					We extend philosophy into the stratosphere and LEO, using the same
					voxel triangulation stack to track aerial and orbital objects. As LEO
					becomes increasingly congested, this becomes a foundational layer for
					an <b>Orbital Domain Awareness.</b>
				</p>
				<h2
					className={`${styles.abs} ${styles.head} ${styles.red}`}
					style={{ left: 80, top: 625, fontSize: 54 }}
				>
					Let&apos;s Talk
				</h2>
				<p
					className={`${styles.abs} ${styles.head}`}
					style={{ left: 80, top: 725, fontSize: 22 }}
				>
					DEO@ARLO1.COM
				</p>
				<h2
					className={`${styles.abs} ${styles.mono} ${styles.medium}`}
					style={{ left: 760, top: 105, fontSize: 24 }}
				>
					Beyond Defence:
				</h2>
				<BulletList
					style={{
						left: 760,
						top: 185,
						width: 520,
						fontSize: 20,
						lineHeight: 1.35,
					}}
				>
					<li>
						Passive global sensing layer for tracking satellites, debris, and
						hypersonic threats across LEO
					</li>
					<li>
						Scalable Earth-to-orbit sensing architecture using the same voxel
						triangulation stack
					</li>
					<li>
						Orbital Domain Awareness: manoeuvre detection, proximity events, and
						non-cooperative objects
					</li>
					<li>
						Future expansion to cislunar and deep-space monitoring for NEOs and
						interplanetary traffic
					</li>
				</BulletList>
				<Img
					src='satellites in low earth orbit.png'
					style={{ left: 760, top: 540, width: 560, height: 215 }}
				/>
			</Slide>
		</main>
	);
}
