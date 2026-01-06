<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { navLinks } from '$lib/data/navigation';
	import SocialIcons from './SocialIcons.svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Close menu when navigating to a new page
	afterNavigate(() => {
		isMenuOpen = false;
	});
</script>

<!-- Desktop Header -->
<header id="desktop-header">
	<a href="/">
		<img class="logo" src="/images/GVP_Stacked@0,5x.jpg" alt="Graham Van Pelt logo" />
	</a>
	<nav class="desktop-nav">
		<ul>
			{#each navLinks as link (link.href)}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
			<SocialIcons />
		</ul>
	</nav>
</header>

<!-- Mobile Header -->
<header id="mobile-header">
	<a href="/">
		<img class="logo mobile-logo" src="/images/GVP_horizontal@0,5x.jpg" alt="Graham Van Pelt logo" />
	</a>
	<nav class="mobile-nav" class:mobile-nav--open={isMenuOpen}>
		<ul>
			{#each navLinks as link (link.href)}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
			<SocialIcons mobile={true} />
		</ul>
	</nav>

	<button
		class="hamburger-div"
		class:open={isMenuOpen}
		onclick={toggleMenu}
		aria-expanded={isMenuOpen}
		aria-label="Toggle navigation menu"
	>
		<span class="hamburger"></span>
	</button>
</header>
