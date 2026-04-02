export interface NavLink {
	href: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ href: '/releases', label: 'Releases' },
	{ href: '/video', label: 'Video' },
	{ href: '/radio', label: 'Radio' },
	{ href: '/film', label: 'Film' },
	// { href: '/live', label: 'Live' },
	{ href: '/about', label: 'About' }
];
