<script>
	export let text
	export let link
</script>

<a href="{link}" class="button">{text}</a>

<style>
	.button {
		margin: 2vmin;
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
		color: white;
		text-decoration: none;
	}

	.button:hover {
		filter: invert()
	}
</style>