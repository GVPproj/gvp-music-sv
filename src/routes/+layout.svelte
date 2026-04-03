<script lang="ts">
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/GVP_Stacked@0,5x.jpg" />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<footer>&copy; GVP {new Date().getFullYear()}</footer>
