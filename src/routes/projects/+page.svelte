<script>
    import BackButton from "../backButton.svelte";
</script>

<body>
	<h2>soon</h2>
	<BackButton />
</body>

<style>
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	h2 {
		font-family: roboto;
		color:white;
		font-size: 8vw;
		margin-bottom: 2vmin;
	}

	h2::after {
		position: absolute;
		content: "™";
	}
</style>