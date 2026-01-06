<script lang="ts">
	import BandcampPlayer from '$lib/components/embeds/BandcampPlayer.svelte';
	import YouTubeEmbed from '$lib/components/embeds/YouTubeEmbed.svelte';
</script>

<svelte:head>
	<title>Home - Graham Van Pelt</title>
</svelte:head>

<div class="release">
	<h2>New release: <em>Salt Spring: Sun and Shadow</em></h2>
	<h3>2021, Arbutus Records</h3>
	<div class="release-block">
		<img
			class="album-cover"
			src="https://f4.bcbits.com/img/a1213104566_10.jpg"
			alt="Salt Spring: Sun and Shadow album cover"
		/>
		<BandcampPlayer
			albumId="2354237612"
			albumUrl="https://grahamvanpelt.bandcamp.com/album/salt-spring-sun-and-shadow"
			albumTitle="Salt Spring: Sun and Shadow by Graham Van Pelt"
		/>
	</div>

	<br /><br />

	<p class="release-text">
		This collection is called "Salt Spring: Sun and Shadow", comprising tracks I recorded on Salt
		Spring Island, British Columbia, in early 2017. The cover photo is from this time as well.
		<br /><br />
		I had been taking a couple months off, spending time with family, walking by the ocean and through
		the wooded trails around the island, taking photographs, taking time and enjoying the landscape.
		I began recording this music early in the mornings, sipping coffee with a view into the forest, before
		the rest of the people in the house were awake. The pieces were made with simple, asynchronous keyboard
		and guitar loops, using analog echo effects to devolve and degrade the sounds. I mixed to and from
		tape at The Pines recording studio in Montreal, messing with tape speeds, plate reverb and various
		atmospheric effects along the way.
		<br /><br />
		The results are, I hope, a simple quiet accompaniment for time spent reading, unwinding or unplugging
		by whatever means are desired.
		<br /><br />
		The cassettes are a limited hand-packaged run of riso-printed artwork. Due to pandemic related extended
		turn times, they ship on June 11th 2021.
	</p>
	<br />
	<YouTubeEmbed videoId="IB5KtubKv6s" title="Salt Spring: Sun and Shadow video" />
	<br />
	<div class="release-buttons">
		<a
			href="https://grahamvanpelt.bandcamp.com/album/salt-spring-sun-and-shadow"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="btn-1 rel-button">Bandcamp</button>
		</a>

		<a
			href="https://open.spotify.com/album/2XuoAcY24ka0aYImj9vWc8"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="btn-1 rel-button">Spotify</button>
		</a>
		<a
			href="https://music.apple.com/us/album/salt-spring-sun-and-shadow/1564138245"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="btn-1 rel-button">Apple</button>
		</a>
		<a href="https://tidal.com/browse/album/181835496" target="_blank" rel="noopener noreferrer">
			<button class="btn-1 rel-button">Tidal</button>
		</a>
	</div>
</div>
