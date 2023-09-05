<script>
		let showContent = false
</script>

<style>
		.logo {
		border: 0.5vmin solid white;
		border-radius: 69%;
		min-width: 400px;
		width: 38vw;
		aspect-ratio: 1;
		z-index: 5;
		position: absolute;
		transform: translateX(-51%);
		transition: 700ms transform;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
		cursor: pointer;
	}

	.logoImg {
		max-width: 80%;
	}

	.move {
		transform: translateX(51%);
	}

</style>

<button class="logo no-select" class:move={showContent} on:click="{() => showContent = !showContent}">
	<img src="logo.svg" alt="JCMS" class="logoImg">
</button>