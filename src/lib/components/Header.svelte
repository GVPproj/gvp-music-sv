<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
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
				<li><a href={link.href} class:active={page.url.pathname === link.href}>{link.label}</a></li>
			{/each}
			<SocialIcons />
		</ul>
	</nav>
</header>

<!-- Mobile Header -->
<header id="mobile-header">
	<a href="/">
		<img
			class="logo mobile-logo"
			src="/images/GVP_horizontal@0,5x.jpg"
			alt="Graham Van Pelt logo"
		/>
	</a>
	<nav class="mobile-nav" class:mobile-nav--open={isMenuOpen}>
		<ul>
			{#each navLinks as link (link.href)}
				<li><a href={link.href} class:active={page.url.pathname === link.href}>{link.label}</a></li>
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

<style>
	/* Desktop Header */
	#desktop-header {
		position: fixed;
		z-index: 10;
	}

	/* Mobile Header */
	#mobile-header {
		position: fixed;
		width: 100%;
		display: none;
		z-index: 10;
	}

	/* Logo */
	.logo {
		width: clamp(150px, 150px, 11vw);
		height: auto;
		margin: 5vh 0 0 2rem;
		cursor: pointer;
		margin-bottom: auto;
		position: sticky;
	}

	/* Desktop Nav */
	.desktop-nav {
		width: 12rem;
		height: 100vh;
	}

	.desktop-nav ul {
		list-style: none;
		padding: 2rem;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 80%;
		gap: 1px;
	}

	.desktop-nav li {
		font-size: 1rem;
		/* margin-bottom: 0.5rem; */
		letter-spacing: 2px;
	}

	.desktop-nav li a {
		color: var(--text-color);
		letter-spacing: 1px;
		transition: all 0.3s ease 0s;
		text-decoration: none;
	}

	.desktop-nav li a:hover,
	.desktop-nav li a:focus {
		font-weight: 600;
	}

	.desktop-nav li a.active {
		font-weight: 600;
	}

	/* Mobile Nav */
	.mobile-nav {
		position: absolute;
		top: 100%;
		right: 0%;
		background: var(--bg-color);
		clip-path: circle(0px at top right);
		transition: clip-path ease-in-out 700ms;
		height: 100dvh;
		width: 100%;
	}

	.mobile-nav--open {
		clip-path: circle(250% at top right);
	}

	.mobile-nav ul {
		margin: 1em 0 0 0;
		padding: 0;
		list-style: none;
	}

	.mobile-nav li {
		height: 7vh;
		display: grid;
		place-content: center;
	}

	.mobile-nav a {
		color: var(--text-color);
		letter-spacing: 1px;
		display: block;
		background-color: var(--bg-color);
		padding: 0 2rem 0 2rem;
		margin: 1vh 0;
	}

	.mobile-nav a:hover,
	.mobile-nav a:focus {
		font-weight: 600;
	}

	.mobile-nav a.active {
		font-weight: 600;
	}

	/* Hamburger Menu */
	.hamburger-div {
		padding: 1.3em 1em 1em 1em;
		position: absolute;
		top: 2em;
		right: 1em;
		cursor: pointer;
		border: none;
		background: transparent;
	}

	.hamburger,
	.hamburger::before,
	.hamburger::after {
		content: '';
		display: block;
		background: var(--text-color);
		height: 3px;
		width: 1.75em;
		border-radius: 3px;
		transition: all ease-in-out 500ms;
	}

	.hamburger {
		background: var(--pink);
	}

	.hamburger::before {
		background: var(--blue-dark);
		transform: translateY(-6px);
	}

	.hamburger::after {
		background: var(--blue-dark);
		transform: translateY(3px);
	}

	.open .hamburger {
		transform: rotate(45deg);
	}

	.open .hamburger::before {
		opacity: 0;
	}

	.open .hamburger::after {
		transform: translateY(-3px) rotate(-90deg);
	}

	/* Media Queries */
	@media only screen and (max-width: 900px) {
		header {
			padding: 1em 0;
			position: relative;
		}

		header::after {
			content: '';
			clear: both;
			display: block;
		}

		#desktop-header {
			display: none;
		}

		#mobile-header {
			display: initial;
		}

		.logo {
			width: clamp(205px, 250px, 30vw);
			float: left;
			margin: 0;
			margin-left: 5vw;
		}
	}
</style>
