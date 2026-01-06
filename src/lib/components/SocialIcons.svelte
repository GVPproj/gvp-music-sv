<script lang="ts">
	import { socialLinks } from '$lib/data/social';

	interface Props {
		mobile?: boolean;
	}

	let { mobile = false }: Props = $props();
</script>

<span class="icon-box" class:icon-box-mobile={mobile}>
	{#each socialLinks as link (link.href)}
		<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
			<i class="{link.icon} icon"></i>
		</a>
	{/each}
</span>
