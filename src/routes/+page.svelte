<script lang="ts">
	import BandcampPlayer from '$lib/components/embeds/BandcampPlayer.svelte';
	import YouTubeEmbed from '$lib/components/embeds/YouTubeEmbed.svelte';
	import { releases } from '$lib/data/releases';

	const latest = releases[0];

	function formatAbout(text: string | null): string {
		if (!text) return '';
		return text.replace(/\r?\n/g, '<br>');
	}
</script>

<svelte:head>
	<title>Home - Graham Van Pelt</title>
</svelte:head>

<div class="release">
	<h2>Latest release: <em>{latest.display_title ?? latest.title}</em></h2>
	<h3>{latest.display_date ?? latest.release_date}</h3>

	{#if latest.youtube_video_id}
		<YouTubeEmbed videoId={latest.youtube_video_id} title="{latest.title} video" />
		<br />
	{/if}
	<div class="release-block">
		<img
			class="album-cover"
			src="https://f4.bcbits.com/img/a{latest.art_id}_16.jpg"
			alt="{latest.title} album cover"
		/>
		<BandcampPlayer
			albumId={String(latest.album_id)}
			height={latest.player_height}
			albumUrl={latest.url}
			albumTitle="{latest.title} by {latest.artist}"
		/>
	</div>

	{#if latest.about}
		<br /><br />
		<p class="release-text">{@html formatAbout(latest.about)}</p>
		<br />
	{/if}

	<div class="release-buttons">
		<a href={latest.url} target="_blank" rel="noopener noreferrer">
			<button class="btn-1 rel-button">Bandcamp</button>
		</a>
		{#if latest.streaming?.spotify}
			<a href={latest.streaming.spotify} target="_blank" rel="noopener noreferrer">
				<button class="btn-1 rel-button">Spotify</button>
			</a>
		{/if}
		{#if latest.streaming?.apple}
			<a href={latest.streaming.apple} target="_blank" rel="noopener noreferrer">
				<button class="btn-1 rel-button">Apple</button>
			</a>
		{/if}
		{#if latest.streaming?.tidal}
			<a href={latest.streaming.tidal} target="_blank" rel="noopener noreferrer">
				<button class="btn-1 rel-button">Tidal</button>
			</a>
		{/if}
	</div>
</div>
