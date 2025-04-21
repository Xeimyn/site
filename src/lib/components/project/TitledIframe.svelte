<script>
	export let link
	export let title
	export let description
	export let height
</script>

<div class="container" title="Click to visit" style="min-height: {height};" on:click={window.open(link,"blank")}>
	<h2 class="title">{title}</h2>
	<iframe title="{description}" src="{link}" frameborder="0"></iframe>
</div>

<style>
	.container {
		aspect-ratio: 1.77777;
		border: var(--border-width) dashed var(--accent-clr);
		cursor: pointer;
	}

	iframe {
		height: 100%;
		width: 100%;
		pointer-events: none;
		user-select: none;
		transform: translateY(-10%);
	}

	.title {
		position: relative;
		width: fit-content;
		margin: 0;
		margin-left: 0.5vmin;
		padding-left: 0.25vmin;
		padding-right: 0.25vmin;
		background-color: var(--background-clr);
		color: var(--accent-clr);
		font-family: "Roboto";
		transform: translateY(-65%);
		z-index: 5;
	}
</style>