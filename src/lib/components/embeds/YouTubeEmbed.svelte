<script lang="ts">
	interface Props {
		videoId: string;
		title?: string;
	}

	let { videoId, title = 'YouTube video' }: Props = $props();
</script>

<div class="video-container">
	<iframe
		src="https://www.youtube.com/embed/{videoId}"
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>
