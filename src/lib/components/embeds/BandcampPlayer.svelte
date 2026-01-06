<script lang="ts">
	interface Props {
		albumId: string;
		height?: number;
		bgColor?: string;
		linkColor?: string;
		albumUrl?: string;
		albumTitle?: string;
	}

	let {
		albumId,
		height = 406,
		bgColor = 'efefef',
		linkColor = '6557ff',
		albumUrl = '',
		albumTitle = ''
	}: Props = $props();
</script>

<iframe
	style="border: 0; width: 100%; height: {height}px;"
	src="https://bandcamp.com/EmbeddedPlayer/album={albumId}/size=large/bgcol={bgColor}/linkcol={linkColor}/artwork=none/transparent=true/"
	seamless
	title="Bandcamp Player - {albumTitle}"
>
	{#if albumUrl}
		<a href={albumUrl}>{albumTitle}</a>
	{/if}
</iframe>
