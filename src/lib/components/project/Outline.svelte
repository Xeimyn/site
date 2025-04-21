<script>
	export let width
</script>

<div class="centerMe">
	<div class="projectContainer" style="width: {width}">
		<slot></slot>
	</div>
</div>

<style>
	.centerMe {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.projectContainer {
		margin: 4vmin;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4vh;
		height: 80vh;
		border: var(--border-width) solid var(--accent-clr);
		padding-left: 5vw;
		padding-right: 5vw;
		padding-top: 3vh;
		padding-bottom: 3vh;
		overflow-y: scroll;
	}
</style>