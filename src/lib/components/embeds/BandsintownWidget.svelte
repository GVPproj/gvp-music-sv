<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		artistName?: string;
		textColor?: string;
		linkColor?: string;
		backgroundColor?: string;
	}

	let {
		artistName = 'Graham Van Pelt',
		textColor = '#121212',
		linkColor = '#6557ff',
		backgroundColor = '#efefef'
	}: Props = $props();

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://widget.bandsintown.com/main.min.js';
		script.charset = 'utf-8';
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	});
</script>

<a
	class="bit-widget-initializer"
	data-artist-name={artistName}
	data-display-past-dates="true"
	data-text-color={textColor}
	data-link-color={linkColor}
	data-background-color={backgroundColor}
	data-display-details="true"
	data-popup-background-color={backgroundColor}
	data-link-text-color={backgroundColor}
	data-separator-color="#ffb957"
	data-language="en"
	data-font="Overpass"
	data-display-local-dates="false"
	data-auto-style="true"
	data-display-lineup="false"
	data-display-play-my-city="false"
	data-display-limit="25"
	data-display-start-time="false"
	data-display-logo="false"
	data-display-track-button="false"
	href="#"
	aria-label="Bandsintown widget for {artistName}"
></a>
