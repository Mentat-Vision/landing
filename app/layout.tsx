import type React from 'react';
import type { Metadata } from 'next';
import { Share_Tech_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const shareTechMono = Share_Tech_Mono({
	weight: '400',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Mentat Industries',
	description: 'Battle-tested tech for modern warfare',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={shareTechMono.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
