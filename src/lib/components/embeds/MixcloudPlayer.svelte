<script lang="ts">
	interface Props {
		feedPath: string;
		hideCover?: boolean;
	}

	let { feedPath, hideCover = true }: Props = $props();
</script>

<iframe
	class="mxcld"
	src="https://www.mixcloud.com/widget/iframe/?hide_cover={hideCover ? 1 : 0}&feed={encodeURIComponent(feedPath)}"
	frameborder="0"
	title="Mixcloud Player"
></iframe>
