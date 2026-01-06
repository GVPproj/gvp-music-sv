export interface SocialLink {
	href: string;
	icon: string;
	label: string;
}

export const socialLinks: SocialLink[] = [
	{
		href: 'https://grahamvanpelt.bandcamp.com/',
		icon: 'fab fa-bandcamp',
		label: 'Bandcamp'
	},
	{
		href: 'https://open.spotify.com/artist/7qFzyiC97fxeA5VRzzRDpS',
		icon: 'fab fa-spotify',
		label: 'Spotify'
	},
	{
		href: 'https://www.instagram.com/grahamvanpelt/?hl=en',
		icon: 'fab fa-instagram',
		label: 'Instagram'
	}
];
