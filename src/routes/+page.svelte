<script lang="ts">
	import BandcampPlayer from '$lib/components/embeds/BandcampPlayer.svelte';
	import { releases } from '$lib/data/releases';

	function formatAbout(text: string | null): string {
		if (!text) return '';
		return text.replace(/\r?\n/g, '<br>');
	}

	function slugify(text: string): string {
		return text
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
</script>

<svelte:head>
	<title>Releases - Graham Van Pelt</title>
</svelte:head>

{#each releases as release, i (release.album_id)}
	{@const slug = slugify(release.display_title ?? release.title)}
	<div class="release" id={slug}>
		<h2><a class="release-anchor" href="#{slug}">{release.display_title ?? release.title}</a></h2>
		<h3>{release.display_date ?? release.release_date}</h3>
		<div class="release-block">
			<img
				class="album-cover"
				src="https://f4.bcbits.com/img/a{release.art_id}_16.jpg"
				alt="{release.title} album cover"
			/>
			<BandcampPlayer
				albumId={String(release.album_id)}
				height={release.player_height}
				albumUrl={release.url}
				albumTitle="{release.title} by {release.artist}"
			/>
		</div>

		{#if release.about}
			<p class="release-text">{@html formatAbout(release.about)}</p>
		{/if}

		<div class="release-buttons">
			<a href={release.url} target="_blank" rel="noopener noreferrer">
				<button class="btn-1 rel-button">Bandcamp</button>
			</a>
			{#if release.streaming?.spotify}
				<a href={release.streaming.spotify} target="_blank" rel="noopener noreferrer">
					<button class="btn-1 rel-button">Spotify</button>
				</a>
			{/if}
			{#if release.streaming?.apple}
				<a href={release.streaming.apple} target="_blank" rel="noopener noreferrer">
					<button class="btn-1 rel-button">Apple</button>
				</a>
			{/if}
			{#if release.streaming?.tidal}
				<a href={release.streaming.tidal} target="_blank" rel="noopener noreferrer">
					<button class="btn-1 rel-button">Tidal</button>
				</a>
			{/if}
		</div>
	</div>
	{#if i < releases.length - 1}<hr />{/if}
{/each}
