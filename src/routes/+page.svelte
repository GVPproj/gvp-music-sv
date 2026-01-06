<script lang="ts">
	import BandcampPlayer from '$lib/components/embeds/BandcampPlayer.svelte';
	import YouTubeEmbed from '$lib/components/embeds/YouTubeEmbed.svelte';
</script>

<svelte:head>
	<title>Home - Graham Van Pelt</title>
</svelte:head>

<div class="release">
	<h2>New release: <em>Under the Heat Dome</em></h2>
	<h3>August 2022, Crescent Club</h3>

	<YouTubeEmbed videoId="xYTSCZTeGWE" title="Under the Heat Dome video" />
	<br />
	<div class="release-block">
		<img
			class="album-cover"
			src="https://f4.bcbits.com/img/a2835134728_16.jpg"
			alt="Under the Heat Dome album cover"
		/>
		<BandcampPlayer
			albumId="4102581361"
			albumUrl="https://grahamvanpelt.bandcamp.com/album/under-the-heat-dome"
			albumTitle="Under the Heat Dome by Graham Van Pelt"
		/>
	</div>

	<br /><br />

	<p class="release-text">
		It's late June, 2021. My partner - 8 months pregnant - and I are swimming in strangely tepid
		ocean waters along the coast of British Columbia. There is no relief from the overbearing heat
		of the 2021 Western North American Heat Dome.
		<br /><br />
		Unusual cyclone activity in the Pacific ocean has been strengthened by rising water temperatures,
		triggering the formation of a "heat dome" which drifts across western Canada and the United States.
		Heat domes are areas of high pressure in the atmosphere which prevent the air beneath them from
		escaping, forcing rising hot air downwards and raising terrestrial temperatures to extremes.
		<br /><br />
		My latest collection of minimalist compositions, "Under The Heat Dome", is influenced in mood and
		tone by this alarming climate event and the community experience it engendered. Hazy clouds of synthesized
		warmth and soft noise conjure images of evaporating lakes, interstate highways buckling under heat
		damage, berry crops baking in the sun, and populations scrambling to impromptu "cooling centres".
		This music mourns and reflects upon the emotional impact of the latest episode of our new climate
		reality. It is also a quiet testament to communities who must withstand environmental trauma and
		find hope in collective action.
		<br /><br />
		The visual component of this release was created by artist, designer, and programmer Eli Horn. Eli
		has written a program which translates source images into particles, then subjects those particles
		to environmental forces — a sort of algorithmic wind — that progressively erodes them. The source
		image in this case is an archival photograph of a glacier which erodes under programmatic forces.
		For three of the pieces on this record, a living image evolves and deteriorates along with the music.
		<br /><br />
		Under The Heat Dome follows on from last year's Salt Spring: Sun and Shadow, an ambient release on
		Montreal's Arbutus Records. Having released atmospheric dance music with Arbutus and UK imprint No
		Bad Days in recent years, I have spent the lockdown period honing a more reflective, ambient and minimal
		style of music which responds to my environment. Living as I do now, on a small island in British
		Columbia, my sensibility has come to incorporate an appreciation of, and symbiosis with, the natural
		world.
	</p>
	<br />
	<div class="release-buttons">
		<a
			href="https://grahamvanpelt.bandcamp.com/album/under-the-heat-dome"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="btn-1 rel-button">Bandcamp</button>
		</a>

		<a
			href="https://open.spotify.com/album/34E3oM9vZz43yiVrfqYV8E"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="btn-1 rel-button">Spotify</button>
		</a>
		<a
			href="https://music.apple.com/au/album/geopotential-single/1625989591?at=1000lM6c&app=apple"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="btn-1 rel-button">Apple</button>
		</a>
		<a href="https://tidal.com/browse/album/230698127" target="_blank" rel="noopener noreferrer">
			<button class="btn-1 rel-button">Tidal</button>
		</a>
	</div>
</div>
