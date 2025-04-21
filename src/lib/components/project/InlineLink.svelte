<script>
	export let text
	export let link
</script>

<a href="{link}" class="link">{text}</a>

<style>
	.link {
		color: var(--accent-clr);
		background-color: var(--background-clr);
		text-decoration: dashed underline calc(var(--border-width) / 2);
		transition: 300ms;
	}

	.link:hover {
		filter: invert();
		font-size: 15pt;
		text-decoration: none;
	}
</style>