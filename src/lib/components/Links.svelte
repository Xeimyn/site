<script>
	export let links

	import { base }  from '$app/paths';
</script>

<div class="linkContainer">
	{#each links as link}
		{#if link.internal}
			<a href='{base}{link.link}' class="link">{link.name}</a>
			{:else}
			<a href='{link.link}' class="link">{link.name}</a>
		{/if}
	{/each}
</div>

<style>
	.link {
		font-family: Roboto;
		color: var(--accent-clr);
	}

	.linkContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2vw;
		margin: 0;
		margin-top: max(2vh,2vmin);
		margin-bottom: max(2vh,2vmin);
	}

	.link {
		background-color: var(--background-clr);
		text-align: center;
		font-size: 2.2vw;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-decoration-line: underline;
		transition: 200ms filter;
		padding-left: max(0.5vw,2vmin);
		padding-right: max(0.5vw,2vmin);
		border-radius: var(--border-width);
	}

	.link:hover{
		filter:invert();
	}
</style>