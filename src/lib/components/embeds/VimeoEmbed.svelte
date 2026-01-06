<script lang="ts">
	interface Props {
		videoId: string;
		color?: string;
		showTitle?: boolean;
		showByline?: boolean;
		showPortrait?: boolean;
	}

	let {
		videoId,
		color = '6557ff',
		showTitle = false,
		showByline = false,
		showPortrait = false
	}: Props = $props();
</script>

<div class="video-container">
	<iframe
		src="https://player.vimeo.com/video/{videoId}?color={color}&title={showTitle ? 1 : 0}&byline={showByline ? 1 : 0}&portrait={showPortrait ? 1 : 0}"
		style="position:absolute;top:0;left:0;width:100%;height:100%;"
		frameborder="0"
		allow="autoplay; fullscreen; picture-in-picture"
		allowfullscreen
		title="Vimeo video"
	></iframe>
</div>
